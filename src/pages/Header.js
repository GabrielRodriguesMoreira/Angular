import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { cartItemsState } from '../services/CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useRecoilValue(cartItemsState);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-blue-400 shadow-lg ">
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
              <Link href="/Admin">
                <span className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer">Admin</span>
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
                className="text-white p-2 rounded-md hover:bg-blue-200 duration-200 mr-2 text-2xl"
              >
                <AiOutlineMenu />
              </button>
              <Link href="/Cart">
                <span className="relative ">
                  <span className="text-white hover:text-blue-200 px-4 py-2 text-2xl duration-200 cursor-pointer">
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
            <div
              ref={mobileMenuRef}
              className="fixed right-0 top-0  bg-gradient-to-b from-blue-400 to-purple-500 h-screen w-40 z-50 shadow-lg border-l-2 border-white"
            >
              <div className="flex flex-col h-full py-4 gap-2 w-full">
                <Link href="/" className='border-b border-white w-full'>
                  <span className="text-white hover:text-blue-200 py-2 px-1 text-lg font-medium cursor-pointer ">Products</span>
                </Link>
                <Link href="/About" className='border-b border-white w-full'>
                  <span className="text-white hover:text-blue-200 py-2 px-1 text-lg font-medium cursor-pointer ">Contact</span>
                </Link>
                <Link href="/Admin" className='border-b border-white w-full'>
                  <span className="text-white hover:text-blue-200 py-2 px-1 text-lg font-medium cursor-pointer ">Admin</span>
                </Link>
              </div>
              
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
