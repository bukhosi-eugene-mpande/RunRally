'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

// Define the Product interface
interface Product {
  name: string;
  price: number;
  image: string;
}

// Define the props for the ProductList component
interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[]; // Add products prop
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  className,
  ...props
}) => {
  const [activeHearts, setActiveHearts] = useState<Record<string, boolean>>({});

  const handleHeartClick = (productName: string) => {
    setActiveHearts((prevState) => ({
      ...prevState,
      [productName]: !prevState[productName], // Toggle the heart state for the specific product
    }));
  };

  return (
    <div className={`flex flex-col space-y-4 ${className}`} {...props}>
      {products.map((product) => (
        <div
          key={product.name}
          className="flex items-center bg-white p-6 shadow rounded w-full transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={120}
          />
          <div className="ml-4 flex-1 flex flex-col items-center justify-center">
            <h2 className="font-semibold text-2xl">{product.name}</h2>
            <p className="text-xl font-semibold">R {product.price}</p>
          </div>
          <div className="flex flex-col space-y-3">
            <button className="text-gray-600 hover:text-green-500 hover:scale-110 cursor-pointer">
              <FontAwesomeIcon icon={faCartPlus} size="lg" />
            </button>
            <button
              className={`text-gray-600 hover:text-red-600 hover:scale-110 cursor-pointer ${
                activeHearts[product.name] ? 'text-red-600' : ''
              }`}
              onClick={() => handleHeartClick(product.name)}
            >
              <FontAwesomeIcon
                icon={
                  activeHearts[product.name] ? faSolidHeart : faRegularHeart
                }
                size="lg"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;