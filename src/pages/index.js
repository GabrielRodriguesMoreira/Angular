import React, { useEffect, useState, memo } from 'react';
import { db } from '../services/firebase';
import WhatsAppButton from '../services/WhatsAppButton';
import { collection, getDocs, query, where } from '@firebase/firestore';

const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function loadProdutos() {
    let querySnapshot;
    if (searchTerm) {
      const q = query(collection(db, 'products'), where('tags', 'array-contains', searchTerm.toLowerCase()));
      querySnapshot = await getDocs(q);
    } else {
      querySnapshot = await getDocs(collection(db, 'products'));
    }
    setProdutos(querySnapshot.docs.map((doc) => doc.data()));
  }

  useEffect(() => {
    loadProdutos();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <WhatsAppButton className="fixed bottom-4 right-4 p-2 rounded-full bg-green-500 text-white cursor-pointer" />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full max-w-sm p-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {produtos?.map((element = {}) => (
            <div key={element.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <a href={`/product/${element.id}`} className="block">
                <img src={element.image} alt={element.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{element.name}</h2>
                  <p className="text-gray-600 mb-2">{element.description}</p>
                  <p className="font-semibold text-gray-800">${element.price.toFixed(2)}</p>
                  <p className="text-gray-500">{element.id}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Products);
