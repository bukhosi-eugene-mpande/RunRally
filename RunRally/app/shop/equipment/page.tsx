// pages/shop.js
import Dropdown from '../../../components/dropdown';
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import { Navbar } from '@/components/navbar';

const EquipmentPage = () => {
  const products = [
    {
      name: 'Running Arm Holster',
      price: 150,
      image: '/Arm_pocket.png',
      type: 'armholder',
    },
    {
      name: 'Letscom In-Ear Earphones',
      price: 449,
      image: '/Earphones.png',
      type: 'earphones',
    },
    {
      name: 'Heart Rate Monitor',
      price: 549,
      image: '/exercise_monitor.png',
      type: 'fitbit',
    },
    {
      name: 'Stainless Steel Water Bottle 500ml',
      price: 200,
      image: '/waterBottle.png',
      type: 'bottle',
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

export default EquipmentPage;
