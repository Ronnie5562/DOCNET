import { useFormik } from "formik";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import AuthPage from '../templates/auth/AuthPage';
import GoogleIcon from '../../components/auth/GoogleIcon';
import { useNavigate } from "react-router-dom";
import FormHelperText from '@mui/joy/FormHelperText';
import { InfoOutlined } from '@mui/icons-material';
import { useAuthServiceContext } from '../../context/AuthContext';


const Register = () => {
    const { register } = useAuthServiceContext();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        },
        validate: (values) => {
            const errors: Partial<typeof values> = {};
            if (!values.firstname) {
                errors.password = "Required";
            }
            if (!values.lastname) {
                errors.password = "Required";
            }
            if (!values.email) {
                errors.email = "Required";
            }
            if (!values.password) {
                errors.password = "Required";
            }
            return errors;
        },
        onSubmit: async (values) => {
            const { firstname, lastname, email, password } = values;
            const { response, status } = await register(firstname, lastname, email, password);
            if (status === 409) {
                formik.setErrors({
                    email: "Email already exists",
                });
            } else if (status === 400) {
                console.log("Bad Input");
                formik.setErrors({
                    email: response?.data?.email?.[0],
                    password: response?.data?.password?.[0],
                    firstname: response?.data?.first_name?.[0],
                    lastname: response?.data?.last_name?.[0],
                });
            } else {
                navigate("/confirm-account");
            }
        },
    });
    return (
        <AuthPage>
            <Stack gap={4} sx={{ mb: 2 }}>
                <Stack gap={1}>
                    <Typography component="h1" level="h3">
                        Register
                    </Typography>
                    <Typography level="body-sm">
                        Have an account?{' '}
                        <Link href="/login" level="title-sm">
                            Log In!
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
            <Divider
                sx={(theme) => ({
                    [theme.getColorSchemeSelector('light')]: {
                        color: { xs: '#FFF', md: 'text.tertiary' },
                    },
                })}
            >
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                    <FormControl required error>
                        <FormLabel>FistName</FormLabel>
                        <Input
                            autoFocus
                            fullWidth
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            error={!!formik.touched.firstname && !!formik.errors.firstname}
                        />
                        {
                            (formik.touched.firstname && formik.errors.firstname) &&
                            <FormHelperText>
                                <InfoOutlined />
                                {formik.errors.firstname}
                            </FormHelperText>
                        }
                    </FormControl>
                    <FormControl required error>
                        <FormLabel>LastName</FormLabel>
                        <Input
                            autoFocus
                            fullWidth
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            error={!!formik.touched.lastname && !!formik.errors.lastname}
                        />
                        {
                            (formik.touched.lastname && formik.errors.lastname) &&
                            <FormHelperText>
                                <InfoOutlined />
                                {formik.errors.lastname}
                            </FormHelperText>
                        }
                    </FormControl>
                    <FormControl required error>
                        <FormLabel>Email</FormLabel>
                        <Input
                            autoFocus
                            fullWidth
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={!!formik.touched.email && !!formik.errors.email}
                        />
                        {
                            (formik.touched.email && formik.errors.email) &&
                            <FormHelperText>
                                <InfoOutlined />
                                {formik.errors.email}
                            </FormHelperText>
                        }
                    </FormControl>
                    <FormControl required error>
                        <FormLabel>Password</FormLabel>
                        <Input
                            fullWidth
                            id="password"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={!!formik.touched.password && !!formik.errors.password}
                        />
                        {
                            (formik.touched.password && formik.errors.password) &&
                            <FormHelperText>
                                <InfoOutlined />
                                {formik.errors.password}
                            </FormHelperText>
                        }
                    </FormControl>

                    <Stack gap={4} sx={{ mt: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Checkbox size="sm" label="Remember me" name="persistent" />
                            <Link level="title-sm" href="#replace-with-a-link">
                                Forgot your password?
                            </Link>
                        </Box>
                        <Button type="submit" fullWidth sx={{ mt: 1, mb: 2 }}>
                            Sign Up
                        </Button>
                    </Stack>
                </Box>
            </Stack>
            <Divider
                sx={(theme) => ({
                    [theme.getColorSchemeSelector('light')]: {
                        color: { xs: '#FFF', md: 'text.tertiary' },
                    },
                })}
            >
                or
            </Divider>
            <Stack gap={4} sx={{ mb: 2 }}>

                <Button
                    variant="soft"
                    color="neutral"
                    fullWidth
                    startDecorator={<GoogleIcon />}
                >
                    Continue with Google
                </Button>
            </Stack>
        </AuthPage>
    );
}

export default Register;