import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Button, Grid, Typography, Paper, Box, Container, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useColorScheme } from '@mui/joy/styles';
import dayjs, { Dayjs } from 'dayjs';


const Scheduler: React.FC = () => {
    const { mode } = useColorScheme();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#dc004e',
            },
            background: {
                paper: '#ffffff',
            },
        },
        components: {
            MuiPickerStaticWrapper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#f5f5f5',
                        borderRadius: '8px',
                        boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
                    },
                },
            },
            MuiPickersDay: {
                styleOverrides: {
                    root: {
                        color: '#1976d2',
                    },
                    dayOutsideMonth: {
                        color: '#b0b0b0',
                    },
                },
            },
            // MuiPickersToolbar: {
            //     styleOverrides: {
            //         root: {
            //             backgroundColor: '#64b5f6', // Custom light primary color
            //         },
            //     },
            // },
            MuiPickersCalendarHeader: {
                styleOverrides: {
                    switchViewButton: {
                        backgroundColor: '',
                        color: mode === 'dark' ? '#ffffff' : '#00000',
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                    },
                    iconButton: {
                        color: '#1976d2',
                        '&:hover': {
                            backgroundColor: '#e3f2fd',
                        },
                    }
                },
            },
            MuiPickersArrowSwitcher: {
                styleOverrides: {
                    button: {
                        color: mode === 'dark' ? '#ffffff' : '#00000',
                        fontSize: '1.8rem',
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                    },
                },
            },
            MuiDayCalendar: {
                styleOverrides: {
                    weekDayLabel: {
                        color: mode === 'dark' ? '#ffffff' : '#00000',
                    },
                }
            },
        },
    });


    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const times = ['10:00', '11:00', '1:00', '2:30', '12:01'];

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedDate(date);
        // console.log(selectedDate)
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
        <ThemeProvider theme={theme}>

            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                    <Box sx={{ width: '100%', maxWidth: { xs: 600, lg: 1200 } }}>
                        <Typography variant="h6" gutterBottom>
                            Select a Date & Time
                        </Typography>
                        <Box sx={{ display: { xs: 'block', lg: 'flex' } }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker
                                    // orientation={ xs:"landscape", lg:"portrait" }
                                    value={selectedDate}
                                    onChange={handleDateChange}

                                    sx={{
                                        backgroundColor: mode === 'dark' ? 'black' : 'white',
                                    }}
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
                                                {time} {Number(time.split(':')[0]) < 12 ? 'AM' : 'PM'}
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
                    </Box>
                </Box>
            </Container>

        </ThemeProvider >
    );
};

export default Scheduler;
