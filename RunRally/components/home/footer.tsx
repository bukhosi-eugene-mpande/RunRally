'use client';
import React, { useState } from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <a className="block text-teal-600" href="#">
            <img src="/black_logo_crp.png" alt="RunRally" className="h-24" />
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-md text-xl text-center leading-relaxed text-gray-500">
          Explore our exclusive collection of top-tier running gear
        </p>

        <ul className="mt-12 flex flex-wrap text-xl justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a className="text-black transition hover:text-green-500" href="#Shop">
              {' '}
              Shop{' '}
            </a>
          </li>

          <li>
            <a className="text-black transition hover:text-green-500" href="#Health">
              {' '}
              Health tips{' '}
            </a>
          </li>

          <li>
            <a className="text-black transition hover:text-green-500" href="#Stories">
              {' '}
              Our Stories{' '}
            </a>
          </li>

          <li>
            <a className="text-black transition hover:text-green-500" href="#Events">
              {' '}
              Events{' '}
            </a>
          </li>

          <li>
            <a className="text-black transition hover:text-green-500" href="#About">
              {' '}
              About Us{' '}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
