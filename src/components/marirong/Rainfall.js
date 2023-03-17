import React, { Fragment, useState, useEffect } from 'react';
import {
    Grid, Typography, Button, Box, Modal, TextField,
    Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup, FormHelperText
} from '@mui/material';
import RainfallGraph from '../analysis/RainfallGraph';

const Rainfall = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rainData, setRainData] = useState([]);

    return (
        <Fragment>
            <Grid item xs={12} sx={{ padding: 8 }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button variant="contained" onClick={handleOpen} sx={{ marginBottom: 4 }}>
                        Load Rainfall Plot per needed timestamp
                    </Button>
                    <Box>
                        <Typography variant='h5' sx={{ marginBottom: 4 }}>
                            Rainfall Data
                        </Typography>
                    </Box>
                </Grid>
                <RainfallGraph />
            </Grid>
        </Fragment>
    )
}

export default Rainfall;