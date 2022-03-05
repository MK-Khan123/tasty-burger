import React from 'react';
import BestOffers from '../BestOffers/BestOffers';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Intro from '../Intro/Intro';
import ProductHighlight from '../ProductHighlight/ProductHighlight';
import Reviews from '../Reviews/Reviews';
import SpecialOffers from '../SpecialOffers/SpecialOffers';

const Home = () => {
    return (
        <div className='container-fluid p-0'>
            <Header />
            <HeaderMain />
            <Intro />
            <ExploreMenu />
            <ProductHighlight />
            <SpecialOffers />
            <Reviews />
            <BestOffers />
        </div>
    );
};

export default Home;