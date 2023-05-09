import React, { useEffect, useState, memo } from 'react';
import { db } from '../services/firebase';
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
      querySnapshot = await getDocs(collection(db, "products"));
    }
    setProdutos(querySnapshot.docs.map(doc => doc.data()));
  }

  useEffect(() => {
    loadProdutos();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <input type='text' className='border border-gray-300 rounded-md p-2 w-full md:w-1/2' placeholder='Search products...' value={searchTerm} onChange={handleSearch} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {produtos?.map((element = {}) => (
            <div key={element.id} className="bg-white shadow overflow-hidden rounded-lg">
              <a href={`/product/${element.id}`}>
                <img src={element.image} alt={element.name} className="w-full h-48 object-cover" />
                <div className="px-4 py-2">
                  <h2 className="text-lg font-semibold text-gray-900">{element.name}</h2>
                  <p className="text-sm text-gray-500">{element.description}</p>
                  <p className="mt-2 font-semibold text-gray-900">${element.price.toFixed(2)}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default memo(Products);
