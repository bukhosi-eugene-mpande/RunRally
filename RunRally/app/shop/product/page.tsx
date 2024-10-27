'use client';
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductTabs from '@/components/product/ProductTabs';
import Breadcrumbs from '@/components/breadcrumbs';
import ProductCarousel from '@/components/product/ProductCarousel';
import { Product } from '@/types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'RunComfort Armholder',
    type: 'armholder',
    description: 'Secure smartphone armholder for runners',
    detail:
      'Adjustable, sweat-resistant armband to hold your smartphone while running. Compatible with most smartphone sizes.',
    price: 199.99,
    images: ['/product/armholder/armholder.png'],
    rating: 4,
  },
  {
    id: '2',
    name: 'BreathEasy Running Shirt',
    type: 'shirt',
    description: 'Lightweight, breathable running shirt',
    detail:
      'Made with moisture-wicking fabric to keep you cool and dry during your run. Available in multiple colors and sizes.',
    price: 299.99,
    images: [
      '/product/shirt/shirt1.png',
      '/product/shirt/shirt2.png',
      '/product/shirt/shirt3.png',
    ],
    rating: 4,
  },
  {
    id: '3',
    name: 'HydroFlow Water Bottle',
    type: 'bottle',
    description: 'Leak-proof, easy-squeeze water bottle',
    detail:
      'BPA-free, 20 oz capacity with a convenient flip-top lid. Perfect for staying hydrated on long runs.',
    price: 129.99,
    images: ['/product/bottle/bottle1.avif'],
    rating: 4,
  },
  {
    id: '4',
    name: 'SunShield Running Cap',
    type: 'cap',
    description: 'Lightweight, UV-protective running cap',
    detail:
      'Adjustable cap with UPF 50+ sun protection. Features a moisture-wicking sweatband and reflective elements for visibility.',
    price: 249.99,
    images: ['/product/cap/cap1.png', '/product/cap/cap2.png'],
    rating: 4,
  },
  {
    id: '5',
    name: 'SoundPace Wireless Earphones',
    type: 'earphones',
    description: 'Sweat-resistant wireless earphones for runners',
    detail:
      'Bluetooth 5.0, 8-hour battery life, and secure-fit ear hooks. Ideal for music and podcasts while running.',
    price: 799.99,
    images: ['/product/earphones/earphones.png'],
    rating: 4,
  },
  {
    id: '6',
    name: 'PaceTrack Fitbit',
    type: 'fitbit',
    description: 'Advanced fitness tracker for runners',
    detail:
      'Tracks steps, distance, pace, and heart rate. Features GPS, sleep monitoring, and smartphone notifications.',
    price: 1499.99,
    images: ['/product/fitbit/fitbit3.avif', '/product/fitbit/fitbit4.webp'],
    rating: 4,
  },
  {
    id: '7',
    name: 'ThermoRegulate Running Vest',
    type: 'vest',
    description: 'Lightweight, insulated running vest',
    detail:
      'Perfect for chilly morning runs. Windproof front panel, breathable back, and multiple pockets for storage.',
    price: 599.99,
    images: [
      '/product/vest/runningvest1.png',
      '/product/vest/runningvest2.png',
      '/product/vest/runningvest3.png',
    ],
    rating: 4,
  },
  {
    id: '8',
    name: 'SafetyFirst Work Vest',
    type: 'workvest',
    description: 'High-visibility work vest for runners',
    detail:
      'Reflective strips for enhanced visibility during low-light conditions. Lightweight and breathable design.',
    price: 349.99,
    images: [
      '/product/workvest/workvest1.jpg',
      '/product/workvest/workvest2.jpg',
      '/product/workvest/workvest3.jpg',
    ],
    rating: 4,
  },
];

const defaultProduct = mockProducts.find((p) => p.type === 'shirt')!;

const ProductDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const productType = searchParams.get('type');
  const [selectedProduct, setSelectedProduct] =
    useState<Product>(defaultProduct);
  const [activeSize, setActiveSize] = useState<string>('');
  useEffect(() => {
    if (productType) {
      const product = mockProducts.find((p) => p.type === productType);
      setSelectedProduct(product || defaultProduct);
    } else {
      setSelectedProduct(defaultProduct);
    }
  }, [productType]);

  return (
    <div>
      <section className="py-2 lg:py-4 relative">
        <div className="mx-auto max-w-[90%] px-4 sm:px-4 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
              <div>
                <Breadcrumbs />
              </div>
              <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">
                {selectedProduct.name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  R{selectedProduct.price}
                </h6>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {/* SVGs for stars */}
                    {[...Array(selectedProduct.rating)].map((_, index) => (
                      <svg
                        key={index}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_12029_1640)">
                          <path
                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12029_1640">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                    10 reviews
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-base font-normal mb-8">
                {selectedProduct.detail}
              </p>
              <div className="block w-full">
                <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                  Color
                </p>
                <div className="text">
                  <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6">
                    {/* Color buttons */}
                    {['#10B981', '#FBBF24', '#F43F5E', '#2563EB'].map(
                      (color, index) => (
                        <button
                          key={index}
                          className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20" cy="20" r="20" fill={color} />
                          </svg>
                        </button>
                      ),
                    )}
                  </div>
                  <div className="block w-full mb-6">
                    <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                      Size
                    </p>
                    <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                      {['56 cm (S)', '67 cm (M)', '77 cm (L)'].map(
                        (size, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveSize(size)} // Set active size on click
                            className={`border text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300 ${
                              activeSize === size
                                ? 'border-green-500 bg-green-50 text-green-700' // Active state styles
                                : 'border-gray-200 text-gray-900'
                            }`}
                          >
                            {size}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center justify-center w-full">
                      <button className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                        <svg
                          className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                        placeholder="1"
                      />
                      <button className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                        <svg
                          className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="group py-4 px-5 rounded-full bg-green-50 text-green-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-100 hover:shadow-green-200">
                      <svg
                        className="stroke-green-600 transition-all duration-500"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="group transition-all duration-500 p-4 rounded-full bg-green-50 hover:bg-green-100 hover:shadow-sm hover:shadow-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                          stroke="#16a34a"
                          strokeWidth="1.6"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="text-center w-full px-5 py-4 rounded-[100px] bg-green-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-green-700 hover:shadow-green-400">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ProductCarousel images={selectedProduct.images} />
          </div>
        </div>
        <div className="flex pt-3 flex-wrap gap-4 mx-auto max-w-[90%] px-4 sm:px-4 lg:px-4">
          <ProductTabs
            description={selectedProduct.description}
            details={selectedProduct.detail}
          />
        </div>
      </section>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails />
    </Suspense>
  );
};

export default Page;
