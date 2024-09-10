'use client';
import React from 'react';
import { RatingTotal } from '@/types';
import { ReviewComponent } from '@/components/product/review';
import { faker } from '@faker-js/faker';
import { Review } from '@/types';

export default function ReviewTab() {
  faker.seed(123);

  const ratingTotals: RatingTotal[] = [
    { rating: 5, percentage: 50, count: 5 },
    { rating: 4, percentage: 20, count: 2 },
    { rating: 3, percentage: 10, count: 1 },
    { rating: 2, percentage: 10, count: 1 },
    { rating: 1, percentage: 10, count: 1 },
  ];

  const calculateTotalRatings = (ratings: RatingTotal[]): number => {
    return ratings.reduce((total, rating) => total + rating.count, 0);
  };

  const calculateAverageRating = (ratings: RatingTotal[]): string => {
    const totalRatings = calculateTotalRatings(ratings);
    const weightedSum = ratings.reduce(
      (sum, rating) => sum + rating.rating * rating.count,
      0,
    );
    return Math.ceil(weightedSum / totalRatings).toString();
  };

  const totalRatings = calculateTotalRatings(ratingTotals);
  const averageRating = calculateAverageRating(ratingTotals);

  const reviewContent = {
    1: "I'm extremely disappointed with this sports equipment. The quality is far below what I expected, and it started falling apart after just a few uses. The customer service was unhelpful when I tried to address the issues. I wouldn't recommend this to anyone serious about their sport or fitness routine.",
    2: "This sports gear is mediocre at best. While it does the job, there are noticeable flaws in its design and durability. I've had to be extra careful during use to prevent damage. For the price, I expected much better quality. It might be okay for very casual users, but anyone who exercises regularly should look elsewhere.",
    3: "The sports equipment is decent, but not outstanding. It performs adequately for basic workouts and casual use. However, I've noticed some inconsistencies in quality, and it doesn't quite live up to the marketing claims. It's a middle-of-the-road option that could benefit from some improvements, especially in terms of durability and performance.",
    4: "I'm quite satisfied with this sports equipment. It's well-made, comfortable to use, and has noticeably improved my workouts. The design is thoughtful, and it seems built to last. While there are a few minor issues that keep it from being perfect, overall, it's a solid choice for both beginners and more experienced fitness enthusiasts.",
    5: "This sports equipment is absolutely top-notch! The quality and craftsmanship are evident from the moment you start using it. It's durable, performs exceptionally well, and has significantly enhanced my training routine. The attention to detail in the design is impressive, and it's clear that a lot of thought went into creating a product that meets the needs of serious athletes. Highly recommended for anyone looking to take their fitness to the next level!",
  };

  const generateReview = (rating: number): Review => ({
    rating,
    title: faker.lorem.sentence(),
    author: faker.person.fullName(),
    date: faker.date.past().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    content: reviewContent[rating as keyof typeof reviewContent],
    authorImage: faker.image.url(),
  });

  const mockReviews: Review[] = [
    ...Array(5)
      .fill(null)
      .map(() => generateReview(5)),
    ...Array(2)
      .fill(null)
      .map(() => generateReview(4)),
    generateReview(3),
    generateReview(2),
    generateReview(1),
  ];

  const shuffledReviews = mockReviews.sort(() => Math.random() - 0.5);

  return (
    <section className="py-4 relative">
      <div className="w-full max-w-[95%] px-4 md:px-5 lg-6 mx-auto">
        <div className="w-full">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">
            Our customer reviews
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="box flex flex-col gap-y-4 w-full ">
              {ratingTotals.map((review, index) => (
                <div key={index} className="flex items-center w-full">
                  <p className="font-medium text-lg text-black mr-0.5">
                    {review.rating}
                  </p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_12042_8589)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12042_8589">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="h-2 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                    <span
                      className="h-full rounded-3xl bg-amber-400 flex"
                      style={{ width: `${review.percentage}%` }}
                    ></span>
                  </p>
                  <p className="font-medium text-lg text-black mr-0.5">
                    {review.count}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
              <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">
                {averageRating}
              </h2>
              <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                {Array.from(
                  { length: Math.floor(Number(averageRating)) },
                  (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_13624_2608)">
                        <path
                          d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13624_2608">
                          <rect width="44" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ),
                )}
              </div>
              <p className="font-medium text-xl leading-8 text-gray-900 text-center">
                {totalRatings} Ratings
              </p>
            </div>
          </div>
          {shuffledReviews.map((review) => (
            <ReviewComponent key={review.date} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
