'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter and usePathname hooks
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Extend HTMLAttributes to include className and other props
const Sidebar: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = [
    'Running vests',
    'Merchandise',
    'Fitness devices',
    'Equipment',
  ];
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Map URL paths to categories
  const routeMap: Record<string, string> = {
    '/running-vests': 'Running vests',
    '/shop': 'Merchandise',
    '/fitbit': 'Fitness devices',
    '/equipment': 'Equipment',
  };

  // Update active category based on current pathname
  useEffect(() => {
    const currentCategory = routeMap[pathname];
    if (currentCategory) {
      setActiveCategory(currentCategory);
    }
  }, [pathname, routeMap]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    // Save the active category to local storage
    localStorage.setItem('activeCategory', category);

    // Navigate to the corresponding route
    const categoryPath = Object.entries(routeMap).find(
      ([, value]) => value === category,
    )?.[0];

    if (categoryPath) {
      router.push(categoryPath);
    }
  };

  return (
    <aside
      className={`border rounded bg-green-500 p-4 w-64 ${className}`} // Apply passed className
      {...props} // Spread other HTML attributes
    >
      <div className="relative w-full mb-4">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-10 py-1 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`text-white px-4 py-2 mb-2 cursor-pointer text-center font-bold ${
              activeCategory === category
                ? 'bg-green-600 font-bold rounded'
                : 'hover:bg-green-600 rounded'
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;