import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import DocnetIcon from './DocnetIcon';


function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link href="/">Docnet&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { xs: 'center', sm: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: { xs: '100%', sm: '20%', md: '30%' },
            mt: -1,
          }}
        >
          <Box sx={{ width: { xs: '100%' } }}>
            <DocnetIcon />

            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 1}}>
              Digital HealthCare for Everyone
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', }}>
              Revolutionizing Healthcare, Virtually. Experience seamless access to trusted healthcare workers and personalized care anytime, anywhere with our innovative telemedicine platform.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Product
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Features
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Testimonials
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Highlights
          </Link>
          {/* <Link color="text.secondary" variant="body2" href="#">
            Pricing
          </Link> */}
          <Link color="text.secondary" variant="body2" href="#">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Company
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            About us
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Careers
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Press
          </Link>
          <Link color="text.secondary" variant="body2" href="mailto:support@docnet.com">
            Support
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            // minWidth: { xs: '100%', sm: '30%' },
            // paddingLeft: { xs: 0, sm: "auto" },
          }}
        >
          <Box >
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600 }}>
              Join our newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <InputLabel htmlFor="email-newsletter" sx={visuallyHidden}>
                Email
              </InputLabel>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                }}
              />
              <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/docnet"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/@docnet"
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://x.com/docnet"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <Twitter />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
