import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Intro from '../Intro/Intro';

const Home = () => {
    return (
        <div className='container-fluid p-0'>
            <Header />
            <HeaderMain />
            <Intro />
        </div>
    );
};

export default Home;