import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, query, where } from '@firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function loadProdutos() {
    setIsLoading(true);
    let querySnapshot;
    if (searchTerm) {
      const q = query(collection(db, 'products'), where('tags', 'array-contains', searchTerm.toLowerCase()));
      querySnapshot = await getDocs(q);
    } else {
      querySnapshot = await getDocs(collection(db, 'products'));
    }
    setProdutos(querySnapshot.docs.map((doc) => doc.data()));
    setIsLoading(false);
  }

  useEffect(() => {
    loadProdutos();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div style={{ width: '100%', height: '0', paddingBottom: '30%', position: 'relative' }}>
        <Image src="/featured.jpg" alt="large highlighted image" fill cover center />
      </div>

      <div className="w-full p-6 pl-20 pr-20">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full bg-white border border-gray-300 rounded-lg px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          produtos.map((element) => (
            <div key={element.id} className="bg-white p-2 rounded-lg shadow-xl transition duration-300 relative">
              <Link href={`/product/${element.id}`} passHref>
                <span className="hover:text-blue-400">
                  <img src={element.image} alt={element.name} className="w-full mb-2 rounded-md" />
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{element.name}</h2>
                    <p className="text-base text-gray-600 mb-2">{element.description}</p>
                  </div>
                  <p className="absolute bottom-0 right-0 bg-blue-400 text-white rounded-tr-none rounded-bl-none rounded-br-none rounded-md py-1 px-3 text-xl font-semibold">
                    ${element.price.toFixed(2)}
                  </p>
                </span>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
