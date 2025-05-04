// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RegisterShopPage from './pages/RegisterShopPage';
import CustomerForgetPasswordPage from './pages/CustomerForgetPasswordPage';
import ShopkeeperForgetPasswordPage from './pages/ShopkeeperForgetPasswordPage';
import AdminForgetPasswordPage from './pages/AdminForgetPasswordPage';
import CustomerProfilePage from './pages/CustomerProfile';
import ShopkeeperProfilePage from './pages/ShopkeeperProfile';
import CartPage from './pages/CartPage';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        username={username}
        userType={userType}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setUserType={setUserType} />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register-shop" element={<RegisterShopPage />} />

        {/* Forget password routes */}
        <Route path="/forgot-password/customer" element={<CustomerForgetPasswordPage />} />
        <Route path="/forgot-password/shopkeeper" element={<ShopkeeperForgetPasswordPage />} />
        <Route path="/forgot-password/admin" element={<AdminForgetPasswordPage />} />

        {/* Profile routes */}
        <Route path="/customer-profile" element={<CustomerProfilePage />} />
        <Route path="/shopkeeper-profile" element={<ShopkeeperProfilePage />} />

        {/* Cart/Wishlist */}
        <Route path="/cart" element={<CartPage />} />

        {/* Future: /shop/:id, /product/:id etc. */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;