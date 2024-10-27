'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[];
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
      [productName]: !prevState[productName],
    }));
  };

  return (
    <div
      className={`rounded flex flex-col space-y-6 w-full ${className}`}
      {...props}
    >
      {products.map((product) => (
        <div
          key={product.name}
          className="flex border bg-white items-center p-6 space-y-6 shadow-xl rounded w-full transform transition duration-300 ease-in-out"
        >
          <Link
            href={`/shop/product?type=${encodeURIComponent(product.type)}`}
            passHref
            className="flex items-center flex-1 cursor-pointer w-full"
          >
            <div className="border bg-white p-2 rounded-lg">
              {' '}
              {/* White background with padding and rounded edges */}
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className="rounded-lg" // This will make the image edges rounded
              />
            </div>
            <div className="ml-4 flex-1 flex flex-col items-center justify-center  w-full">
              <h2 className="font-semibold text-2xl">{product.name}</h2>
              <p className="text-xl font-semibold">R {product.price}</p>
            </div>
          </Link>
          <div className="flex flex-col space-y-3">
            <button
              className=" hover:scale-110 hover:text-green-700 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faCartPlus} size="lg" />
            </button>
            <button
              className={` hover:text-red-600 hover:scale-110 cursor-pointer ${
                activeHearts[product.name] ? 'text-red-600' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleHeartClick(product.name);
              }}
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
