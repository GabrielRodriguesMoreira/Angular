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
              <nav className="text-gray-800 font-bold text-xl">My Website</nav>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/">
              <nav className="text-gray-800 hover:text-gray-400 px-4 py-2 rounded-md text-lg font-medium duration-200">Produtos</nav>
            </Link>
            <Link href="/About">
              <nav className="text-gray-800 hover:text-gray-400 px-4 py-2 rounded-md text-lg font-medium duration-200">Carrinho</nav>
            </Link>
            <Link href="/contact">
              <nav className="text-gray-800 hover:text-gray-400 px-4 py-2 rounded-md text-lg font-medium duration-200">Contato</nav>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex bg-green items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none"
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
              <nav className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</nav>
            </Link>
            <Link href="/about">
              <nav className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</nav>
            </Link>
            <Link href="/contact">
              <nav className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</nav>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
