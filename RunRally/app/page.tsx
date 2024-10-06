import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-center filter blur-md"
        style={{
          backgroundImage: 'url(/background.jpg)',
        }}
      ></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="text-white p-8 text-center">
          <div className="max-w-5xl text-center">
            <Link href="/">
              <Image
                width={400}
                height={500}
                alt="RunRally logo"
                src="/logo_cropped.png"
                className="mx-auto"
              />
            </Link>
            <h1 className="text-base sm:text-xl lg:text-2xl xl:text-5xl mt-2 sm:mt-4 text-center">
              The ultimate running community where members come together.
            </h1>
            <div className="mt-8 flex font-extrabold flex-wrap justify-center gap-24">
              <a
                href="/signup"
                className="relative w-40 px-8 py-4 text-lg font-bold text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-500 rounded-lg hover:bg-green-500 focus:outline-none focus:bg-green-400 focus:ring group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-1 border-white rounded-lg"></span>
                <span className="relative">Sign Up</span>
              </a>
              <a
                href="/login"
                className="relative w-40 px-8 py-4 text-lg font-bold text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-500 rounded-lg hover:bg-green-500 focus:outline-none focus:bg-green-400 focus:ring group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-1 border-white rounded-lg"></span>
                <span className="relative">Login</span>
              </a>
              <a
                href="/shop/merchandise"
                className="relative w-40 px-8 py-4 text-lg font-bold text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-500 rounded-lg hover:bg-green-500 focus:outline-none focus:bg-green-400 focus:ring group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-1 border-white rounded-lg"></span>
                <span className="relative">Shop</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 w-full text-center">
          <p className="text-base sm:text-xl lg:text-4xl mt-2 lg:mt-4  text-white">
            Run together, thrive together.
          </p>
        </div>
      </div>
    </section>
  );
}
