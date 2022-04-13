import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp, faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786132/testo-burger-project/logo_lipngj.png';

    return (
        <section id='footer' className='container'>
            <div className='text-center'>
                <img style={{ maxWidth: '200px' }} className='img-fluid' src={logo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center fs-3 p-4">
                <FontAwesomeIcon style={{ color: '#4867AA' }} className='p-3' icon={faFacebookF} />
                <FontAwesomeIcon style={{ color: '#179CF0' }} className='p-3' icon={faTwitter} />
                <FontAwesomeIcon style={{ color: '#24C761' }} className='p-3' icon={faWhatsapp} inverse />
                <FontAwesomeIcon className='p-3' icon={faInstagram} />
                <FontAwesomeIcon style={{ color: '#F20000' }} className='p-3' icon={faYoutube} />
            </div>
            <div className="d-flex justify-content-center">
                <Link to='' className='p-2 text-decoration-none'>ABOUT</Link>
                <Link to='' className='p-2 text-decoration-none'>MENU</Link>
                <Link to='' className='p-2 text-decoration-none'>ORDER NOW</Link>
                <Link to='' className='p-2 text-decoration-none'>GALLERY</Link>
                <Link to='' className='p-2 text-decoration-none'>LOCATIONS</Link>
                <Link to='' className='p-2 text-decoration-none'>CONTACT</Link>
            </div>
            <p className='text-center'>{(new Date()).getFullYear()} Copyright © Testo. All Rights Reserved</p>
        </section>
    );
};

export default Footer;