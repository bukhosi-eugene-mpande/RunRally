'use client';
import React, { useState } from 'react';

interface StoriesProps {
  id: string;
}

export const Stories: React.FC<StoriesProps> = ({ id }) => {
  const Stories = [
    {
      Header: 'From Couch to Marathon',
      Body: 'Sarah, a 45-year-old mother of three, never thought she could run a mile. Starting with just 60 seconds of running at a time, she gradually built up her endurance. Two years later, she crossed the finish line of her first marathon, proving it`s never too late to start.',
      Picture: '/marathon.jpg',
    },
    {
      Header: 'Running Through Recovery',
      Body: 'After a car accident left him with a severe leg injury, James was told he might never run again. Through dedication and physical therapy, he not only recovered but went on to complete an ultramarathon, inspiring others in rehabilitation.',
      Picture: '/recovery.jpg',
    },
    {
      Header: 'Community Champions',
      Body: 'What started as a small running group of five friends turned into a 200-member strong community that has raised over R50,000 for local charities. They organize weekly runs and mentor newcomers, showing how running can build meaningful connections.',
      Picture: '/champions.jpg',
    },
    {
      Header: 'Running for Mental Health',
      Body: 'David discovered running during his battle with depression. The daily routine of morning runs helped him find structure, peace, and eventually joy. Now he leads a mental health running group, helping others find their path to wellness through movement.',
      Picture: '/mental.jpg',
    },
    {
      Header: 'The 50-Year-Old Sprinter',
      Body: 'Eleanor started running at 20 and now holds multiple age-group records at 50. She proves that age is just a number, competing in masters events and inspiring seniors to stay active. Her motto: "Every step is a victory."',
      Picture: '/old.jpg',
    },
    {
      Header: 'Team Spirit Triumph',
      Body: 'When Lisa, a visually impaired runner, wanted to compete in marathons, local runners stepped up to be her guides. Together, they`ve completed dozens of races, demonstrating how running brings out the best in human connection.',
      Picture: '/team.jpg',
    },
  ];

  return (
    <section id={id} className="bg-white text-black">
      <div className="container p-2 mx-auto sm:space-y-12">
        <div className="max-w-xl mx-auto justify-center text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Stories</h2>
        </div>
        <div className="block rounded-xl max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-200">
          <img
            src="/club.jpg"
            alt="Featured runner"
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-300"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl">
              Finding Hope Through Running
            </h3>
            <span className="text-xs">Featured Story</span>
            <p>
              After losing everything in a natural disaster, Maria found
              strength in running. She started a running club that helped
              rebuild community bonds and restore hope in her neighborhood.
              Today, her story inspires thousands to use running as a tool for
              personal and community healing.
            </p>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Stories.map((story, index) => (
            <div
              key={index}
              className="rounded-xl max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-200"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={story.Picture}
                alt={`Story about ${story.Header}`}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {story.Header}
                </h3>
                <p>{story.Body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
