import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid, Container, Button, Typography, FormControl, Box } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import moment from 'moment';

const MomsTable = (props) => {

    const {instances} = props
    
    return (
        <Grid cointainer width={"100%"}>
            <Grid item xs={12}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Feature Type</TableCell>
                    <TableCell>Feature Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Last Observance Timestamp</TableCell>
                    <TableCell>Alert Level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {instances.hasOwnProperty('data') > 0 && instances.data.map((row) => (
                    <Row key={row.date} row={row} />
                  ))}
                </TableBody>
              </Table>
              {/* <FabMuiTable
                data={{
                  columns: columns,
                  rows: dummyData,
                }}
                options={options}
              /> */}
            </Grid>
        </Grid>
    )
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
            >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">{row.feature.feature_type}</TableCell>
            <TableCell>{row.feature_name}</TableCell>
            <TableCell>{row.location}</TableCell>
            <TableCell>{moment(row.moms[0].observance_ts).format("LL hh:mm A")}</TableCell>
            <TableCell>{row.moms[0].op_trigger}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                    Instances
                </Typography>
                <Table size="small" aria-label="purchases">
                    <TableHead>
                    <TableRow>
                        <TableCell>Observance Timestamp</TableCell>
                        <TableCell>Narrative</TableCell>
                        <TableCell>Report Timestamp</TableCell>
                        <TableCell>Reporter</TableCell>
                        <TableCell>Validator</TableCell>
                        <TableCell>Remarks</TableCell>
                        <TableCell>Alert Level</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {row.moms.map((element) => (
                        <TableRow key={element.moms_id}>
                        <TableCell component="th" scope="row">{element.observance_ts}</TableCell>
                        <TableCell>{element.narrative.narrative}</TableCell>
                        <TableCell>{element.narrative.timestamp}</TableCell>
                        <TableCell>{`${element.reporter.first_name} ${element.reporter.last_name}`}</TableCell>
                        <TableCell>{`${element.validator.first_name} ${element.validator.last_name}`}</TableCell>
                        <TableCell>{element.remarks}</TableCell>
                        <TableCell>{element.op_trigger}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Box>
            </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
}

export default MomsTable;