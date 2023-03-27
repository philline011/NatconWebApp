import { Box, Grid, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import React, { Fragment, createRef, useState } from 'react';
import letter_header from '../../assets/phivolcs-letter-head.png';
import ldrrmc_logo from '../../assets/ldrrmc.png';
import leon_logo from '../../assets/leon_municipal_seal.png';
import letter_footer from '../../assets/phivolcs-letter-footer.png';
import Pdf from "react-to-pdf";
import moment from 'moment';

const Bulletin = () => {
    const location = useLocation();
    const ref = createRef();
    const [isRendering, setIsRendering] = useState(false);
    return (
        <Fragment>
            <Grid container justifyContent='center' alignItems='flex-start'>
            <Box ref={ref} sx={{
                marginTop: 10,
                marginBottom: 10,
                maxWidth: isRendering == false ? 1050 : 800,
                height: 'auto',
                border: '2px solid black'
            }}>
                <Grid container justifyContent='center' alignItems='flex-start' textAlign='center'>
                    <Grid item xs={12} md={12} lg={12} style={{marginBottom: 10}}>
                        <Grid container spacing={0} alignItems="center" justifyContent="center">
                            <Grid item xs={3}>
                                <img src={ldrrmc_logo}
                                    alt='letter-header'
                                    style={{
                                        objectFit: 'contain',
                                        width: 250,
                                        height: 200
                                    }} />
                            </Grid>
                            <Grid item xs={5} style={{textAlign: 'center'}}>
                                <Typography variant='h6'>
                                    <b>Republic of the Phillipines</b>
                                </Typography>
                                <Typography variant='h5'>
                                    <b>Province of Iloilo </b>
                                </Typography>
                                <Typography variant='h5'>
                                    <b>Municipality of Leon</b>
                                </Typography>
                                <Typography variant='h5'>
                                    <b>Community-Based Early Warning </b>
                                </Typography>
                                <Typography variant='h5'>
                                    <b>Systems for Landslides</b>
                                </Typography>     
                            </Grid>
                            <Grid item xs={3}>
                                <img src={leon_logo}
                                    alt='letter-header'
                                    style={{
                                        objectFit: 'contain',
                                        width: 120,
                                        height: 120
                                    }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} style={{marginBottom: 20}}>
                        <Typography variant='h4'>
                            <b>CBEWS-L ALERT LEVEL INFORMATION: MAR-2023</b>
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
                        <Typography variant="h5">Location: {location.state.siteLocation}</Typography>
                        <Typography variant="h5">Date/Time: {location.state.currentAlertTs}</Typography>
                        <Typography variant="h5">Alert Level Released: {location.state.alertLevel}</Typography>
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
            <Grid item xs={12} style={{justifyContent: 'center', textAlign: 'center'}}>

                <Pdf targetRef={ref} filename={`alert-bulletin-${moment().format("YYYY-MM-DD HH:mm:ss")}.pdf`}>
                        {({ toPdf }) =>  <Button
                        variant="contained"
                        style={{marginButtom: 10, textAlign: 'center'}}
                        onClick={()=> {
                            setIsRendering(true);
                            toPdf();
                        }}
                        color="primary">
                        Download
                    </Button>}
                </Pdf>
            </Grid>
            <Grid container justifyContent='center' alignItems='flex-start' textAlign='center'>
                <div style={{height: 80}}/>
            </Grid>
            </Grid>

        </Fragment>
    );
}

export default Bulletin;