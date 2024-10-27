'use client';
// pages/shop.js
import { useState } from 'react';
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import Breadcrumbs from '@/components/breadcrumbs';
import { Navbar } from '@/components/navbar';

const MerchPage = () => {
  const products = [
    { name: 'RunRally Shirt Blue', price: 349, image: '/shirt_blue.png', type: 'shirt' },
    { name: 'RunRally Shirt Black', price: 349, image: '/shirt_black.png', type: 'shirt' },
    { name: 'RunRally Visor Pink', price: 200, image: '/visor_pink.png', type: 'cap' },
    { name: 'RunRally Visor White', price: 200, image: '/visor_white.png', type: 'cap' },
    { name: 'RunRally Cap Red', price: 150, image: '/cap_red.png', type: 'cap' },
    { name: 'RunRally Cap Pink', price: 150, image: '/cap_pink.png', type: 'cap' },
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
  const handleSortChange = (sortOption  : any) => {
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

export default MerchPage;
