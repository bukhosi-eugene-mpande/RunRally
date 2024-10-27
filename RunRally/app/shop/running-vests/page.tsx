'use client';
// pages/shop.js
import { useState } from 'react';
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import { Navbar } from '@/components/navbar';
import Breadcrumbs from '@/components/breadcrumbs';

const RunningVestPage = () => {
  const products = [
    { name: 'RunRally Running Vest Black', price: 349, image: '/running_black.png', type: 'vest' },
    { name: 'RunRally Running Vest Brown', price: 449, image: '/running_brown.png', type: 'vest' },
    { name: 'RunRally Running Vest Pink', price: 449, image: '/running_pink.png', type: 'vest' },
    { name: 'RunRally Running Vest Yellow', price: 449, image: '/running_yellow.png', type: 'workvest' },
  ];

  // Extract unique types from the products array
  const uniqueTypes = Array.from(new Set(products.map((product) => product.type)));

  // State to hold filtered and sorted products
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Callback function to handle filtering
  const handleFilterChange = (updatedProducts : any) => {
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
          onFilterAndSort={handleFilterChange}
          onSortChange={handleSortChange} // Pass sorting function
          className="w-1/4"
        />
        {/* Display the filtered products in ProductList */}
        <ProductList products={filteredProducts} className="w-3/4" />
      </div>
    </div>
  );
};

export default RunningVestPage;
