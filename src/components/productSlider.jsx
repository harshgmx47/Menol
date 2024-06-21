// src/components/ProductSlider.tsx
'use client'
// src/components/ProductSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FavoriteIcon } from '../components/Icons'; // Adjust path as needed
import { NextArrow, PrevArrow } from '@/components/CustomArrow'; // Import custom arrows
import { products } from '@/components/model/procuts'; // Import product data

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true, // Show dots navigation
    infinite: false, // Change to false to properly handle the end slide
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
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
    <div className="w-full p-6 ">
      <Slider
        {...settings}
        nextArrow={<NextArrow currentSlide={currentSlide} slideCount={products.length} />}
        prevArrow={<PrevArrow currentSlide={currentSlide} />}
      >
        {products.map((product) => (
          <div key={product.id} className="">
            <div className="relative group h-full w-64 overflow-hidden rounded-lg">
              <div className="container overflow-hidden">
                <Image
                  src={product.primaryImage}
                  alt={product.alt}
                  className="rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                  layout="responsive"
                  objectFit="contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={500}
                  height={500}
                />
                <Image
                  src={product.secondaryImage}
                  alt={`${product.alt} second view`}
                  className="rounded-lg absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-70"
                  layout="responsive"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  objectFit="contain"
                  width={500}
                  height={500}
                />
              </div>

              <div className="absolute bottom-2 bg-opacity-20 bg-black group-hover:opacity-70 left-1/2 transform -translate-x-1/2 text-white font-bold px-4 py-2 rounded uppercase text-center">
                {product.text}
              </div>
              <div className="absolute top-2 right-2 hidden group-hover:block">
                <FavoriteIcon />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
