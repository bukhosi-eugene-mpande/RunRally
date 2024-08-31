// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';

const FitBitPage = () => {
  const products = [
    { name: 'Apple Watch', price: 349, image: '/apple_watch.png' },
    { name: 'Garmin Movement Watch', price: 349, image: '/garmin.png' },
    { name: 'Polar Activity Watch', price: 200, image: '/polar.png' },
    { name: 'Fitbit Activity Tracker', price: 200, image: '/Fitbit.png' },
    { name: 'Fitbit Exercise Tracker', price: 150, image: '/fitbit_2.png' },
    { name: 'Xiaomi Fit Watch', price: 150, image: '/fitwatch.png' },
  ];
  return (
    <div className="flex p-4 space-x-4">
      {' '}
      {/* Flexbox layout and spacing between children */}
      <Sidebar className="w-1/4" /> {/* Sidebar takes up 1/4 of the width */}
      <ProductList products={products} className="w-3/4" />
      {/* ProductList takes up 3/4 of the width */}
    </div>
  );
};

export default FitBitPage;
