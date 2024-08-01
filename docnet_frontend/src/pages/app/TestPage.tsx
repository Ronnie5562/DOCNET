import { StaticDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const TestPage = () => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker/>
        </LocalizationProvider>
    );
};

export default TestPage;
