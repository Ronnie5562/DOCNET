import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import { useNavigate } from 'react-router-dom';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

interface snackBarProps {
    message: string;
    link: string;
    success?: boolean;
}


const SnackbarWithDecorators = ({ message, link, success }: snackBarProps) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                Show Snackbar
            </Button>
            <Snackbar
                variant="soft"
                color={success ? 'success' : 'danger'}
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
                endDecorator={
                    <Button
                        onClick={() => navigate(link)}
                        size="sm"
                        variant="soft"
                        color="success"
                    >
                        Dismiss
                    </Button>
                }
            >
                { message }
            </Snackbar>
        </React.Fragment>
    );
}

export default SnackbarWithDecorators;