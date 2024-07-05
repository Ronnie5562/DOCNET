import Slider from 'react-slick';
import { Card, CardContent, Typography, CardHeader, Box, Avatar } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import './styles/carousel.css'


const userTestimonials = [
    {
        avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
        name: 'Remy Sharp',
        occupation: 'Senior Engineer',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
        name: 'Travis Howard',
        occupation: 'Lead Product Designer',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
        name: 'Cindy Baker',
        occupation: 'CTO',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
        name: 'Julia Stewart',
        occupation: 'Senior Engineer',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
        name: 'John Smith',
        occupation: 'Product Designer',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
        name: 'Daniel Wolf',
        occupation: 'CDO',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
];

const whiteLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];


const TestimonialsCarousel = () => {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

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


    const logoStyle = {
        width: '64px',
        // opacity: 0.3,
    };

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
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ color: 'text.primary' }}>
                        Testimonials
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        See what our customers love about our products. Discover how we excel in
                        efficiency, durability, and satisfaction. Join us for quality, innovation,
                        and reliable support.
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
                                    <img
                                        src={logos[index]}
                                        alt={`Logo ${index + 1}`}
                                        style={logoStyle}
                                    />
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
