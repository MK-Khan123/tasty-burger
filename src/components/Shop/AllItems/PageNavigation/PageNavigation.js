import { Box, Pagination } from '@mui/material';
import React from 'react';

const PageNavigation = ({ foodItemsPerPage, totalFoodItems, currentPage, handlePageChange }) => {

    const pageNumbers = Math.ceil(totalFoodItems / foodItemsPerPage);

    return (
        <nav aria-label="Page navigation">
            <Box
                mt={8}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Pagination count={pageNumbers} page={currentPage} onChange={handlePageChange} color="primary" />
            </Box>
        </nav>
    );
};

export default PageNavigation;