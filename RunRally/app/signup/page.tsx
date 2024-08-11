'use client';
import React from 'react';
import Image from 'next/image';

export default function SignIn() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-center filter blur-md"
        style={{
          backgroundImage: 'url(/background.jpeg)',
        }}
      ></div>
      <div className="relative">
        <div className="flex justify-between h-screen">
          <div className="flex items-center h-full px-20 relative">
            <div>
              <div className="text-white p-8 text-center">
                <div className="max-w-5xl text-center">
                  <Image
                    width={400}
                    height={500}
                    alt="RunRally logo"
                    src="/logo_cropped.png"
                    className="mx-auto"
                  />
                  <h1 className="text-2xl sm:text-5xl mt-4">
                    The ultimate running community where members come together.
                  </h1>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-4xl mt-4">Run together, thrive together.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-3 mx-auto lg:w-2/6">
            <div className="flex-1 rounded-2xl bg-gray-500 bg-opacity-40 p-7 m-auto">
              <div className="text-center">
                <div>
                  <h1 className="text-4xl font-bold text-white sm:text-3xl">
                    Sign Up
                  </h1>
                </div>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-bold block m-2 text-lg text-white "
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-white bg-gray-500 bg-opacity-40 border border-gray-600 rounded-lg dark:text-gray-300 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="username"
                      className="block pt-1 m-2 text-lg font-bold text-white"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-white bg-gray-500 bg-opacity-40 border border-gray-600 rounded-lg dark:text-gray-300 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-white text-lg font-bold"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-white bg-gray-500 bg-opacity-40 border rounded-lg dark:text-gray-300 border-gray-600 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="confirm_password"
                        className="text-white text-lg font-bold"
                      >
                        Confirm Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-white bg-gray-500 bg-opacity-40 border border-gray-600 rounded-lg dark:text-gray-300  focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button className="w-full text-lg font-extrabold px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-500 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50">
                      Sign Up
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-lg text-center text-white">
                  Already have an account?{' '}
                  <a
                    href="/login"
                    className="focus:outline-none text-black focus:underline hover:underline"
                  >
                    Login
                  </a>
                  .
                </p>

                <div className="py-3 flex items-center text-xs text-white uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
                  Or
                </div>

                <button
                  type="button"
                  className="py-2 m-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    className="shrink-0 size-4"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4132_5805adfqfqdq121)">
                      <path
                        d="M32.2566 16.36C32.2566 15.04 32.1567 14.08 31.9171 13.08H16.9166V19.02H25.7251C25.5454 20.5 24.5866 22.72 22.4494 24.22L22.4294 24.42L27.1633 28.1L27.4828 28.14C30.5189 25.34 32.2566 21.22 32.2566 16.36Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M16.9166 32C21.231 32 24.8463 30.58 27.5028 28.12L22.4694 24.2C21.1111 25.14 19.3135 25.8 16.9366 25.8C12.7021 25.8 9.12677 23 7.84844 19.16L7.66867 19.18L2.71513 23L2.65521 23.18C5.2718 28.4 10.6648 32 16.9166 32Z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M7.82845 19.16C7.48889 18.16 7.28915 17.1 7.28915 16C7.28915 14.9 7.48889 13.84 7.80848 12.84V12.62L2.81499 8.73999L2.6552 8.81999C1.55663 10.98 0.937439 13.42 0.937439 16C0.937439 18.58 1.55663 21.02 2.63522 23.18L7.82845 19.16Z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M16.9166 6.18C19.9127 6.18 21.9501 7.48 23.0886 8.56L27.6027 4.16C24.8263 1.58 21.231 0 16.9166 0C10.6648 0 5.27181 3.6 2.63525 8.82L7.80851 12.84C9.10681 8.98 12.6821 6.18 16.9166 6.18Z"
                        fill="#EB4335"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_4132_5805adfqfqdq121">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.937439)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="py-2 m-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                >
                  <svg
                    className="shrink-0 size-4"
                    fill="#000000"
                    viewBox="-52.01 0 560.035 560.035"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
                    </g>
                  </svg>
                  Sign up with Apple
                </button>
                <button
                  type="button"
                  className="py-2 m-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                >
                  <svg
                    className="shrink-0 size-5"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#1877F2"
                        d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                      ></path>
                    </g>
                  </svg>
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
