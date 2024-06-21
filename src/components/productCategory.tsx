// src/components/ProductCategoryContainer.tsx

import React from 'react';
import Image from 'next/image';
import bestlargebags from '../../public/bag-Sophie.webp'

const ProductCategoryContainer = () => {
  return (
    <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={bestlargebags} // Replace with your image path
        alt="Product Category Image"
        layout="fill"
        objectFit="cover"
      />
     <div className="absolute bottom-0 left-10 p-6 bg-black bg-opacity-0 text-white">
        <h2 className="text-4xl sm:text-7xl  mb-8">
          Bags
        </h2>
        <div className="flex space-x-10">
          <button className="border-2 border-white text-white px-24 py-2 rounded-full uppercase font-semibold transition duration-300 hover:bg-white hover:text-black">
            Shop Now
          </button>
          <button className="border-2 border-white text-white px-24 py-2 rounded-full uppercase font-semibold transition duration-300 hover:bg-white hover:text-black">
            View More
          </button>
        
        </div>
      </div>
    
    </div>
  );
};

export default ProductCategoryContainer;
