import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Star from '@mui/icons-material/Star';
import TwoSidedLayout from '../layouts/TwoSidedLayout';

const Header = () => {
    return (
        <TwoSidedLayout>
            <Typography
                level="h1"
                fontWeight="xl"
                fontSize="large"
            >
                A large head about our product features & services
            </Typography>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                A descriptive secondary text placeholder. Use it to explain your business
                offer better.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    my: 2,
                    '& > *': { flex: 'auto' },
                }}
            >
                <Button variant="outlined" color="secondary">
                    Learn More
                </Button>
                <Button endIcon={<ArrowForward fontSize="large" />}>
                    Get Started
                </Button>
            </Box>
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    columnGap: 4.5,
                    rowGap: 1.5,
                    textAlign: 'center',
                    alignSelf: 'stretch',
                    '& > *': {
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        alignItems: 'center',
                    },
                    [theme.breakpoints.up(834)]: {
                        textAlign: 'left',
                        '& > *': {
                            alignItems: 'initial',
                        },
                    },
                })}
            >
                <div>
                    <Typography
                        fontSize="large"
                        fontWeight="lg"
                        endDecorator={<Star fontSize="large" sx={{ color: 'warning.300' }} />}
                    >
                        4.9
                    </Typography>
                    <Typography textColor="text.secondary">
                        Rated by <b>5k</b> people on trustpilot.com
                    </Typography>
                </div>
                <div>
                    <Typography fontSize="xl4" fontWeight="lg">
                        9.5k+
                    </Typography>
                    <Typography textColor="text.secondary">
                        Active users from the top world companies.
                    </Typography>
                </div>
            </Box>
        </TwoSidedLayout>
    );
}

export default Header;