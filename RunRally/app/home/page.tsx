// pages/shop.js
import dynamic from 'next/dynamic';
import Dropdown from '@/components/dropdown';
import ProductList from '@/components/productlist';
import Sidebar from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { Banner } from '@/components/home/banner';
import { Health } from '@/components/home/health';
import { Stories } from '@/components/home/stories';
import { Events } from '@/components/home/events';
import { Shop } from '@/components/home/shop';
import { About } from '@/components/home/about';
import { Footer } from '@/components/home/footer';

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <Banner id="Banner"/>
      <Health id="Health"/>
      <Stories id="Stories"/>
      <Events id="Events"/>
      <Shop id="Shop"/>
      <About id="About"/>
      <Footer />
    </div>
  );
};

export default Home;
