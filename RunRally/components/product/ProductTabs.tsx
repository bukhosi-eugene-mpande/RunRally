import React, { useState } from 'react';
import DescriptionTab from '@/components/product/description';
import ReviewTab from '@/components/product/reviews';

interface TabsProps {
  description: string;
  details: string;
}

const Tabs: React.FC<TabsProps> = ({ description, details }) => {
  const [activeTab, setActiveTab] = useState('basic-tabs-1');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      <div className="border-b border-gray-200 px-4">
        <nav
          className="flex gap-x-2"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className={`hs-tab-active:font-semibold hs-tab-active:border-green-600 hs-tab-active:text-green-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-green-600 focus:outline-none focus:text-green-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-green-500 dark:focus:text-green-500 ${activeTab === 'basic-tabs-1' ? 'font-semibold border-green-600 text-green-600' : ''}`}
            id="basic-tabs-item-1"
            aria-selected={activeTab === 'basic-tabs-1'}
            onClick={() => handleTabClick('basic-tabs-1')}
            aria-controls="basic-tabs-1"
            role="tab"
          >
            Description
          </button>
          <button
            type="button"
            className={`hs-tab-active:font-semibold hs-tab-active:border-green-600 hs-tab-active:text-green-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-xl whitespace-nowrap text-gray-500 hover:text-green-600 focus:outline-none focus:text-green-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-green-500 dark:focus:text-green-500 ${activeTab === 'basic-tabs-2' ? 'font-semibold border-green-600 text-green-600' : ''}`}
            id="basic-tabs-item-2"
            aria-selected={activeTab === 'basic-tabs-2'}
            onClick={() => handleTabClick('basic-tabs-2')}
            aria-controls="basic-tabs-2"
            role="tab"
          >
            Reviews
          </button>
        </nav>
      </div>

      <div className="mt-3 p-4">
        <div
          id="basic-tabs-1"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-1"
          className={activeTab === 'basic-tabs-1' ? '' : 'hidden'}
        >
          <DescriptionTab descrip={description} det={details} />
        </div>
        <div
          id="basic-tabs-2"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-2"
          className={activeTab === 'basic-tabs-2' ? '' : 'hidden'}
        >
          <ReviewTab />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
