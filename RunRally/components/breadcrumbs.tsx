'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  // Split the current path and remove empty strings
  const pathnames = pathname.split('/').filter((x) => x);

  // Helper function to format breadcrumb labels
  const formatBreadcrumbLabel = (value: string) => {
    if (value === 'fitbit') return 'Fitness Device';
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <ol className="flex items-center whitespace-nowrap">
      {/* Static breadcrumb for Home */}
      <li className="inline-flex items-center">
        <Link
          href="/home"
          className="flex items-center text-2xl text-gray-600 hover:text-gray-700 focus:outline-none focus:text-gray-600"
        >
          Home
        </Link>
        <svg
          className="shrink-0 mx-2 size-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>

      {/* Dynamically generated breadcrumbs based on the current path */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <li
            key={to}
            className="inline-flex items-center text-2xl font-semibold text-gray-300 truncate"
            aria-current="page"
          >
            {formatBreadcrumbLabel(value)}
          </li>
        ) : (
          <li key={to} className="inline-flex items-center">
            <Link
              href={to}
              className="flex items-center text-2xl text-gray-600 hover:text-gray-700 focus:outline-none focus:text-gray-600"
            >
              {formatBreadcrumbLabel(value)}
            </Link>
            <svg
              className="shrink-0 mx-2 size-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumbs;
