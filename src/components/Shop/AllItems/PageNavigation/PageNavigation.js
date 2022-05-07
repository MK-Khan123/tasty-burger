import { Pagination } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({ foodItemsPerPage, totalFoodItems, paginate, paginateIncrease, paginateDecrease, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFoodItems / foodItemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='mt-5 p-4' aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li onClick={() => paginateDecrease(currentPage - 1)} className="page-item">
                    <NavLink className="page-link" to="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </NavLink>
                </li>
                {
                    pageNumbers.map(number => {
                        return (
                            <li onClick={() => paginate(number)} className="page-item">
                                <NavLink className="page-link" to="#">{number}</NavLink>
                            </li>
                        );
                    })
                }
                <li onClick={() => paginateIncrease(currentPage + 1)} className="page-item">
                    <NavLink className="page-link" to="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </NavLink>
                </li>
            </ul>
            <Pagination count={pageNumbers.length} color="primary" />
        </nav>
    );
};

export default PageNavigation;