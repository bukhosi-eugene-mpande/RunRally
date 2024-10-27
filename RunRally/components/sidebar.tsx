// components/sidebar.js
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  products: any[];
  types: string[]; // Array of types for filtering
  onFilterAndSort: (updatedProducts: any[]) => void;
  onSortChange: (sortOption: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  products,
  types,
  onFilterAndSort,
  onSortChange,
  ...props
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>(''); // State for type filter
  const [sortOption, setSortOption] = useState<string>(''); // State for sorting

  const categories = [
    { name: 'Merchandise', path: '/shop/merchandise' },
    { name: 'Running vests', path: '/shop/running-vests' },
    { name: 'Fitness devices', path: '/shop/fitbit' },
    { name: 'Equipment', path: '/shop/equipment' },
  ];

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentCategory = categories.find((category) => category.path === pathname);
    if (currentCategory) {
      setActiveCategory(currentCategory.name);
    }
  }, [pathname, categories]);

  const handleCategoryClick = (category: { name: string; path: string }) => {
    setActiveCategory(category.name);
    localStorage.setItem('activeCategory', category.name);
    router.push(category.path);
  };

  // Handle type filter change
  const handleTypeFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);

    // Filter products based on selected type
    const filteredProducts = selectedType
      ? products.filter((product) => product.type === selectedType)
      : products;

    onFilterAndSort(filteredProducts);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);
    onSortChange(selectedSort);
  };

  return (
    <aside className={`rounded bg-green-500 p-4 w-64 shadow-2xl ${className}`} {...props}>
      <ul>
        {categories.map((category) => (
          <li
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className={`text-white px-4 py-2 mb-2 cursor-pointer text-center font-bold ${
              activeCategory === category.name
                ? 'bg-green-600 font-bold rounded'
                : 'hover:bg-green-600 rounded'
            }`}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <hr className="border-t border-gray-100 my-4" />

      {/* Type Filter Section */}
      <div className="mb-4">
        <label htmlFor="type-filter" className="sr-only">Filter by Type</label>
        <select
          id="type-filter"
          value={selectedType}
          onChange={handleTypeFilterChange}
          className="w-full py-1 px-2 bg-green-500 text-white hover:bg-green-600 rounded cursor-pointer"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <hr className="border-t border-gray-100 my-4" />

      {/* Sorting Section */}
      <div className="mb-4">
        <label htmlFor="sort" className="sr-only">Sort By</label>
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
    </aside>
  );
};

export default Sidebar;
