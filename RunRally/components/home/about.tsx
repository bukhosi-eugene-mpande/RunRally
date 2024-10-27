'use client';
import React, { useState } from 'react';

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id}>
      <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8 bg-green-900 text-white ">
        <div className="max-w-xl mx-auto justify-center text-center pt-3">
          <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>

          <p className="mt-4 text-white text-xl">
            Igniting Your Running Journey With Every Step
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Diverse group of runners at sunrise"
              src="/marathon.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-200">
              <p>
                At Run Rally, we believe every stride tells a story and every
                runner has the potential to inspire. Founded in 2024, we're more
                than just an ecommerce platform – we're a community dedicated to
                transforming lives through the simple act of running. Whether
                you're taking your first steps or chasing your next personal
                best, we're here to support your journey with premium gear,
                expert guidance, and an unwavering commitment to your success.
              </p>

              <p>
                Our mission goes beyond selling running equipment. We're
                passionate about creating an inclusive space where beginners
                feel welcomed, intermediate runners find their groove, and
                experienced athletes push their boundaries. Through our
                carefully curated collection of running gear, educational
                resources, and community events, we're building a movement that
                celebrates every runner's unique path.
              </p>

              <p>
                What sets Run Rally apart is our dedication to personalized
                service and community building. Our team of experienced runners
                carefully selects each product, tests new gear, and provides
                honest recommendations based on your individual needs. We
                organize local running events, maintain an active blog with
                training tips, and foster a supportive online community where
                runners can share their triumphs and challenges.
              </p>

              <p>
                Join us in our mission to make running accessible, enjoyable,
                and rewarding for everyone. Whether you're running for fitness,
                mental clarity, competition, or pure joy, Run Rally is your
                trusted partner in this incredible journey. Together, let's
                create a world where every run is an opportunity for growth,
                connection, and achievement.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
