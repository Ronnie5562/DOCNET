import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LoadingButton } from '@mui/lab';
import { Button, Grid, Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useColorScheme } from '@mui/joy/styles';
import { useSnackbar } from 'notistack';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import useAppointmentService from '@/services/AppointmentServices';
import schedulerTheme from '../../theme/schedulerTheme';
dayjs.extend(utc);

interface SchedulerProps {
    selectedDate: Dayjs | null;
    setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
    selectedTime: string | null;
    setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
    reason: string;
    notes: string;
    doctor_id: string;
}

const Scheduler: React.FC<SchedulerProps> = ({
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    reason,
    notes,
    doctor_id,
}) => {
    const { mode } = useColorScheme();
    const theme = schedulerTheme(mode);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const times = ['10:00', '11:00', '1:00', '2:30', '12:01'];
    const { ScheduleAppointment } = useAppointmentService();
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);

    const handleDateTime = () => {
        if (selectedDate && selectedTime) {
            const [hours, minutes] = selectedTime.split(':');
            const time = Number(hours) + (selectedTime.includes('PM') && Number(hours) !== 12 ? 12 : 0);
            let dateTime = selectedDate.hour(time).minute(Number(minutes));
            dateTime = dateTime.second(0).millisecond(0);
            const utcDateTime = dayjs.utc(dateTime);
            return utcDateTime.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        }
        return '';
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await ScheduleAppointment({
                doctor_id: doctor_id,
                reason: reason,
                notes: notes,
                start_datetime: handleDateTime(),
            });
            enqueueSnackbar('Appointment scheduled successfully!', { variant: 'success', anchorOrigin: { vertical: 'bottom', horizontal: 'right' } });
            console.log(res);
        } catch (error) {
            enqueueSnackbar('Failed to schedule appointment.', { variant: 'error', anchorOrigin: { vertical: 'bottom', horizontal: 'right' } });
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ mt: { xs: 0, sm: -10, xl: -18 } }}>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                    <Box sx={{ width: '100%', maxWidth: { xs: 600, lg: 1200 } }}>
                        <Box sx={{ display: { xs: 'block', lg: 'flex' } }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker
                                    orientation={isSmallScreen ? 'portrait' : 'landscape'}
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    sx={{ backgroundColor: mode === 'dark' ? 'black' : 'white' }}
                                />
                            </LocalizationProvider>
                            <Box mt={4}>
                                <Grid container spacing={2}>
                                    {times.map((time) => (
                                        <Grid item xs={6} key={time}>
                                            <Button
                                                variant={selectedTime === time ? 'contained' : 'outlined'}
                                                onClick={() => setSelectedTime(time)}
                                                fullWidth
                                            >
                                                {time} {Number(time.split(':')[0]) < 12 ? 'AM' : 'PM'}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                        {selectedDate && selectedTime && (
                            <Box mt={4} textAlign="center">
                                <LoadingButton
                                    loading={loading}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                >
                                    Confirm {selectedDate.format('MMMM DD, YYYY')} at {selectedTime}{' '}
                                    {Number(selectedTime.split(':')[0]) < 12 ? 'AM' : 'PM'}
                                </LoadingButton>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Scheduler;