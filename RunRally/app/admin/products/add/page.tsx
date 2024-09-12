'use client';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import GeneralDetails from '@/components/admin/add/GeneralsDetails';
import StockDetails from '@/components/admin/add/StockDetails';
import ProductPictures from '@/components/admin/add/ProductPIctures';
import FinalProduct from '@/components/admin/add/FinalProduct';

const steps = [
  { component: GeneralDetails, index: 1, label: 'General Details' },
  { component: StockDetails, index: 2, label: 'Stock Details' },
  { component: ProductPictures, index: 3, label: 'Product Pictures' },
];

export default function Add() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const router = useRouter();

  const handleFinishingClick = (load: string, success: string) => {
    toast.loading(load);
    setTimeout(() => {
      toast.dismiss();
      toast.success(success);
      router.push('/admin/products');
    }, 2000);
  };

  return (
    <div className="p-2">
      <Toaster />
      <div className="flex items-center gap-4">
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Add Product
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Link href="/admin/products">
            <Button variant="outline" size="sm">
              Discard
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button size="sm">Save Product</Button>
          </Link>
        </div>
      </div>
      <div data-hs-stepper="" className="p-6">
        <div className="w-full flex justify-center">
          <ul className="relative flex items-center flex-row gap-x-2 max-w-3xl">
            {steps.map(({ index, label }) => (
              <li
                key={index}
                className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
                  currentStep >= index ? 'hs-stepper-active' : ''
                }`}
                data-hs-stepper-nav-item={`{"index": ${index}}`}
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                  <span
                    className={`size-7 flex justify-center items-center shrink-0 font-medium rounded-full ${
                      currentStep > index
                        ? 'bg-green-600 text-white'
                        : currentStep === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <span className={`${currentStep > index ? 'hidden' : ''}`}>
                      {index}
                    </span>
                    {currentStep > index && (
                      <svg
                        className="shrink-0 size-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800">
                    {label}
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 sm:mt-8">
          <div className="mb-5 flex justify-between items-center gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Back
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleNext}
              disabled={currentStep === 4}
            >
              Next
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
              style={{ display: currentStep === 4 ? 'block' : 'none' }}
              onClick={() =>
                handleFinishingClick(
                  'Creating product....',
                  'Successfully created product',
                )
              }
            >
              Finish
            </button>
            <button
              type="reset"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
              style={{ display: currentStep === 4 ? 'block' : 'none' }}
              onClick={() => setCurrentStep(1)}
            >
              Reset
            </button>
          </div>
          <div className="mt-5 sm:mt-8">
            {steps.map(({ component: StepComponent, index }) => (
              <div
                key={index}
                data-hs-stepper-content-item={`{"index": ${index}}`}
                style={{ display: currentStep === index ? 'block' : 'none' }}
              >
                <StepComponent />
              </div>
            ))}
          </div>
          <div
            data-hs-stepper-content-item='{"isFinal": true}'
            style={{ display: currentStep === 4 ? 'block' : 'none' }}
          >
            <div className="p-4 h-full gap-8 justify-center bg-gray-50 flex border border-dashed border-gray-200 rounded-xl">
              <FinalProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
