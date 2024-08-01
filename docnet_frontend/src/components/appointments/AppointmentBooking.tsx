import React, { useState, useEffect } from 'react';
// import { useMediaQuery } from '@mui/material';
import { Box } from "@mui/joy";
import AppointmentDetailsForm from './AppointmentDetailsForm';
import Scheduler from './Scheduler';
import Typography from '@mui/joy/Typography';
import dayjs, { Dayjs } from 'dayjs';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
// import { useTheme } from '@mui/material';
import UserCard from '../app/userCard';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import useAppointmentService from '@/services/AppointmentServices';


interface AppointmentBookingProps {
  doctor_id: string;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ doctor_id }) => {
    const { getDoctorData } = useAppointmentService();
    const [doctorData, setDoctorData] = useState<any>(null);

    useEffect(() => {
        getDoctorData(doctor_id).then((data) => {
            setDoctorData(data);
        })
    }, [doctor_id]);


    // const theme = useTheme();
    // const s_screen = useMediaQuery(theme.breakpoints.up('sm'));
    // const xs_screen = useMediaQuery(theme.breakpoints.up('xs'));
    // const md_screen = useMediaQuery(theme.breakpoints.up('md'));

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


    return (
        <>
            <Box sx={{ flex: 1, width: '100%' }}>

                <Box sx={{ mt: 0, mb: 7, display: 'flex', justifyContent: 'center' }}>
                    <UserCard
                        appointmentPage={true}
                        doctor={doctorData}
                        id={doctor_id}
                    />
                </Box>

                {/* <Stepper activeStep={activeStep} alternativeLabel> */}
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            {/* <StepLabel>{label}</StepLabel> */}
                            <StepLabel>
                                <Typography>
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box sx={{ mt: 0, alignSelf: 'center', ml: 'auto', overflowX: 'hidden' }}>
                    {activeStep === 0 && (
                        <AppointmentDetailsForm
                            appointmentBookingData={appointmentBookingData}
                            setAppointmentBookingData={setAppointmentBookingData}
                        />
                    )}
                    {activeStep === 1 && (
                        <Scheduler
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            selectedTime={selectedTime}
                            setSelectedTime={setSelectedTime}
                            reason={appointmentBookingData.reason}
                            notes={appointmentBookingData.notes}
                            doctor_id={doctor_id}
                        />
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
                        <Button
                            variant="contained" color="primary" onClick={handleBack}
                            startIcon={<ChevronLeft />}
                        >
                            Back
                        </Button>
                    )}
                    {activeStep === steps.length - 1 ? (
                        // <Button variant="contained" color="primary" onClick={handleSubmit}>
                        //     Finish
                        // </Button>
                        <></>
                    ) : (
                        <Button
                            variant="contained" color="primary" onClick={handleNext}
                            endIcon={<ChevronRight />}
                        >
                            Next
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default AppointmentBooking;
