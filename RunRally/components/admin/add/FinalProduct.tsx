'use client';
import React from 'react';
import ProductCarousel from '@/components/product/ProductCarousel';
import data from '@/components/database/db.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProductDetails: React.FC = () => {
  const product = data.products[0];

  return (
    <Card x-chunk="dashboard-07-chunk-1" className="w-full max-w-5xl">
      <CardHeader>
        <CardTitle>Final Product</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-w-[90%] px-4 sm:px-4 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="w-full flex flex-col justify-center max-lg:max-w-[608px]">
              <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">
                {product.name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  R{product.price}
                </h6>
              </div>
              <p className="text-gray-500 text-base font-normal mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                          <span className="sr-only">color selector</span>
                        </button>
                      ),
                    )}
                  </div>
                  <div className="block w-full mb-6">
                    <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                      Sizes
                    </p>
                    <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                      {['56 cm (S)', '67 cm (M)', '77 cm (L)'].map(
                        (size, index) => (
                          <button
                            key={index}
                            className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300"
                          >
                            {size}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductCarousel images={product.images} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
const Page: React.FC = () => {
  return <ProductDetails />;
};

export default Page;
