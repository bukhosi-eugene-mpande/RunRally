'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Extend HTMLAttributes to include className and other props
const Sidebar: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = ['Running vests', 'Merchandise', 'FitBit', 'Equipment'];

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
            onClick={() => setActiveCategory(category)}
            className={`text-white px-4 py-2 mb-2 cursor-pointer text-center font-bold ${
              activeCategory === category
                ? 'bg-green-600 font-bold'
                : 'hover:bg-green-600'
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
