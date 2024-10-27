'use client';
import React, { useState } from 'react';

interface EventsProps {
  id: string;
}

export const Events: React.FC<EventsProps> = ({ id }) => {
  const featuredEvent = {
    date: '15 December',
    title: 'Twilight City Marathon',
    description:
      'Experience the magic of running through city streets lit by sunset and stars. This unique evening marathon offers a spectacular route through iconic landmarks, live entertainment, and glow-in-the-dark festivities.',
  };

  const upcomingEvents = [
    {
      date: '20 January',
      title: 'Trail Running Adventure Series',
      description:
        'Choose between 5km, 15km, or 30km routes through breathtaking nature reserves. Perfect for both beginners and experienced trail runners. Post-run breakfast included.',
      link: '#',
    },
    {
      date: '5 February',
      title: 'Charity Fun Run Challenge',
      description:
        'Join our annual charity run supporting local education initiatives. Family-friendly 5km run/walk with special kids` activities, food stalls, and live music.',
      link: '#',
    },
    {
      date: '18 March',
      title: 'Corporate Team Relay',
      description:
        'Build team spirit in this exciting 4x5km relay race. Companies compete for the championship trophy and bragging rights. Special team-building activities included.',
      link: '#',
    },
  ];

  return (
    <div id={id} className="bg-green-900 text-gray-50">
      <div className="max-w-xl p-6 mx-auto justify-center text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-white">
          Upcoming Events
        </h2>
      </div>
      <div className="container grid grid-cols-12 mx-auto">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-gray-700 lg:col-span-6 lg:h-auto"
          style={{
            backgroundImage: `url('/marathon.jpg')`,
            backgroundPosition: 'center center',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center text-gray-100">
            <span className="text-green-400 font-semibold">
              {featuredEvent.date}
            </span>
            <h1 className="py-4 text-5xl font-bold">{featuredEvent.title}</h1>
            <p className="pb-6">{featuredEvent.description}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="pt-6 pb-4 space-y-2">
              <span className="text-green-400 font-semibold">{event.date}</span>
              <h1 className="text-3xl font-bold">{event.title}</h1>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
