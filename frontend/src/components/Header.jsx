import React, { useState } from "react";

// This file contains two components: Header and Main (hero).
// TailwindCSS is used for styling. Place your hero image at: src/assets/hero.jpg

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div className="backdrop-blur-sm bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + nav */}
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-3">
                <div className="text-white font-semibold text-xl">feane</div>
              </a>

              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-200 hover:text-white">HOME</a>
                <a href="#" className="text-gray-300 hover:text-white">MENU</a>
                <a href="#" className="text-gray-300 hover:text-white">ABOUT</a>
                <a href="#" className="text-gray-300 hover:text-white">BOOK TABLE</a>
              </nav>
            </div>

            {/* Right: Icons + CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <button aria-label="account" className="text-gray-200 hover:text-white">
                  {/* simple user icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 10a4 4 0 100-8 4 4 0 000 8z" />
                    <path fillRule="evenodd" d="M.458 16.042A8 8 0 0116.042.458 8 8 0 01.458 16.042z" clipRule="evenodd" />
                  </svg>
                </button>
                <button aria-label="cart" className="text-gray-200 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  </svg>
                </button>
              </div>

              <a href="#order" className="hidden md:inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-medium">Order Online</a>

              {/* Mobile menu button */}
              <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200" onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="text-gray-200">HOME</a>
              <a href="#" className="text-gray-200">MENU</a>
              <a href="#" className="text-gray-200">ABOUT</a>
              <a href="#" className="text-gray-200">BOOK TABLE</a>
              <a href="#order" className="mt-2 inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-medium">Order Online</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function MainHero({ image = "src/assets/hero.jpg" }) {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />

      {/* Dark overlay on left to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: Headline and CTA */}
          <div className="text-left text-white max-w-lg">
            <h1 className="font-script text-5xl sm:text-6xl leading-tight mb-4">Fast Food Restaurant</h1>
            <p className="text-gray-300 mb-8">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsum.</p>

            <div className="flex items-center gap-4">
              <a href="#order" className="inline-block px-5 py-3 rounded-full bg-yellow-400 font-medium text-black">Order Now</a>

              {/* small bullets (carousel indicators) */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          {/* Right: Image area with play overlay and side circular buttons */}
          <div className="flex justify-center md:justify-end items-center relative">
            {/* The product image is actually the background; we add a centered translucent play button */}
            <div className="relative w-full max-w-xl">
              <div className="mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/40">
                {/* Transparent layer to create the circular play control visuals */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Left circular small control */}
                  <div className="absolute left-12 sm:left-20 w-20 h-20 rounded-full bg-black/50 flex items-center justify-center shadow-lg">
                    <div className="text-white font-semibold">5</div>
                  </div>

                  {/* Center play */}
                  <div className="w-28 h-28 rounded-full bg-black/45 flex items-center justify-center shadow-2xl">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18l15-9L5 3z" />
                      </svg>
                    </div>
                  </div>

                  {/* Right circular small control */}
                  <div className="absolute right-12 sm:right-20 w-20 h-20 rounded-full bg-black/50 flex items-center justify-center shadow-lg">
                    <div className="text-white font-semibold">5</div>
                  </div>
                </div>

                {/* This empty div keeps aspect ratio so the background shows through */}
                <div className="w-full h-full" />
              </div>

              {/* caption under image on small screens */}
              <div className="mt-4 text-gray-200 text-sm text-center md:text-right">Delicious burger & fries</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  // If you're using a bundler, replace image path with an imported asset: import hero from './assets/hero.jpg'
  const heroPath = "src/assets/hero.jpg"; // edit to match your project

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <MainHero image={heroPath} />
    </div>
  );
}
