'use client';
// pages/shop.js
import { motion } from 'framer-motion';
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

// Define transition settings
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Wrap each section in motion.div for transitions */}
      <motion.div
        
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Banner id="Banner"/>
      </motion.div>

      <motion.div
        id="Health"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <Health id="Health"/>
      </motion.div>

      <motion.div
        id="Stories"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
      >
        <Stories id="Stories"/>
      </motion.div>

      <motion.div
        id="Events"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
      >
        <Events id="Events" />
      </motion.div>

      <motion.div
        id="Shop"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
      >
        <Shop id="Shop"/>
      </motion.div>

      <motion.div
        id="About"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
      >
        <About id="About"/>
      </motion.div>

      <motion.div
        id="Footer"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
