import React from 'react';
import '../i18n';
import '../styles/Footer.css';
import '../styles/Header.css';
import '../styles/App.css';
import '../styles/HomeScreen.css';
import '../styles/ProductCard.css';
import '../styles/ProductScreen.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';
import ProductScreen from '../screens/ProductScreen.jsx';
import ProductsScreen from '../screens/ProductScreen.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/news" element={<NewsScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
