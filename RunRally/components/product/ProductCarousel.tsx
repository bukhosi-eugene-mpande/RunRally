'use client';
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const mainSwiperRef = useRef<HTMLDivElement>(null);
  const thumbSwiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainSwiperRef.current && thumbSwiperRef.current) {
      const swiperThumb = new Swiper(thumbSwiperRef.current, {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });

      const mainSwiper = new Swiper(mainSwiperRef.current, {
        loop: true,
        spaceBetween: 32,
        effect: 'fade',
        thumbs: {
          swiper: swiperThumb,
        },
      });

      // Add click event listeners to thumbnail images
      const thumbSlides =
        thumbSwiperRef.current.querySelectorAll('.swiper-slide');
      thumbSlides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
          mainSwiper.slideToLoop(index);
        });
      });
    }
  }, []);

  return (
    <div>
      <div ref={mainSwiperRef} className="swiper product-prev mb-6">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide">
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="mx-auto border rounded bg-slate-200"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        ref={thumbSwiperRef}
        className="swiper product-thumb max-w-[608px] mx-auto"
      >
        <div className="swiper-wrapper mx-16">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide">
              <img
                src={image}
                alt={`Thumbnail image ${index + 1}`}
                className="cursor-pointer bg-slate-100 border rounded transition-all duration-500 hover:border-green-900 slide:border-green-900"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
