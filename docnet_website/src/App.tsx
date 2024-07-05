import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero.tsx';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
// import Pricing from './components/Pricing';
import Features from './components/Features';
// import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import createMuiTheme from './theme/theme.tsx';
import ScrollAnimation from 'react-animate-on-scroll';
import TestimonialsCarousel from './components/TestimonialsCarousel.tsx';



const App = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = createTheme(createMuiTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <LogoCollection />
        </ScrollAnimation>
        <Features />
        <Divider />
        {/* <Testimonials /> */}
        <TestimonialsCarousel />
        <Divider />
        <Highlights />
        <Divider />
        {/* <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;