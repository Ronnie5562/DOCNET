import React, { useState, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import { Avatar, Box, Breadcrumbs, Link, Button, Container, Grid, Typography } from "@mui/joy";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Stepper, Step, StepLabel } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useColorScheme } from '@mui/joy/styles';

type TextFieldProps = {
    borderColor?: string;
};

const options = {
    shouldForwardProp: (prop: string) => prop !== 'borderColor',
};

const outlinedSelectors = [
    '& .MuiOutlinedInput-notchedOutline',
    '&:hover .MuiOutlinedInput-notchedOutline',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline',
];

const TextField = styled(
    MuiTextField,
    options,
)<TextFieldProps>(({ borderColor }) => ({
    '& label.Mui-focused': {
        color: borderColor,
    },
    [outlinedSelectors.join(',')]: {
        borderWidth: 3,
        borderColor: borderColor,
    },
    '&:hover': {
        borderColor: borderColor,
    },
}));

const AppointmentBooking: React.FC = () => {
    const theme = useTheme();
    const s_screen = useMediaQuery(theme.breakpoints.up('sm'));
    const xs_screen = useMediaQuery(theme.breakpoints.up('xs'));
    const md_screen = useMediaQuery(theme.breakpoints.up('md'));

    const [activeStep, setActiveStep] = useState(0);
    const [appointmentBookingData, setAppointmentBookingData] = useState({
        reason: '',
        notes: '',
    });
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const steps = ['Appointment Details', 'Schedule Date & Time'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        console.log('Reason:', appointmentBookingData.reason);
        console.log('Notes:', appointmentBookingData.notes);
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
    };

    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppointmentBookingData((prevData) => ({
            ...prevData,
            reason: event.target.value,
        }));
    };

    const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppointmentBookingData((prevData) => ({
            ...prevData,
            notes: event.target.value,
        }));
    };

    const { mode } = useColorScheme();

    const customTheme = createTheme({
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
            MuiPickersCalendarHeader: {
                styleOverrides: {
                    switchViewButton: {
                        color: mode === 'dark' ? '#ffffff' : '#000000',
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                    },
                    iconButton: {
                        color: '#1976d2',
                        '&:hover': {
                            backgroundColor: '#e3f2fd',
                        },
                    },
                },
            },
            MuiPickersArrowSwitcher: {
                styleOverrides: {
                    button: {
                        color: mode === 'dark' ? '#ffffff' : '#000000',
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
                        color: mode === 'dark' ? '#ffffff' : '#000000',
                    },
                },
            },
        },
    });

    console.log('render')

    const isSmallScreen = useMediaQuery(customTheme.breakpoints.down('sm'));

    const times = ['10:00', '11:00', '1:00', '2:30', '12:01'];

    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: -60,
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Breadcrumbs
                        size="sm"
                        aria-label="breadcrumbs"
                        separator={<ChevronRightRoundedIcon />}
                        sx={{ pl: 0 }}
                    >
                        <Link
                            underline="none"
                            color="neutral"
                            href="/"
                            aria-label="Home"
                        >
                            <HomeRoundedIcon />
                        </Link>
                        <Typography color="primary" fontWeight={500} fontSize={12}>
                            Appointments
                        </Typography>
                    </Breadcrumbs>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 3 }}>
                            Appointment
                        </Typography>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://cdn.pixabay.com/photo/2015/03/28/16/29/business-696076_1280.jpg"
                            sx={{ "--Avatar-size": "30px" }}
                        />
                    </Box>
                </Box>
            </Box>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>
                            <Typography>{label}</Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 0, alignSelf: 'center', ml: 'auto', overflowX: 'hidden' }}>
                {activeStep === 0 && (
                    <Container maxWidth="sm" sx={{ mt: -30 }}>
                        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                            <Box sx={{ width: '100%' }}>
                                {/* <form > */}
                                <TextField
                                    label="Reason"
                                    value={appointmentBookingData.reason}
                                    onChange={handleReasonChange}
                                    fullWidth
                                    // margin="normal"
                                    required
                                    borderColor="#1976d2"
                                    sx={{
                                        input: { color: mode === 'dark' ? 'white' : 'black' },
                                        '& label': {
                                            color: mode === 'dark' ? '#ccc' : 'black',
                                        },
                                    }}
                                />
                                <Box sx={{ my: 3 }} ></Box>
                                <TextField
                                    label="Notes"
                                    value={appointmentBookingData.notes}
                                    onChange={handleNotesChange}
                                    fullWidth
                                    // margin="normal"
                                    multiline
                                    rows={5}
                                    borderColor="#1976d2"
                                    sx={{
                                        textArea: { color: mode === 'dark' ? 'white' : 'black' },
                                        '& label': {
                                            color: mode === 'dark' ? '#ccc' : 'black',
                                        },
                                    }}
                                />
                                {/* </form> */}
                            </Box>
                        </Box>
                    </Container>
                )}
                {activeStep === 1 && (
                    <ThemeProvider theme={customTheme}>
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
                                                    <Grid xs={6} key={time}>
                                                        <Button
                                                            variant={selectedTime === time ? 'solid' : 'outlined'}
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
                                            <Button
                                                variant="solid"
                                                color="primary"
                                                onClick={() => console.log(selectedDate.format('MMMM DD, YYYY') + ' at ' + selectedTime)}
                                            >
                                                Confirm {selectedDate.format('MMMM DD, YYYY')} at {selectedTime}
                                            </Button>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                )}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: { lg: -20, xl: -20 },
                    mr: 2,
                }}
            >
                {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mr: 1 }}>
                        Back
                    </Button>
                )}
                {activeStep === steps.length - 1 ? (
                    <Button variant="solid" color="primary" onClick={handleSubmit}>
                        Finish
                    </Button>
                ) : (
                    <Button variant="solid" color="primary" onClick={handleNext}>
                        Next
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default AppointmentBooking;
