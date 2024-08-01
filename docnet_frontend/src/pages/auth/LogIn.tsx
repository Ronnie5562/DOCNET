import Box from '@mui/joy/Box';
import { useFormik } from "formik";
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
import { useAuthServiceContext } from '../../context/AuthContext';
import FormHelperText from '@mui/joy/FormHelperText';
import { InfoOutlined } from '@mui/icons-material';


const LogIn = () => {
    const { login } = useAuthServiceContext();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values) => {
            const errors: Partial<typeof values> = {};
            if (!values.email) {
                errors.email = "Required";
            }
            if (!values.password) {
                errors.password = "Required";
            }
            return errors;
        },
        onSubmit: async (values) => {
            const { email, password } = values;
            const status = await login(email, password);
            if (status === 401) {
                console.log("Unauthorised");
                formik.setErrors({
                    email: "Invalid email or password",
                    password: "Invalid email or password",
                });
            }
            // else {
            //     navigate("/profile");
            // }
        },
    });

    return (
        <AuthPage>
            <Stack gap={4} sx={{ mb: 2 }}>
                <Stack gap={1}>
                    <Typography component="h1" level="h3">
                        Log in
                    </Typography>
                    <Typography level="body-sm">
                        New to docnet?{' '}
                        <Link href="/register" level="title-sm">
                            Register!
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
                            (formik.touched.password && formik.errors.password ) &&
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
                            Sign in
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

export default LogIn;