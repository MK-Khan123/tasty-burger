import React from 'react';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-reveal';

const imageGallery = [
    {
        name: 'Classic Burger',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/image-gallery/img-01_wd3ynv.jpg',
        star: 5,
        starCount: 12
    },
    {
        name: 'Buffalo Chicken Pizza',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-02_jv8pqf.jpg',
        star: 4,
        starCount: 18
    },
    {
        name: 'Grilled Ribs',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-03_udlnpb.jpg',
        star: 5,
        starCount: 25
    },
    {
        name: 'Spicy BBQ Chicken Pizza',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-04_btrqmo.jpg',
        star: 4,
        starCount: 8

    },
    {
        name: 'Prosciuttio & Arugula Pizza',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-05_hgunpd.jpg',
        star: 5,
        starCount: 16
    },
    {
        name: 'Komil Burger',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-06_i6qdh7.jpg',
        star: 4,
        starCount: 3
    },
    {
        name: 'Ultimate Bacon Burger',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-07_mx1fsi.jpg',
        star: 5,
        starCount: 36
    },
    {
        name: 'Rib Eye',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-08_st8axq.jpg',
        star: 4,
        starCount: 29
    },
    {
        name: 'Grilled Salmon',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-09_wd6pod.jpg',
        star: 5,
        starCount: 24
    },
    {
        name: 'Philadelphia Roll',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-10_hq7m7r.jpg',
        star: 4,
        starCount: 11
    },
    {
        name: 'Lemon Garlic Shrimp',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-11_gql45o.jpg',
        star: 5,
        starCount: 16
    },
    {
        name: 'Spaghetti Bolognese',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-12_uduhna.jpg',
        star: 4,
        starCount: 22
    },
];

const Gallery = () => {
    return (
        <section id='image-gallery' className='container'>
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
                            <div className="col-md-3 image-gallery-card">
                                <div style={{ overflow: 'hidden' }} className="card bg-light text-white rounded-3">
                                    <img src={image} className="card-img gallery-image-hover" alt="..." />
                                    <div className="card-img-overlay">
                                        <div className="card-hover">
                                            <Fade bottom>
                                                <div className="card-title-alignment">
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