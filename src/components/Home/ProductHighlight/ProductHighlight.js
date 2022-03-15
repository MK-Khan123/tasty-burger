import React from 'react';
import './ProductHighlight.css';
import bigtiBurger from '../../../images/all-food-items/burgers/bigti-burger.png';
import holmBurger from '../../../images/all-food-items/burgers/holm-burger.png';
import komilBurger from '../../../images/all-food-items/burgers/komil-burger.png';
import background from '../../../images/promo-11.jpg';

const ProductHighlight = () => {
    return (
        <section id='productHighlight' className='container' style={{ backgroundImage: `url(${background})`, maxWidth: '100vw' }}>
            <div style={{ padding: '90px' }} className="row">
                <div className="col-md-5 col-lg-4 productHighlight-font">
                    <h5 className='fw-bold' style={{ fontSize: '2.85em' }}>THE</h5>
                    <h5 className='fw-bold' style={{ fontSize: '5.5em' }}>BIGTI</h5>
                    <h5 className='fw-bold' style={{ fontSize: '5.5em' }}>BURGER</h5>
                    <p style={{ fontSize: '1.3em' }}>Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula rutrum risus ultrice luctus ligula congue a</p>
                    <button className='btn btn-lg btn-outline-danger mt-2'>ADD TO CART</button>
                </div>
                <div className="col-md-7 col-lg-6">
                    <img style={{ minWidth: '300px' }} className='img-fluid' src={bigtiBurger} alt="" />
                </div>
                <div className="col-lg-2 d-flex flex-lg-column justify-content-center py-2">
                    <div className="card bg-transparent text-dark border p-2 m-auto m-md-2">
                        <img style={{ maxWidth: '300px' }} src={holmBurger} className="card-img" alt="..." />
                        <h5 className="card-text text-center">Holm Burger</h5>
                    </div>
                    <div className="card bg-transparent text-dark border p-2 m-auto m-md-2">
                        <img style={{ maxWidth: '300px' }} src={komilBurger} className="card-img" alt="..." />
                        <h5 className="card-text text-center">Komil Burger</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHighlight;


