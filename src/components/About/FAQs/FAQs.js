import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './FAQs.css';
import Subscription from '../../Shared/Subscription/Subscription';
import Footer from '../../Shared/Footer/Footer';

const FAQs = () => {

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/faqs/faqs-page_nlurqn.jpg';

    return (
        <section id='FAQs'>
            <header style={{ position: 'relative' }} className="container">
                <Navbar />
            </header>

            <section id='faqs-banner' className="container-fluid" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h5 className='carousel-caption d-none d-md-block text-white fw-bold'>F.A.Q.S</h5>
            </section>

            <section id='questions' className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <h5>WHAT PAYMENT METHODS DO YOU ACCEPT?</h5>
                        <p>Etiam amet mauris suscipit in odio. Integer congue undo metus. Vitae arcu mollis blandit ultrice ligula egestas a magna suscipit lectus magna suscipit luctus blandit molestie purus</p>
                    </div>
                    <div className="col-md-6">
                        <h5>HOW CAN I CHANGE SOMETHING IN MY ORDER?</h5>
                        <p>Aliqum mullam blandit and tempor sapien donec ipsum at gravida porta. Velna vitae auctor congue tristique</p>
                    </div>
                    <div className="col-md-6">
                        <h5>IS MY PAYMENT INFORMATION SECURE?</h5>
                        <p>Aliqum mullam blandit and tempor sapien donec ipsum gravida porta. Velna vitae auctor congue quaerat and sodales sapien</p>
                    </div>
                    <div className="col-md-6">
                        <h5>HOW MUCH IS SHIPPING?</h5>
                        <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                    </div>
                    <div className="col-md-6">
                        <h5>IS THERE A DISCOUNT CODE?</h5>
                        <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                    </div>
                    <div className="col-md-6">
                        <h5>HOW LONG WILL MY ORDER TAKE TO BE DELIVERED?</h5>
                        <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula ligula massa in faucibus orci a luctus ultrices ipsum primis in faucibus odio feugiat primis luctus in ligula eros ligula</p>
                    </div>
                    <div className="col-md-6">
                        <h5>WHAT IF I HAVE LOST MY GIFT CERTIFICATE?</h5>
                        <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                    </div>
                    <div className="col-md-6">
                        <h5>HOW DO I TRACK MY ORDER?</h5>
                        <p>Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia</p>
                    </div>
                </div>
                <div style={{ fontFamily: 'Oswald, sans-serif' }} className="text-center pt-5 col">
                    <button className="btn btn-lg btn-danger">STILL HAVE A QUESTION?</button>
                </div>
            </section>
            <Subscription />
            <Footer />
        </section>
    );
};

export default FAQs;