'use client';
import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <motion.div
        className="bg-white h-full pt-16"
        initial={{ opacity: 0, y: 20 }}  // Start transparent and slightly offset
        animate={{ opacity: 1, y: 10 }}   // Fade in and move to original position
        exit={{ opacity: 0, y: 20 }}     // Fade out and move slightly down on exit
        transition={{ duration: 0.5, ease: 'easeOut' }} // Customize timing
      >
        {children}
      </motion.div>
    </div>
  );
}
