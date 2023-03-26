import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Route, Link, matchPath } from 'react-router-dom';

import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
// import { useSnackbar } from "notistack";
import Skeleton from '@mui/material/Skeleton';

import {
  Button,
  ButtonGroup,
  Paper,
  withMobileDialog,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Typography,
  Divider,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormGroup,
  FormLabel,
  TableRow,
  TableCell,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Tooltip,
  Menu,
  MenuItem,
  Checkbox,
} from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import Chroma from 'chroma-js';
import {
  ArrowDropDown,
  Edit,
  TrendingUp,
  Add,
  LocalOffer,
  GetApp,
} from '@material-ui/icons';
import { isWidthDown } from '@material-ui/core/withWidth';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import { SlideTransition, FadeTransition } from '../utils/TransitionList';

import {
  getSurficialPlotData,
  deleteSurficialData,
  updateSurficialData,
  saveChartSVG,
  insertMarkerEvent,
  saveUnreliableMarkerData,
  downloadMarkerHistoryTags,
} from '../../apis/analysis';

// init the module
HC_exporting(Highcharts);
function computeForStartTs(ts, duration = 7, unit = 'days') {
  if (unit === 'all') {
    return 'None';
  }

  const ts_format = 'YYYY-MM-DD HH:mm:ss';
  const ts_start = moment(ts).subtract(duration, unit).format(ts_format);
  return ts_start;
}

function capitalizeFirstLetter(str, every_word = false) {
  const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

  if (every_word) {
    const arr = str.split(' ');
    const cap_arr = arr.map(s => capitalize(s));

    return cap_arr.join(' ');
  }

  return capitalize(str);
}

function snackBarActionButton(closeSnackbarFn, key) {
  return (
    <Button
      color="primary"
      onClick={() => {
        closeSnackbarFn(key);
      }}>
      Dismiss
    </Button>
  );
}

function markerFormValidation(
  event,
  ts,
  remarks,
  new_marker_name,
  addNewMarker,
) {
  let button_state = null;
  if (addNewMarker) {
    if (new_marker_name === '' || remarks === '' || ts === '' || ts === null) {
      button_state = true;
    } else {
      button_state = false;
    }
  } else {
    if (event === 'rename') {
      if (
        ts === '' ||
        ts === null ||
        remarks === '' ||
        remarks === null ||
        new_marker_name === ''
      ) {
        button_state = true;
      } else {
        button_state = false;
      }
    } else {
      if (ts === '' || ts === null || remarks === '' || remarks === null) {
        button_state = true;
      } else {
        button_state = false;
      }
    }
  }
  return button_state;
}

function ExportModal(props) {
  const { fullScreen, open, setIsOpen, surficialData, siteCode } = props;

  const [data_state, setDataState] = useState({});
  const [ts_start, setTsStart] = useState(null);
  const [ts_end, setTsEnd] = useState(null);

  useEffect(() => {
    const temp = {};
    surficialData.forEach(row => {
      temp[row.marker_id] = false;
    });
    setDataState({ ...data_state, ...temp });
  }, [surficialData]);

  const clickCheckboxHandler = event => {
    const {
      target: { checked, value },
    } = event;
    setDataState({ ...data_state, [value]: checked });
  };

  const handleSubmit = () => {
    const payload = {
      ts_start: moment(ts_start).format('YYYY-MM-DD HH:mm:ss'),
      ts_end: moment(ts_end).format('YYYY-MM-DD HH:mm:ss'),
      markers: Object.entries(data_state)
        .filter(x => x[1])
        .map(y => parseInt(y[0], 10)),
    };

    const file_name = `${siteCode}_${moment().format('MM-DD-YYYY_HH-mm-ss')}`;

    downloadMarkerHistoryTags(payload, ret => {
      const url = window.URL.createObjectURL(new Blob([ret]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file_name);
      document.body.appendChild(link);
      link.click();

      setIsOpen(false);
    });
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="form-dialog-title"
      TransitionComponent={fullScreen ? SlideTransition : FadeTransition}>
      <DialogTitle id="form-dialog-title">
        Export marker history and data tags
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Fill out the necessary fields.</DialogContentText>

        <FormControl component="fieldset" style={{ width: '100%' }}>
          <FormLabel component="legend" style={{ textAlign: 'center' }}>
            Choose markers to be exported
          </FormLabel>
          <FormGroup
            row
            style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {surficialData.map(row => (
              <FormControlLabel
                key={row.marker_name}
                control={
                  <Checkbox
                    checked={data_state[row.marker_id]}
                    onChange={clickCheckboxHandler}
                    value={row.marker_id}
                    name={row.marker_name.toString()}
                  />
                }
                label={row.marker_name}
              />
            ))}
          </FormGroup>
        </FormControl>

        <Grid container spacing={2} style={{ marginTop: 8 }}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid item xs={12} sm={6}>
              <KeyboardDateTimePicker
                required
                autoOk
                label="Timestamp of Sending"
                value={ts_start}
                onChange={x => setTsStart(x)}
                ampm={false}
                placeholder="2010/01/01 00:00"
                format="YYYY/MM/DD HH:mm"
                mask="____/__/__ __:__"
                clearable
                disableFuture
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <KeyboardDateTimePicker
                required
                autoOk
                label="End Timestamp"
                value={ts_end}
                onChange={x => setTsEnd(x)}
                ampm={false}
                placeholder="2010/01/01 00:00"
                format="YYYY/MM/DD HH:mm"
                mask="____/__/__ __:__"
                clearable
                disableFuture
                fullWidth
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          onClick={handleSubmit}
          disabled={
            ts_start === null ||
            ts_end === null ||
            Object.values(data_state).every(x => x === false)
          }>
          Export
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

function AddNewHistoryModal(props) {
  const {
    fullScreen,
    open,
    setIsOpen,
    selectedMarker,
    historicalMarkers,
    addNewMarker,
    siteCode,
    setRedrawChart,
    history,
  } = props;

  let marker_id = null;
  let marker_name = null;
  if (selectedMarker !== null) {
    const { marker_id: mi, marker_name: mn } = selectedMarker;
    marker_id = mi;
    marker_name = mn;
  }

  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // console.log(useSnackbar())
  const [event, setEvent] = useState('');
  const [ts, setTs] = useState(null);
  const [new_marker_name, setNewMarkerName] = useState('');
  const [remarks, setRemarks] = useState('');
  const [save_button_state, setSaveButtonState] = useState(true);

  const resetForm = () => {
    setIsOpen(false);
    setTs(null);
    setNewMarkerName('');
    setNmmValidation(null);
    setEvent('');
    setRemarks('');
  };

  const handleChange = e => {
    setEvent(e.target.value);
    setTs(null);
    setNewMarkerName('');
    setNmmValidation(null);
    setRemarks('');
  };

  const [nmm_validation, setNmmValidation] = useState(null);
  const handleBlur = () => {
    if (new_marker_name === '') setNmmValidation('Required field');
  };

  useEffect(() => {
    if (new_marker_name === '') {
      setNmmValidation('Required field');
      if (event === 'rename') {
        setSaveButtonState(true);
      }
      return;
    }

    if (/[^a-zA-Z]/.test(new_marker_name)) {
      setNmmValidation('Enter alphabet characters only.');
      if (event === 'rename') {
        setSaveButtonState(true);
      }
      return;
    }

    if (historicalMarkers.includes(new_marker_name)) {
      setNmmValidation('Marker name already exists.');
      if (event === 'rename') {
        setSaveButtonState(true);
      }
      return;
    }
    setNmmValidation(null);
  }, [new_marker_name, event, save_button_state]);

  const [verify_submit, setVerifySubmit] = useState(false);
  const handleSubmit = () => {
    let to_send = true;
    if (event !== 'reposition' || addNewMarker) {
      to_send = false;
      if (!verify_submit) setVerifySubmit(true);
      else {
        to_send = true;
        setVerifySubmit(false);
      }
    }

    if (to_send) {
      resetForm();

      const temp_event = addNewMarker ? 'add' : event;
      const temp_ts = addNewMarker ? (ts == null ? moment() : ts) : ts;
      const input = {
        site_code: siteCode,
        event: temp_event,
        marker_id,
        ts: moment(temp_ts).format('YYYY-MM-DD HH:mm:00'),
        marker_name: new_marker_name,
        remarks: remarks === '' ? null : remarks,
      };

      insertMarkerEvent(input, data => {
        const { status } = data;
        let message = 'Error inserting new marker event...';
        if (addNewMarker) message = 'Error creating new marker...';

        if (status === 'success') {
          message = 'Inserting new marker event successful!';
          if (addNewMarker) message = 'Creating new marker successful!';
          setRedrawChart(true);

          // if (["add", "rename"].includes(temp_event)) {
          //     history.push(`${url}/${new_marker_name}`);
          // }
        }

        // enqueueSnackbar(message,
        //     {
        //         variant: status,
        //         autoHideDuration: 7000,
        //         action: key => snackBarActionButton(closeSnackbar, key)
        //     }
        // );
      });
    }
  };

  useEffect(() => {
    const button_state = markerFormValidation(
      event,
      ts,
      remarks,
      new_marker_name,
      addNewMarker,
    );
    setSaveButtonState(button_state);
  }, [event, ts, remarks, new_marker_name]);

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="form-dialog-title"
      TransitionComponent={fullScreen ? SlideTransition : FadeTransition}>
      <DialogTitle id="form-dialog-title">
        {addNewMarker ? 'Add new marker' : `Add event to Marker ${marker_name}`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {addNewMarker ? (
            <Fragment>
              <Typography>
                After submitting, wait for 5 minutes before sending ground
                measurement(s)
              </Typography>
            </Fragment>
          ) : (
            <Typography>
              Choose a marker event then answer the corresponding field(s).
            </Typography>
          )}
        </DialogContentText>

        <FormControl component="fieldset" style={{ display: 'flex' }}>
          {!addNewMarker && (
            <RadioGroup
              aria-label="marker_event"
              name="marker_event"
              row
              style={{ justifyContent: 'space-around' }}
              value={event}
              onChange={handleChange}>
              <FormControlLabel
                value="reposition"
                control={<Radio />}
                label="Reposition"
              />
              <FormControlLabel
                value="rename"
                control={<Radio />}
                label="Rename"
              />
              <FormControlLabel
                value="decommission"
                control={<Radio />}
                label="Decommission"
              />
            </RadioGroup>
          )}

          <Grid container spacing={2} style={{ marginTop: 8 }}>
            {addNewMarker && (
              <Fragment>
                <Grid item xs={12} sm>
                  <TextField
                    error={Boolean(nmm_validation)}
                    label="New Marker Name"
                    value={new_marker_name}
                    onChange={x =>
                      setNewMarkerName(x.target.value.toUpperCase())
                    }
                    onBlur={handleBlur}
                    type="text"
                    required
                    fullWidth
                    inputProps={{
                      maxLength: 1,
                    }}
                    placeholder="Input a letter"
                    helperText={nmm_validation || ''}
                  />
                </Grid>
                <Grid item xs={12} sm>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDateTimePicker
                      required
                      autoOk
                      label="Timestamp"
                      value={ts}
                      onChange={x => setTs(x)}
                      ampm={false}
                      placeholder="2010/01/01 00:00"
                      format="YYYY/MM/DD HH:mm"
                      mask="____/__/__ __:__"
                      clearable
                      disableFuture
                      fullWidth
                      error={ts === '' || ts === null}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Remarks"
                    value={remarks}
                    onChange={x => setRemarks(x.target.value)}
                    onBlur={handleBlur}
                    type="text"
                    multiline
                    rowsMax={3}
                    fullWidth
                    required
                    error={remarks === '' || remarks === null}
                    inputProps={{
                      maxLength: 1500,
                    }}
                    placeholder="Input remarks"
                  />
                </Grid>
              </Fragment>
            )}

            {event === 'rename' && (
              <Grid item xs={12} sm>
                <TextField
                  error={Boolean(nmm_validation)}
                  label="New Marker Name"
                  value={new_marker_name}
                  onChange={x => setNewMarkerName(x.target.value.toUpperCase())}
                  onBlur={handleBlur}
                  type="text"
                  required
                  fullWidth
                  inputProps={{
                    maxLength: 1,
                  }}
                  placeholder="Input a letter"
                  helperText={nmm_validation || ''}
                />
              </Grid>
            )}

            {event !== '' && (
              <Fragment>
                <Grid item xs={12} sm>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDateTimePicker
                      required
                      autoOk
                      label="Timestamp"
                      value={ts}
                      onChange={x => setTs(x)}
                      ampm={false}
                      placeholder="2010/01/01 00:00"
                      format="YYYY/MM/DD HH:mm"
                      mask="____/__/__ __:__"
                      clearable
                      disableFuture
                      fullWidth
                      error={ts === '' || ts === null}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Remarks"
                    value={remarks}
                    onChange={x => setRemarks(x.target.value)}
                    onBlur={handleBlur}
                    type="text"
                    multiline
                    rowsMax={3}
                    fullWidth
                    required
                    error={remarks === '' || remarks === null}
                    inputProps={{
                      maxLength: 1500,
                    }}
                    placeholder="Input remarks"
                  />
                </Grid>
              </Fragment>
            )}
          </Grid>
        </FormControl>

        {verify_submit && (
          <Grid container spacing={2} style={{ marginTop: 12 }}>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Are you sure submitting this data?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        {verify_submit && (
          <Button onClick={() => setVerifySubmit(false)}>Go Back</Button>
        )}
        <Button
          variant={verify_submit ? 'contained' : 'text'}
          color="secondary"
          onClick={handleSubmit}
          disabled={save_button_state}>
          Submit
        </Button>
        {!verify_submit && <Button onClick={resetForm}>Cancel</Button>}
      </DialogActions>
    </Dialog>
  );
}

function MarkerHistoryTable(props) {
  const { markerInfo, markerName } = props;
  const column_options = [
    {
      name: 'ts',
      label: 'Timestamp',
      options: {
        filter: false,
        customBodyRender(value) {
          return moment(value).format('D MMMM YYYY, HH:mm');
        },
        sort: true,
      },
    },
    {
      name: 'event',
      label: 'Event',
    },
    {
      name: 'm_name',
      label: 'Name',
      options: {
        filter: false,
      },
    },
    {
      name: 'remarks',
      label: 'Remarks',
      options: {
        filter: false,
        display: false,
      },
    },
  ];

  const table_options = {
    textLabels: {
      body: {
        noMatch: 'No data',
      },
    },
    selectableRows: 'none',
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    renderExpandableRow: (row_data, rowMeta) => {
      const col_span = row_data.length + 1;
      const remarks = row_data[3];
      return (
        <TableRow>
          <TableCell colSpan={col_span} align="justify">
            <strong>Remarks:</strong> {remarks}
          </TableCell>
        </TableRow>
      );
    },
    rowsPerPage: 3,
    rowsPerPageOptions: [],
    print: false,
    download: false,
    viewColumns: false,
    responsive: 'standard',
    customSort(data, col_index, order) {
      return data.sort((a, b) => {
        if (col_index === 0) {
          return (
            (moment(a.data[col_index]).isAfter(b.data[col_index]) ? -1 : 1) *
            (order === 'desc' ? 1 : -1)
          );
        }

        return (
          (a.data[col_index] < b.data[col_index] ? -1 : 1) *
          (order === 'desc' ? 1 : -1)
        );
      });
    },
  };

  let table_data = [];
  if (markerInfo) {
    table_data = markerInfo.marker_history.map(x => {
      const { ts, event, marker_name, remarks } = x;
      const m_name = marker_name ? marker_name.marker_name : '---';
      return {
        event: capitalizeFirstLetter(event),
        m_name,
        ts,
        remarks: remarks || 'None',
      };
    });
  }

  return (
    <MUIDataTable
      title={`Marker ${markerName} History`}
      columns={column_options}
      options={table_options}
      data={table_data}
    />
  );
}

function UpdateDeleteModal(props) {
  const {
    editModal,
    fullScreen,
    setEditModal,
    siteCode,
    setRedrawChart,
    chosenPoint,
  } = props;
  const { is_open, ts, name, measurement, mo_id, data_id } = editModal;
  const { ts: chosen_ts, measurement: chosen_meas, observer_name } = chosenPoint;

  // console.log(useSnackbar())
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [is_delete_clicked, setDeleteClick] = useState(false);
  const [delete_quantity, setDeleteQuantity] = useState('one');
  const changeRadioValueFn = x => setDeleteQuantity(x.target.value);

  useEffect(() => {
    setDeleteClick(false);
  }, [is_open]);

  const changeHandlerFn = (prop, value) => x => {
    let fin_val = value;
    if (prop === 'ts') fin_val = x;
    else if (prop === 'measurement') fin_val = x.target.value;

    setEditModal({
      ...editModal,
      [prop]: fin_val,
    });
  };

  const deleteDataFn = () => {
    // const { data_id, mo_id } = editModal;
    let id = data_id;
    if (delete_quantity === 'all') {
      id = mo_id;
    }

    const input = {
      quantity: delete_quantity,
      id,
    };

    setEditModal({
      ...editModal,
      is_open: false,
    });

    deleteSurficialData(input, data => {
      const { status } = data;
      let message = 'Error deleting surficial data...';
      let variant = 'error';

      if (status === 'success') {
        message = 'Surficial data delete successful!';
        variant = 'success';
        setRedrawChart(true);
      }

      // enqueueSnackbar(message,
      //     {
      //         variant,
      //         autoHideDuration: 7000,
      //         action: key => snackBarActionButton(closeSnackbar, key)
      //     }
      // );
    });
  };

  const updateDataFn = () => {
    let input = {};

    if (chosen_ts !== ts) {
      input = {
        ...input,
        mo_id,
        ts: moment(ts).format('YYYY-MM-DD HH:mm:ss'),
      };
    }

    if (chosen_meas !== measurement) {
      input = {
        ...input,
        data_id,
        measurement,
      };
    }

    setEditModal({
      ...editModal,
      is_open: false,
    });

    if (Object.keys(input).length !== 0) {
      updateSurficialData(input, data => {
        const { status } = data;
        let message = 'Error updating surficial data...';
        let variant = 'error';

        if (status === 'success') {
          message = 'Surficial data update successful!';
          variant = 'success';
          setRedrawChart(true);
        }

        // enqueueSnackbar(message,
        //     {
        //         variant,
        //         autoHideDuration: 7000,
        //         action: key => snackBarActionButton(closeSnackbar, key)
        //     }
        // );
      });
    }
  };

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      open={is_open}
      aria-labelledby="form-dialog-title"
      TransitionComponent={fullScreen ? SlideTransition : FadeTransition}>
      <DialogTitle id="form-dialog-title">Update surficial data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Carefully edit the necessary fields or delete entries if needed.
        </DialogContentText>

        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
              {siteCode.toUpperCase()} - Marker {name}
            </Typography>
            <Typography variant="body2">
              Observation Timestamp:{' '}
              {moment(chosen_ts).format('DD MMMM YYYY, HH:mm:ss')}
            </Typography>
            <Typography variant="body2">
              Measurement: {chosen_meas} cm
            </Typography>
            <Typography variant="body2">Observer: {observer_name}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
              EDIT
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Change marker data measurement"
              value={measurement}
              onChange={changeHandlerFn('measurement')}
              type="number"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            Change observation timestamp (applies to the rest of the points)
          </Grid>

          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid item xs={12}>
              <KeyboardDateTimePicker
                required
                autoOk
                label="Observation Timestamp"
                value={moment(ts)}
                onChange={changeHandlerFn('ts')}
                ampm={false}
                placeholder="2010/01/01 00:00"
                format="YYYY/MM/DD HH:mm"
                mask="____/__/__ __:__"
                clearable
                disableFuture
                fullWidth
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={updateDataFn}>
              Update Data
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
              DELETE
            </Typography>
          </Grid>

          <Grid item xs={12}>
            Be careful on deleting marker data. Delete only IF REALLY NEEDED.
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={delete_quantity}
                onChange={changeRadioValueFn}>
                <FormControlLabel
                  value="one"
                  control={<Radio />}
                  label="Delete measurement of this marker only"
                />
                <FormControlLabel
                  value="all"
                  control={<Radio />}
                  label="Delete all measurements from given marker observation (i.e. all data from observation timestamp)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => setDeleteClick(true)}>
              Delete Data
            </Button>
          </Grid>

          {is_delete_clicked && (
            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <ButtonGroup
                variant="contained"
                size="small"
                color="secondary"
                aria-label="small contained button group">
                <Button disabled>Are you sure?</Button>
                <Button onClick={deleteDataFn}>Yes</Button>
                <Button onClick={() => setDeleteClick(false)}>No</Button>
              </ButtonGroup>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={changeHandlerFn('is_open', false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

function SurficialDataTagModal(props) {
  const {
    surficialDataTagModal,
    setSurficialDataTagModal,
    siteCode,
    setRedrawChart,
  } = props;
  const { is_open, ts, name, measurement, data_id, unreliable_data } =
    surficialDataTagModal;

  const user_id = 999;
  const [show_form, setShowForm] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [tag_type, setTagType] = useState('');
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    setShowForm(!surficialDataTagModal.unreliable_data);
  }, [surficialDataTagModal]);

  const changeHandlerFn = (prop, value) => {
    setSurficialDataTagModal({
      ...surficialDataTagModal,
      [prop]: value,
    });
  };

  const handleCancel = () => {
    changeHandlerFn('is_open', false);
    setRemarks('');
    setTagType('');
  };

  // const snackBarActionFn = key => (<Button
  //     color="primary"
  //     onClick={() => { closeSnackbar(key); }}
  // >
  //     Dismiss
  // </Button>);

  const saveFunction = () => {
    let temp = null;
    if (unreliable_data) {
      temp = unreliable_data.marker_tag_id;
    }

    const input = {
      marker_tag_id: temp,
      data_id,
      tagger_id: user_id,
      remarks,
      tag_type: parseInt(tag_type, 10),
    };

    saveUnreliableMarkerData(input, data => {
      const { status, message } = data;
      let variant;
      if (status === true) {
        setRedrawChart(true);
        setSurficialDataTagModal({
          ...surficialDataTagModal,
          is_open: false,
        });
        variant = 'success';

        setRemarks('');
      } else {
        variant = 'error';
      }

      // enqueueSnackbar(
      //     message,
      //     {
      //         variant,
      //         autoHideDuration: 5000,
      //         action: snackBarActionFn
      //     }
      // );
    });
  };

  const toggle_edit = () => {
    setShowForm(true);
    setRemarks(unreliable_data.remarks);
    setTagType(unreliable_data.tag_type.toString());
  };

  return (
    <Dialog open={is_open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {unreliable_data ? 'Marker data tag information' : 'Tag marker data'}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
              {siteCode.toUpperCase()} - Marker {name}
            </Typography>
            <Typography variant="body2">
              Timestamp: {moment(ts).format('DD MMMM YYYY, HH:mm:ss')}
            </Typography>
            <Typography variant="body2">
              Measurement: {measurement} cm
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} align="center">
            {unreliable_data && !show_form && (
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1">
                    <strong>Tag Type:</strong>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {
                      { '-1': 'Unreliable', 0: 'Validating', 1: 'Confirmed' }[
                      unreliable_data.tag_type
                      ]
                    }
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1">
                    <strong>Timestamp:</strong>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {moment(unreliable_data.ts).format(
                      'DD MMMM YYYY, HH:mm:ss',
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1">
                    <strong>Tagger:</strong>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {`${unreliable_data.tagger.first_name} ${unreliable_data.tagger.last_name}`}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>Remarks:</strong>
                  </Typography>
                  <Typography variant="body1">
                    {unreliable_data.remarks}
                  </Typography>
                </Grid>
              </Grid>
            )}

            {show_form && (
              <Fragment>
                <FormControl
                  component="fieldset"
                  style={{ display: 'flex', marginBottom: '1rem' }}>
                  <RadioGroup
                    aria-label="tag_type"
                    name="tag_type"
                    row
                    style={{ justifyContent: 'space-around' }}
                    value={tag_type}
                    onChange={x => setTagType(x.target.value)}>
                    <FormControlLabel
                      value="-1"
                      control={<Radio />}
                      label="Unreliable"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Validating"
                      disabled={
                        unreliable_data && unreliable_data.tag_type !== 0
                      }
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Confirmed"
                    />
                  </RadioGroup>
                </FormControl>
                {tag_type != '0' && (
                  <TextField
                    label="Remarks"
                    value={remarks ? remarks : ''}
                    onChange={event => setRemarks(event.target.value)}
                    inputProps={{ maxLength: 1000 }}
                    fullWidth
                    required
                    error={remarks === '' || remarks === null}
                    helperText={remarks ? '' : 'Required'}
                  />
                )}
              </Fragment>
            )}
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        {show_form ? (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={saveFunction}
            disabled={remarks === '' || tag_type === '' || remarks === null}>
            Save
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={toggle_edit}>
            Edit
          </Button>
        )}

        <Button color="primary" onClick={handleCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ClickPointModal(props) {
  const {
    setIsOpenClickModal,
    open,
    chosenPoint,
    setEditModal,
    setShowTrending,
    setGenerateTrending,
    setSurficialDataTagModal,
  } = props;

  const {
    ts: chosen_ts,
    measurement: chosen_meas,
    name,
    observer_name,
  } = chosenPoint;
  const handleClose = () => {
    setIsOpenClickModal(false);
  };

  const handleEditDeleteClick = () => {
    handleClose();
    setEditModal({
      ...chosenPoint,
      is_open: true,
    });
  };

  const handleGenerateTrendingClick = () => {
    handleClose();
    setShowTrending(true);
    setGenerateTrending(true);
  };

  const hadleSurficialDataTagClick = type => event => {
    handleClose();
    setSurficialDataTagModal({
      ...chosenPoint,
      is_open: true,
      type,
    });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}>
      <DialogTitle id="simple-dialog-title">Point options</DialogTitle>
      <DialogContent>
        <div align="center">
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
            Marker {name}
          </Typography>
          <Typography variant="body2">
            Timestamp: {moment(chosen_ts).format('DD MMMM YYYY, HH:mm:ss')}
          </Typography>
          <Typography variant="body2">Measurement: {chosen_meas} cm</Typography>
          <Typography variant="body2">Observer: {observer_name}</Typography>
        </div>
      </DialogContent>
      <List>
        <ListItem button onClick={handleEditDeleteClick}>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          <ListItemText primary="Edit/Delete data" />
        </ListItem>

        <ListItem button onClick={handleGenerateTrendingClick}>
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="Generate trending chart" />
        </ListItem>

        <ListItem button onClick={hadleSurficialDataTagClick('tag')}>
          <ListItemIcon>
            <LocalOffer />
          </ListItemIcon>
          <ListItemText primary="Add/Edit data tag info" />
        </ListItem>
      </List>
    </Dialog>
  );
}

function SurficialMarkersButton(props) {
  const {
    width,
    url,
    selectedMarker,
    surficialData,
    setIsOpenAddEventModal,
    setAddNewMarker,
  } = props;

  const [anchor, setAnchor] = useState(null);

  const onMenuClick = event => {
    setAnchor(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchor(null);
  };

  const has_enough_markers =
    isWidthDown(width, 'sm') && surficialData.length <= 5;

  const handleAddMarker = () => {
    setAddNewMarker(true);
    setIsOpenAddEventModal(true);
  };

  return (
    <Fragment>
      <ButtonGroup
        variant="contained"
        color="primary"
        size="small"
        aria-label="Site markers button group"
        style={{ marginRight: 6 }}>
        <Button disabled style={{ color: '#000000' }}>
          Marker
        </Button>

        {has_enough_markers ? (
          surficialData.map(marker => {
            const { marker_name, marker_id } = marker;
            return (
              <Button
                component={Link}
                to={`${url}/${marker_name}`}
                key={marker_id}>
                {marker_name}
              </Button>
            );
          })
        ) : (
          <Button
            color="primary"
            variant="contained"
            size="small"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={onMenuClick}
            endIcon={<ArrowDropDown />}>
            {selectedMarker ? selectedMarker.marker_name : 'Select'}
          </Button>
        )}

        <Tooltip title="Add a new marker" onClick={handleAddMarker} arrow>
          <Button>
            <Add />
          </Button>
        </Tooltip>
      </ButtonGroup>

      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={onMenuClose}>
        {surficialData.map(marker => {
          const { marker_name, marker_id } = marker;
          return (
            <MenuItem
              component={Link}
              to={`${url}/${marker_name}`}
              key={marker_id}
              onClick={onMenuClose}>
              {marker_name}
            </MenuItem>
          );
        })}
      </Menu>
    </Fragment>
  );
}

// eslint-disable-next-line max-params
function prepareOptions(
  input,
  data,
  width,
  setIsOpenClickModal,
  setChosenPointCopy,
  is_end_of_shift,
) {
  const { site_code, timestamps } = input;
  const { start, end } = timestamps;
  const start_date = moment(start, 'YYYY-MM-DD HH:mm:ss');
  const end_date = moment(end, 'YYYY-MM-DD HH:mm:ss');

  const font_size = isWidthDown(width, 'sm') ? '1rem' : '0.90rem';

  let subtitle = `As of: <b>${moment(end_date).format(
    'D MMM YYYY, hh:mm A',
  )}</b>`;

  let min_x = start_date;
  if ((is_end_of_shift || start === 'None') && data.length > 0) {
    const min = data.reduce((cur_min, row) => {
      const { data: cd } = cur_min;
      const { data: rd } = row;
      if (cd.length === 0) return row;
      if (rd.length === 0) return cur_min;
      return cd[0].x < rd[0].x ? cur_min : row;
    });
    min_x = min.data.length > 0 ? moment(min.data[0].x) : moment();
  }

  data.forEach(row => {
    // eslint-disable-next-line no-param-reassign
    row.turboThreshold = 100000;
    const { data: series_data } = row;
    series_data.forEach(series_data_row => {
      const { unreliable_data } = series_data_row;
      if (Object.keys(unreliable_data).length !== 0) {
        const { tag_type } = unreliable_data;
        let symbol;
        let fillColor;
        if (tag_type === -1) {
          symbol = 'triangle-down';
          fillColor = '#FF0000';
        } else if (tag_type === 0) {
          symbol = 'circle';
          fillColor = '#FFFF00';
        } else {
          symbol = 'triangle';
          fillColor = '#06e606';
        }

        const marker = {
          symbol,
          radius: 8,
          fillColor,
          lineColor: '#000000',
          lineWidth: 1,
        };
        // eslint-disable-next-line no-param-reassign
        series_data_row.marker = marker;
      } else {
        // eslint-disable-next-line no-param-reassign
        series_data_row.unreliable_data = false;
      }
    });
  });

  return {
    title: {
      text: `<b>Surficial Data History Chart of Barangay Marirong</b>`,
      style: { fontSize: font_size },
      margin: 36,
      y: 18,
    },
    time: { timezoneOffset: -8 * 60 },
    series: data,
    chart: {
      type: 'line',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      height: 400,
      resetZoomButton: {
        position: {
          x: 0,
          y: -30,
        },
      },
      spacingTop: 24,
      spacingRight: 24,
      events: {
        // load() {
        //     const chart = this;
        //     const initial_x = 20;
        //     const initial_y = 5;
        //     const loader = (row, i) => {
        //         const symbol_y = initial_y + (20 * (i + 1));
        //         chart.renderer.symbol(row.symbol, initial_x, symbol_y, 10, 10)
        //             .attr({ zIndex: 5 })
        //             .css({ fill: row.color, stroke: "black" })
        //             .add();
        //         const label_y = (initial_y + 10) + (20 * (i + 1));
        //         chart.renderer.text(row.label, initial_x + 15, label_y)
        //             .attr({ zIndex: 5 })
        //             .css({ fontSize: "12px" })
        //             .add();
        //     };
        //     this.showLoading(); // show loading message
        //     this.hideNoData();  // hide no data message
        // }
      },
    },
    subtitle: {
      text: subtitle,
      style: { fontSize: '0.75rem' },
    },
    legend: {
      labelFormatter() {
        const {
          userOptions: { marker_name: mn, in_use },
        } = this;
        const name = in_use === 0 ? `${mn} (Defunct)` : mn;
        return name;
      },
    },
    yAxis: {
      title: {
        text: '<b>Measurement (cm)</b>',
      },
    },
    xAxis: {
      min: Date.parse(min_x),
      max: Date.parse(end_date),
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b %Y',
        year: '%b',
      },
      title: {
        text: '<b>Date</b>',
      },
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      xDateFormat: "%A, %b %d, %I:%M %p"
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
        },
        dashStyle: 'ShortDash',
      },
      series: {
        marker: {
          radius: 6,
        },
        cursor: 'pointer',
        point: {
          events: {
            click() {
              if (!is_end_of_shift) {
                const {
                  data_id,
                  x,
                  y,
                  mo_id,
                  series: { name },
                  unreliable_data,
                  observer_name,
                } = this;

                const obj = {
                  data_id,
                  name,
                  mo_id,
                  ts: moment(x),
                  measurement: y,
                  unreliable_data,
                  observer_name,
                };
                setChosenPointCopy(obj);
                setIsOpenClickModal(true);
              }
            },
          },
        },
      },
    },
    loading: {
      showDuration: 100,
      hideDuration: 1000,
    },
    credits: {
      enabled: false,
    },
    exporting: {
      sourceWidth: 850,
      sourceHeight: 400,
    },
  };
}

function createSurficialGraph(options, chartRef) {
  const temp = (
    <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
  );

  return temp;
}

function SurficialGraph(props) {
  const {
    width,
    fullScreen,
    disableBack,
    disableMarkerList,
    saveSVG,
    input,
    currentUser,
    isEndOfShift,
  } = props;

  const default_range_info = { label: '3 months', unit: 'months', duration: 3 };
  const [selected_range_info, setSelectedRangeInfo] =
    useState(default_range_info);
  const { unit, duration } = selected_range_info;

  const ts_now = moment();
  let ts_end = ts_now.format('YYYY-MM-DD HH:mm:ss');
  let dt_ts_end = ts_now;
  const site_code = 'mar';

  const save_svg = typeof saveSVG === 'undefined' ? false : saveSVG;
  const is_end_of_shift =
    typeof isEndOfShift === 'undefined' ? false : isEndOfShift;

  const ts_start = computeForStartTs(dt_ts_end, duration, unit);
  const chartRef = React.useRef(null);
  const timestamps = { start: ts_start, end: ts_end };

  const [surficial_data, setSurficialData] = useState([]);
  const [selected_marker, setSelectedMarker] = useState(null);
  const [historical_markers, setHistoricalMarkers] = useState(false);

  const [save_svg_now, setSaveSVGNow] = useState(false);
  const [to_redraw_chart, setRedrawChart] = useState(true);
  const [show_trending, setShowTrending] = useState(false);
  const [generate_trending, setGenerateTrending] = useState(false);

  const [is_open_click_modal, setIsOpenClickModal] = useState(false);
  const [is_open_add_event_modal, setIsOpenAddEventModal] = useState(false);
  const [add_new_marker, setAddNewMarker] = useState(false);

  const [is_open_export, setIsOpenExport] = useState(false);

  const default_point = {
    data_id: null,
    mo_id: null,
    name: null,
    ts: null,
    measurement: 0,
  };
  const [chosen_point, setChosenPointCopy] = useState({ ...default_point });
  const [edit_modal, setEditModal] = useState({
    ...default_point,
    is_open: false,
  });

  const [surficial_data_tag_modal, setSurficialDataTagModal] = useState({
    ...default_point,
    is_open: false,
  });

  useEffect(() => {
    setSurficialData([]);
    setRedrawChart(true);
  }, [selected_range_info]);

  useEffect(() => {
    const { current } = chartRef;
    if ((current !== null || to_redraw_chart) && surficial_data.length > 0) {
      current.chart.showLoading();
    }

    if (to_redraw_chart) {
      console.log('HERE');
      const f_input = { site_code, ...timestamps };
      getSurficialPlotData(
        f_input,
        data => {
          let filter_data = data.filter(e => e.data.length > 0);
          if (filter_data.length > 0) {
            setSurficialData(filter_data);
          } else {
            filter_data = data.filter(e => e.in_use === 1);
            setSurficialData(filter_data);
          }

          if (filter_data.length > 0) {
            if (chartRef.current) {
              const {
                current: { chart },
              } = chartRef;
              console.log(chart);
              chart.hideLoading();

              if (save_svg) setSaveSVGNow(true);
            }
          }
        },
        is_end_of_shift,
      );

      setRedrawChart(false);
    }
  }, [to_redraw_chart]);

  useEffect(() => {
    if (!historical_markers && surficial_data.length !== 0) {
      const markers = [];
      const rainbow_colors = Chroma.scale(['#f00', '#0f0', '#00f'])
        .mode('lch')
        .domain([0, surficial_data.length - 1]);
      surficial_data.forEach(({ marker_history }, i) => {
        marker_history.forEach(({ marker_name }) => {
          if (marker_name) {
            markers.push(marker_name.marker_name);
          }
        });

        surficial_data[i].color = rainbow_colors(i).name();
      });
      setHistoricalMarkers(markers);
    }
  }, [historical_markers, surficial_data]);

  useEffect(() => {
    if (chartRef.current) {
      const {
        current: { chart },
      } = chartRef;
      if (selected_marker) {
        chart.series.forEach(s => {
          const bool = selected_marker.marker_name === s.name;
          s.setVisible(bool, false);
        });
        chart.redraw();
        chart.reflow();
      }
    }
  }, [selected_marker]);

  const input_obj = { site_code, timestamps };
  const options = prepareOptions(
    input_obj,
    surficial_data,
    width,
    setIsOpenClickModal,
    setChosenPointCopy,
    is_end_of_shift,
  );
  const graph_component = createSurficialGraph(options, chartRef);

  return (
    <Fragment>
      <div style={{ marginTop: 16 }}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="stretch">
          <Grid
            item
            xs={12}
            md={selected_marker ? 7 : 12}
            lg={selected_marker ? 8 : 12}>
            <Paper elevation={2}>
              {surficial_data.length > 0 ? (
                graph_component
              ) : (
                <Grid container spacing={4}>
                  <Grid item md={12} sm={12}>
                    <Skeleton
                      variant="rectangular"
                      width={'auto'}
                      height={400}
                    />
                  </Grid>
                </Grid>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
      {/* <ClickPointModal
        open={is_open_click_modal}
        setIsOpenClickModal={setIsOpenClickModal}
        chosenPoint={chosen_point}
        setEditModal={setEditModal}
        setShowTrending={setShowTrending}
        setGenerateTrending={setGenerateTrending}
        setSurficialDataTagModal={setSurficialDataTagModal}
      /> */}

      <UpdateDeleteModal
        chosenPoint={chosen_point}
        editModal={edit_modal}
        setEditModal={setEditModal}
        fullScreen={fullScreen}
        siteCode={site_code}
        setRedrawChart={setRedrawChart}
      />

      <SurficialDataTagModal
        chosenPoint={chosen_point}
        surficialDataTagModal={surficial_data_tag_modal}
        setSurficialDataTagModal={setSurficialDataTagModal}
        fullScreen={fullScreen}
        siteCode={site_code}
        setRedrawChart={setRedrawChart}
      />

      <AddNewHistoryModal
        {...props}
        siteCode={site_code}
        open={is_open_add_event_modal}
        setIsOpen={setIsOpenAddEventModal}
        selectedMarker={selected_marker}
        setRedrawChart={setRedrawChart}
        historicalMarkers={historical_markers}
        addNewMarker={add_new_marker}
      />

      <ExportModal
        open={is_open_export}
        setIsOpen={setIsOpenExport}
        surficialData={surficial_data}
        siteCode={site_code}
      />
    </Fragment>
  );
}

export default withMobileDialog()(SurficialGraph);
