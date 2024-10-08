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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<string>(''); // State for selected filter
  const [sortOption, setSortOption] = useState<string>(''); // State for sorting
  const categories = [
    'Merchandise',
    'Running vests',
    'Fitness devices',
    'Equipment',
  ];
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Map URL paths to categories
  const routeMap: Record<string, string> = {
    '/shop/merchandise': 'Merchandise',
    '/shop/running-vests': 'Running vests',
    '/shop/fitbit': 'Fitness devices',
    '/shop/equipment': 'Equipment',
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

  // Handle filter change
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  // Handle sort change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <aside
      className={`rounded bg-green-500 p-4 w-64 shadow-2xl ${className}`} // Apply shadow-lg for a 3D effect
      {...props} // Spread other HTML attributes
    >
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
      <hr className="border-t border-gray-100 my-4" />
      <div className="mb-4">
        <select
          id="sort"
          value={sortOption}
          onChange={handleSortChange}
          className="w-full py-1 px-2 bg-green-500 text-white hover:bg-green-600 rounded cursor-pointer"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <hr className="border-t border-gray-100 my-4" />
      <div className="mb-4">
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
          className="w-full py-1 px-2 bg-green-500 text-white hover:bg-green-600 rounded cursor-pointer"
        >
          <option value="">Filter By</option>
          <option value="brand">Shirts</option>
          <option value="size">Size</option>
          <option value="color">Color</option>
        </select>
      </div>
      <hr className="border-t border-gray-100 my-4" />
    </aside>
  );
};

export default Sidebar;
