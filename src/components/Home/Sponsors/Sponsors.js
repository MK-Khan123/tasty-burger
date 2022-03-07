import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import './Sponsors.css';
import brand1 from '../../../images/brands/brand-1.png';
import brand2 from '../../../images/brands/brand-2.png';
import brand3 from '../../../images/brands/brand-3.png';
import brand4 from '../../../images/brands/brand-4.png';
import brand5 from '../../../images/brands/brand-5.png';
import brand6 from '../../../images/brands/brand-6.png';
import brand7 from '../../../images/brands/brand-7.png';
import brand8 from '../../../images/brands/brand-8.png';

const Sponsors = () => {
    return (
        <section id='sponsorsSlide'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper" id='brandDivHeight'
            >
                <SwiperSlide><img className='brandImage' src={brand1} alt="" /></SwiperSlide>                
                <SwiperSlide><img className='brandImage' src={brand2} alt="" /></SwiperSlide>                
                <SwiperSlide><img className='brandImage' src={brand3} alt="" /></SwiperSlide>                
                <SwiperSlide><img className='brandImage' src={brand4} alt="" /></SwiperSlide>                
                <SwiperSlide><img className='brandImage' src={brand5} alt="" /></SwiperSlide>                
                <SwiperSlide><img className='brandImage' src={brand6} alt="" /></SwiperSlide>                
                <SwiperSlide><img className='brandImage' src={brand7} alt="" /></SwiperSlide>                
                <SwiperSlide><img className='brandImage' src={brand8} alt="" /></SwiperSlide>                
            </Swiper>
        </section>
    );
};

export default Sponsors;