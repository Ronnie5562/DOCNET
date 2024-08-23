import React from 'react';
import { useColorScheme } from '@mui/joy';
import { Box, Container } from '@mui/material';
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

interface AppointmentDetailsFormProps {
    appointmentBookingData: { reason: string; notes: string; };
    setAppointmentBookingData: (data: { reason: string; notes: string; }) => void;
}

const TextField = styled(
    MuiTextField,
    options,
)<TextFieldProps>(({ borderColor }) => ({
    '& label.Mui-focused': {
        color: borderColor,
    },
    [outlinedSelectors.join(',')]: {
        borderWidth: 3,
        borderColor,
    },
}));

const AppointmentDetailsForm: React.FC<AppointmentDetailsFormProps> = ({ appointmentBookingData, setAppointmentBookingData }) => {
    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppointmentBookingData({
            ...appointmentBookingData,
            reason: event.target.value
        });
    };

    const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAppointmentBookingData({
            ...appointmentBookingData,
            notes: event.target.value
        });
    };

    const { mode } = useColorScheme();

    return (
        <Container maxWidth="sm" sx={{ mt: -30 }}>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Box sx={{ width: '100%' }}>
                    <form>
                        <TextField
                            label="Reason"
                            value={appointmentBookingData.reason}
                            onChange={handleReasonChange}
                            fullWidth
                            margin="normal"
                            required
                            borderColor="#1976d2"
                            sx={{
                                input: { color: mode === 'dark' ? 'white' : 'black' },
                                '& label': {
                                    color: mode === 'dark' ? '#ccc' : 'black',
                                },
                            }}
                        />

                        <TextField
                            label="Notes"
                            value={appointmentBookingData.notes}
                            onChange={handleNotesChange}
                            fullWidth
                            margin="normal"
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
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default AppointmentDetailsForm;
