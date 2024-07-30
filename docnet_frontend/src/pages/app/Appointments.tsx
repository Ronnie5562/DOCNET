import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sidebar from '../templates/app/SideBar';
import Header from '../templates/app/Header';
import AppointmentBooking from '@/components/appointments/AppointmentBooking';
import { Experimental_CssVarsProvider as MaterialCssVarsProvider } from '@mui/material/styles';
import { extendTheme as extendJoyTheme, THEME_ID } from '@mui/joy/styles';
import AppointmentList from '@/components/appointments/AppointmentList';
import { Avatar, Box, Breadcrumbs, Link } from "@mui/joy";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Typography from '@mui/joy/Typography';
import { useLocation } from 'react-router-dom';
const joyTheme = extendJoyTheme();


const Appointments = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const doctor_id = searchParams.get('doctor');

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
                            px: { xs: 2, md: 6 },
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
                        <Box
                            sx={{
                                flex: 1,
                                width: '100%',
                                position: 'sticky',
                                top: -60,
                                bgcolor: 'background.body',
                                zIndex: 9995,
                            }}
                        >
                            <Box>
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
                        {
                            doctor_id
                                ?
                                <AppointmentBooking
                                    doctor_id={doctor_id}
                                />
                                :
                                <AppointmentList />
                        }
                    </Box>
                </Box>
            </CssVarsProvider>
        </MaterialCssVarsProvider>
    )
}

export default Appointments;