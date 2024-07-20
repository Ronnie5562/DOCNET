import React, { useState } from 'react';
import { Button, Grid, Typography, Paper, Box, Container, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const AppointmentForm: React.FC = () => {
    const [appointmentBookingData, setAppointmentBookingData] = useState({
        reason: '',
        notes: '',
        date: dayjs(),
        time: '',
    });

    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppointmentBookingData(
            {
                ...appointmentBookingData,
                reason: event.target.value
            }
        );
    };

    const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppointmentBookingData(
            {
                ...appointmentBookingData,
                notes: event.target.value
            }
        )
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Reason:', appointmentBookingData.reason);
        console.log('Notes:',  appointmentBookingData.notes);
    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Paper elevation={3} style={{ padding: 20, width: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                        Appointment Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Reason"
                            value={appointmentBookingData.reason}
                            onChange={handleReasonChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Notes"
                            value={appointmentBookingData.notes}
                            onChange={handleNotesChange}
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <Box mt={2}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};


const Scheduler: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const times = ['10:00', '11:00', '1:00', '2:30', '12:01'];

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedDate(date);
        console.log(selectedDate)
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
    };

    const getISODateTime = () => {
        if (selectedDate && selectedTime) {
            const [hours, minutes] = selectedTime.split(':').map(Number);
            const combinedDateTime = selectedDate.hour(hours).minute(minutes);
            return combinedDateTime.toISOString();
        }
        return null;
    };

    return (
        <Container>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Paper elevation={3} style={{ padding: 20, width: '100%', maxWidth: { xs: 600, lg: 1200 } }}>
                    <Typography variant="h6" gutterBottom>
                        Select a Date & Time
                    </Typography>
                    <Box sx={{ display: { xs: 'block', lg: 'flex' } }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {/* <DatePicker

                            /> */}
                            <StaticDatePicker
                                orientation="landscape"
                                value={selectedDate}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                        </LocalizationProvider>
                        <Box mt={4}>
                            <Grid container spacing={2}>
                                {times.map((time) => (
                                    <Grid item xs={6} key={time}>
                                        <Button
                                            variant={selectedTime === time ? 'contained' : 'outlined'}
                                            onClick={() => handleTimeSelect(time)}
                                            fullWidth
                                        >
                                            {time} { Number(time.split(':')[0]) < 12 ? 'AM' : 'PM' }
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    {selectedDate && selectedTime && (
                        <Box mt={4} textAlign="center">
                            <Button variant="contained" color="primary" onClick={() => console.log(getISODateTime())}>
                                Confirm {selectedDate.format('MMMM DD, YYYY')} at {selectedTime}
                            </Button>
                        </Box>
                    )}
                </Paper>
            </Box>
        </Container>
    );
};

export default Scheduler;
export { AppointmentForm };
