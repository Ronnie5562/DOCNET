import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function UserCard() {
    return (
        <Box
            sx={{
                width: { xs: '80%', lg: '30%', xl: '20%' },
                position: 'relative',
                overflow: { xs: 'auto', sm: 'initial' },
            }}
        >
            <Card
                orientation="horizontal"
                sx={{
                    width: '100%',
                    flexWrap: 'wrap',
                    [`& > *`]: {
                        '--stack-point': '500px',
                        minWidth:
                            'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                    },
                }}
            >
                <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <CardContent>
                    <Typography fontSize="xl" fontWeight="lg">
                        Alex Morrison
                    </Typography>
                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                        Senior Journalist
                    </Typography>
                    <Sheet
                        sx={{
                            bgcolor: 'background.level1',
                            borderRadius: 'sm',
                            p: 1.5,
                            my: 1.5,
                            display: 'flex',
                            gap: 2,
                            '& > div': { flex: 1 },
                        }}
                    >
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Experience
                            </Typography>
                            <Typography fontWeight="lg">34 yrs</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Patients
                            </Typography>
                            <Typography fontWeight="lg">980</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Rating
                            </Typography>
                            <Typography fontWeight="lg">8.9</Typography>
                        </div>
                    </Sheet>
                    <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                        <Button variant="outlined" color="neutral">
                            Chat
                        </Button>
                        <Button variant="solid" color="primary">
                            Book Appointment
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
