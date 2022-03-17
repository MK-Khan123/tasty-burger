import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ foodItemsPerPage, totalFoodItems, paginate, paginateIncrease, paginateDecrease, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFoodItems / foodItemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='mt-5 p-4' aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li onClick={() => paginateDecrease(currentPage - 1)} className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
                {
                    pageNumbers.map(number => {
                        return (
                            <li onClick={() => paginate(number)} className="page-item">
                                <Link className="page-link" to="#">{number}</Link>
                            </li>
                        );
                    })
                }
                <li onClick={() => paginateIncrease(currentPage + 1)} className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;