import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Reviews.css';
import review1 from '../../../images/review1.jpg';
import review2 from '../../../images/review2.jpg';
import review3 from '../../../images/review3.jpg';
import review4 from '../../../images/review4.jpg';
import reviewBackground from '../../../images/reviews.jpg';

const Reviews = () => {
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
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        "background-image":
                            `url(${reviewBackground})`,
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img src={review1} alt="" />
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
                        <img src={review2} alt="" />
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
                        <img src={review3} alt="" />
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
                        <img src={review4} alt="" />
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