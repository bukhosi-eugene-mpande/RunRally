// components/Sidebar.tsx
'use client';
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = ['Running vests', 'Merchandise', 'FitBit', 'Equipment'];

  return (
    <aside className="bg-gray-200 p-4 w-64">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-2 py-1 mb-4 rounded"
      />
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 mb-2 cursor-pointer ${
              activeCategory === category
                ? 'bg-blue-100 font-bold'
                : 'hover:bg-gray-300'
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
