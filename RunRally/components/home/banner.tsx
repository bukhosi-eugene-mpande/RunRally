'use client';
import React, { useState } from 'react';

export const Banner = () => {
  return (
    <section className="relative bg-[url(/home_background.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl justify-center text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-5xl text-white font-extrabold sm:text-5xl">
            Gear Up
            <strong className="block font-extrabold text-green-800">
              {' '}
              Run Stronger{' '}
            </strong>
          </h1>

          <p className="mt-4 text-2xl ">
            Explore our exclusive collection of top-tier running gear
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded-xl bg-green-600 px-12 py-3 text-lg font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              Shop Now
            </a>

            <a
              href="#"
              className="block w-full rounded-xl bg-white px-12 py-3 text-lg font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            >
              Health Tips
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
