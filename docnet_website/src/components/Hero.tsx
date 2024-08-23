import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Header from './Header';
import { styled } from '@mui/material/styles';
import ScrollAnimation from 'react-animate-on-scroll';


const StyledBox = styled('div')(({ theme }) => ({
  position: 'relative',
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '1px solid',
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  outlineColor: 'hsla(220, 25%, 80%, 0.5)',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
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


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Header />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <ScrollAnimation animateIn='fadeIn' duration={3} animateOnce={true}>
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                gap: 1,
              }}
            >
              Telemedicine
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                Platform
              </Typography>
            </Typography>
          </ScrollAnimation>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
            >
            Explore our state-of-the-art platform, providing personalized healthcare solutions to meet your needs. Enhance your experience with advanced telemedicine features and exceptional services.
          </Typography>
        </Stack>
        <StyledBox id="video-container">
          <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={true}>
            <BackgroundVideo autoPlay muted loop>
              <source src="https://videos.pexels.com/video-files/8375656/8375656-uhd_2732_1440_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </BackgroundVideo>
          </ScrollAnimation>
        </StyledBox>
      </Container>
    </Box>
  );
}
