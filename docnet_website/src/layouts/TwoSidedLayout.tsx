import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 600,
    maxHeight: 520,
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    [theme.breakpoints.up(834)]: {
        flexGrow: 1,
        maxHeight: 520,
        minHeight: 400,
    },
}));

interface TwoSidedLayoutProps {
    children: React.ReactNode;
    reversed?: boolean;
}

const TwoSidedLayout: React.FC<TwoSidedLayoutProps> = ({ children, reversed }) => {
    return (
        <Container
            sx={(theme) => ({
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: reversed ? 'column-reverse' : 'column',
                alignItems: 'center',
                py: 10,
                gap: 4,
                [theme.breakpoints.up(834)]: {
                    flexDirection: 'row',
                    gap: 6,
                },
                [theme.breakpoints.up(1199)]: {
                    gap: 12,
                },
            })}
        >
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    maxWidth: '50ch',
                    textAlign: 'center',
                    flexShrink: 999,
                    [theme.breakpoints.up(834)]: {
                        minWidth: 420,
                        alignItems: 'flex-start',
                        textAlign: 'initial',
                    },
                })}
            >
                {children}
            </Box>
            <ImageContainer>
                <img
                    src="https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                />
            </ImageContainer>
        </Container>
    );
}

export default TwoSidedLayout;
