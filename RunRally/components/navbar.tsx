'use client';
import React, { useState } from 'react';

export const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/home">
              <span className="sr-only">Home</span>
              <img src="/black_logo_crp.png" alt="RunRally" className="h-10" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a
                    className="text-black transition hover:text-green-900"
                    href="/shop/merchandise"
                  >
                    {' '}
                    Shop{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-green-900"
                    href="/home#Health"
                  >
                    {' '}
                    Health tips{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-green-900"
                    href="/home#Stories"
                  >
                    {' '}
                    Our Stories{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-green-900"
                    href="/home#Events"
                  >
                    {' '}
                    Events{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-green-900"
                    href="/home#About"
                  >
                    {' '}
                    About Us{' '}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Toggle dashboard menu</span>
                <img
                  src="/profile.jpg"
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              {isDropdownVisible && (
                <div
                  className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="/admin"
                      className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Admin Dashboard
                    </a>
                  </div>

                  <div className="p-2">
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                      role="menuitem"
                      onClick={async () => {
                        try {
                          window.location.href = "/login"; // Adjust to your login route
                        } catch (error) {
                          console.error("Logout failed:", error);
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
