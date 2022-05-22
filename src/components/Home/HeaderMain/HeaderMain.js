import React from 'react';
import { Box } from '@mui/material';
import './HeaderMain.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";


const HeaderMain = () => {

    const bannerImages = {
        slide1: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/slide-1_jjvtzy.jpg',
        slide2: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/slide-2_yzajpy.jpg',
        slide3: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/slide-3_krbgf9.jpg'
    };

    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            id='banner-style'
        >
            <SwiperSlide className='banner-slide'>
                <img src={bannerImages.slide1} alt='' />
                <div className='banner-text'>
                    <Box
                        sx={{
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '6.5rem', xl: '12rem' },
                            margin: '0',
                            fontWeight: '500'
                        }}
                        component='h5'
                    >
                        GOOD TIME, GREAT TASTE
                    </Box>
                    <Box
                        sx={{
                            fontSize: { md: '1.12rem', lg: '1.75rem', xl: '3rem' },
                            fontFamily: 'Roboto, sans-serif'
                        }}
                        component='p'
                    >
                        Open Daily: <Box className='banner-text-highlighted' component='span'
                            sx={{ fontSize: { md: '1.5rem', lg: '2.35rem', xl: '4rem' } }}
                        >
                            11:30 AM - 8:30 PM
                        </Box>
                    </Box>
                </div>
            </SwiperSlide>

            <SwiperSlide className='banner-slide'>
                <img src={bannerImages.slide2} alt='' />
                <div className='banner-text'>
                    <Box
                        sx={{
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '6.5rem', xl: '12rem' },
                            margin: '0',
                            fontWeight: '500'
                        }}
                        component='h5'
                    >
                        DISCOVER THE REAL BURGERS
                    </Box>
                    <Box
                        sx={{
                            fontSize: { md: '1.12rem', lg: '1.75rem', xl: '3rem' },
                            fontFamily: 'Roboto, sans-serif'
                        }}
                        component='p'
                    >
                        Enjoy the food you love <Box className='banner-text-highlighted' component='span'
                            sx={{ fontSize: { md: '1.5rem', lg: '2.35rem', xl: '4rem' } }}
                        >
                            FROM $6.99
                        </Box>
                    </Box>
                </div>
            </SwiperSlide>

            <SwiperSlide className='banner-slide'>
                <img src={bannerImages.slide3} alt='' />
                <div className='banner-text'>
                    <Box
                        sx={{
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '6.5rem', xl: '12rem' },
                            margin: '0',
                            fontWeight: '500'
                        }}
                        component='h5'
                    >
                        BIG BURGER, LITTLE MONEY
                    </Box>
                    <Box
                        sx={{
                            fontSize: { md: '1.12rem', lg: '1.75rem', xl: '3rem' },
                            fontFamily: 'Roboto, sans-serif'
                        }}
                        component='p'
                    >
                        Order Now: <Box className='banner-text-highlighted' component='span'
                            sx={{ fontSize: { md: '1.5rem', lg: '2.35rem', xl: '4rem' } }}
                        >
                            789-654-3210
                        </Box>
                    </Box>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeaderMain;