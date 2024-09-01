// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';
import { Navbar } from '@/components/navbar';
const FitBitPage = () => {
  const products = [
    {
      name: 'Apple Watch',
      price: 349,
      image: '/apple_watch.png',
      type: 'fitbit',
    },
    {
      name: 'Garmin Movement Watch',
      price: 349,
      image: '/garmin.png',
      type: 'fitbit',
    },
    {
      name: 'Polar Activity Watch',
      price: 200,
      image: '/polar.png',
      type: 'fitbit',
    },
    {
      name: 'Fitbit Activity Tracker',
      price: 200,
      image: '/Fitbit.png',
      type: 'fitbit',
    },
    {
      name: 'Fitbit Exercise Tracker',
      price: 150,
      image: '/fitbit_2.png',
      type: 'fitbit',
    },
    {
      name: 'Xiaomi Fit Watch',
      price: 150,
      image: '/fitwatch.png',
      type: 'fitbit',
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

export default FitBitPage;
