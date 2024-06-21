// src/components/CustomArrows.tsx
'use client'
// src/components/CustomArrows.tsx
'use client';
import React from 'react';
import { CustomArrowProps } from 'react-slick';

export const NextArrow = ({ className, style, onClick, currentSlide, slideCount }: CustomArrowProps & { currentSlide: number; slideCount: number }) => {
  if (currentSlide === slideCount - 1) {
    return null;
  }
  return (
    <div
      className={` absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export const PrevArrow = ({ className, style, onClick, currentSlide }: CustomArrowProps & { currentSlide: number }) => {
  if (currentSlide === 0) {
    return null;
  }
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
    
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};
