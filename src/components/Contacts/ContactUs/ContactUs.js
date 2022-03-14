import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import contactUsBackground from '../../../images/contact-us/contacts-page.jpg';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import Footer from '../../Shared/Footer/Footer';

const ContactUs = () => {
    return (
        <section id='contactUs'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='contactUsBackground' className="container-fluid" style={{ backgroundImage: `url(${contactUsBackground})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>CONTACT US</h5>
            </section>

            <section id='contactUs-grid' className='container'>
                <div className='row'>
                    <div className="col-md-4">
                        <div style={{ boxShadow: '5px 5px 30px gray', maxWidth: "540px" }} className="card rounded-3 px-4 pt-2 mb-3">
                            <div className="row g-0">
                                <div className="contactUs-cardBackground col-3 d-flex justify-content-center align-items-center">
                                    <div>
                                        <FontAwesomeIcon className='fs-3 text-muted' icon={faLocationDot} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="card-body">
                                        <h5 style={{ fontFamily: 'Oswald, sans-serif', color: '#642F21' }} className="card-title fw-bold">LOCATION</h5>
                                        <p className="card-text m-0">Phone: 789-654-3210</p>
                                        <p className="card-text">House: 65, Road: 31,
                                            <br />
                                            Sector: 07, Uttara, Dhaka-1230
                                        </p>
                                        <p className="card-text"><small>Daily 11 AM to 10 PM</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ boxShadow: '5px 5px 30px gray', maxWidth: "540px" }} className="card rounded-3 px-4 pt-2 mb-3">
                            <div className="row g-0">
                                <div className="contactUs-cardBackground col-3 d-flex justify-content-center align-items-center">
                                    <div>
                                        <FontAwesomeIcon className='fs-3 text-muted' icon={faClock} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="card-body">
                                        <h5 style={{ fontFamily: 'Oswald, sans-serif', color: '#642F21' }} className="card-title fw-bold">WORKING HOURS</h5>
                                        <p className="card-text m-0">Phone: 789-654-3210</p>
                                        <p className="card-text">House: 65, Road: 31,
                                            <br />
                                            Sector: 07, Uttara, Dhaka-1230
                                        </p>
                                        <p className="card-text"><small>Daily 11 AM to 10 PM</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ boxShadow: '5px 5px 30px gray', maxWidth: "540px" }} className="card rounded-3 px-4 pt-2 mb-3">
                            <div className="row g-0">
                                <div className="contactUs-cardBackground col-3 d-flex justify-content-center align-items-center">
                                    <div>
                                        <FontAwesomeIcon className='fs-3 text-muted' icon={faLayerGroup} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="card-body">
                                        <h5 style={{ fontFamily: 'Oswald, sans-serif', color: '#642F21' }} className="card-title fw-bold">ORDER NOW</h5>
                                        <p className="card-text m-0">Phone: 789-654-3210</p>
                                        <p className="card-text">House: 65, Road: 31,
                                            <br />
                                            Sector: 07, Uttara, Dhaka-1230
                                        </p>
                                        <p className="card-text"><small>Daily 11 AM to 10 PM</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='leaveMessage' className='container py-5'>
                <h5 className='fw-bold py-3'>LEAVE A MESSAGE</h5>
                <form className='row'>
                    <div className="mb-3 col-md-4">
                        <input type="text" className="form-control" id="inputName2" placeholder='Your Name' />
                    </div>
                    <div className="mb-3 col-md-4">
                        <input type="email" className="form-control" id="inputEmail2" placeholder='Your Email' aria-describedby="emailHelp2" />
                        <div id="emailHelp2" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <input type="text" className="form-control" placeholder='What is this about? ...' id="inputSubject" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Your message..." id="textArea2" style={{ height: "150px" }}></textarea>
                    </div>
                    <div>
                        <button style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem' }} type="submit" className="btn btn-danger">SEND MESSAGE</button>
                    </div>
                </form>
            </section>

            <MobileApp />
            <Footer />
        </section>
    );
};

export default ContactUs;