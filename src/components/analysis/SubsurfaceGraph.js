import React, {
  Fragment, useState, useEffect,
  useRef, createRef
} from "react";

import Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import heatmap from "highcharts/modules/heatmap.src";
import {
  Grid, Paper, Hidden, Dialog, Button,
  DialogActions, DialogContent, LinearProgress
} from "@material-ui/core";
import * as moment from "moment";
import { useParams } from "react-router-dom";
import Chroma from "chroma-js";
import Skeleton from '@mui/material/Skeleton';

import { isWidthDown } from "@material-ui/core/withWidth";
import {
  getSubsurfacePlotData,
  saveChartSVG,
  getSurfaceNodeHealth,
  getSubsurfaceNodeLevel,
  getSiteSubsurfaceColumns
} from "../../apis/analysis";

heatmap(Highcharts);
window.moment = moment;
HC_exporting(Highcharts);

function computeForStartTs(ts, duration = 7, unit = "days") {
  if (unit === "all") {
    return "None";
  }

  const ts_format = "YYYY-MM-DD HH:mm:ss";
  const ts_start = moment(ts).subtract(duration, unit)
    .format(ts_format);
  return ts_start;
}

function assignColorToEachSeries(data_array) {
  const size = data_array.length;
  const rainbow_colors = Chroma.scale(["#f00", "#0f0", "#00f"]).mode("hsl")
    .domain([0, size - 1]);
  const data = [...data_array];
  for (let i = 0; i < size; i += 1) {
    if (data_array[i].name !== "Cumulative") data[i].color = rainbow_colors(i).name();
  }
  return data;
}

function plotColumnPosition(column_data, type) {
  const { data: data_list } = column_data;
  const col_position_data = [];
  data_list.forEach(({ orientation, data: series_list }) => {
    const colored_data = assignColorToEachSeries(series_list);
    colored_data.forEach(row => { row.turboThreshold = 100000; });
    const col_data = {
      ...column_data,
      data: colored_data,
      orientation,
      type
    };
    col_position_data.push(col_data);
  });

  return col_position_data;
}

function plotDisplacement(column_data, type) {
  const displacement_data = [];
  column_data.forEach((data_list, index) => {
    const { data: series_list, annotations } = data_list;

    series_list[0].type = "area";
    const colored_data = assignColorToEachSeries(series_list);
    colored_data.forEach(row => { row.turboThreshold = 100000; });

    annotations.forEach((line) => {
      line.width = 0;
      line.label.style = { color: "gray" };
    });

    const col_data = {
      ...data_list,
      data: colored_data,
      annotations,
      type
    };

    displacement_data.push(col_data);
  });

  return displacement_data;
}

function plotVelocityAlerts(column_data, type) {
  const { velocity_alerts, timestamps_per_node } = column_data;
  const velocity_data = [];
  const processed_data = assignColorToEachSeries(timestamps_per_node);
  velocity_alerts.forEach(row => {
    const { orientation, data: series_list } = row;
    const alerts = series_list;
    const colored_data = [...processed_data];
    Object.keys(alerts).forEach((alert) => {
      const radius = alert === "L2" ? 7 : 10;
      const color = alert === "L2" ? "#FFFF00" : "#FF0000";
      const series = {
        data: alerts[alert],
        type: "scatter",
        zIndex: 5,
        name: alert,
        marker: {
          symbol: "triangle",
          radius,
          fillColor: color,
          lineColor: "#000000",
          lineWidth: 2
        }
      };
      colored_data.push(series);
    });

    const col_data = {
      data: colored_data,
      type,
      orientation
    };

    velocity_data.push(col_data);
  });
  return velocity_data;
}

function prepareCommunicationHealthChartOption(communication_health, form) {
  const { subsurface_column, ts_start, ts_end } = form;
  const { data } = communication_health;

  const options = {
    series: data,
    chart: {
      type: "column",
      height: 300,
      resetZoomButton: {
        position: {
          x: 0,
          y: -30
        }
      }
    },
    title: {
      text: `<b>Communication Health Chart of ${subsurface_column.toUpperCase()}</b>`,
      style: { fontSize: "14px" },
      margin: 20,
      y: 16
    },
    subtitle: {
      text: `Range: <b>${moment(ts_start).format("D MMM YYYY, HH:mm")} - ${moment(ts_end).format("D MMM YYYY, HH:mm")}</b>`,
      style: { fontSize: "12px" }
    },
    xAxis: {
      min: 1,
      title: {
        text: "<b>Node number</b>"
      },
      allowDecimals: false
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "<b>Health Percentage (%)</b>"
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      headerFormat: "Node {point.x}<br/>"
    },
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical"
    },
    credits: {
      enabled: false
    },
  };

  return options;
}

function prepareColumnPositionChartOption(set_data, input, is_desktop) {
  const { data, max_position, min_position, orientation } = set_data;
  // console.log(set_data);
  const { subsurface_column } = input;
  const xAxisTitle = orientation === "across_slope" ? "Across Slope" : "Downslope";

  return {
    series: data,
    chart: {
      type: "scatter",
      zoomType: "x",
      height: 600,
      resetZoomButton: {
        position: {
          x: 0,
          y: -30
        }
      },
      spacingTop: 20,
      spacingRight: 24
    },
    title: {
      text: `<b>Column Position Plot of ${subsurface_column.toUpperCase()}</b>`,
      style: { fontSize: "1rem" }
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        states: {
          hover: {
            enabled: true,
            lineWidth: 5
          }
        },
        marker: {
          enabled: true,
          radius: 3,
          lineColor: null
        }
      }
    },
    tooltip: {
      formatter() {
        return `Timestamp: <b>${moment(this.series.name).format("dddd, MMM D, HH:mm")}</b><br>Depth: <b>${this.y}</b><br>Displacement: <b>${this.x}</b>`;
      }
    },
    xAxis: {
      min: min_position,
      max: (max_position + 0.02),
      gridLineWidth: 1,
      title: {
        text: `<b>Horizontal displacement, ${xAxisTitle} (m)</b>`
      }
    },
    yAxis: {
      title: {
        text: "<b>Depth (m)</b>"
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: true,
      align: is_desktop ? "right" : "center",
      layout: is_desktop ? "vertical" : "horizontal",
      verticalAlign: is_desktop ? "middle" : "bottom",
      labelFormatter() {
        return `${moment(this.name).format("MM/DD, HH:mm")}`;
      }
    },
    time: { timezoneOffset: -8 * 60 },
    exporting: {
      sourceHeight: 800,
      sourceWidth: 600
    }
  };
}

function prepareDisplacementChartOption(set_data, form) {
  const { orientation, data, annotations } = set_data;
  const { subsurface_column, ts_end } = form;
  const xAxisTitle = orientation === "across_slope" ? "Across Slope" : "Downslope";
  return {
    series: data,
    chart: {
      type: "line",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      height: 600,
      resetZoomButton: {
        position: {
          x: 0,
          y: -30
        }
      },
      spacingTop: 20,
      spacingRight: 24
    },
    title: {
      text: `<b>Displacement Plot, ${xAxisTitle} of ${(subsurface_column).toUpperCase()}</b>`,
      style: { fontSize: "1rem" },
      margin: 20,
      y: 16
    },
    subtitle: {
      text: `As of: <b>${moment(ts_end).format("D MMM YYYY, HH:mm")}</b><br><br><b>Note: </b> (+/-) consistently increasing/decreasing trend`,
      style: { fontSize: "0.6rem" }
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e %b %Y",
        year: "%Y"
      },
      title: {
        text: "<b>Date</b>"
      }
    },
    yAxis: {
      plotBands: annotations,
      title: {
        text: "<b>Relative Displacement (mm)</b>"
      }
    },
    tooltip: {
      header: "{point.x:%Y-%m-%d}: {point.y:.2f}"
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    time: { timezoneOffset: -8 * 60 },
    exporting: {
      sourceHeight: 800,
      sourceWidth: 600
    }
  };
}

function prepareVelocityAlertsOption(set_data, form) {
  const { data, orientation } = set_data;
  const { subsurface_column, ts_end } = form;

  const xAxisTitle = orientation === "across_slope" ? "Across Slope" : "Downslope";
  const categories = data.map(x => x.name).filter(x => typeof x === "number");
  categories.unshift(0);

  return {
    series: data,
    chart: {
      type: "line",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      height: 600,
      resetZoomButton: {
        position: {
          x: 0,
          y: -30
        }
      },
      spacingTop: 20,
      spacingRight: 24
    },
    title: {
      text: `<b>Velocity Alerts Plot, ${xAxisTitle} of ${subsurface_column.toUpperCase()}</b>`,
      style: { fontSize: "1rem" },
      margin: 20,
      y: 16
    },
    subtitle: {
      text: `As of: <b>${moment(ts_end).format("D MMM YYYY, HH:mm")}</b>`,
      style: { fontSize: "0.6rem" }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e %b %Y",
        year: "%Y"
      },
      title: {
        text: "<b>Time</b>"
      }
    },
    legend: {
      enabled: false
    },
    yAxis: {
      categories,
      reversed: true,
      title: {
        text: "<b>Nodes</b>"
      },
      labels: {
        formatter() {
          return this.value;
        }
      }
    },
    tooltip: {
      formatter() {
        return `<b>${moment(this.x).format("DD MMM YYYY, HH:mm")}</b>`;
      }
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 2
        }
      }
    },
    time: { timezoneOffset: -8 * 60 },
    exporting: {
      sourceHeight: 800,
      sourceWidth: 600
    }
  };
}

function plotNodeHealth(column_data, type) {
  const node_health_data = [];
  column_data.forEach((data_list, index) => {
    const { id, status } = data_list;
    let color = "";
    if (status === 2) color = "#f9ff40";
    else if (status === 3) color = "#ff8400";
    else if (status === 4) color = "#ff6961";

    const each_data = {
      name: index + 1,
      ...data_list,
      value: 0,
      id: id + 1,
      color,
    };
    node_health_data.push(each_data);
  });

  return node_health_data;
}

// eslint-disable-next-line max-params
function prepareNodeHealthSummaryChartOption(data, form, setNodeLevelChart, callback) {
  const { subsurface_column } = form;
  const divisor = Math.floor(data.length / 25);

  const subtitle = `As of: <b>${moment().format("D MMM YYYY, HH:mm")}</b><br>` +
    `Note: <b>Click a box to access node-level charts.</b><br>`;

  return {
    series: [{
      name: "Node Health",
      borderColor: "#444444",
      borderWidth: 0.5,
      data,
      rowsize: 10,
      dataLabels: {
        enabled: true,
        style: {
          textShadow: "none",
        },
        formatter() {
          return `${this.point.id}`;
        }
      },
      events: {
        click(series, event) {
          handleSelectedNode(series.point.id, form, data => {
            callback(data);
          });
          setNodeLevelChart(true);
        }
      },
    }],
    chart: {
      type: "heatmap",
      height: 160 + (divisor * 20),
      marginTop: 70,
      marginBottom: 40,
      resetZoomButton: {
        position: {
          x: 0,
          y: -30
        }
      },
    },
    plotOptions: {
      series: {
        cursor: "pointer"
      }
    },
    title: {
      text: `<b>Node Health Summary of ${subsurface_column.toUpperCase()}</b>`,
      style: { fontSize: "14px" }
    },
    subtitle: {
      text: subtitle,
      style: { fontSize: "0.75rem" }
    },
    xAxis: {
      visible: false,
      categories: [],
    },
    yAxis: {
      reversed: false,
      categories: [],
      title: null,
      labels: {
        format: "&ensp;",
        useHTML: true
      },
    },
    colorAxis: {
      stops: [
        [0, "#7cb5ec"],
        [0.5, "#ffed49"],
        [1, "#ff1414"]
      ],
      min: 0,
      max: 2
    },
    legend: {
      enabled: false
    },
    tooltip: {
      formatter() {
        const {
          id_date, flagger,
          status, comment, id
        } = this.point;
        let final_stat = "Ok";
        let added_info = "";

        if (typeof status !== "undefined") {
          switch (status) {
            case 2: final_stat = "Use with Caution"; break;
            case 3: final_stat = "Spacial Case"; break;
            case 4: final_stat = "Not Ok"; break;
            default: final_stat = "Ok"; break;
          }
          // final_stat = status;
          added_info = `Identification Date: <b>${moment(id_date).format("DD MMM YYYY")}</b><br/>` +
            `Comment: <b>${comment}</b><br/>Flagger: <b>${flagger}</b>`;
        }

        const tooltip = `Node ID: <b>${id}</b><br/>Status: <b>${final_stat}</b><br/>${added_info}`;
        return tooltip;
      }
    },
    credits: {
      enabled: false
    }
  };
}

function hideByDefaultRawSeries(series) {
  const new_series = [];
  series.forEach(row => {
    const temp = {
      x: row.data[0],
      y: row.data[1],
      name: row.data[2]
    };
    if (row.name.includes("Raw")) row.visible = false;
    new_series.push({ ...row, name: row.name, data: temp });
  });
  series.data = [...new_series];
  return series;
}

function plotNodeLevelCharts(subsurface_node_data, input) {
  const chartOptions = [];
  subsurface_node_data.forEach((series) => {
    const { series_name, data: nodes } = series;
    const final_series = [];
    nodes.forEach((node_arr) => {
      const { series: node_series, } = node_arr;
      final_series.push(...hideByDefaultRawSeries(node_series));
    });
    chartOptions.push(createGeneralNodeChart(series_name, final_series, input));
  });
  return chartOptions;
}

function createGeneralNodeChart(series_name, data, input) {
  const { subsurface_column, ts_start, ts_end, node_id } = input;
  const cap = series_name === "battery" ? 1 : 3;
  const title = series_name.slice(0, cap).toUpperCase() + series_name.slice(cap);

  return {
    series: data,
    chart: {
      type: "line",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      height: 400,
    },
    title: {
      // style: { fontSize: "0" },
      text: `<b>${title} Plot of ${subsurface_column.toUpperCase()}</b>`,
      style: { fontSize: "10px" },
      margin: 20,
      y: 16
    },
    subtitle: {
      text: `Source: <b>Node ${node_id}</b><br/>As of: <b>${moment(ts_start).format("D MMM YYYY, HH:mm")} - ${moment(ts_end).format("D MMM YYYY, HH:mm")}</b>`,
      style: { fontSize: "9px" }
    },
    xAxis: {
      min: Date.parse(ts_start),
      max: Date.parse(ts_end),
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e. %b %Y",
        year: "%Y"
      },
      title: {
        text: "<b>Date</b>"
      }
    },
    yAxis: {
      title: {
        text: "<b>Value</b>"
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      series: {
        marker: {
          radius: 3
        },
        cursor: "pointer"
      }
    },
    legend: {
      itemStyle: {
        fontSize: "10px"
      },
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      borderWidth: 0
    },
    time: { timezoneOffset: -8 * 60 },
    credits: {
      enabled: false
    }
  };
}

function NodeLevelChart(props) {
  const { show, setNodeLevelChart, data, setData } = props;
  const handleClose = () => {
    setNodeLevelChart(false);
    setData(null);
  };
  return (
    <Dialog
      open={show}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
    >
      {
        data !== null ? (
          <Fragment>
            <DialogContent>
              <Grid container spacing={1}>
                {
                  data.map((option, i) => (
                    <Grid item xs={12} key={i}>
                      <Paper>
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={option}
                          allowChartUpdate
                          callback={chart => chart.reflow()}
                        />
                      </Paper>
                    </Grid>
                  ))
                }
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Fragment>
        ) : <LinearProgress />
      }
    </Dialog>
  );
}

async function handleSelectedNode(node_id, form, callback) {
  const input = { ...form, node_id };
  getSubsurfaceNodeLevel(input, data => {
    const returned_data = plotNodeLevelCharts(data, input);
    callback(returned_data);
  });
}

function SubsurfaceGraphContainer(props) {
  const [subsurface_columns, setSubsurfaceColumns] = useState([])

  useEffect(() => {
    getSiteSubsurfaceColumns("mar", data => {
      const temp = [];
      data.forEach((row) => {
        const { tsm_name } = row;
        console.log(row);
        const input = {
          tsm_name,
          site_code: "mar"
        }
        temp.push(input);
      })
      console.log(temp)
      setSubsurfaceColumns(temp)
    })
  }, []);
  return (
    <Fragment>
      {
        subsurface_columns.map((column) => {
          const { tsm_name, input } = column
          return (
            <SubsurfaceGraph sensor={tsm_name} input={input} />
          )
        })
      }
    </Fragment>
  )
}

function SubsurfaceGraph(props) {
  const {
    width, input: consolidated_input, disableBack,
    saveSVG, isEOS, sensor
  } = props;

  let ts_end = "";
  let dt_ts_end;
  let tsm_sensor = sensor;

  const default_range_info = { label: "3 days", unit: "days", duration: 3 };
  const [selected_range_info, setSelectedRangeInfo] = useState(default_range_info);
  const defaul_hour_interval = { label: "4 hours", hour_value: "4" };
  const [selected_hour_interval, setSelectedHourInterval] = useState(defaul_hour_interval);

  const ts_now = moment();
  ts_end = ts_now.format("YYYY-MM-DD HH:mm:ss");
  dt_ts_end = ts_now;

  const { unit, duration } = selected_range_info;
  const ts_start = computeForStartTs(dt_ts_end, duration, unit);

  const [processed_data, setProcessedData] = useState([]);
  const chartRefs = useRef([...Array(6)].map(() => createRef()));

  const { hour_value } = selected_hour_interval;
  const input = {
    ts_end, ts_start, subsurface_column: tsm_sensor,
    hour_value, include_comms_health: !isEOS
  };

  const is_desktop = isWidthDown(width, "sm");
  const default_options = { title: { text: "Loading" } };

  const [options, setOptions] = useState([{ title: { text: "Loading" } }]);
  const [node_health_option, setNodeHealthOption] = useState(null);
  const [comms_health_option, setCommsHealthOption] = useState(null);
  const [node_level_chart, setNodeLevelChart] = useState(false);
  const [node_level_data, setNodeLevelData] = useState(null);

  useEffect(() => {
    setProcessedData([]);
    setCommsHealthOption(null);
    getSubsurfacePlotData(input, subsurface_data => {
      const processed = [];
      subsurface_data.forEach(({ type, data }) => {
        const sub = JSON.parse(JSON.stringify(data));
        let temp = [];
        if (type === "column_position") temp = plotColumnPosition(sub, type);
        else if (type === "displacement") temp = plotDisplacement(sub, type);
        else if (type === "velocity_alerts") temp = plotVelocityAlerts(sub, type);

        if (type === "comms_health") {
          const option = prepareCommunicationHealthChartOption(data, input);
          setCommsHealthOption(option);
        } else processed.push(...temp);
      });

      setProcessedData(processed);
    });
  }, [selected_range_info, selected_hour_interval]);

  useEffect(() => {
    const temp = [];
    processed_data.forEach(data => {
      const { type } = data;
      let option;
      if (type === "column_position") option = prepareColumnPositionChartOption(data, input, is_desktop);
      else if (type === "displacement") option = prepareDisplacementChartOption(data, input);
      else if (type === "velocity_alerts") option = prepareVelocityAlertsOption(data, input);

      temp.push(option);
    });

    setOptions(temp);
  }, [processed_data]);

  return (
    <Fragment>

      <div style={{ marginTop: 16 }}>
        <Grid container spacing={4}>

          {
            processed_data.length > 0 ? (options.map((option, i) => {
              const chart_update = true;
              const ref = chartRefs.current[i];
              return (
                <Grid item xs={12} md={6} key={i}>
                  <Paper>
                    <HighchartsReact
                      highcharts={Highcharts}
                      allowChartUpdate={chart_update}
                      options={option}
                      ref={ref}
                    />
                  </Paper>
                </Grid>
              );
            })) : (
              <Fragment>
                <Grid item md={6} sm={12}>
                  <Skeleton variant="rectangular" width={"auto"} height={300} />
                </Grid>
                <Grid item md={6} sm={12}>
                  <Skeleton variant="rectangular" width={"auto"} height={300} />
                </Grid>
                <Grid item md={6} sm={12}>
                  <Skeleton variant="rectangular" width={"auto"} height={300} />
                </Grid>
                <Grid item md={6} sm={12}>
                  <Skeleton variant="rectangular" width={"auto"} height={300} />
                </Grid>
              </Fragment>
            )
          }
        </Grid>
      </div>
    </Fragment>
  );
}

export default SubsurfaceGraphContainer;