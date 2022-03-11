import React from 'react';
import Delivery from '../../Shared/Delivery/Delivery';
import Footer from '../../Shared/Footer/Footer';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import BestOffers from '../BestOffers/BestOffers';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Intro from '../Intro/Intro';
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