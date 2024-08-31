// pages/shop.js
import Dropdown from '../../components/dropdown';

const ShopPage = () => {
  return (
    <div className="p-4">
      <nav className="flex space-x-8">
        <Dropdown />
        <a href="#" className="text-black">
          ABOUT US
        </a>
      </nav>
    </div>
  );
};

export default ShopPage;
