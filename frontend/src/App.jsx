import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Collection from './components/Collection';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16"> {/* pt-16 để tránh header che nội dung */}
        <Hero />
        <Products />
        <Collection />
        <News />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
