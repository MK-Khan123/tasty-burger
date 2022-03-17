import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './AllItems.css';
// import axios from 'axios';
import fakeData from '../../fakeData';
import allItemsBanner from '../../../images/shop-tab/shop-tab.jpg';
import FoodItems from '../FoodItems/FoodItems';
import Pagination from '../Pagination/Pagination';
import Footer from '../../Shared/Footer/Footer';

//All the CSS class is used from MainMenu.css. The styling is identical, hence I didn't make separate classes for this component.

const AllItems = () => {

    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [foodItemsPerPage] = useState(12);

    useEffect(() => {
        // const fetchFoodData = async () => {
        //     setLoading(true);
        //     const res = await axios.get(`${fakeData}`);
        //     setFoodItems(res.data);
        //     setLoading(false);
        // }
        setLoading(true);
        setFoodItems(fakeData);
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
        <section id='allItems'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='allItemsBanner' className="container-fluid" style={{ backgroundImage: `url(${allItemsBanner})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>ALL ITEMS</h5>
            </section>

            <section id='allItemsGrid' className='container'>
                <p className='pt-3'>Showing <span className='fw-bold text-danger'>{indexOfFirstFoodItem + 1} - {(currentPage <= 2) ? indexOfLastFoodItem : (foodItems.length - indexOfFirstFoodItem) + indexOfFirstFoodItem}</span> of {foodItems.length} results</p>
                <hr />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mt-2">
                    <FoodItems currentFoodItems={currentFoodItems} loading={loading} />
                </div>
                <Pagination
                    foodItemsPerPage={foodItemsPerPage}
                    totalFoodItems={foodItems.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    paginateIncrease={paginateIncrease}
                    paginateDecrease={paginateDecrease}
                />
            </section>

            <Footer />
        </section>
    );
};

export default AllItems;