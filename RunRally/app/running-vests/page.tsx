// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';

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
    <div className="flex p-4 space-x-4">
      {' '}
      {/* Flexbox layout and spacing between children */}
      <Sidebar className="w-1/4" /> {/* Sidebar takes up 1/4 of the width */}
      <ProductList products={products} className="w-3/4" />
      {/* ProductList takes up 3/4 of the width */}
    </div>
  );
};

export default RunningVestPage;
