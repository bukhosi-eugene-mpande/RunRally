// pages/shop.js
import dynamic from 'next/dynamic';
import Dropdown from '../../../components/dropdown';
import ProductList from '../../../components/productlist';
import Sidebar from '../../../components/sidebar';
import { Navbar } from '@/components/navbar';
import Breadcrumbs from '@/components/breadcrumbs';

const MerchPage = () => {
  const products = [
    {
      name: 'RunRally Shirt Blue',
      price: 349,
      image: '/shirt_blue.png',
      type: 'shirt',
    },
    {
      name: 'RunRally Shirt Black',
      price: 349,
      image: '/shirt_black.png',
      type: 'shirt',
    },
    {
      name: 'RunRally Visor Pink',
      price: 200,
      image: '/visor_pink.png',
      type: 'cap',
    },
    {
      name: 'RunRally Visor White',
      price: 200,
      image: '/visor_white.png',
      type: 'cap',
    },
    {
      name: 'RunRally Cap Red',
      price: 150,
      image: '/cap_red.png',
      type: 'cap',
    },
    {
      name: 'RunRally Cap Pink',
      price: 150,
      image: '/cap_pink.png',
      type: 'cap',
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      {/* Add margin or padding to create space between the navbar and breadcrumbs */}
      <div className="mt-8 px-8">
        <Breadcrumbs />
      </div>
      <div className="flex p-8 space-x-4 pt-4">
        <Sidebar className="w-1/4" />
        <ProductList products={products} className="w-3/4" />
      </div>
    </div>
  );
};

export default MerchPage;
