import { Box, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import letter_header from '../../assets/phivolcs-letter-head.png';
import letter_footer from '../../assets/phivolcs-letter-footer.png';

const Bulletin = () => {
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
                        <Typography>Location:</Typography>
                        <Typography>Date/Time:</Typography>
                        <Typography>Alert Level Released:</Typography>
                        <Typography>Recommended Response:</Typography>
                    </Box>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12} style={{marginLeft: 80, marginRight: 80}}>
                        <Typography variant='h6'><b><u>AREA SITUATION:</u></b></Typography>
                        <Typography variant='h6'><b>GROUND MOVEMENT</b></Typography>
                        <Typography variant='subtitle1' style={{marginLeft: 20}}><u>SURFICIAL</u></Typography>
                        <Typography variant='subtitle1' style={{marginLeft: 20}}><u>MANIFESTATIONS OF MOVEMENT</u></Typography>
                        <Typography variant='h6'><b>RAINFALL</b></Typography>
                        <Typography variant='h6'><b>ELEMENTS AT RISK</b></Typography>
                        <Typography variant='subtitle1' style={{marginLeft: 20}}>46 households (237 residents), barangay hall, daycare center, chapel, basketball court</Typography>
                        <Typography variant='h6'><b><u>OTHER RECOMMENDATIONS:</u></b></Typography>
                        <Typography variant='subtitle1'><b>For the Landslide Early Warning Committee (LEWC):</b> --insert eme--</Typography>
                        <Typography variant='subtitle1' sx={{marginBottom: 2}}><b>For the Community:</b> --insert eme--</Typography>
                        <Typography variant='subtitle1'><b>NOTE:</b> This bulletin contains the official alert level and recommended response of the Leon MDRRMO for Brgy. Marirong and will hold true until a new bulletin is released.</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' alignItems='flex-start' textAlign='center'>
                    <Grid item xs={12} md={12} lg={12}>
                        <img src={letter_footer}
                            alt='letter-footer'
                            style={{
                                objectFit: 'contain',
                                width: 1000,
                                height: 200
                            }} />
                    </Grid>
                </Grid>
            </Box>
            </Grid>
        </Fragment>
    );
}

export default Bulletin;