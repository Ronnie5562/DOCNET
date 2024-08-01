import Slider from 'react-slick';
import { Card, CardContent, Typography, CardHeader, Box, Avatar } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/system';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import './styles/carousel.css'


const userTestimonials = [
    {
        avatar: <Avatar alt="Dr. Emily Carter" src="/static/images/avatar/1.jpg" />,
        name: 'Dr. Emily Carter',
        occupation: 'General Practitioner',
        testimonial:
            "This telemedicine app has revolutionized my practice. The ease of scheduling and conducting virtual consultations has improved patient care and efficiency. I can now provide timely medical advice and follow-ups without the constraints of physical appointments.",
    },
    {
        avatar: <Avatar alt="Michael Thompson" src="/static/images/avatar/2.jpg" />,
        name: 'Michael Thompson',
        occupation: 'Patient',
        testimonial:
            "Using this telemedicine app has been a game-changer for me. As a busy professional, I appreciate the convenience of scheduling appointments and speaking with my doctor from the comfort of my home. It has made managing my health so much easier",
    },
    {
        avatar: <Avatar alt="Sarah Johnson" src="/static/images/avatar/3.jpg" />,
        name: 'Sarah Johnson',
        occupation: 'Patient',
        testimonial:
            "I absolutely love the convenience this telemedicine app offers. I no longer have to take time off work to visit my doctor. The app's user-friendly interface and reliable video calls have made accessing medical care seamless and efficient.",
    },
    {
        avatar: <Avatar alt="Dr. James Wilson" src="/static/images/avatar/4.jpg" />,
        name: 'Dr. James Wilson',
        occupation: 'Dermatologist',
        testimonial:
            "The telemedicine app has been a valuable addition to my practice. It allows me to reach patients in remote areas who otherwise wouldn't have access to specialized dermatological care. The app's features make consultations smooth and effective.",
    },
    {
        avatar: <Avatar alt="Emily Davis" src="/static/images/avatar/5.jpg" />,
        name: 'Emily Davis',
        occupation: 'Patient',
        testimonial:
            "This app has made a significant difference in my healthcare routine. I can easily book appointments and get medical advice without leaving my house. The virtual consultations have been incredibly helpful, especially during times when visiting a clinic is not feasible.",
    },
    {
        avatar: <Avatar alt="John Martinez" src="/static/images/avatar/6.jpg" />,
        name: 'John Martinez',
        occupation: 'Patient',
        testimonial:
            "As someone with a chronic condition, this telemedicine app has been a lifeline. Regular check-ins with my doctor are now hassle-free, and I can manage my health better with the timely support and guidance provided through the app.",
    },
];


// const whiteLogos = [
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
// ];

// const darkLogos = [
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
//     'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
// ];


const TestimonialsCarousel = () => {
    // const theme = useTheme();
    // const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

    const CustomSlider = styled(Slider)(({ theme }) => ({
        '.slick-dots li button:before': {
            color: theme.palette.text.primary,
        },
        '.slick-dots li.slick-active button:before': {
            color: theme.palette.primary.main,
        },
        '.slick-prev:before, .slick-next:before': {
            color: theme.palette.text.primary,
        },
    }));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        autoplay: true,
        centerMode: true,
        className: 'cursor-pointer',
    };


    // const logoStyle = {
    //     width: '64px',
    //     opacity: 0.3,
    // };

    return (
        <>
            <Container
                id="testimonials"
                sx={{
                    pt: { xs: 4, sm: 12 },
                    // pb: { xs: 8, sm: 16 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: 'center',
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ color: 'text.primary' }}>
                        Testimonials
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        See what our customers love about docnet. Discover how we excel in
                        efficiency, durability, and satisfaction. Join us for a seamless experince in managing your health
                    </Typography>
                </Box>
            </Container>
            <Container
                id="testimonials"
                sx={{
                    pt: { xs: 3, sm: 6 },
                    pb: { xs: 8, sm: 16 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <CustomSlider {...settings}>
                    {userTestimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{alignItems: 'center', flexGrow: 1}}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    p: 1,
                                }}
                            >
                                <CardContent>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                                        {testimonial.testimonial}
                                    </Typography>
                                </CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        pr: 2,
                                    }}
                                >
                                    <CardHeader
                                        avatar={testimonial.avatar}
                                        title={testimonial.name}
                                        subheader={testimonial.occupation}
                                        sx={{ flexShrink: 0 }}
                                    />
                                    {/* <img
                                        src={logos[index]}
                                        alt={`Logo ${index + 1}`}
                                        style={logoStyle}
                                    /> */}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </CustomSlider>
            </Container>
        </>
    );
};

export default TestimonialsCarousel;
