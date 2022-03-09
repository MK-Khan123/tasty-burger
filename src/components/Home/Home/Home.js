import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BestOffers from '../BestOffers/BestOffers';
import Delivery from '../Delivery/Delivery';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Intro from '../Intro/Intro';
import MobileApp from '../MobileApp/MobileApp';
import ProductHighlight from '../ProductHighlight/ProductHighlight';
import Reviews from '../Reviews/Reviews';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import Sponsors from '../Sponsors/Sponsors';

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
            <MobileApp />
            <Gallery />
            <Sponsors />
            <Delivery />
            <Footer />
        </div>
    );
};

export default Home;