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
    document.title = 'Testo Burger | Home';

    return (
        <div>
            <header>
                <Header />
                <HeaderMain />
            </header>

            <main>                
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
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;