import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CircularProgress sx={{ color: "#212428" }} />
        </Box>
    );
};

export default LoadingSpinner;