// pages/shop.js
import Dropdown from '../../../components/dropdown';
import Sidebar from '../../../components/sidebar';
import ProductList from '../../../components/productlist';
import { Navbar } from '@/components/navbar';
import Breadcrumbs from '../../../components/breadcrumbs';
const RunningVestPage = () => {
  const products = [
    {
      name: 'RunRally Running Vest Black',
      price: 349,
      image: '/running_black.png',
      type: 'vest',
    },
    {
      name: 'RunRally Running Vest Brown',
      price: 449,
      image: '/running_brown.png',
      type: 'vest',
    },
    {
      name: 'RunRally Running Vest Pink',
      price: 449,
      image: '/running_pink.png',
      type: 'vest',
    },
    {
      name: 'RunRally Running Vest Yellow',
      price: 449,
      image: '/running_yellow.png',
      type: 'workvest',
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

export default RunningVestPage;
