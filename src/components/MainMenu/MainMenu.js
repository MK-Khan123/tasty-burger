import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './MainMenu.css';
import mainMenuBanner from '../../images/main-menu/menu-page.jpg';

const MainMenu = () => {
    return (
        <section id='mainMenu'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='mainMenuBanner' className="container-fluid" style={{ backgroundImage: `url(${mainMenuBanner})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>MAIN MENU</h5>
            </section>
        </section>
    );
};

export default MainMenu;