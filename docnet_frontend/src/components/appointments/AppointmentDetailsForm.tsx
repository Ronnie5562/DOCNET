import React, { useState } from 'react';
import { useColorScheme } from '@mui/joy';
import { Button, Grid, Typography, Paper, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

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



const AppointmentDetailsForm = () => {
    const [appointmentBookingData, setAppointmentBookingData] = useState({
        reason: '',
        notes: '',
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
        console.log('Notes:', appointmentBookingData.notes);
    };
    const { mode } = useColorScheme();

    const TextField = styled(
        MuiTextField,
        options,
    )<TextFieldProps>(({ borderColor }) => ({
        '& label': {
            color: mode === 'dark' ? '#ccc' : 'black',
        },
        '& label.Mui-focused': {
            color: borderColor,
        },
        [outlinedSelectors.join(',')]: {
            borderWidth: 3,
            borderColor,
        },
    }));

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Box sx={{ width: '100%' }}>
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
                            borderColor="#1976d2"
                        />
                        <TextField
                            label="Notes"
                            value={appointmentBookingData.notes}
                            onChange={handleNotesChange}
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            borderColor="#1976d2"
                        />
                        <Box mt={2}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};


export default AppointmentDetailsForm;