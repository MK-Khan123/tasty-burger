import React from 'react';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classicCalifornia from '../../../images/image-gallery/img-01.jpg';
import margheritaPizza from '../../../images/image-gallery/img-02.jpg';
import grilledRibs from '../../../images/image-gallery/img-03.jpg';
import fieldGreensPizza from '../../../images/image-gallery/img-04.jpg';
import miniChickenPizza from '../../../images/image-gallery/img-05.jpg';
import eggsBenedictBurger from '../../../images/image-gallery/img-06.jpg';
import doubleBaconBurger from '../../../images/image-gallery/img-07.jpg';
import ribEye from '../../../images/image-gallery/img-08.jpg';
import grilledSalmon from '../../../images/image-gallery/img-09.jpg';
import philadelphiaRoll from '../../../images/image-gallery/img-10.jpg';
import lemonGarlicShrimp from '../../../images/image-gallery/img-11.jpg';
import spaghettiBolognese from '../../../images/image-gallery/img-12.jpg';
import { Fade } from 'react-reveal';

const imageGallery = [
    {
        name: 'Classic California',
        image: classicCalifornia,
        rating: 5
    },
    {
        name: 'Margherita Pizza',
        image: margheritaPizza,
        rating: 4
    },
    {
        name: 'Grilled Ribs',
        image: grilledRibs,
        rating: 5
    },
    {
        name: 'Field Greens Pizza',
        image: fieldGreensPizza,
        rating: 4

    },
    {
        name: 'Mini Chicken Pizza',
        image: miniChickenPizza,
        rating: 5
    },
    {
        name: 'Eggs Benedict Burger',
        image: eggsBenedictBurger,
        rating: 4
    },
    {
        name: 'Double Bacon Burger',
        image: doubleBaconBurger,
        rating: 5
    },
    {
        name: 'Rib Eye',
        image: ribEye,
        rating: 4
    },
    {
        name: 'Grilled Salmon',
        image: grilledSalmon,
        rating: 5
    },
    {
        name: 'Philadelphia Roll',
        image: philadelphiaRoll,
        rating: 4
    },
    {
        name: 'Lemon Garlic Shrimp',
        image: lemonGarlicShrimp,
        rating: 5
    },
    {
        name: 'Spaghetti Bolognese',
        image: spaghettiBolognese,
        rating: 4
    },
];

const Gallery = () => {
    return (
        <section id='imageGallery' className='container'>
            <h5 className='text-center fw-bold mb-3'>IMAGE GALLERY</h5>
            <p className='text-muted text-center fs-5 mb-5'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</p>
            <div className="row g-3">
                {
                    imageGallery.map(imageData => {
                        const { name, image, rating } = imageData;
                        let ratedStars = [];
                        for (let i = 1; i <= rating; i++) {
                            ratedStars.push(<FontAwesomeIcon className="text-warning" icon={faStar} />);
                        }
                        return (
                            <div className="col-md-3 imageGallery-card">
                                <div style={{ overflow: 'hidden' }} className="card bg-light text-white rounded-3">
                                    <img src={image} className="card-img galleryImageHover" alt="..." />
                                    <div className="card-img-overlay">
                                        <div className="cardHover">
                                            <Fade bottom>
                                                <div className="cardTitle-alignment">
                                                    <h5 className="fw-bold text-uppercase card-title">{name}</h5>
                                                    <p>{rating} {ratedStars.map(star => star)}</p>
                                                </div>
                                            </Fade>
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

export default Gallery;