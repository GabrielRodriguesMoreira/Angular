import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { cartItemsState } from '../services/CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useRecoilValue(cartItemsState);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <Link href="/About">
              <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer">Contact</span>
            </Link>
            <Link href="/Cart">
              <span className="relative">
                <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md sm:text-2xl font-medium duration-200 cursor-pointer">
                  <AiOutlineShoppingCart />
                </span>
                {cartCount > 0 && (
                  <span className="absolute -top-[-5px] -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {cartCount}
                  </span>
                )}
              </span>
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md hover:bg-blue-200 duration-200 mr-2"
            >
              <AiOutlineMenu />
            </button>
            <Link href="/Cart">
              <span className="relative ">
                <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md sm:text-2xl font-medium duration-200 cursor-pointer">
                  <AiOutlineShoppingCart />
                </span>
                {cartCount > 0 && (
                  <span className="absolute -top-[-5px] -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {cartCount}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden flex flex-col mt-2">
            <Link href="/">
              <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer">Products</span>
            </Link>
            <Link href="/About">
              <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer">Contact</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
