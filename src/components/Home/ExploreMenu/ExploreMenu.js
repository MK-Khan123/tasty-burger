import React, { useEffect, useState } from 'react';
import './ExploreMenu.css';
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ExploreMenu = () => {

    const [burgerData, setBurgerData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/filteredBurger')
            .then(res => res.json())
            .then(data => setBurgerData(data));
    }, []);

    return (
        <section id='explore-menu' className='container'>
            <h5 className='text-center fw-bold mb-3'>EXPLORE OUR MENU</h5>
            <p className='text-muted text-center fs-5 mb-5'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {
                    burgerData.map(burger => {
                        const { name, image, briefInfo, price, _id } = burger;
                        return (
                            <div className="col card-menu-body">
                                <div className="card h-100">
                                    <div style={{ overflow: 'hidden' }}>
                                        <img src={image} className="card-img-top rounded-top card-menu-image" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                                <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                                <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                                <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                                <FontAwesomeIcon className='p-1 text-warning' icon={faStar} />
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className='p-1 fs-4 heart-icon' icon={faHeart} />
                                            </div>
                                        </div>
                                        <Link className='text-decoration-none' to={`/product-details/${_id}`}>
                                            <h5 className="card-title text-uppercase card-menu-title mt-2 fw-bold">{name}</h5>
                                        </Link>
                                        <p className="card-text text-muted">{briefInfo}</p>
                                        <div className='d-flex justify-content-between'>
                                            <button className='btn btn-small btn-dark card-menu-button1'>$ {price}</button>
                                            <Flip left>
                                                <button className="btn btn-warning card-menu-button2"><FontAwesomeIcon icon={faBagShopping} /> Add to cart</button>
                                            </Flip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default ExploreMenu;