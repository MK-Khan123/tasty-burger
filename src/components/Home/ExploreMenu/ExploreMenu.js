import React from 'react';
import fakeData from '../../fakeData';
import './ExploreMenu.css';
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

// const fakeBurgerData = [
//     {
//         name: 'Spanish Burger',
//         img: spanishBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '8.95'
//     },
//     {
//         name: 'Classic Burger',
//         img: classicBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '7.95'
//     },
//     {
//         name: 'Crispy Chicken',
//         img: crispyBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '8.50'
//     },
//     {
//         name: 'Ultimate Bacon',
//         img: ultimateBaconBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '9.99'
//     },
//     {
//         name: 'Black Sheep',
//         img: blackSheepBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '9.75'
//     },
//     {
//         name: 'Double Burger',
//         img: doubleBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '10.35'
//     },
//     {
//         name: 'Turkey Burger',
//         img: turkeyBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '8.95'
//     },
//     {
//         name: 'Smokey House',
//         img: smokeyHouseBurgerPic,
//         description: 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
//         price: '9.50'
//     }
// ];

const ExploreMenu = () => {
    const burgerData = fakeData.filter(product => product.category.toLowerCase() === 'burger');
    const filteredBurgerData = burgerData.filter(burger => (burger.name !== 'Bigti Burger' && burger.name !== 'Holm Burger' && burger.name !== 'Komil Burger' && burger.name !== 'Sough Burger'));

    return (
        <section id='explore-menu' className='container'>
            <h5 className='text-center fw-bold mb-3'>EXPLORE OUR MENU</h5>
            <p className='text-muted text-center fs-5 mb-5'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {
                    filteredBurgerData.map(burger => {
                        const { name, image, briefInfo, price } = burger;
                        return (
                            <div className="col card-menu-body">
                                <div className="card h-100">
                                    <div style={{ overflow: 'hidden' }}>
                                        <img src={image} className="card-img-top rounded-top card-menu-image" alt="..." />
                                    </div>
                                    <div className="card-body">
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
                                        <h5 className="card-title text-uppercase card-menu-title mt-2 fw-bold">{name}</h5>
                                        <p className="card-text text-muted">{briefInfo}</p>
                                        <div className='d-flex justify-content-between'>
                                            <button className='btn btn-small btn-dark card-menu-button1'>$ {price}</button>
                                            <Flip left>
                                                <button className="btn btn-warning card-menu-button2"><FontAwesomeIcon icon={faBagShopping} /> Add to cart</button>
                                            </Flip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default ExploreMenu;