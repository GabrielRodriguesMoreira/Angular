import React, { useEffect, useState } from 'react'

import {db} from '../services/firebase'
import { collection, getDocs } from '@firebase/firestore';

const Products = () => {


  const [produtos, setprodutos] = useState([])
async function load_produtos() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    setprodutos(produtos => [...produtos, doc.data()]);
  });
}

useEffect(() => {
  load_produtos()
}, []);

  return (
    <div className="bg-light-metalic">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {
            produtos?.map(function (element = {}) {
              return (
                <div className='comment_box'>
                  <a key={element.id} href={`/product/${element.id}`} className="my-3 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col m-2 bg-gray-200">
                    <div className="relative h-64">
                      <img src={element.image} alt={element.name} className="w-full h-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-4">
                      <h2 className="font-bold text-xl mb-2">{element.name}</h2>
                      <p className="text-gray-700 mb-4">{element.description}</p>
                      <p className="font-bold text-xl">${element.price.toFixed(2)}</p>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default Products
