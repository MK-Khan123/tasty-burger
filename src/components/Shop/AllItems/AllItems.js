import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Navbar from '../../Shared/Navbar/Navbar';
import './AllItems.css';
import FoodItems from './FoodItems/FoodItems';
import PageNavigation from './PageNavigation/PageNavigation';
import Footer from '../../Shared/Footer/Footer';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import useReduxState from '../../../hooks/useReduxState';

//All the custom CSS class is used from ActiveFoodItem.css under the MainMenu component. The styling is identical, hence I didn't make separate classes for the same styling for this component.

const AllItems = () => {
    document.title = 'Testo Burger | All Items';

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';

    const [foodItems, setFoodItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [foodItemsPerPage] = useState(12);

    const { handleAddToCart, cartItems } = useReduxState();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://testo-burger-server.up.railway.app/products')
            .then(res => res.json())
            .then(data => {
                setFoodItems(data);
                setIsLoading(false);
            });
    }, []);

    //Get current Food Item
    const indexOfLastFoodItem = currentPage * foodItemsPerPage;
    const indexOfFirstFoodItem = indexOfLastFoodItem - foodItemsPerPage;
    const currentFoodItems = foodItems.slice(indexOfFirstFoodItem, indexOfLastFoodItem);

    //Get Page Number    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    return (
        <section id='all-items'>
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
                    height: '26rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white', fontWeight: '500', textAlign: 'center' }} component='h5'>ALL ITEMS</Box>
                </Box>

                <section id='all-items-grid'>
                    <Container>
                        <Box>Showing <Box sx={{ fontWeight: 'bold', color: 'red' }} component='span'>{indexOfFirstFoodItem + 1} - {(currentPage <= 2) ? indexOfLastFoodItem : (foodItems.length - indexOfFirstFoodItem) + indexOfFirstFoodItem}</Box> of {foodItems.length} results</Box>
                        <hr />
                        {
                            isLoading ? <Box mt={6}><LoadingSpinner /></Box> :
                                <Grid container spacing={3} mt={3}>
                                    {
                                        currentFoodItems?.map(food =>
                                            <FoodItems
                                                key={food._id}
                                                food={food}
                                                cartItems={cartItems}
                                                handleAddToCart={handleAddToCart}
                                            />)
                                    }

                                </Grid>
                        }
                        <PageNavigation
                            foodItemsPerPage={foodItemsPerPage}
                            totalFoodItems={foodItems.length}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    </Container>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default AllItems;