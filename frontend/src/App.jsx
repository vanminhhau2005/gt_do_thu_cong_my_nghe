// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <Products />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
