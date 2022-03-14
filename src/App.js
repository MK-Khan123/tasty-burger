import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import AboutTesto from './components/About/AboutTesto/AboutTesto';
import Team from './components/About/Team/Team';
import FAQs from './components/About/FAQs/FAQs';
import TermsAndPrivacy from './components/About/TermsAndPrivacy/TermsAndPrivacy';
import ReserveTable from './components/Contacts/ReserveTable/ReserveTable';
import ContactUs from './components/Contacts/ContactUs/ContactUs';
import MyAccount from './components/Shop/MyAccount/MyAccount';
import MainMenu from './components/MainMenu/MainMenu';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about-testo" element={<AboutTesto />} />

        <Route path="/team" element={<Team />} />

        <Route path="/faqs" element={<FAQs />} />

        <Route path="/terms-privacy" element={<TermsAndPrivacy />} />
        
        <Route path="/main-menu" element={<MainMenu />} />
        
        <Route path="/my-account" element={<MyAccount />} />

        <Route path="/reserve-a-table" element={<ReserveTable />} />

        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
