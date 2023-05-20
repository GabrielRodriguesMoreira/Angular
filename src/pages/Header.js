import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { cartItemsState } from '../services/CartContext';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const cartItems = useRecoilValue(cartItemsState);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const PASSWORD_KEY = process.env.NEXT_PUBLIC_PASSWORD_KEY;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAdminClick = () => {
    setShowPasswordPrompt(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (password === PASSWORD_KEY) {

      window.location.href = '/Admin';
    } else {
      // Invalid password, show error message
      alert('Invalid password');
    }

    // Reset the password field
    setPassword('');
    // Close the password prompt
    setShowPasswordPrompt(false);
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
            <button
              className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer"
              onClick={handleAdminClick}
            >
              Admin
            </button>
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
            <button
              className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-lg font-medium duration-200 cursor-pointer"
              onClick={handleAdminClick}
            >
              Admin
            </button>
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
      {showPasswordPrompt && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-70 z-10">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-medium mb-4">Enter Admin Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
