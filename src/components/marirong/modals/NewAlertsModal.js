import {
    Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, Button, Typography, TextField, Divider,
    Grid
} from '@mui/material';
import React, { Fragment, useState, useEffect } from 'react';

import moment from 'moment';

function NewAlertsModal(props) {
    const { isOpen,
        triggers,
        setOpenModal,
        setIsOpenValidationModal,
        candidateAlertsData,
        capitalizeFirstLetter } = props;

        const [newAlerts, setNewAlerts] = useState([]);
        const [running_interval, setRunningInterval] = useState(null);
        const [running_timeout, setRunningTimeout] = useState(null);
      
        const [is_peace_mode, setIsPeaceMode] = useState(false);
      
        const closeModal = () => {
          setOpenModal(false);
          setIsOpenValidationModal(false);
        };
      
        useEffect(() => {
          clearInterval(running_interval);
          clearTimeout(running_timeout);
      
          if (candidateAlertsData) {
            const trigger_arr_to_validate = [];
            const site_for_trigger_validation = [];
            const temp = [...candidateAlertsData];
            temp.map(row => {
              const {general_status} = row;
              if (general_status !== 'routine') {
                const {trigger_list_arr} = row;
      
                if (typeof trigger_list_arr !== 'undefined') {
                  const has_new_alert = trigger_list_arr.filter(
                    e =>
                      e.validating_status === null ||
                      (!e.validating_status && e.trigger_type === 'earthquake'),
                  );
                  if (has_new_alert.length > 0) {
                    trigger_arr_to_validate.push(has_new_alert);
                    const new_row = {...row, trigger_list_arr: has_new_alert};
                    site_for_trigger_validation.push(new_row);
                  }
                }
              }
              return trigger_arr_to_validate;
            });
      
            const openModal = () => {
              setOpenModal(true);
              const temp_timeout = setTimeout(closeModal, 30000);
              setRunningTimeout(temp_timeout);
            };
      
            const closeModal = () => {
              setOpenModal(false);
              setIsPeaceMode(true);
            };
      
            if (trigger_arr_to_validate.length > 0) {
              if (!is_peace_mode) {
                // console.log("Playing sound notif...");
                openModal();
              }
              console.log(site_for_trigger_validation);
              setNewAlerts(site_for_trigger_validation);
      
              const temp_interval = setInterval(() => {
                clearTimeout(running_timeout);
                openModal();
              }, 180000);
              setRunningInterval(temp_interval);
            } else {
              closeModal();
              clearInterval(running_interval);
              setIsPeaceMode(false);
            }
          }
        }, [candidateAlertsData]);

    return (
        <Dialog
            fullWidth
            fullScreen={false}
            open={isOpen}
            aria-labelledby="form-dialog-title"

        >
            <DialogTitle id="form-dialog-title">New Alerts</DialogTitle>
            <DialogContent>
            {newAlerts &&
          newAlerts.map((row, index) => {
            const {site_code, trigger_list_arr} = row;

            return (
              <Grid
                container
                spacing={2}
                key={site_code}
                style={{textAlign: 'center'}}>
                <Typography
                  gutterBottom
                  variant="body1"
                  component={Grid}
                  item
                  xs={12}>
                  Please validate the trigger below.
                </Typography>
                {trigger_list_arr.length > 0 &&
                  trigger_list_arr.map((trigger_row, trigger_index) => {
                    const {trigger_type, ts_updated, tech_info} = trigger_row;
                    return (
                      <Fragment key={trigger_index}>
                        <Grid item xs={4}>
                          <Typography color="textSecondary">Trigger</Typography>
                          <Typography variant="body2" component="p">
                            {capitalizeFirstLetter(
                              trigger_type === 'moms'
                                ? 'landslide feature'
                                : trigger_type,
                            )}
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography color="textSecondary">
                            Trigger timestamp
                          </Typography>
                          <Typography variant="body2" component="p">
                            {moment(ts_updated).format('DD MMMM YYYY, hh:mm A')}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography color="textSecondary">
                            Technical Information
                          </Typography>
                          <Typography variant="body2" component="p">
                            {tech_info}
                          </Typography>
                        </Grid>
                      </Fragment>
                    );
                  })}
              </Grid>
            );
          })}
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal} color="primary">
                    Close & Validate
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewAlertsModal;