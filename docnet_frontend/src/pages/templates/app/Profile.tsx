import React, { useEffect, useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import DropZone from '../../../components/profile/DropZone';
import FileUpload from '../../../components/profile/FileUpload';
import CountrySelector from '../../../components/profile/CountrySelector';
import EditorToolbar from '../../../components/profile/EditorToolbar';

import useProfileService from '../../../services/ProfileServices';
import useAxiosWithJwtInterceptor from "../../../helpers/jwtinterceptor";

import { UserAccountDataType } from "../../../@types/profile.service";


const Profile = () => {
    const [accountDetails, setAccountDetails] = useState<UserAccountDataType | null>(null);
    const [profileDetails, setProfileDetails] = useState(null);
    const { getUserProfileDetails, getUserAccountDetails } = useProfileService();
    const jwtAxios = useAxiosWithJwtInterceptor();

    useEffect(() => {
        const fetchAccountDetails = async () => {
            try {
                const response = await getUserAccountDetails();
                setAccountDetails(response);
            } catch (error) {
                console.error("Error fetching account details", error);
            }
        };

        const fetchProfileDetails = async () => {
            try {
                const response = await getUserProfileDetails();
                setProfileDetails(response);
            } catch (error) {
                console.error("Error fetching profile details", error);
            }
        };

        fetchAccountDetails();
        fetchProfileDetails();
    }, []);

    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
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
                            Profile
                        </Typography>
                    </Breadcrumbs>
                    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                        Profile {accountDetails?.email}
                    </Typography>

                </Box>
                <Tabs
                    defaultValue={0}
                    sx={{ bgcolor: 'transparent' }}
                >
                    <TabList
                        tabFlex={1}
                        size="sm"
                        sx={{
                            pl: { xs: 0, md: 4 },
                            justifyContent: 'left',
                            [`&& .${tabClasses.root}`]: {
                                fontWeight: '600',
                                flex: 'initial',
                                color: 'text.tertiary',
                                [`&.${tabClasses.selected}`]: {
                                    bgcolor: 'transparent',
                                    color: 'text.primary',
                                    '&::after': {
                                        height: '2px',
                                        bgcolor: 'primary.500',
                                    },
                                },
                            },
                        }}
                    >
                        <Tab
                            component={"a"}
                            sx={{ borderRadius: '6px 6px 0 0' }}
                            indicatorInset
                            value={0}
                            href="#account"
                        >
                            Account
                        </Tab>
                        <Tab
                            component={"a"}
                            sx={{ borderRadius: '6px 6px 0 0' }}
                            indicatorInset
                            value={1}
                            href="#profile"
                        >
                            Profile
                        </Tab>
                        <Tab
                            component={"a"}
                            sx={{ borderRadius: '6px 6px 0 0' }}
                            indicatorInset
                            value={2}
                            href="#profile"
                        >
                            Documents
                        </Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    maxWidth: '800px',
                    mx: 'auto',
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                }}
            >
                <Card id="account">
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md"> Account Information</Typography>
                        <Typography level="body-sm">
                            Customize how your profile information will apper to the networks.
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                    >
                        <Stack direction="column" spacing={1}>
                            <AspectRatio
                                ratio="1"
                                maxHeight={200}
                                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                            <IconButton
                                aria-label="upload new picture"
                                size="sm"
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    bgcolor: 'background.body',
                                    position: 'absolute',
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    left: 100,
                                    top: 170,
                                    boxShadow: 'sm',
                                }}
                            >
                                <EditRoundedIcon />
                            </IconButton>
                        </Stack>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                >
                                    <Input size="sm" placeholder="First name" />
                                </FormControl>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                >
                                    <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
                                </FormControl>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input size="sm" defaultValue="Patient" readOnly />
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="email"
                                        defaultValue="siriwatk@test.com"
                                        sx={{ flexGrow: 1 }}
                                        readOnly
                                    />
                                </FormControl>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input
                                        size="sm"
                                        type="phone"
                                        startDecorator={<PhoneRoundedIcon />}
                                        placeholder="phone"
                                        defaultValue="+250792525545"
                                        sx={{ flexGrow: 1 }}
                                    />
                                </FormControl>
                            </Stack>
                            <div>
                                <CountrySelector />
                            </div>
                            <div>
                                <FormControl sx={{ display: { sm: 'contents' } }}>
                                    <FormLabel>Timezone</FormLabel>
                                    <Select
                                        size="sm"
                                        startDecorator={<AccessTimeFilledRoundedIcon />}
                                        defaultValue="1"
                                    >
                                        <Option value="1">
                                            Indochina Time (Bangkok){' '}
                                            <Typography textColor="text.tertiary" ml={0.5}>
                                                — GMT+07:00
                                            </Typography>
                                        </Option>
                                        <Option value="2">
                                            Indochina Time (Ho Chi Minh City){' '}
                                            <Typography textColor="text.tertiary" ml={0.5}>
                                                — GMT+07:00
                                            </Typography>
                                        </Option>
                                    </Select>
                                </FormControl>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
                    >
                        <Stack direction="row" spacing={2}>
                            <Stack direction="column" spacing={1}>
                                <AspectRatio
                                    ratio="1"
                                    maxHeight={108}
                                    sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                                <IconButton
                                    aria-label="upload new picture"
                                    size="sm"
                                    variant="outlined"
                                    color="neutral"
                                    sx={{
                                        bgcolor: 'background.body',
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        left: 85,
                                        top: 180,
                                        boxShadow: 'sm',
                                    }}
                                >
                                    <EditRoundedIcon />
                                </IconButton>
                            </Stack>
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    sx={{
                                        display: {
                                            sm: 'flex-column',
                                            md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}
                                >
                                    <Input size="sm" placeholder="First name" />
                                </FormControl>
                                <FormControl
                                    sx={{
                                        display: {
                                            sm: 'flex-column',
                                            md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}
                                >
                                    <Input size="sm" placeholder="Last name" />
                                </FormControl>
                            </Stack>
                        </Stack>
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Input size="sm" defaultValue="Patient" readOnly />
                        </FormControl>
                        <FormControl sx={{ flexGrow: 1 }}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                size="sm"
                                type="email"
                                startDecorator={<EmailRoundedIcon />}
                                placeholder="email"
                                defaultValue="siriwatk@test.com"
                                sx={{ flexGrow: 1 }}
                                readOnly
                            />
                        </FormControl>
                        <Stack direction="row" spacing={2}>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Phone Number</FormLabel>
                                <Input
                                    size="sm"
                                    type="phone"
                                    startDecorator={<PhoneRoundedIcon />}
                                    placeholder="phone"
                                    defaultValue="+250792525545"
                                    sx={{ flexGrow: 1 }}
                                />
                            </FormControl>
                        </Stack>
                        <div>
                            <CountrySelector />
                        </div>
                        <div>
                            <FormControl sx={{ display: { sm: 'contents' } }}>
                                <FormLabel>Timezone</FormLabel>
                                <Select
                                    size="sm"
                                    startDecorator={<AccessTimeFilledRoundedIcon />}
                                    defaultValue="1"
                                >
                                    <Option value="1">
                                        Indochina Time (Bangkok){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                        </Typography>
                                    </Option>
                                    <Option value="2">
                                        Indochina Time (Ho Chi Minh City){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                        </Typography>
                                    </Option>
                                </Select>
                            </FormControl>
                        </div>
                    </Stack>
                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>
                            <Button size="sm" variant="solid">
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>
                <Card id="profile">
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Profile Information</Typography>
                        <Typography level="body-sm">
                            Write a short introduction to be displayed on your profile
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={2} sx={{ my: 1 }}>
                        <EditorToolbar />
                        <Textarea
                            size="sm"
                            minRows={4}
                            sx={{ mt: 1.5 }}
                            defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
                        />
                        <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
                            275 characters left
                        </FormHelperText>
                    </Stack>
                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>
                            <Button size="sm" variant="solid">
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>
                <Card id="profile">
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Profile Documents</Typography>
                        <Typography level="body-sm">
                            Add important health documents for easy doctor access
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack spacing={2} sx={{ my: 1 }}>
                        <DropZone />
                        <FileUpload
                            icon={<InsertDriveFileRoundedIcon />}
                            fileName="Tech design requirements.pdf"
                            fileSize="200 kB"
                            progress={100}
                        />
                        <FileUpload
                            icon={<VideocamRoundedIcon />}
                            fileName="Dashboard prototype recording.mp4"
                            fileSize="16 MB"
                            progress={40}
                        />
                    </Stack>
                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>
                            <Button size="sm" variant="solid">
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>
            </Stack>
        </Box>
    );
}

export default Profile;
