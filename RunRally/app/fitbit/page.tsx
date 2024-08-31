// pages/shop.js
import Dropdown from '../../components/dropdown';
import Sidebar from '../../components/sidebar';
import ProductList from '../../components/productlist';

const FitBitPage = () => {
  return (
    <div className="flex p-4 space-x-4">
      {' '}
      {/* Flexbox layout and spacing between children */}
      <Sidebar className="w-1/4" /> {/* Sidebar takes up 1/4 of the width */}
      <ProductList className="w-3/4" />{' '}
      {/* ProductList takes up 3/4 of the width */}
    </div>
  );
};

export default FitBitPage;
