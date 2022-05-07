import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Navbar from '../../Shared/Navbar/Navbar';
import './AllItems.css';
import FoodItems from './FoodItems/FoodItems';
import PageNavigation from './PageNavigation/PageNavigation';
import Footer from '../../Shared/Footer/Footer';

//All the custom CSS class is used from ActiveFoodItem.css under the MainMenu component. The styling is identical, hence I didn't make separate classes for the same styling for this component.

const AllItems = () => {

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';

    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [foodItemsPerPage] = useState(12);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setFoodItems(data));
        setLoading(false);
    }, []);

    //Get current Food Item
    const indexOfLastFoodItem = currentPage * foodItemsPerPage;
    const indexOfFirstFoodItem = indexOfLastFoodItem - foodItemsPerPage;
    const currentFoodItems = foodItems.slice(indexOfFirstFoodItem, indexOfLastFoodItem);

    //Get Page Number
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Decrease page number
    const paginateDecrease = pageNumber => {
        if (pageNumber >= 1) {
            setCurrentPage(pageNumber);
        }
    };

    //Increase page number
    const paginateIncrease = pageNumber => {
        if (pageNumber <= 3) {
            setCurrentPage(pageNumber);
        }
    };

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
                    height: '25.625rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>ALL ITEMS</Box>
                </Box>

                <section id='all-items-grid'>
                    <Container>
                        <Box>Showing <Box sx={{ fontWeight: 'bold', color: 'red'}} component='span'>{indexOfFirstFoodItem + 1} - {(currentPage <= 2) ? indexOfLastFoodItem : (foodItems.length - indexOfFirstFoodItem) + indexOfFirstFoodItem}</Box> of {foodItems.length} results</Box>
                        <hr />
                        <Grid container spacing={3} mt={3}>
                            <FoodItems currentFoodItems={currentFoodItems} loading={loading} />
                        </Grid>                        
                        <PageNavigation
                            foodItemsPerPage={foodItemsPerPage}
                            totalFoodItems={foodItems.length}
                            paginate={paginate}
                            currentPage={currentPage}
                            paginateIncrease={paginateIncrease}
                            paginateDecrease={paginateDecrease}
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