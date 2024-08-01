import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Star from '@mui/icons-material/Star';
import TwoSidedLayout from '../layouts/TwoSidedLayout';
import WordRotate from "../../@/components/magicui/word-rotate";
import { PLATFORM_URL } from '../utils';

const Header = () => {
    return (
        <TwoSidedLayout>
            <Typography
                level="h1"
                fontWeight="xl"
                fontSize="large"
            >
                <WordRotate
                    className="font-bold"
                    words={["Integrated", "User Friendly", "Secured"]}
                />
                HealthCare Management Platform
            </Typography>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                Expert care, anytime, anywhere. <br /> Connect with top medical professionals from the comfort of your home with Docnet.
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
                <Button
                    endIcon={<ArrowForward fontSize="large" />}
                    component={"a"}
                    href={`${PLATFORM_URL}/register`}
                >
                    Register
                </Button>
            </Box>
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    columnGap: 4.5,
                    rowGap: 1,
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
                        4.4
                    </Typography>
                    <Typography textColor="text.secondary">
                        Our average Rating by <b>70k</b> users globally.
                    </Typography>
                </div>
                <div>
                    <Typography fontSize="large" fontWeight="lg">
                        125.7k+
                    </Typography>
                    <Typography textColor="text.secondary">
                        Active users from 64 countries and  3 continents.
                    </Typography>
                </div>
            </Box>
        </TwoSidedLayout>
    );
}

export default Header;