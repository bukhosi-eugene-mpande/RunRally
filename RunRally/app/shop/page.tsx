// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';
import { Navbar } from '@/components/navbar';

const ShopPage = () => {
  const products = [
    { name: 'RunRally Shirt Blue', price: 349, image: '/shirt_blue.png' },
    { name: 'RunRally Shirt Black', price: 349, image: '/shirt_black.png' },
    { name: 'RunRally Visor Pink', price: 200, image: '/visor_pink.png' },
    { name: 'RunRally Visor White', price: 200, image: '/visor_white.png' },
    { name: 'RunRally Cap Red', price: 150, image: '/cap_red.png' },
    { name: 'RunRally Cap Pink', price: 150, image: '/cap_pink.png' },
  ];

  return (
    <div>
      {/* Container for the fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Main content area with additional margin to account for the fixed Navbar height */}
      <div className="flex p-4 space-x-4 mt-28">
        {' '}
        {/* Adjust the top margin here */}
        <Sidebar className="w-1/4" /> {/* Sidebar adjusted for layout */}
        <ProductList products={products} className="w-3/4" />{' '}
        {/* ProductList adjusted for layout */}
      </div>
    </div>
  );
};

export default ShopPage;
