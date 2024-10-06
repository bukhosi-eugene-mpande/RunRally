'use client';
import React, { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { User } from '@nextui-org/react';
import { ShoppingCartIcon, Logo } from '@/components/icons';

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  // Simulated list of items for the dropdown
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
  ];

  // Handle the input change and filter the dropdown items
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter the items based on the input value
    if (value) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      className="bg-green-500 h-16" // Reduced height of the navbar
    >
      {/* Logo section with RunRally text and Logo next to each other */}
      <li className="list-none p-1 m-1">
        <div className="flex items-center gap-2">
          {' '}
          {/* Flex container to align items */}
          <a href="/">
            <h1 className="text-white text-2xl font-semibold">RunRally</h1>
          </a>
          <Logo
            src=""
            alt="Logo"
            className="h-8 w-10" // Adjust height and width to fit the navbar
          />
        </div>
      </li>

      {/* Search bar centered */}
      <div className="relative flex justify-center  px-16 w-full py-1">
        <Input
          isClearable
          type="search"
          placeholder="Search"
          className="w-full max-w-lg text-center rounded-full py-1.5"
          value={searchTerm}
          onChange={handleInputChange}
        />

        {/* Dropdown menu */}
        {filteredItems.length > 0 && (
          <div className="absolute top-full mt-2 w-full max-w-lg bg-white border border-gray-300 shadow-lg rounded-md z-10">
            <ul>
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(item); // Set the clicked item as the input value
                    setFilteredItems([]); // Clear the dropdown
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right-side content (User icon, shopping cart, etc.) */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* Orders link */}
        <NavbarItem className="hidden sm:flex gap-2">
          <Link href="/orders" className="text-lg font-semibold text-white">
            Orders
          </Link>
        </NavbarItem>

        {/* My Account link */}
        <NavbarItem className="hidden sm:flex gap-2">
          <Link href="/account" className="text-lg font-semibold text-white">
            My Account
          </Link>
        </NavbarItem>

        {/* User avatar */}
        <NavbarItem className="hidden sm:flex gap-2">
          <Link href="/admin">
            <User
              name=""
              avatarProps={{
                src: 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg',
              }}
            />
          </Link>
        </NavbarItem>

        {/* Shopping Cart Icon */}
        <NavbarItem className="hidden sm:flex gap-2">
          <div className="relative py-1 mb-2">
            <ShoppingCartIcon />{' '}
            {/* Assuming this is an imported shopping cart icon */}
          </div>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
