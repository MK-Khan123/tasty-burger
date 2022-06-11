import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import { Provider } from 'react-redux';
import configureAppStore from './store/configureAppStore';
import ReduxProvider from './contexts/ReduxProvider';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Home from './components/Home/Home/Home';
import AdminPanel from './components/AdminPanel/AdminPanel';
import TemporaryDrawer from './components/Shared/Drawer/Drawer';
import RequiredAuth from './components/Shared/RequiredAuth/RequiredAuth';
import LoadingSpinner from './components/Shared/LoadingSpinner/LoadingSpinner';
import './App.css';

//ABOUT Section
const AboutTesto = lazy(() => import('./components/About/AboutTesto/AboutTesto'));
const Team = lazy(() => import('./components/About/Team/Team'));
const FAQs = lazy(() => import('./components/About/FAQs/FAQs'));
const TermsAndPrivacy = lazy(() => import('./components/About/TermsAndPrivacy/TermsAndPrivacy'));

//OUR MENU Section
const MainMenu = lazy(() => import('./components/MainMenu/MainMenu'));

//SHOP Section
const AllItems = lazy(() => import('./components/Shop/AllItems/AllItems'));
const ProductDetails = lazy(() => import('./components/Shop/ProductDetails/ProductDetails'));
const MyAccount = lazy(() => import('./components/Shop/MyAccount/MyAccount'));

//CONTACTS Section
const ReserveTable = lazy(() => import('./components/Contacts/ReserveTable/ReserveTable'));
const ContactUs = lazy(() => import('./components/Contacts/ContactUs/ContactUs'));

//CART & CHECKOUT Section
const Cart = lazy(() => import('./components/Cart/Cart'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));

//When the route address doesn't match
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

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
              <Suspense fallback={
                <Box mt={12}>
                  <LoadingSpinner />
                </Box>
              }>
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
              </Suspense>
            </ThemeProvider>
          </ReduxProvider>
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
