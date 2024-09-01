'use client';
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handles setting the active item
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  // List of items
  const items = [
    'PARKRUN ID & APPAREL',
    'SPORT ICE ID',
    'MEDICAL ICE ID',
    'LADIES ICE ID',
    'MENS ICE ID',
    'KIDS ICE ID',
    'PET ICE ID',
    'BADGES FOR PRO’S',
    'ALL PRODUCTS',
    'SPARE PARTS',
    'GIFT VOUCHERS',
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-red-500 font-bold focus:outline-none"
      >
        SHOP
        {isOpen ? (
          <span className="ml-2">&uarr;</span> // Arrow up when open
        ) : (
          <span className="ml-2">&darr;</span> // Arrow down when closed
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <ul className="py-2">
            {items.map((item) => (
              <li
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  activeItem === item
                    ? 'text-red-500 font-bold focus:outline-none'
                    : ''
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
