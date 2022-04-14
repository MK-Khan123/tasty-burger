import React, { useEffect, useState } from 'react';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-reveal';

const Gallery = () => {
    const [imageGallery, setImageGallery] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setImageGallery(data));
    }, []);

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