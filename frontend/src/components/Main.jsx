import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div className="backdrop-blur-sm bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <div className="text-white font-semibold text-xl">feane</div>

              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-200 hover:text-white">HOME</a>
                <a href="#" className="text-gray-300 hover:text-white">MENU</a>
                <a href="#" className="text-gray-300 hover:text-white">ABOUT</a>
                <a href="#" className="text-gray-300 hover:text-white">BOOK TABLE</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <button className="text-gray-200 hover:text-white">👤</button>
                <button className="text-gray-200 hover:text-white">🛒</button>
              </div>

              <a href="#order" className="hidden md:inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-medium">Order Online</a>

              <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200" onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col gap-3 text-sm text-gray-200">
              <a href="#">HOME</a>
              <a href="#">MENU</a>
              <a href="#">ABOUT</a>
              <a href="#">BOOK TABLE</a>
              <a href="#order" className="mt-2 inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-medium">Order Online</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
