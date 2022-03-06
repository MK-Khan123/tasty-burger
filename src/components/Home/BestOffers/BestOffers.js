import React from 'react';
import './BestOffers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import panishBurger from '../../../images/panish-burger.jpg';
import classicBurger from '../../../images/classic-burger.jpg';
import crispyBurger from '../../../images/crispy-chicken.jpg';
import { Fade } from 'react-reveal';

const BestOffers = () => {
    return (
        <section id='bestOffers' className='container'>
            <h5 className='text-center fw-bold mb-3'>OUR BEST OFFERS</h5>
            <p className='text-muted text-center fs-5 mb-5'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</p>
            <div className="row g-3">
                <div className="col-md-4">
                    <div className='offerCard-body'>
                        <div className='rounded-3' style={{ overflow: 'hidden' }}>
                            <img src={panishBurger} className="card-img-top h-100 rounded-3 offerHover-image" alt="..." />
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
                            <h5 className="card-title text-uppercase cardMenu-title fw-bold fs-3">Panish Burger</h5>
                            <p className="card-text text-muted">Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-4 fw-bold priceTag'>$8.95</p>
                                <Fade bottom>
                                    <button className="btn btn-warning rounded-3 offerHover-button"><FontAwesomeIcon icon={faBagShopping} /> Add to cart</button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='offerCard-body'>
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
                            <h5 className="card-title text-uppercase cardMenu-title fw-bold fs-3">Classic Burger</h5>
                            <p className="card-text text-muted">Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-4 fw-bold priceTag'>$7.95</p>
                                <Fade top>
                                    <button className="btn btn-warning rounded-3 offerHover-button"><FontAwesomeIcon icon={faBagShopping} /> Add to cart</button>
                                </Fade>
                            </div>
                        </div>
                        <div className='rounded-3' style={{ overflow: 'hidden' }}>
                            <img src={classicBurger} className="card-img-bottom h-100 rounded-3 offerHover-image" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='offerCard-body'>
                        <div className='rounded-3' style={{ overflow: 'hidden' }}>
                            <img src={crispyBurger} className="card-img-top h-100 offerHover-image" alt="..." />
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
                            <h5 className="card-title text-uppercase cardMenu-title fw-bold fs-3">Crispy Burger</h5>
                            <p className="card-text text-muted">Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-4 fw-bold priceTag'>$8.50</p>
                                <Fade bottom>
                                    <button className="btn btn-warning rounded-3 offerHover-button"><FontAwesomeIcon icon={faBagShopping} /> Add to cart</button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestOffers;