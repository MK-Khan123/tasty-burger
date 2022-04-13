import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './ProductDetails.css';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Footer from '../../Shared/Footer/Footer';

const ProductDetails = () => {

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';
    const soughBurger = fakeData.find(product => product.id === 'BGX09');
    const { name, price, briefInfo, description, category, image, star, starCount } = soughBurger;

    //To dynamically show the related products in related products section according to category
    const [relatedProducts] = useState(fakeData.filter(pd => pd.category === category));
    const firstFewRelatedProducts = relatedProducts.slice(0, 4);

    //To show the ratings of the product dynamically, using FontAwesome Icon
    let ratedStars = [];
    for (let i = 1; i <= star; i++) {
        ratedStars.push(<FontAwesomeIcon className="text-warning" icon={faStar} />);
    }

    return (
        <section id='product-details'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='product-details-banner' className="container-fluid" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>ALL ITEMS</h5>
            </section>

            <section className='container'>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <img className='img-fluid' src={image} alt="" />
                    </div>
                    <div className="col-12 col-md-5 mt-4 product-details-description">
                        <h4 className='text-uppercase fw-bold'>{name}</h4>
                        <h5 className='text-warning fw-bold'>$ {price}</h5>
                        <p className='text-muted'>
                            <span className='text-warning pe-2'>{ratedStars}</span>
                            ({starCount} customer review)
                        </p>
                        <p className='text-muted'>{briefInfo}</p>
                        <p className='text-muted'>Category: {category}</p>
                        <div className="d-flex">
                            <input className='input-design' type="number" defaultValue={1} min='1' />
                            <button style={{ fontFamily: 'Roboto, sans-serif' }} className='btn btn-warning px-4 py-2 mx-3'><FontAwesomeIcon icon={faShoppingBag} /> Add to cart</button>
                        </div>
                        <div className="d-flex pt-4 align-items-center">
                            <div className='fw-bold fs-5 text-secondary'>Share this: </div>
                            <div className="d-flex fs-5 ps-2">
                                <FontAwesomeIcon className='px-2 product-details-icon-hover' icon={faFacebook} />
                                <FontAwesomeIcon className='px-2 product-details-icon-hover' icon={faTwitter} />
                                <FontAwesomeIcon className='px-2 product-details-icon-hover' icon={faLinkedin} />
                                <FontAwesomeIcon className='px-2 product-details-icon-hover' icon={faPinterest} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='product-description' className='container mt-5'>
                <h2>Description</h2>
                <p className='text-secondary py-3'>{description}</p>
            </section>

            <section id='related-products' className='container-fluid'>
                <div className="container pb-5">
                    <h2 className='text-center fw-bold pt-5'>RELATED PRODUCTS</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mt-4">
                        <RelatedProducts firstFewRelatedProducts={firstFewRelatedProducts} />
                    </div>
                </div>
            </section>

            <Footer />
        </section>
    );
};

export default ProductDetails;