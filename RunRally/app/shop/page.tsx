// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';

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
    <div className="flex p-4 space-x-4">
      {' '}
      {/* Flexbox layout and spacing between children */}
      <Sidebar className="w-1/4" /> {/* Sidebar takes up 1/4 of the width */}
      <ProductList products={products} className="w-3/4" />
      {/* ProductList takes up 3/4 of the width */}
    </div>
  );
};

export default ShopPage;
