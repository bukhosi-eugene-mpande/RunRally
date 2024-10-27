'use client';
// pages/shop.js
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import { Navbar } from '@/components/navbar';
import Breadcrumbs from '../../../components/breadcrumbs';
import { SetStateAction, useState } from 'react';

const EquipmentPage = () => {
  const products = [
    { name: 'Running Arm Holster', price: 150, image: '/Arm_pocket.png', type: 'armholder' },
    { name: 'Letscom In-Ear Earphones', price: 449, image: '/Earphones.png', type: 'earphones' },
    { name: 'Heart Rate Monitor', price: 549, image: '/exercise_monitor.png', type: 'fitbit' },
    { name: 'Stainless Steel Water Bottle 500ml', price: 200, image: '/waterBottle.png', type: 'bottle' },
  ];

  // Extract unique types from the products array
  const uniqueTypes = Array.from(new Set(products.map((product) => product.type)));

  // State to hold filtered and sorted products
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Callback function to handle filtering and sorting
  const handleFilterAndSort = (updatedProducts: SetStateAction<typeof products>) => {
    setFilteredProducts(updatedProducts);
  };

  // Callback function to handle sorting
  const handleSortChange = (sortOption: string) => {
    const sortedProducts = [...filteredProducts];

    if (sortOption === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="mt-8 px-8">
        <Breadcrumbs />
      </div>
      <div className="flex p-8 space-x-4 pt-4">
        <Sidebar
          className="w-1/4"
          products={products}
          types={uniqueTypes} // Pass unique types to Sidebar
          onFilterAndSort={handleFilterAndSort}
          onSortChange={handleSortChange} // Pass the sorting function
        />
        <ProductList products={filteredProducts} className="w-3/4" />
      </div>
    </div>
  );
};

export default EquipmentPage;
