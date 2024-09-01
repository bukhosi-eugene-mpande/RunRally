// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';
import { Navbar } from '@/components/navbar';
const RunningVestPage = () => {
  const products = [
    {
      name: 'RunRally Running Vest Black',
      price: 349,
      image: '/running_black.png',
    },
    {
      name: 'RunRally Running Vest Brown',
      price: 449,
      image: '/running_brown.png',
    },
    {
      name: 'RunRally Running Vest Pink',
      price: 449,
      image: '/running_pink.png',
    },
    {
      name: 'RunRally Running Vest Yellow',
      price: 449,
      image: '/running_yellow.png',
    },
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

export default RunningVestPage;
