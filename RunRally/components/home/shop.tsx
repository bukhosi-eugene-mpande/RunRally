'use client';
import React, { useState } from 'react';

export const Shop = () => {
  return (
    <section className="">
      <div className="mx-auto px-4 py-12 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Shop</h2>
        </header>
        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <a href="#" className="group relative block">
              <img
                src="/shirt.jpg"
                alt=""
                className="aspect-square w-full h-[49vh] object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">T Shirts</h3>

                <span className="mt-1.5 inline-block bg-green-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group relative block">
              <img
                src="/bottle.jpg"
                alt=""
                className="aspect-square w-full h-[49vh] object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Water Bottles
                </h3>

                <span className="mt-1.5 inline-block bg-green-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="group relative block">
              <img
                src="/watch.jpg"
                alt=""
                className="aspect-square w-full h-[100vh] object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-medium text-white">
                  Smart Watches
                </h3>

                <span className="mt-1.5 inline-block bg-green-900 px-5 py-3 text-lg font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Shop;
