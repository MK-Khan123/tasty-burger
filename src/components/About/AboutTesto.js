import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './AboutTesto.css';
import aboutBackground from '../../images/about-testo/about-page.jpg';
import introPic from '../../images/about-01-img.png';
import aboutPic1 from '../../images/about-testo/about-1.jpg';
import burgerIcon from '../../images/icons/burger.png';
import friesIcon from '../../images/icons/french-fries.png';
import chickenIcon from '../../images/icons/chicken-leg.png';
import saladIcon from '../../images/icons/salad.png';
import dessertIcon from '../../images/icons/dessert.png';
import drinkIcon from '../../images/icons/cocktail.png';
import frenchFryPic from '../../images/about-testo/img-10.jpg';
import burgerPic from '../../images/about-testo/img-15.jpg';
import Footer from '../Shared/Footer/Footer';

const AboutTesto = () => {
    return (
        <section id='aboutTesto'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='aboutBackground' className="container-fluid" style={{ backgroundImage: `url(${aboutBackground})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>ABOUT TESTO</h5>
            </section>

            <main id='aboutBackgroundIntro' className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src={introPic} alt="" />
                    </div>
                    <div className="col-md-6 introFont mt-5 p-5">
                        <h5>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h5>
                        <p className='pt-3'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae.</p>
                        <ul className="row mt-5">
                            <li className="col-sm-6 col-12 introIcon-font">Fringilla risus, luctus mau.</li>
                            <li className="col-sm-6 col-12 introIcon-font">Quaerat sodales sapien</li>
                            <li className="col-sm-6 col-12 introIcon-font">Quaerat sodales sapilti.</li>
                            <li className="col-sm-6 col-12 introIcon-font">Nemo ipsam egestas</li>
                        </ul>
                        <div style={{ fontFamily: 'Oswald, sans-serif' }} className='mt-5'>
                            <button className='btn btn-lg btn-danger'>ABOUT MORE</button>
                        </div>
                    </div>
                </div>
            </main>

            <section id='aboutBackgroundPromo' className='container-fluid' style={{ backgroundImage: `url(${aboutPic1})` }}>
                <div style={{ height: '100%' }} className='d-flex flex-column justify-content-center p-5'>
                    <h5 className='text-center fw-bold'><span className='text-warning'>BURGERS...</span>WHAT ELSE?</h5>
                    <p className='text-center'>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer metus curae integer orci congue integer and primis in integer metus mollis</p>
                    <div style={{ padding: '0 15%' }} className="d-flex justify-content-evenly align-items-center">
                        <img className='foodIcon-size m-3' src={burgerIcon} alt="" />
                        <img className='foodIcon-size m-3' src={friesIcon} alt="" />
                        <img className='foodIcon-size m-3' src={chickenIcon} alt="" />
                        <img className='foodIcon-size m-3' src={saladIcon} alt="" />
                        <img className='foodIcon-size m-3' src={dessertIcon} alt="" />
                        <img className='foodIcon-size m-3' src={drinkIcon} alt="" />
                    </div>
                    <div className='text-center mt-3'>
                        <button style={{ maxWidth: '250px', fontFamily: 'Oswald, sans-serif' }} className='btn btn-lg btn-danger'>EXPLORE FULL MENU</button>
                    </div>
                </div>
            </section>

            <section id='aboutBackgroundPromo2' className='container'>
                <div className="row gx-5 gy-4">
                    <div className="col-md-6">
                        <h5 className='fw-bold'>DISCOVER THE NEW TASTE OF THE BURGER</h5>
                        <p>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis</p>
                        <img className='rounded-3 img-fluid mt-4' src={frenchFryPic} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img className='rounded-3 img-fluid' src={burgerPic} alt="" />
                        <p className='mt-3'>Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer.</p>
                    </div>
                </div>
            </section>

            <section id='subscription' className='container p-5'>
                <h5 className='fw-bold text-center'>SUBSCRIBE TO NEWSLETTER</h5>
                <p className='text-center text-muted'>Subscribe to the weekly newsletter for all the latest updates</p>
                <div style={{ fontFamily: 'Roboto, sans-serif' }} className="d-flex flex-column justify-content-evenly">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className=''>
                        <button className='btn btn-danger mb-2'>SIGN UP</button>
                    </div>
                </div>
            </section>

            <Footer />
        </section>
    );
};

export default AboutTesto;