import { Box } from "@mui/material";
import Scheduler, { AppointmentForm } from "@/components/appointment/Scheduler";
import CustomStepper from "@/components/appointment/Stepper";

const Appointment = () => {
    return (
        <Box>
            <CustomStepper />
            <Scheduler />
            <AppointmentForm />
        </Box>
    );
};

export default Appointment;
