import Typography from '@mui/joy/Typography';
import { Avatar, Box, Breadcrumbs, Input, Link, Tab, TabList, Tabs } from "@mui/joy";
import UserCard from "../../../components/app/userCard";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import SpecialityCard from '../../../components/app/SpecialityCard';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
// import ScrollAnimation from 'react-animate-on-scroll';

const StyledBox = styled('div')(({ theme }) => ({
    position: 'relative',
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    borderRadius: '10px',
    outline: '1px solid',
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    outlineColor: 'hsla(220, 25%, 80%, 0.5)',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        height: 400,
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        outlineColor: 'hsla(210, 100%, 80%, 0.1)',
    }),
}));


const BackgroundVideo = styled('video')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
});


const HomeTemplate = () => {
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
                                Home
                            </Typography>
                        </Breadcrumbs>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                            <Typography level="h2" component="h1" sx={{ mt: 1, mb: 3 }}>
                                Doctors
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
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', px: 15, mt: -1, mb: -5 }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center',
                                borderRadius: 1,
                                bgcolor: 'background.paper',
                                boxShadow: 1,
                            }}
                        >
                            {
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                    sx={{
                                        "--Avatar-size": "55px"
                                    }}
                                /> ||
                                <Avatar
                                    sx={{
                                        "--Avatar-size": "55px"
                                    }}
                                >
                                    PM
                                </Avatar>
                            }
                            <Box>
                                <Typography level="h4" component="h4">
                                    Hello, Sophia!
                                </Typography>
                                <Typography component="p" sx={{ display: { xs: "none", md: "block" }, fontSize: '12px' }} >
                                    Welcome to our telehealth platform. How can we help you today?
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box></Box>
                </Box>
                <Box
                    id="hero"
                    sx={(theme) => ({
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                    })}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            pb: { xs: 8, sm: 12 },
                        }}
                    >
                        <StyledBox id="video-container">
                            {/* <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={true}> */}
                                <BackgroundVideo autoPlay muted loop>
                                    {/* <source src="https://videos.pexels.com/video-files/8375656/8375656-uhd_2732_1440_25fps.mp4" type="video/mp4" /> */}
                                    <source src="https://videos.pexels.com/video-files/5453565/5453565-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </BackgroundVideo>
                            {/* </ScrollAnimation> */}
                        </StyledBox>
                    </Container>
                </Box>
                <Box sx={{ gap: 3, p: 3, flexWrap: 'wrap', justifyContent: 'center', mt: -9 }}>
                    <Box sx={{ justifyContent: 'center' }}>
                        <SpecialityCard />
                    </Box>
                </Box>
                <Box sx={{
                    display: { xs: 'block', md: 'flex' },
                    p: 3,
                    justifyContent: { xs: 'center',  sm: 'space-around' },
                    alignItems: "center"

                }}>
                    <Box sx={{ mr: { xs: 0, lg: 40 } }}>
                        <Typography level="h2" component="h1">
                            Popular Specialist
                        </Typography>
                        <Typography component="p">
                            Here you can find popular specialist from different departments.
                        </Typography>
                    </Box>
                    <Box sx={{ mr: 2 }}>
                        {/* <Link
                            component="a"
                            endDecorator={<ChevronDownCircleIcon />}
                        >
                            View More
                        </Link> */}

                        <Input
                            placeholder="Search"
                            startDecorator={
                                <SearchRoundedIcon
                                    sx={{ color: 'text.disabled', fontSize: 16 }}
                                />
                            }
                            sx={{ width: { xs: 250, md: 300 } }}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </Box>
            </Box>

        </>
    )
}

export default HomeTemplate;