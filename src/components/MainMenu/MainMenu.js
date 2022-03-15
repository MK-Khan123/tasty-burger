import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './MainMenu.css';
import mainMenuBanner from '../../images/main-menu/menu-page.jpg';
import fakeData from '../fakeData';
import { Flip } from 'react-reveal';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainMenu = () => {
    return (
        <section id='mainMenu'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='mainMenuBanner' className="container-fluid" style={{ backgroundImage: `url(${mainMenuBanner})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>MAIN MENU</h5>
            </section>

            <section id='foodItemGrid' className='container'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    {
                        fakeData.map(product => {
                            const { name, image, briefInfo, price } = product;
                            return (
                                <div className="col cardMenu-body">
                                    <div className="card h-100">
                                        <div style={{ overflow: 'hidden' }}>
                                            <img src={image} className="card-img-top rounded-top cardMenu-image" alt="..." />
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
                                                            <FontAwesomeIcon className='p-1 fs-4 heart-icon' icon={faHeart} />
                                                        </div>
                                                    </div>
                                                    <h5 className="card-title text-uppercase cardMenu-title mt-2 fw-bold">{name}</h5>
                                                    <p className="card-text text-muted">{briefInfo}</p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <button className='btn btn-small btn-dark cardMenu-button1'>$ {price}</button>
                                                    <Flip left>
                                                        <button className="btn btn-warning cardMenu-button2"><FontAwesomeIcon icon={faBagShopping} /> Add to cart</button>
                                                    </Flip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </section>
    );
};

export default MainMenu;