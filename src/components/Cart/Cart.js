import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Cart.css';
import fakeData from '../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import MobileApp from '../Shared/MobileApp/MobileApp';
import Footer from '../Shared/Footer/Footer';

const Cart = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/cart/cart-page_npf8up.jpg';

    const productData = fakeData.slice(0, 2);
    console.log(productData);
    return (
        <section id='cart'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='cart-banner' className="container-fluid" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>SHOPPING CART</h5>
            </section>

            <section id='cart-table' className='container'>
                <div className="table-responsive">
                    <table className="table table-hover align-middle">
                        <thead className="table-light">
                            <tr className='fs-5'>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productData.map((pd, index) => {
                                    const { name, image, price } = pd;
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                <img className='cart-table-image' src={image} alt="" /><span className='fw-bold text-uppercase ms-4 fs-5'>{name}</span>
                                            </td>
                                            <td className='fw-bold fs-5'>$ {price}</td>
                                            <td><input className='input-design' type="number" defaultValue={1} min='1' /></td>
                                            <td className='fw-bold fs-5'>$ {price}</td>
                                            <td>
                                                <button className="btn">
                                                    <FontAwesomeIcon className='fs-4 trash-can-hover' icon={faTrashCan} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='text-end py-3'>
                    <button className="btn btn-danger text-uppercase">Update Cart</button>
                </div>
            </section>

            <section id='cart-total' className='container'>
                <div className="row">
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <div className="cart-total-div px-2">
                            <h4 className='fw-bold py-3'>CART TOTAL</h4>
                            <div className="d-flex justify-content-between">
                                <h5>Subtotal</h5>
                                <h5>$ 39.5</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>VAT (10%)</h5>
                                <h5>$ 3.95</h5>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <h5 className='fw-bold'>Total</h5>
                                <h5 className='fw-bold'>$ 39.5</h5>
                            </div>
                            <div className='text-end p-3'>
                                <button className="btn btn-success w-100 text-uppercase">
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MobileApp />
            <Footer />
        </section>
    );
};

export default Cart;