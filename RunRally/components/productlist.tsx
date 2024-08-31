// components/ProductList.tsx
'use client';
import Image from 'next/image';

interface Product {
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { name: 'RunRally Shirt Blue', price: 349, image: '/shirt_blue.png' },
  { name: 'RunRally Shirt Black', price: 349, image: '/shirt_black.png' },
  { name: 'RunRally Visor Pink', price: 200, image: '/visor_pink.png' },
  { name: 'RunRally Visor Black', price: 200, image: '/visor_black.png' },
];

const ProductList: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {products.map((product) => (
        <div
          key={product.name}
          className="flex items-center bg-white p-4 shadow rounded"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={80}
            height={80}
          />
          <div className="ml-4 flex-1">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p>R {product.price}</p>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600">
              <i className="fas fa-cart-plus"></i>
            </button>
            <button className="text-gray-600">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
