import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import AboutTesto from './components/About/AboutTesto/AboutTesto';
import Team from './components/About/Team/Team';
import FAQs from './components/About/FAQs/FAQs';
import TermsAndPrivacy from './components/About/TermsAndPrivacy/TermsAndPrivacy';
import ReserveTable from './components/Contacts/ReserveTable/ReserveTable';
import ContactUs from './components/Contacts/ContactUs/ContactUs';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about-testo" element={<AboutTesto />} />
      </Routes>
      <Routes>
        <Route path="/team" element={<Team />} />
      </Routes>
      <Routes>
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Routes>
        <Route path="/terms-privacy" element={<TermsAndPrivacy />} />
      </Routes>
      <Routes>
        <Route path="/reserve-a-table" element={<ReserveTable />} />
      </Routes>
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
