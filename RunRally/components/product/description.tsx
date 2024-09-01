'use client';
import React, { useState } from 'react';

interface DescriptionTabProps {
  descrip: string;
  det: string;
}

const DescriptionTab: React.FC<DescriptionTabProps>  = ({descrip, det}) => {
    const [isShippingVisible, setIsShippingVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);

    const toggleShippingVisibility = () => {
        setIsShippingVisible(!isShippingVisible);
    };

    const toggleContactVisibility = () => {
        setIsContactVisible(!isContactVisible);
    };

  return (
    <section className="py-4 sm:py-4 text-black"> 
        <div className="p-2">
            <div className="mt-2 flow-root sm:mt-2">
                <h1 className="text-3xl font-bold">Description</h1>
                <p className="mt-4">
                  {descrip}
                </p>
            </div>
        </div>
        <div className="p-2">
            <div className="mt-2 flow-root sm:mt-2">
                <h1 className="text-3xl font-bold">Details</h1>
                <p className="mt-4">
                  {det}
                </p>
            </div>
        </div>
        <div>
      <div className="p-2">
        <div className="border-t border-b py-4 mt-7 border-gray-200">
          <div data-menu className="flex justify-between items-center cursor-pointer" onClick={toggleShippingVisibility}>
            <p className="text-base leading-4">Shipping and returns</p>
            <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
              <svg className={`transform ${isShippingVisible ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className={`pt-4 text-base leading-normal pr-12 mt-4 ${isShippingVisible ? '' : 'hidden'}`} id="sect">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable.
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="border-b py-4 border-gray-200">
          <div data-menu className="flex justify-between items-center cursor-pointer" onClick={toggleContactVisibility}>
            <p className="text-base leading-4">Contact us</p>
            <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
              <svg className={`transform ${isContactVisible ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className={`pt-4 text-base leading-normal pr-12 mt-4 ${isContactVisible ? '' : 'hidden'}`} id="sect">
            If you have any questions on how to return your item to us, contact us.
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default DescriptionTab;