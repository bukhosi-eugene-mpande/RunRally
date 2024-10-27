'use client';
// pages/shop/fitbit.js
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import Breadcrumbs from '../../../components/breadcrumbs';
import { Navbar } from '@/components/navbar';
import { useState } from 'react';

const FitBitPage = () => {
  const products = [
    { name: 'Apple Watch', price: 349, image: '/apple_watch.png', type: 'Smartwatch' },
    { name: 'Garmin Movement Watch', price: 349, image: '/garmin.png', type: 'Smartwatch' },
    { name: 'Polar Activity Watch', price: 200, image: '/polar.png', type: 'Smartwatch' },
    { name: 'Fitbit Activity Tracker', price: 200, image: '/Fitbit.png', type: 'Activity Tracker' },
    { name: 'Fitbit Exercise Tracker', price: 150, image: '/fitbit_2.png', type: 'Activity Tracker' },
    { name: 'Xiaomi Fit Watch', price: 150, image: '/fitwatch.png', type: 'Smartwatch' },
  ];

  // Extract unique types from the products array
  const uniqueTypes = Array.from(new Set(products.map((product) => product.type)));

  // State to hold the filtered and sorted products
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Callback function to handle filtering
  const handleFilterAndSort = (updatedProducts : any) => {
    setFilteredProducts(updatedProducts);
  };

  // Callback function to handle sorting
  const handleSortChange = (sortOption : any) => {
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
        {/* Pass products, types, and sorting callback to Sidebar */}
        <Sidebar
          products={products}
          types={uniqueTypes} // Pass unique types to Sidebar
          onFilterAndSort={handleFilterAndSort}
          onSortChange={handleSortChange} // Pass sorting function
          className="w-1/4"
        />
        {/* Display the filtered products in ProductList */}
        <ProductList products={filteredProducts} className="w-3/4" />
      </div>
    </div>
  );
};

export default FitBitPage;
