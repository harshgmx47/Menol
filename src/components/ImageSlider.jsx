// src/components/ProductSlider.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import image from '../../public/bag-Sophie.webp'
import { NextArrow, PrevArrow } from '@/components/CustomArrow'; // Import custom arrows
import { productsImage } from '@/components/model/imageSLider'; // Import product data

const CategoryImageContainer = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-6 relative">
      <Slider
        {...settings}
        nextArrow={<NextArrow currentSlide={currentSlide} slideCount={productsImage.length} />}
        prevArrow={<PrevArrow currentSlide={currentSlide} />}
      >
        {productsImage.map((product) => (
          <div key={product.id} className="p-0.5">
            <div className="flex flex-row group  w-full overflow-hidden rounded-lg relative">
            <div className='container '>
                <Image
                  src={product.primaryImage}
                
                  alt={product.alt}
                  className="rounded-lg transition-opacity duration-500"
                  layout="responsive"
                  objectFit="contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={500}
                  height={500}
                />
                </div>
              

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50 text-white">
        <h2 className="text-4xl sm:text-7xl mb-8 ml-6">Bags</h2>
        <div className="flex space-x-10 ml-6">
          <button className="border-2 border-white text-white px-24 py-2 rounded-full uppercase font-semibold transition duration-300 hover:bg-white hover:text-black">
            Shop Now
          </button>
          <button className="border-2 border-white text-white px-24 py-2 rounded-full uppercase font-semibold transition duration-300 hover:bg-white hover:text-black">
            View More
          </button>
        </div>
      </div>
              
            </div>
          </div>
        ))}
      </Slider>
     
    </div>
  );
};


export default CategoryImageContainer;
