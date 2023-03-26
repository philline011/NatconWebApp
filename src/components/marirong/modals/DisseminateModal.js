import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  TextField,
  Grid,
} from '@mui/material';
import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

function DisseminateModal(props) {
  const {
    isOpen,
    disseminateData,
    setOpenModal,
    handleSendSMS,
    monitoringReleases,
    setMonitoringReleases,
    setTriggers,
    triggers,
    capitalizeFirstLetter,
    ewiTemplates,
  } = props;

  const navigate = useNavigate();
  const [latest_triggers, setLatestTriggers] = [];
  const [message, setMessage] = useState('');

  const [alertLevel, setAlertLevel] = useState('');
  const [siteLocation, setSiteLocation] = useState('');
  const [currentAlertTs, setCurrentAlertTs] = useState('');
  const [triggerSource, setTriggerSource] = useState([]);
  const [barangayRP, setBarangayRP] = useState('');
  const [communityRP, setCommunityRP] = useState('');
  const [lewcRP, setLewcRP] = useState('');

  const releaseEWISms = () => {
    handleSendSMS(message);
  };

  useEffect(() => {
    if (disseminateData) {
      const { public_alert_level } = disseminateData;
      if (public_alert_level !== 0) {
        let data_timestamp;
        let site_location;
        console.log(ewiTemplates);
        const {
          event,
          public_alert_symbol,
          releases,
          latest_event_triggers,
          is_onset_release,
        } = disseminateData;
        const { site } = event;
        const { barangay, municipality, province } = site;
        const { data_ts, release_time } = releases[0];
        data_timestamp = data_ts;
        if (is_onset_release) {
          const temp_data_ts = data_ts;
          const temp_release_time = release_time;
          const onset_data_ts = `${moment(data_ts).format(
            'YYYY-MM-DD',
          )} ${temp_release_time}`;
          const onset_hour = moment(data_ts).hour();
          if (onset_hour === 23) {
            data_timestamp = moment(onset_data_ts).add(1, 'days');
          }
        }
        const { alert_level } = public_alert_symbol;

        site_location = `Brgy. ${barangay}, ${municipality}, ${province}`;
        setSiteLocation(site_location);

        let msg = `Alert level: ${alert_level}\nLokasyon: ${site_location}\nPetsa at oras: ${moment(
          data_timestamp,
        )
          .add(30, 'minutes')
          .format('LLL')}`;
        
          setAlertLevel(`Alert level ${alert_level}`);
          setCurrentAlertTs(moment(
            data_timestamp,
          )
            .add(30, 'minutes')
            .format('LLL'))

        if (alert_level > 0) {
          latest_event_triggers.forEach(trigger => {
            const { internal_sym, trigger_misc } = trigger;
            const { trigger_symbol } = internal_sym;
            const { trigger_hierarchy, alert_level } = trigger_symbol;
            const { trigger_source } = trigger_hierarchy;
            let template = ewiTemplates.find(
              e =>
                e.alert_level === alert_level && e.trigger === trigger_source,
            );
            if (trigger_source === 'on demand') {
              const { on_demand } = trigger_misc;
              const { eq_id } = on_demand;
              if (eq_id) {
                template = ewiTemplates.find(
                  e =>
                    e.alert_level === alert_level && e.trigger === 'earthquake',
                );
              } else {
                template = ewiTemplates.find(
                  e =>
                    e.alert_level === alert_level && e.trigger === 'rainfall',
                );
              }
              const trig_source = eq_id
                ? 'On-demand Earthquake'
                : 'On-demand Rainfall';
              msg += `\nBakit (${capitalizeFirstLetter(trig_source)}): ${template.trigger_description
                }`;
                let temp = [...triggerSource];
                temp.push({
                  source: capitalizeFirstLetter(trig_source),
                  description: template.trigger_description
                })
            } else {
              const trig_source =
                trigger_source === 'moms'
                  ? 'Landslide Features'
                  : trigger_source;
              msg += `\nBakit (${capitalizeFirstLetter(trig_source)}): ${template.trigger_description
                }`;

                let temp = [...triggerSource];
                temp.push({
                  source: capitalizeFirstLetter(trig_source),
                  description: template.trigger_description
                });
                setTriggerSource(temp);
            }
          });
        }
        const recommended_response = ewiTemplates.find(
          e => e.alert_level === alert_level
        );



        setBarangayRP(recommended_response.barangay_response);
        setLewcRP(recommended_response.lewc_response);
        setCommunityRP(recommended_response.commmunity_response);

        msg += `\nResponde (Barangay): ${recommended_response.barangay_response}\n`;
        msg += `\nResponde (LEWC):${recommended_response.lewc_response}\n`;
        msg += `\nResponde (Komunidad): ${recommended_response.commmunity_response}\n`;
        msg += `Source: Leon MDRRMO`;
        setMessage(msg);
      } else {
        // need icheck if gagana din sa extended
        const { data_ts, public_alert_level } = disseminateData;
        const recommended_response = ewiTemplates.find(
          e => e.alert_level === public_alert_level,
        );
        let site_location = 'Brgy. Lipata, Paranas, Samar';
        setSiteLocation(site_location)
        let msg = `\nAlert Level: ${recommended_response.alert_level
          }\nLokasyon: ${site_location}\nPetsa at oras: ${moment(data_ts)
            .add(30, 'minutes')
            .format('LLL')}`;
        
        setAlertLevel(`Alert Level ${recommended_response.alert_level}`);
        setCurrentAlertTs(moment(data_ts)
        .add(30, 'minutes')
        .format('LLL'));

        let temp = [...triggerSource];
        temp.push({
          source: 'Extended',
          description: recommended_response.trigger_description
        });
        console.log("THIS IS TEMP:", temp);
        setTriggerSource(temp);
        setCommunityRP(recommended_response.commmunity_response);
        setBarangayRP(recommended_response.barangay_response);

        msg += `\nBakit: ${recommended_response.trigger_description}`;
        msg += `\nResponde (Komunidad): ${recommended_response.commmunity_response}\nResponde (LEWC):${recommended_response.barangay_response}\nSource: Leon MDRRMO`;
        setMessage(msg);
      }
    }
  }, [disseminateData]);

  const renderBulletin = () => {
    console.log(message)
    navigate("/bulletin", {
      state: {
        alertLevel:alertLevel,
        siteLocation:siteLocation,
        currentAlertTs:currentAlertTs,
        triggerSource:triggerSource,
        barangayRP:barangayRP,
        communityRP:communityRP,
        lewcRP:lewcRP
      }
    })
  }

  return (
    <Dialog
      fullWidth
      fullScreen={false}
      open={isOpen}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Disseminate Warning</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item md={12}>
            <TextField
              id="filled-multiline-static"
              label="Message"
              multiline
              rows={25}
              variant="filled"
              value={message}
              fullWidth
            />
            {/* <Typography variant="body1"><b>Lugar:</b> {site_location}</Typography>
                        <br />
                        <Typography variant="body1"><b>Petsa at oras:</b> {moment(data_timestamp).add(30, "minutes").format("LLL")}</Typography>
                        <br />
                        <Typography variant="body1"><b>Bakit ({trigger.trigger}):</b> {trigger.waray_tech_info}</Typography>
                        <br />
                        <Typography variant="body1"><b>Responde (komunidad):</b> {trigger.community_response}</Typography>
                        <br />
                        <Typography variant="body1"><b>Responde (LEWC ngan barangay):</b> {trigger.barangay_response}</Typography>
                        <br />
                        <Typography variant="body1"><b>Source:</b> Paranas MDRRMO</Typography>
                        <br /> */}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setOpenModal(false)}
          color="error">
          Cancel
        </Button>
        <Button variant="contained" onClick={() => {
          renderBulletin();
        }} color="primary">
          Generate Bulletin
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DisseminateModal;
