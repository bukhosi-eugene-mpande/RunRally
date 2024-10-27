'use client';
import { motion } from 'framer-motion';

export default function FitbitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full min-h-screen -mt-4 bg-gray-100"
      initial={{ opacity: 0, y: 20 }} // Start off transparent and slightly offset
      animate={{ opacity: 1, y: 0 }}  // Fade in and move to original position
      transition={{ duration: 0.5, ease: "easeOut" }} // Customize the timing
    >
      <main className="col-span-1 lg:col-span-4 flex justify-center">
        <div className="w-full">{children}</div>
      </main>
      {/* Spans all columns */}
    </motion.div>
  );
}