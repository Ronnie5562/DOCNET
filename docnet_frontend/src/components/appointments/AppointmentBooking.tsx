import Typography from '@mui/joy/Typography';
import { Avatar, Box, Breadcrumbs, Link } from "@mui/joy";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AppointmentDetailsForm from './AppointmentDetailsForm';
import Scheduler from './Scheduler';

const AppointmentBooking = () => {
    return (
        <>
            <Box sx={{ flex: 1, width: '100%' }}>
                <Box
                    sx={{
                        position: 'sticky',
                        // top: { sm: -100, md: -110 },
                        top: -50,
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
                                Book Appointment
                            </Typography>

                            {
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                    sx={{
                                        "--Avatar-size": "30px"
                                    }}
                                /> ||
                                <Avatar
                                    sx={{
                                        "--Avatar-size": "30px"
                                    }}
                                >
                                    PM
                                </Avatar>
                            }
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <AppointmentDetailsForm />
                    </Box>
                    <Box>
                        <Scheduler />
                    </Box>
                </Box>
            </Box>
        </>
    )
};


export default AppointmentBooking;