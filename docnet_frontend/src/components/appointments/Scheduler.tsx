// import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { Button, Grid, Typography, Paper, Box, Container, TextField } from '@mui/material';


const Scheduler = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker orientation="landscape" />
        </LocalizationProvider>
    );
};

export default Scheduler;
