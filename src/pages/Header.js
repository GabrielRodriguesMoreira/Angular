import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-t from-gray-200 to-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-gray-800 font-bold text-xl">My Website</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/">
              <span className="text-gray-800 hover:text-gray-400 px-4 py-2 rounded-md text-lg font-medium duration-200">Produtos</span>
            </Link>
            <Link href="/About">
              <span className="text-gray-800 hover:text-gray-400 px-4 py-2 rounded-md text-lg font-medium duration-200">Carrinho</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-800 hover:text-gray-400 px-4 py-2 rounded-md text-lg font-medium duration-200">Contato</span>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex bg-green items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              <spaniOutlineMenu />
            </button>
          </div>
        </div>
      </div>
  
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <span className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
  
};

export default Header;
