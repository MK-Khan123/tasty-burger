import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './MainMenu.css';
import mainMenuBanner from '../../images/main-menu/menu-page.jpg';
import foodData from '../fakeData';
import burgerIcon from '../../images/icons/burger.png';
import dessertIcon from '../../images/icons/dessert.png';
import pastaIcon from '../../images/icons/spaghetti.png';
import pizzaIcon from '../../images/icons/pizza.png';
import saladIcon from '../../images/icons/salad.png';
import friesIcon from '../../images/icons/french-fries.png';
import ActiveFoodItem from './ActiveFoodItem/ActiveFoodItem';
import Delivery from '../Shared/Delivery/Delivery';
import Footer from '../Shared/Footer/Footer';

const MainMenu = () => {

    const [burgerData] = useState(foodData.filter(pd => pd.category === 'Burger'));
    const [dessertData] = useState(foodData.filter(pd => pd.category === 'Desserts'));
    const [pastaData] = useState(foodData.filter(pd => pd.category === 'Pasta'));
    const [pizzaData] = useState(foodData.filter(pd => pd.category === 'Pizza'));
    const [saladData] = useState(foodData.filter(pd => pd.category === 'Salads'));
    const [sidesData] = useState(foodData.filter(pd => pd.category === 'Sides'));

    const [activeFoodData, setActiveFoodData] = useState(burgerData);

    return (
        <section id='mainMenu'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='mainMenuBanner' className="container-fluid" style={{ backgroundImage: `url(${mainMenuBanner})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>MAIN MENU</h5>
            </section>

            <section id='mainMenuIcons' className='container-fluid'>
                <div style={{ padding: '0 10%' }} className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(burgerData)}>
                        <img className='mainMenuIcon-size m-3' src={burgerIcon} alt="" />
                        <h5>BURGERS</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(dessertData)}>
                        <img className='mainMenuIcon-size m-3' src={dessertIcon} alt="" />
                        <h5>DESSERT</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(pastaData)}>
                        <img className='mainMenuIcon-size m-3' src={pastaIcon} alt="" />
                        <h5>PASTA</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(pizzaData)}>
                        <img className='mainMenuIcon-size m-3' src={pizzaIcon} alt="" />
                        <h5>PIZZA</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(saladData)}>
                        <img className='mainMenuIcon-size m-3' src={saladIcon} alt="" />
                        <h5>SALAD</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(sidesData)}>
                        <img className='mainMenuIcon-size m-3' src={friesIcon} alt="" />
                        <h5>SIDES</h5>
                    </div>
                </div>
            </section>

            <section id='foodItemGrid' className='container'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    <ActiveFoodItem activeFoodData={activeFoodData} />
                </div>
            </section>

            <Delivery />
            <Footer />
        </section>
    );
};

export default MainMenu;