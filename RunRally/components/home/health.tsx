'use client';
import React, { useState } from 'react';

interface HealthProps {
  id: string;
}

export const Health: React.FC<HealthProps> = ({ id }) => {
  const HealthTips = [
    {
      Header: 'Start Gradually',
      Body: 'Begin with a walk-run program. Alternate between 1-2 minutes of running and 1-2 minutes of walking. Gradually increase your running intervals as your fitness improves to prevent injury and build endurance.',
    },
    {
      Header: 'Proper Footwear',
      Body: 'Invest in quality running shoes that match your foot type and running style. Replace them every 400-500 miles to maintain proper support and prevent injury.',
    },
    {
      Header: 'Warm Up & Cool Down',
      Body: 'Always start with 5-10 minutes of walking and light stretching. End your run with gentle stretches to improve flexibility and reduce muscle soreness.',
    },
    {
      Header: 'Stay Hydrated',
      Body: 'Drink water before, during (for runs over 60 minutes), and after your run. Monitor your urine color - it should be light yellow to ensure proper hydration.',
    },
    {
      Header: 'Listen to Your Body',
      Body: 'Pay attention to pain versus normal discomfort. Sharp or persistent pain means you should rest. Take recovery days seriously - they`re essential for preventing injuries and improving performance.',
    },
    {
      Header: 'Proper Form',
      Body: 'Keep your head level, shoulders relaxed, and arms at about 90 degrees. Land midfoot with your feet under your body, not ahead. Maintain a slight forward lean and relaxed hands.',
    },
  ];

  return (
    <section id={id} className="bg-green-900 text-white">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl mx-auto justify-center text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Running Health Tips
          </h2>

          <p className="mt-4 text-gray-300">
            Whether you're a beginner or seasoned runner, following these
            essential health tips will help you stay safe, prevent injuries, and
            get the most out of your running routine.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {HealthTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4">
              <div>
                <h2 className="text-xl font-bold">{tip.Header}</h2>

                <p className="mt-1 text-lg text-gray-300">{tip.Body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Health;
