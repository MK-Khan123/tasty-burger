import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home/Home';
import AboutTesto from './components/About/AboutTesto/AboutTesto';
import Team from './components/About/Team/Team';
import FAQs from './components/About/FAQs/FAQs';
import TermsAndPrivacy from './components/About/TermsAndPrivacy/TermsAndPrivacy';
import ReserveTable from './components/Contacts/ReserveTable/ReserveTable';
import ContactUs from './components/Contacts/ContactUs/ContactUs';
import MyAccount from './components/Shop/MyAccount/MyAccount';
import MainMenu from './components/MainMenu/MainMenu';
import AllItems from './components/Shop/AllItems/AllItems';
import ProductDetails from './components/Shop/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about-testo" element={<AboutTesto />} />

        <Route path="/team" element={<Team />} />

        <Route path="/faq" element={<FAQs />} />

        <Route path="/terms-privacy" element={<TermsAndPrivacy />} />

        <Route path="/main-menu" element={<MainMenu />} />

        <Route path="/all-items" element={<AllItems />} />

        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/my-account" element={<MyAccount />} />

        <Route path="/reserve-a-table" element={<ReserveTable />} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/admin" element={<AdminPanel />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
