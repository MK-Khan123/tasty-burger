import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Reviews.css';

const Reviews = () => {
    const reviewBackground = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/reviews/reviews_s7tyat.jpg';

    const images = {
        review1: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review1_sgjcmb.jpg',
        review2: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review2_hvb8a7.jpg',
        review3: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review3_nufyyg.jpg',
        review4: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review4_hc1rtt.jpg'
    };

    return (
        <section id='reviews'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Autoplay, Pagination, Navigation]}
                className="mySwiper" id='reviewDiv'
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        "backgroundImage":
                            `url(${reviewBackground})`,
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review1} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                    </div>
                    <h4 className='text-uppercase mt-2'>By Sean McMarthy</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review2} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                    </div>
                    <h4 className='text-uppercase mt-2'>By Evelyn Martinez</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review3} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                    </div>
                    <h4 className='text-uppercase mt-2'>By Robert Peterson</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review4} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <div className='mt-2'>
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                        <FontAwesomeIcon className='text-warning p-1' icon={faStar} />
                    </div>
                    <h4 className='text-uppercase mt-2'>By Leslie Serpas</h4>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Reviews;