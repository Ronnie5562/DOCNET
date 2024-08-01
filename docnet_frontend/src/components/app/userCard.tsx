import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Skeleton } from '@mui/joy';
import { DoctorCardDetailsProps } from '../../@types/home-service.d';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
    appointmentPage: boolean;
    doctor: DoctorCardDetailsProps | null;
    id: string;
}

const DoctorCardSkeleton = () => {
    return (
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
                <Skeleton variant="rectangular" width={182} height={182} />
            </AspectRatio>
            <CardContent>
                <Typography fontSize="xl" fontWeight="lg">
                    <Skeleton variant="text" width="60%" />
                </Typography>
                <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                    <Skeleton variant="text" width="40%" />
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
                            <Skeleton variant="text" width="80%" />
                        </Typography>
                        <Typography fontWeight="lg">
                            <Skeleton variant="text" width="50%" />
                        </Typography>
                    </div>
                    <div>
                        <Typography level="body-xs" fontWeight="lg">
                            <Skeleton variant="text" width="80%" />
                        </Typography>
                        <Typography fontWeight="lg">
                            <Skeleton variant="text" width="50%" />
                        </Typography>
                    </div>
                    <div>
                        <Typography level="body-xs" fontWeight="lg">
                            <Skeleton variant="text" width="80%" />
                        </Typography>
                        <Typography fontWeight="lg">
                            <Skeleton variant="text" width="50%" />
                        </Typography>
                    </div>
                </Sheet>
                <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1, mt: 2 } }}>
                    <Skeleton variant="rectangular" width="50%" height={36} />
                    <Skeleton variant="rectangular" width="50%" height={36} />
                </Box>
            </CardContent>
        </Card>
    );
};


const UserCard: React.FC<UserCardProps> = ({ doctor, appointmentPage, id }) => {
    const navigate = useNavigate()
    const generateUniqueImageUrl = () => {
        return `https://thispersondoesnotexist.com?${id}`;
    };


    return (
        <Box
            sx={{
                width: appointmentPage == true ? { xs: '80%', lg: '50%', xl: '60%' } : {
                    xs: '80%', lg: '30%', xl: '20%'
                },
                position: 'relative',
                overflow: { xs: 'auto', sm: 'initial' },
            }}
        >
            {
                doctor
                    ?
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
                                src={generateUniqueImageUrl()}
                                // src="https://cdn.pixabay.com/photo/2015/03/28/16/29/business-696076_1280.jpg"
                                // srcSet="https://cdn.pixabay.com/photo/2015/03/28/16/29/business-696076_1280.jpg&dpr=2 2x"
                                loading="lazy"
                                alt="Image"
                            />
                        </AspectRatio>
                        <CardContent>
                            <Typography fontSize="xl" fontWeight="lg">
                                {doctor.user.first_name} {doctor.user.last_name}
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                {doctor.speciality}
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
                                    <Typography fontWeight="lg">
                                        {doctor.years_of_experience || " - "} yrs
                                    </Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" fontWeight="lg">
                                        Patients
                                    </Typography>
                                    <Typography fontWeight="lg">{doctor.num_of_patients}</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" fontWeight="lg">
                                        Rating
                                    </Typography>
                                    <Typography fontWeight="lg">
                                        {doctor.rating || " - "}
                                    </Typography>
                                </div>
                            </Sheet>
                            <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                                <Button variant="outlined" color="neutral">
                                    Chat
                                </Button>
                                {
                                    appointmentPage
                                        ?
                                        <Button variant="solid" color="primary">
                                            View Profile
                                        </Button>
                                        :
                                        <Button
                                            variant="solid"
                                            color="primary"
                                            onClick={() => navigate(`/appointments?doctor=${doctor.id}`)}
                                        >
                                            Book Appointment
                                        </Button>
                                }
                            </Box>
                        </CardContent>
                    </Card>
                    :
                    <DoctorCardSkeleton />
            }
        </Box>
    );
}


export { DoctorCardSkeleton };
export default UserCard;
