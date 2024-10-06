// pages/shop.js
import Dropdown from '../../../components/dropdown';
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import Breadcrumbs from '../../../components/breadcrumbs';
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

export default FitBitPage;
