import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/logo_lipngj.png';

    return (
        <nav style={{backgroundColor: 'rgba(255, 255, 255, 0)'}} id='navigationBar' className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                    <img className='brandLogo' src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end navbarFonts" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mx-2">
                            <Link className="nav-link navFont" aria-current="page" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item mx-2 dropdown">
                            <Link className="nav-link dropdown-toggle navFont" to="/about-testo" id="aboutDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ABOUT
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="aboutDropdownLink">
                                <li><Link className="dropdown-item" to="/about-testo">About Us</Link></li>
                                <li><Link className="dropdown-item" to="/team">Meet the Team</Link></li>
                                <li><Link className="dropdown-item" to="/faqs">F.A.Q.s</Link></li>
                                <li><Link className="dropdown-item" to="/terms-privacy">Terms and Privacy</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link navFont" to="/main-menu">OUR MENU</Link>
                        </li>
                        <li className="nav-item mx-2 dropdown">
                            <Link className="nav-link dropdown-toggle navFont" to="#" id="shopDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                SHOP
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="shopDropdownLink">
                                <li><Link className="dropdown-item" to="/all-items">All Items</Link></li>
                                <li><Link className="dropdown-item" to="/product-details/6256ddd6f67917cc7f07f8cf">Single Product</Link></li>
                                <li><Link className="dropdown-item" to="/my-account">My Account</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2 dropdown navFont">
                            <Link className="nav-link dropdown-toggle navFont" to="#" id="contactsDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CONTACTS
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="contactsDropdownLink">
                                <li><Link className="dropdown-item" to="/reserve-a-table">Reserve a Table</Link></li>
                                <li><Link className="dropdown-item" to="/contact-us">Contact Us</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link navFont" to="/admin">ADMIN</Link>
                        </li>
                        <li>
                            <a className='text-decoration-none text-warning mx-3 fs-3 fw-bold' href="tel:789-654-3210">789-654-3210</a>
                        </li>
                        <Link className='fs-4 shoppingCart-icon' to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;