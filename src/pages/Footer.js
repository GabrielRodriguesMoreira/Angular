import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 py-4 text-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <p className="text-center">&copy; {new Date().getFullYear()} Product Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
