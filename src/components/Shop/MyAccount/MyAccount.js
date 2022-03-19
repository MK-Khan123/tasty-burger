import React from 'react';
import './MyAccount.css';
import Navbar from '../../Shared/Navbar/Navbar';
import myAccountBanner from '../../../images/shop-tab/shop-tab.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../Shared/Footer/Footer';

const MyAccount = () => {
    return (
        <section id='myAccount'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='myAccountBanner' className="container-fluid" style={{ backgroundImage: `url(${myAccountBanner})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>MY ACCOUNT</h5>
            </section>

            <section id='userInfo' className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <h5 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2rem' }} className='py-4'>Login</h5>
                        <form className='p-4 rounded-3 border border-2'>
                            <div className="mb-3">
                                <label htmlFor="inputEmail3" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="inputEmail3" aria-describedby="emailHelp4" />
                                <div id="emailHelp4" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="inputCheck" />
                                <label class="form-check-label" htmlFor="inputCheck">Remember me</label>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-warning fw-bold">Log In</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h5 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2rem' }} className='py-4'>Register</h5>
                        <form className='p-4 rounded-3 border border-2'>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Username</label>
                                <input type="text" className="form-control" id="inputName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="inputEmail4" aria-describedby="emailHelp5" />
                                <div id="emailHelp5" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <div class="form-text">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-warning fw-bold">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className='p-5'>
                        <div className="btn btn-lg btn-outline-danger m-3">Sign in with <FontAwesomeIcon icon={faGoogle} /></div>
                        <div className="btn btn-lg btn-outline-primary m-3">Sign in with <FontAwesomeIcon icon={faFacebookF} /></div>
                    </div>
                </div>
            </section>

            <Footer />
        </section>
    );
};

export default MyAccount;