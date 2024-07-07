import React from 'react';
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


interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
    persistent: HTMLInputElement;
}

interface LogInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}


const LogIn = () => {
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
                <form
                    onSubmit={(event: React.FormEvent<LogInFormElement>) => {
                        event.preventDefault();
                        const formElements = event.currentTarget.elements;
                        const data = {
                            email: formElements.email.value,
                            password: formElements.password.value,
                            persistent: formElements.persistent.checked,
                        };
                        alert(JSON.stringify(data, null, 2));
                    }}
                >
                    <FormControl required>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password" />
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
                        <Button type="submit" fullWidth>
                            Sign in
                        </Button>
                    </Stack>
                </form>
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