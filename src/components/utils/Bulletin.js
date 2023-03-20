import { Box, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import React, { Fragment } from 'react';
import letter_header from '../../assets/phivolcs-letter-head.png';
import letter_footer from '../../assets/phivolcs-letter-footer.png';

const Bulletin = () => {
    const location = useLocation();
    console.log(location);
    return (
        <Fragment>
            <Grid container justifyContent='center' alignItems='flex-start'>
            <Box sx={{
                marginTop: 10,
                marginBottom: 10,
                maxWidth: 1050,
                height: 'auto',
                border: '2px solid black'
            }}>
                <Grid container justifyContent='center' alignItems='flex-start' textAlign='center'>
                    <Grid item xs={12} md={12} lg={12} style={{marginBottom: 10}}>
                        <img src={letter_header}
                            alt='letter-header'
                            style={{
                                objectFit: 'contain',
                                width: 1000,
                                height: 200
                            }} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} style={{marginBottom: 20}}>
                        <Typography variant='h4'>
                            <b>CBEWS-L ALERT LEVEL INFORMATION: MAR-2023-001</b>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' style={{marginBottom: 10}}>
                    <Box sx={{
                        width: 550,
                        height: 'auto',
                        border: '2px solid black',
                        padding: 2
                    }}>
                        <Typography>Location: {location.state.siteLocation}</Typography>
                        <Typography>Date/Time: {location.state.currentAlertTs}</Typography>
                        <Typography>Alert Level Released: {location.state.alertLevel}</Typography>
                        {/* <Typography>Recommended Response: {}</Typography> */}
                    </Box>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12} style={{marginLeft: 80, marginRight: 80}}>
                        <Typography variant='h6'><b><u>AREA SITUATION:</u></b></Typography>

                        {
                            location.state.triggerSource.map((data) => (
                                data.source.toLowerCase() == "landslide features" ? <Fragment><Typography variant='h6'><b>LANDSLIDE FEATURES</b></Typography><Typography variant='subtitle1' style={{marginLeft: 20}}><u>{data.description}</u></Typography></Fragment> :
                                data.source.toLowerCase() == "rainfall" ? <Fragment><Typography variant='h6'><b>RAINFALL</b></Typography><Typography variant='subtitle1' style={{marginLeft: 20}}><u>{data.description}</u></Typography></Fragment> : 
                                (data.source.toLowerCase() == "earthquake" || data.source.toLowerCase() == "surficial" || data.source.toLowerCase() == "subsurface") ? <Fragment><Typography variant='h6'><b>GROUND MOVEMENT</b></Typography><Typography variant='subtitle1' style={{marginLeft: 20}}><u>{data.description}</u></Typography></Fragment> :
                                "N/A"
                            ))
                        }
                        
                        <Typography variant='h6'><b>ELEMENTS AT RISK</b></Typography>
                        <Typography variant='subtitle1' style={{marginLeft: 20}}>46 households (237 residents), barangay hall, daycare center, chapel, basketball court</Typography>
                        <Typography variant='h6'><b><u>OTHER RECOMMENDATIONS:</u></b></Typography>
                        {
                            location.state.lewcRP != "" ? <Typography variant='subtitle1'><b>For the Landslide Early Warning Committee (LEWC):</b> {location.state.lewcRP}</Typography> : "N/A"
                        }
                        {
                            location.state.communityRP != "" ? <Typography variant='subtitle1'><b>For the Community:</b> {location.state.communityRP}</Typography> : "N/A"
                        }
                        {
                            location.state.barangayRP != "" ? <Typography variant='subtitle1'><b>For the Barangay:</b> {location.state.barangayRP}</Typography> : "N/A"
                        }
                        <Typography variant='subtitle1'><b>NOTE:</b> This bulletin contains the official alert level and recommended response of the Leon MDRRMO for Brgy. Marirong and will hold true until a new bulletin is released.</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' alignItems='flex-start' textAlign='center'>
                    <div style={{height: 80}}/>
                </Grid>

            </Box>
            </Grid>
        </Fragment>
    );
}

export default Bulletin;