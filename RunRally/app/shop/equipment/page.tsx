// pages/shop.js
import Dropdown from '../../../components/dropdown';
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import { Navbar } from '@/components/navbar';
import Breadcrumbs from '../../../components/breadcrumbs';

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

export default EquipmentPage;
