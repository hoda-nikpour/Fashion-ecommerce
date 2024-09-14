
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './Pages/Home/HomePage';
import CategoryPage from './Pages/Categories/CategoryPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import CartProvider from './contexts/CartContext';



const App = () => {
  
  return (
    <CartProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetails  />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
    </CartProvider>
  );
};

export default App;
