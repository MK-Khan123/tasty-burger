import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';
import './MainMenu.css';
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

    const [foodCategory, setFoodCategory] = useState('burger');
    const [activeFoodData, setActiveFoodData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${foodCategory}`)
            .then(res => res.json())
            .then(data => setActiveFoodData(data));
    }, [foodCategory]);

    return (
        <section id='main-menu'>
            <header>
                <Container>
                    <Navbar />
                </Container>
            </header>

            <main>
                <Box sx={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '25.625rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>MAIN MENU</Box>
                </Box>

                <section id='main-menu-icons'>
                    <Grid container sx={{ padding: '0 10%' }}>
                        <Grid item xs={6} sm={4} md={2}>
                            <Box sx={{ textAlign: 'center', margin: '1.8rem', cursor: 'pointer' }} onClick={() => setFoodCategory('burger')}>
                                <img className='main-menu-icon-size' src={icons.burger} alt="" />
                                <h5>BURGERS</h5>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Box sx={{ textAlign: 'center', margin: '1.8rem', cursor: 'pointer' }} onClick={() => setFoodCategory('dessert')}>
                                <img className='main-menu-icon-size' src={icons.dessert} alt="" />
                                <h5>DESSERT</h5>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Box sx={{ textAlign: 'center', margin: '1.8rem', cursor: 'pointer' }} onClick={() => setFoodCategory('pasta')}>
                                <img className='main-menu-icon-size' src={icons.pasta} alt="" />
                                <h5>PASTA</h5>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Box sx={{ textAlign: 'center', margin: '1.8rem', cursor: 'pointer' }} onClick={() => setFoodCategory('pizza')}>
                                <img className='main-menu-icon-size' src={icons.pizza} alt="" />
                                <h5>PIZZA</h5>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Box sx={{ textAlign: 'center', margin: '1.8rem', cursor: 'pointer' }} onClick={() => setFoodCategory('salad')}>
                                <img className='main-menu-icon-size' src={icons.salad} alt="" />
                                <h5>SALAD</h5>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Box sx={{ textAlign: 'center', margin: '1.8rem', cursor: 'pointer' }} onClick={() => setFoodCategory('sides')}>
                                <img className='main-menu-icon-size' src={icons.fries} alt="" />
                                <h5>SIDES</h5>
                            </Box>
                        </Grid>
                    </Grid>
                </section>

                <section id='food-item-grid'>
                    <Container>
                        <Grid container spacing={3}>
                            <ActiveFoodItem activeFoodData={activeFoodData} />
                        </Grid>
                    </Container>
                </section>

                <Delivery />
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default MainMenu;