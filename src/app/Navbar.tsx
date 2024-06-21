// src/app/Navbar.tsx
'use client'
// src/app/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, SearchIcon, FavoriteIcon } from '../components/Icons'; // Adjust path as needed

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="relative bg-white shadow-lg px-6 py-3 flex justify-between items-center w-full">
      {/* Left side of Navbar */}
      <div className="flex justify-center items-center space-x-4">
        {/* Menu Button */}
        <button onClick={toggleDrawer} className="text-gray-800 focus:outline-none">
          <MenuIcon className="mt-1 h-4 w-6" />
          <span className="ml-1 text-2md-2xl">Menu</span>
        </button>
        
        {/* Search Button */}
        <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
          <SearchIcon className="h-3.5 w-7" />
          <span className="ml-1">Search</span>
        </button>
      </div>

      {/* Middle - Logo or Brand Name */}
      <div className="text-2xl font-bold text-gray-800 uppercase">
        <Link href="/">
          Menol
        </Link>
      </div>

      {/* Right side of Navbar */}
      <div className="flex items-center space-x-4">
        {/* Other icons or buttons */}
        <span className="text-gray-800 hover:text-gray-600 cursor-pointer">
          <FavoriteIcon className="h-6 w-6" /> {/* Replace with your actual icon */}
        </span>
      </div>

      {/* Drawer Content */}
      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-gray-900 opacity-50 z-50"></div> {/* Background overlay */}
          <div className="fixed inset-y-0 left-0 w-48 bg-white z-50 shadow-lg">
            <div className="flex justify-end">
              <button onClick={toggleDrawer} className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <Link href="/" className="block text-gray-800 hover:text-gray-600 py-1">
                Home
              </Link>
              <Link href="/about" className="block text-gray-800 hover:text-gray-600 py-1">
                About
              </Link>
              {/* Add more links as needed */}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
