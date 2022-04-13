import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import './Sponsors.css';

const Sponsors = () => {
    const images = {
        brand1: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786138/testo-burger-project/brands/brand-1_khhjhc.png',
        brand2: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786138/testo-burger-project/brands/brand-2_jrcz1z.png',
        brand3: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786138/testo-burger-project/brands/brand-3_k0usoe.png',
        brand4: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/brands/brand-4_wzkkzp.png',
        brand5: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786138/testo-burger-project/brands/brand-5_zxwniv.png',
        brand6: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/brands/brand-6_ugtnfw.png',
        brand7: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/brands/brand-7_srzppi.png',
        brand8: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786139/testo-burger-project/brands/brand-8_bfzlcb.png'
    };

    return (
        <section id='sponsors-slide'>
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
                className="mySwiper" id='brand-div-height'
            >
                <SwiperSlide><img className='brand-image' src={images.brand1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand6} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand7} alt="" /></SwiperSlide>
                <SwiperSlide><img className='brand-image' src={images.brand8} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Sponsors;