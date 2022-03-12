import React from 'react';
import reserveTableBackground from '../../../images/reserve-table/booking-page.jpg';
import Footer from '../../Shared/Footer/Footer';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import Navbar from '../../Shared/Navbar/Navbar';
import './ReserveTable.css';

const ReserveTable = () => {
    return (
        <section id='reserveTable'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='reserveTableBackground' className="container-fluid" style={{ backgroundImage: `url(${reserveTableBackground})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>RESERVE A TABLE</h5>
            </section>

            <section id='reserveTableForm' className='container p-4'>
                <form className='row'>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="inputDate" className="form-label">Date</label>
                        <input type="date" className="form-control" id="inputDate" aria-describedby="dateHelp" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="inputPhone" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Your message..." id="textArea" style={{ height: "100px" }}></textarea>
                    </div>
                    <div>
                        <button style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem' }} type="submit" className="btn btn-danger">Request Booking</button>
                    </div>
                </form>
            </section>

            <MobileApp />
            <Footer />
        </section>
    );
};

export default ReserveTable;