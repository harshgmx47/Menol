// src/components/CategoryContainer.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import mensLuxuryImg from '../../public/photo3.jpg'; // replace with actual path
import anotherCategoryImg from '../../public/photo2.jpg'; // replace with actual path
import { ChevronRightIcon } from '@heroicons/react/24/solid';
// adjust based on your icon library

const CategoryContainer = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Triggering fade-in animation on component mount
    setFadeIn(true);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Category 1: Men's Luxury */}
      <div className={`relative flex-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg overflow-hidden transition-opacity transform ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Image
          src={mensLuxuryImg}
          alt="Men's Luxury"
        
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 transition-opacity duration-200">{fadeIn ? 'Men\'s Luxury' : ''}</h2>
          <p className={`text-lg mb-4 transition-opacity duration-200 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            Explore premium collections
          </p>
          <button className="bg-transparent text-white font-semibold   relative transition-opacity duration-200">
            Shop Now {fadeIn && <ChevronRightIcon className="inline-block w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1" />}
          </button>
        </div>
      </div>

      {/* Category 2: Another Category */}
      <div className={`relative flex-1 bg-gradient-to-br from-green-500 to-yellow-500 rounded-lg overflow-hidden transition-opacity transform ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Image
          src={anotherCategoryImg}
          alt="Another Category"
        
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 transition-opacity duration-200">{fadeIn ? 'Another Category' : ''}</h2>
          <p className={`text-lg mb-4 transition-opacity duration-200 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            Discover new arrivals
          </p>
          <button className="bg-transparent text-white font-semibold  relative transition-opacity duration-200">
            Shop Now {fadeIn && <ChevronRightIcon className="inline-block w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
