import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-white font-bold text-xl cursor-pointer">My Website</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/">
              <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer">Products</span>
            </Link>
            <Link href="/Cart">
              <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer">Cart</span>
            </Link>
            <Link href="/About">
              <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer">Contact</span>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex bg-green-400 items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <span className="text-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
