import React from 'react';
import { Review } from '@/types';

export const ReviewComponent: React.FC<{ review: Review }> = ({ review }) => {
    return (
      <div className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
        <div className="flex items-center gap-3 mb-4">
          {Array.from({ length: review.rating }, (_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">{review.title}</h3>
        <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
          <div className="flex items-center gap-3">
            <img src={review.authorImage} alt={`${review.author} image`} className="w-8 h-8 rounded-full" />
            <h6 className="font-semibold text-lg leading-8 text-green-600">{review.author}</h6>
          </div>
          <p className="font-normal text-lg leading-8 text-gray-400">{review.date}</p>
        </div>
        <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">{review.content}</p>
      </div>
    );
};