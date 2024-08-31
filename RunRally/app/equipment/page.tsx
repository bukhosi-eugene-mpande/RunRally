// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';

const EquipmentPage = () => {
  const products = [
    { name: 'Running Arm Holster', price: 150, image: '/Arm_pocket.png' },
    { name: 'Letscom In-Ear Earphones', price: 449, image: '/Earphones.png' },
    {
      name: 'Heart Rate Monitor',
      price: 549,
      image: '/exercise_monitor.png',
    },
    {
      name: 'Stainless Steel Water Bottle 500ml',
      price: 200,
      image: '/waterBottle.png',
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

export default EquipmentPage;
