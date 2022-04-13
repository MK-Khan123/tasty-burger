import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './MainMenu.css';
import foodData from '../fakeData';
import ActiveFoodItem from './ActiveFoodItem/ActiveFoodItem';
import Delivery from '../Shared/Delivery/Delivery';
import Footer from '../Shared/Footer/Footer';

const MainMenu = () => {

    const icons = {
        burger: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/icons/burger_qgfla1.png`,
        fries: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/french-fries_qourda.png`,
        salad: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/salad_svw3qy.png`,
        dessert: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/dessert_fh3ber.png`,
        pasta: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/spaghetti_z9hpmp.png`,
        pizza: `https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/icons/pizza_m90jq6.png`
    };

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/main-menu/menu-page_usa15j.jpg';

    const [burgerData] = useState(foodData.filter(pd => pd.category === 'burger'));
    const [dessertData] = useState(foodData.filter(pd => pd.category === 'desserts'));
    const [pastaData] = useState(foodData.filter(pd => pd.category === 'pasta'));
    const [pizzaData] = useState(foodData.filter(pd => pd.category === 'pizza'));
    const [saladData] = useState(foodData.filter(pd => pd.category === 'salads'));
    const [sidesData] = useState(foodData.filter(pd => pd.category === 'sides'));

    const [activeFoodData, setActiveFoodData] = useState(burgerData);

    return (
        <section id='main-menu'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='main-menu-banner' className="container-fluid" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>MAIN MENU</h5>
            </section>

            <section id='main-menu-icons' className='container-fluid'>
                <div style={{ padding: '0 10%' }} className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(burgerData)}>
                        <img className='main-menu-icon-size m-3' src={icons.burger} alt="" />
                        <h5>BURGERS</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(dessertData)}>
                        <img className='main-menu-icon-size m-3' src={icons.dessert} alt="" />
                        <h5>DESSERT</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(pastaData)}>
                        <img className='main-menu-icon-size m-3' src={icons.pasta} alt="" />
                        <h5>PASTA</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(pizzaData)}>
                        <img className='main-menu-icon-size m-3' src={icons.pizza} alt="" />
                        <h5>PIZZA</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(saladData)}>
                        <img className='main-menu-icon-size m-3' src={icons.salad} alt="" />
                        <h5>SALAD</h5>
                    </div>
                    <div className='col text-center' role='button' onClick={() => setActiveFoodData(sidesData)}>
                        <img className='main-menu-icon-size m-3' src={icons.fries} alt="" />
                        <h5>SIDES</h5>
                    </div>
                </div>
            </section>

            <section id='food-item-grid' className='container'>
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