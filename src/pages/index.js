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
    <div className="flex flex-col items-center">
      <WhatsAppButton className="px-3 py-3 fixed bottom-4 right-4 p-2 rounded-full bg-green-400 text-white cursor-pointer" />
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mb-4 mt-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full bg-white border border-gray-300 rounded-lg px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {produtos?.map((element = {}) => (
          <div key={element.id} className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
            <a href={`/product/${element.id}`} className="hover:text-blue-400">
              
              <img src={element.image} alt={element.name} className="w-full mb-2 rounded-md" />
              <div>
                <h2 className="text-xl font-semibold mb-1">{element.name}</h2>
                <p className="text-base text-gray-600 mb-2">{element.description}</p>
              </div>
              <p className="absolute bottom-0 right-0 bg-blue-400 text-white rounded-tr-none rounded-bl-none rounded-br-none rounded-md py-1 px-3 text-xl font-semibold">${element.price.toFixed(2)}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
