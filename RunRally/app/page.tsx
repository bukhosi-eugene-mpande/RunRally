import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

export default function Home() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-center filter blur-md"
        style={{
          backgroundImage: 'url(/background.jpeg)',
        }}
      ></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="text-white p-8 text-center">
          <div className="max-w-5xl text-center">
            <Image
              width={500}
              height={500}
              alt="RunRally logo"
              src="/logo_cropped.png"
              className="mx-auto"
            />
            <h1 className="text-2xl sm:text-5xl mt-4">
              The ultimate running community where members come together.
            </h1>
            <div className="mt-8 flex font-extrabold flex-wrap justify-center gap-24">
              <a href="/signup" className="relative px-8 py-4 text-lg font-bold text-white group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-customGreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-1 border-white"></span>
                <span className="relative">Sign Up</span>
              </a>
              <a href="/login" className="relative px-8 py-4 text-lg font-bold text-white group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-customGreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-1 border-white"></span>
                <span className="relative">Login</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 w-full text-center">
          <p className="text-lg sm:text-5xl mt-4">
            Run together, thrive together.
          </p>
        </div>
      </div>
    </section>
  );
}