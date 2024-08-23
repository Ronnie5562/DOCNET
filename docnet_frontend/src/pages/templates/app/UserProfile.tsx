import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
// import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
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
// import EditRoundedIcon from '@mui/icons-material/EditRounded';

import DropZone from '../../../components/profile/DropZone';
import FileUpload from '../../../components/profile/FileUpload';
import CountrySelector from '../../../components/profile/CountrySelector';
import EditorToolbar from '../../../components/profile/EditorToolbar';

import useProfileService from '../../../services/ProfileServices';
// import useAxiosWithJwtInterceptor from "../../../helpers/jwtinterceptor";

import { UserAccountDataType } from "../../../@types/profile-service";
import { Grid } from "@mui/material";
import useUtilService from "../../../services/UtilityService";
// import { TimezoneType } from "../../../@types/utils-service";


const UserProfile = () => {
    const [accountDetails, setAccountDetails] = useState<UserAccountDataType | null>(null);
    const [profileDetails, setProfileDetails] = useState(null);
    const { getUserProfileDetails, getUserAccountDetails } = useProfileService();
    const { getCountries, getTimezones } = useUtilService();

    // const jwtAxios = useAxiosWithJwtInterceptor();

    const [countries, setCountries] = useState([]);
    const [timezones, setTimezones] = useState([]);

    if (countries && timezones) {
        console.log("Countries and timezones fetched");
    }

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await getCountries();
                setCountries(response);
            } catch (error) {
                console.error("Error fetching countries", error);
            }
        };

        const fetchTimezones = async () => {
            try {
                const response = await getTimezones();
                setTimezones(response);
            } catch (error) {
                console.error("Error fetching timezones", error);
            }
        };

        fetchCountries();
        fetchTimezones();
    }, []);

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


    const account_formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            role: "",
            phone_number: "",
            country: "",
            timezone: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Required"),
            last_name: Yup.string().required("Required"),
            email: Yup.string().required("Required"),
            role: Yup.string().required("Required"),
            country: Yup.string().required("Required"),
            // timezone: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            alert(values);
        },
        validateOnChange: true,
        // enableReinitialize: true,
    });

    useEffect(() => {
        if (accountDetails) {
            account_formik.setValues({
                first_name: accountDetails.first_name,
                last_name: accountDetails.last_name,
                role: accountDetails.role,
                email: accountDetails.email,
                phone_number: accountDetails.phone_number || '',
                country: accountDetails?.country || '',
                timezone: accountDetails?.timezone || '',
            });
        }
    }, [accountDetails, profileDetails]);

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
                <Card id="account" component="form" onSubmit={account_formik.handleSubmit}>
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md"> Account Information</Typography>
                        <Typography level="body-sm">
                            Customize how your account information will apper to your Doctors.
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack sx={{ my: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <Box sx={{ position: 'relative', textAlign: 'center' }}>
                                    <AspectRatio
                                        ratio="1"
                                        sx={{
                                            width: { xs: 120, md: 130 },
                                            height: { xs: 120, md: 130 },
                                            borderRadius: '100%',
                                            margin: '0 auto',
                                        }}
                                    >
                                        <img
                                            src="https://cdn.pixabay.com/photo/2015/03/28/16/29/business-696076_1280.jpg"
                                            srcSet="https://cdn.pixabay.com/photo/2015/03/28/16/29/business-696076_1280.jpg&dpr=2 2x"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    {/* <IconButton
                                        aria-label="upload new picture"
                                        size="sm"
                                        variant="outlined"
                                        color="neutral"
                                        sx={{
                                            bgcolor: 'background.body',
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            left: { xs: '50%', md: 100 },
                                            top: { xs: 180, md: 170 },
                                            transform: { xs: 'translateX(-50%)', md: 'none' },
                                            boxShadow: 'sm',
                                        }}
                                    >
                                        <EditRoundedIcon />
                                    </IconButton> */}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={9} sx={{ flexGrow: 1 }}>
                                <Stack spacing={2}>
                                    <Stack spacing={1}>
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                                            <FormControl sx={{ flexGrow: 1 }}>
                                                <FormLabel>First Name</FormLabel>
                                                <Input
                                                    size="sm"
                                                    name="first_name"
                                                    placeholder="First name"
                                                    onChange={account_formik.handleChange}
                                                    value={account_formik.values.first_name}
                                                    error={
                                                        !!account_formik.touched.first_name && !!account_formik.errors.first_name
                                                    }
                                                />
                                            </FormControl>
                                            <FormControl sx={{ flexGrow: 1 }}>
                                                <FormLabel>Last Name</FormLabel>
                                                <Input
                                                    size="sm"
                                                    name="last_name"
                                                    placeholder="Last name"
                                                    value={account_formik.values.last_name}
                                                    onChange={account_formik.handleChange}
                                                    error={
                                                        !!account_formik.touched.last_name && !!account_formik.errors.last_name
                                                    }
                                                />
                                            </FormControl>
                                        </Box>
                                    </Stack>
                                    <Stack direction="row" spacing={2}>
                                        <FormControl sx={{ flexGrow: 1 }}>
                                            <FormLabel>Role</FormLabel>
                                            <Input
                                                size="sm"
                                                onChange={account_formik.handleChange}
                                                value={account_formik.values.role}
                                                error={
                                                    !!account_formik.touched.role && !!account_formik.errors.role
                                                }
                                                readOnly
                                            />
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
                                                onChange={account_formik.handleChange}
                                                value={account_formik.values.email}
                                                error={
                                                    !!account_formik.touched.email && !!account_formik.errors.email
                                                }
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
                                                name="phone_number"
                                                startDecorator={<PhoneRoundedIcon />}
                                                placeholder="phone"
                                                sx={{ flexGrow: 1 }}
                                                onChange={account_formik.handleChange}
                                                value={account_formik.values.phone_number}
                                                error={
                                                    !!account_formik.touched.phone_number && !!account_formik.errors.phone_number
                                                }
                                            />
                                        </FormControl>
                                    </Stack>
                                    <Stack direction="row" spacing={2}>
                                        <FormControl sx={{ flexGrow: 1 }}>
                                            <CountrySelector />
                                        </FormControl>
                                    </Stack>
                                    <Stack direction="row" spacing={2}>
                                        <FormControl sx={{ flexGrow: 1 }}>
                                            <FormLabel>Timezone</FormLabel>
                                            <Select
                                                size="sm"
                                                startDecorator={<AccessTimeFilledRoundedIcon />}
                                                name="timezone"
                                                onChange={account_formik.handleChange}
                                                value={account_formik.values.timezone}
                                            >
                                                {/* {
                                                    timezones.map((timezone: TimezoneType) => (
                                                        <Option key={timezone.value} value={timezone.value}>
                                                            {timezone.label}
                                                            <Typography textColor="text.tertiary" ml={0.5}>
                                                            </Typography>
                                                        </Option>
                                                    ))
                                                } */}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>

                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>

                            <Button size="sm" variant="solid" type="submit">
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

export default UserProfile;