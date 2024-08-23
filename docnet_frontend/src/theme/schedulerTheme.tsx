import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Components {
        [key: string]: any
    }
}

const schedulerTheme = (mode: string | undefined) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#dc004e',
            },
            background: {
                paper: '#ffffff',
            },
        },
        components: {
            MuiPickerStaticWrapper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#f5f5f5',
                        borderRadius: '8px',
                        boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
                    },
                },
            },
            MuiPickersDay: {
                styleOverrides: {
                    root: {
                        color: '#1976d2',
                    },
                    dayOutsideMonth: {
                        color: '#b0b0b0',
                    },
                },
            },
            MuiPickersCalendarHeader: {
                styleOverrides: {
                    switchViewButton: {
                        color: mode === 'dark' ? '#ffffff' : '#000000',
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                    },
                    iconButton: {
                        color: '#1976d2',
                        '&:hover': {
                            backgroundColor: '#e3f2fd',
                        },
                    },
                },
            },
            MuiPickersLayoutToolbar: {
                styleOverrides: {
                    span: {
                        color: 'red',
                    },
                },
            },
            MuiPickersArrowSwitcher: {
                styleOverrides: {
                    button: {
                        color: mode === 'dark' ? '#ffffff' : '#000000',
                        fontSize: '1.8rem',
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                    },
                },
            },
            MuiDayCalendar: {
                styleOverrides: {
                    weekDayLabel: {
                        color: mode === 'dark' ? '#ffffff' : '#000000',
                    },
                },
            },
        },
    });

    return theme;

}

export default schedulerTheme;
