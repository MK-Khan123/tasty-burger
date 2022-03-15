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
        name: 'Classic Burger',
        image: classicCalifornia,
        star: 5,
        starCount: 12
    },
    {
        name: 'Buffalo Chicken Pizza',
        image: margheritaPizza,
        star: 4,
        starCount: 18
    },
    {
        name: 'Grilled Ribs',
        image: grilledRibs,
        star: 5,
        starCount: 25
    },
    {
        name: 'Spicy BBQ Chicken Pizza',
        image: fieldGreensPizza,
        star: 4,
        starCount: 8

    },
    {
        name: 'Prosciuttio & Arugula Pizza',
        image: miniChickenPizza,
        star: 5,
        starCount: 16
    },
    {
        name: 'Komil Burger',
        image: eggsBenedictBurger,
        star: 4,
        starCount: 3
    },
    {
        name: 'Ultimate Bacon Burger',
        image: doubleBaconBurger,
        star: 5,
        starCount: 36
    },
    {
        name: 'Rib Eye',
        image: ribEye,
        star: 4,
        starCount: 29
    },
    {
        name: 'Grilled Salmon',
        image: grilledSalmon,
        star: 5,
        starCount: 24
    },
    {
        name: 'Philadelphia Roll',
        image: philadelphiaRoll,
        star: 4,
        starCount: 11
    },
    {
        name: 'Lemon Garlic Shrimp',
        image: lemonGarlicShrimp,
        star: 5,
        starCount: 16
    },
    {
        name: 'Spaghetti Bolognese',
        image: spaghettiBolognese,
        star: 4,
        starCount: 22
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
                        const { name, image, star, starCount } = imageData;
                        let ratedStars = [];
                        for (let i = 1; i <= star; i++) {
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
                                                    <p>{star} {ratedStars.map(star => star)} ({starCount})</p>
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