import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import contactUsBackground from '../../../images/contact-us/contacts-page.jpg';
import './ContactUs.css';
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

            <section>
                <div></div>
            </section>

            <section id='leaveMessage' className='container py-5'>
                <h5 className='fw-bold py-3'>LEAVE A MESSAGE</h5>
                <form className='row'>
                    <div className="mb-3 col-md-4">
                        <input type="text" className="form-control" id="inputName" placeholder='Your Name' />
                    </div>
                    <div className="mb-3 col-md-4">
                        <input type="email" className="form-control" id="inputEmail" placeholder='Your Email' aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <input type="text" className="form-control" placeholder='What is this about? ...' id="inputSubject" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Your message..." id="textArea" style={{ height: "150px" }}></textarea>
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