import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from '../templates/app/SideBar';
import Header from '../templates/app/Header';
import MyMessages from '../templates/app/Messages';

export default function Messages() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Sidebar />
                <Header />
                <Box component="main" className="MainContent" sx={{ flex: 1 }}>
                    <MyMessages />
                </Box>
            </Box>
        </CssVarsProvider>
    );
}