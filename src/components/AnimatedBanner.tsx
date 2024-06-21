// src/components/BannerHeader.tsx
import React from 'react';
import Image from 'next/image';
import fashionGif from '../../public/fashion.gif';

const BannerHeader = () => {
  return (
    <div className="relative h-96 max-h-screen bg-gray-900 ">
      {/* Animated Content */}
      <div className=" inset-2 flex items-center justify-center">
        <Image
          src={fashionGif}
          alt="Fashion GIF"
          unoptimized={true}
          
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Text Content */}
      <div className="absolute top-60 left-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Melon Clothes</h1>
        <p className="text-lg mb-8">Discover the latest trends</p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BannerHeader;
