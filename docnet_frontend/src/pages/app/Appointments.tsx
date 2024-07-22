import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from '../templates/app/SideBar';
import Header from '../templates/app/Header';
import AppointmentBooking from '@/components/appointments/AppointmentBooking';
import { Experimental_CssVarsProvider as MaterialCssVarsProvider } from '@mui/material/styles';
import { extendTheme as extendJoyTheme, THEME_ID } from '@mui/joy/styles';
const joyTheme = extendJoyTheme();
import { useColorScheme } from '@mui/joy/styles';


const Appointments = () => {
    return (
        <MaterialCssVarsProvider>
            <CssVarsProvider theme={{ [THEME_ID]: joyTheme }}>
                <CssBaseline enableColorScheme />
                <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                    <Sidebar />
                    <Header />
                    <Box
                        component="main"
                        className="MainContent"
                        sx={{
                            pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
                            pb: { xs: 2, sm: 2, md: 3 },
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: 0,
                            height: '100dvh',
                            gap: 1,
                            overflow: 'auto',
                        }}
                    >
                        <AppointmentBooking />
                    </Box>
                </Box>
            </CssVarsProvider>
        </MaterialCssVarsProvider>
    )
}

export default Appointments;