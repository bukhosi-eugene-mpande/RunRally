'use client';
import { useRouter } from 'next/navigation';
import toast, {
  Renderable,
  Toast,
  Toaster,
  ValueFunction,
} from 'react-hot-toast';
import { useState } from 'react';
import SuccessModal from '@/components/success/successModal';
import GeneralDetails from '@/components/admin/add/GeneralsDetails';
import StockDetails from '@/components/admin/add/StockDetails';
import ProductPictures from '@/components/admin/add/ProductPIctures';
import FinalProduct from '@/components/admin/add/FinalProduct';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { component: GeneralDetails, index: 1, label: 'General Details' },
  { component: StockDetails, index: 2, label: 'Stock Details' },
  { component: ProductPictures, index: 3, label: 'Product Pictures' },
];

export default function Add() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleFinishingClick = (
    load: Renderable | ValueFunction<Renderable, Toast>,
    success: Renderable | ValueFunction<Renderable, Toast>,
    message: string,
  ) => {
    toast.loading(load);
    setTimeout(() => {
      setModalMessage(message);
      toast.dismiss();
      toast.success(success);
      setModalOpen(true);
    }, 2000);
  };

  const closeModal = () => {
    setModalOpen(false);
    router.push('/admin/products');
  };

  return (
    <div className="p-2">
      <Toaster />
      <SuccessModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
      />
      <div className="flex items-center gap-4">
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Add Product
        </h1>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              handleFinishingClick(
                'Discarding product....',
                'Product discarded',
                'Product discarded successfully!',
              )
            }
          >
            Discard
          </Button>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700"
            onClick={() =>
              handleFinishingClick(
                'Saving product....',
                'Successfully saved product',
                'Successfully saved the product!',
              )
            }
          >
            Save Product
          </Button>
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
                          ? 'bg-green-200 text-black'
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
                stroke="black"
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
                  'Successfully created the product!',
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
            <AnimatePresence mode="wait">
              {steps.map(
                ({ component: StepComponent, index }) =>
                  currentStep === index && (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: currentStep > index ? -50 : 50,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: currentStep > index ? 50 : -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StepComponent />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
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
