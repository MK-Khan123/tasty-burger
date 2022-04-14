import React from 'react';
import './ActiveFoodItem.css';
import { Flip } from 'react-reveal';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ActiveFoodItem = ({ activeFoodData }) => {
    return (
        activeFoodData.map(foodItem => {
            const { name, image, briefInfo, price, _id } = foodItem;
            return (
                <div className="col main-menu-card-body">
                    <div className="card h-100">
                        <div style={{ overflow: 'hidden' }}>
                            <img src={image} className="card-img-top rounded-top main-menu-card-image" alt="..." />
                        </div>
                        <div className="card-body">
                            <div style={{ height: '100%' }} className="d-flex flex-column justify-content-between">
                                <div className='mb-3'>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className='p-1 fs-4 main-menu-heart-icon' icon={faHeart} />
                                        </div>
                                    </div>
                                    <Link className='text-decoration-none' to={`/product-details/${_id}`}>
                                        <h5 className="card-title text-uppercase main-menu-card-title mt-2 fw-bold">{name}</h5>
                                    </Link>
                                    <p className="card-text text-muted">{briefInfo}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button className='btn btn-small btn-dark main-menu-card-button1'>$ {price}</button>
                                    <Flip left>
                                        <button className="btn btn-warning main-menu-card-button2"><FontAwesomeIcon icon={faBagShopping} /> Add to cart</button>
                                    </Flip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );
};

export default ActiveFoodItem;