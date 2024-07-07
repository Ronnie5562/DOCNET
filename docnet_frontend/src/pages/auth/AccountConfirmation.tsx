import React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import AuthPage from '../templates/auth/AuthPage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
    persistent: HTMLInputElement;
}

interface LogInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}


const ConfirmAccount = () => {
    return (
        <AuthPage>
            <Stack gap={4} sx={{ mb: 2 }}>
                <Stack gap={1}>
                    <Typography component="h1" level="h3">
                        Account Confirmation
                    </Typography>
                    <Typography level="body-sm">
                        New to docnet?{' '}
                        <Link href="/register" level="title-sm">
                            Register!
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
 
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
                    <Stack gap={4} sx={{ mt: 2 }}>
                        <Box
                            sx={{
                                display: 'block',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography>
                                We sent you an email with a link to confirm your account before you can Log in.
                            </Typography>

                            <Link level="title-sm" href="#replace-with-a-link">
                                Forgot your password?
                            </Link>
                        </Box>
                        <Link
                            variant="solid" href="/login" underline="none"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 1,
                                width: '100%',
                                height: '40px',
                                bg: 'gray.100',
                                color: 'gray.900',
                                borderRadius: 'md',
                                '&:hover': {
                                    bg: 'gray.200',
                                },

                            }}
                        >
                            Log in
                            <ArrowForwardIcon />
                        </Link>
                    </Stack>
                </form>
            </Stack>
        </AuthPage>
    );
}

export default ConfirmAccount;