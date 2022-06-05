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
import AuthProvider from './contexts/AuthProvider';
import { Provider } from 'react-redux';
import configureAppStore from './store/configureAppStore';
import { createTheme, ThemeProvider } from '@mui/material';
import ReduxProvider from './contexts/ReduxProvider';
import TemporaryDrawer from './components/Shared/Drawer/Drawer';
import NotFound from './components/NotFound/NotFound';
import RequiredAuth from './components/Shared/RequiredAuth/RequiredAuth';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Oswald',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

const store = configureAppStore();

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Provider store={store}>
          <ReduxProvider>
            <ThemeProvider theme={theme}>
              <TemporaryDrawer />
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

                <Route path="/cart"
                  element={
                    <RequiredAuth>
                      <Cart />
                    </RequiredAuth>
                  }
                />

                <Route path="/checkout"
                  element={
                    <RequiredAuth>
                      <Checkout />
                    </RequiredAuth>
                  }
                />

                <Route path='*' element={<NotFound />} />
              </Routes>
            </ThemeProvider>
          </ReduxProvider>
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
