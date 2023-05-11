import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase.js'; // Replace 'path/to/firebase.js' with the actual path to your firebase.js file

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productRef = doc(db, 'products', id); // Assuming 'products' is the collection name in your Firestore

        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          setProduct(productData);
        } else {
          console.log('Product not found');
        }
      } catch (error) {
        console.error('Error retrieving product:', error);
      }
    };

    getProductDetails();
  }, [id]);

  return (
    <div className="bg-blue-400 min-h-screen flex justify-center items-center">
      {product && (
        <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto flex flex-col items-center">
          <div className="flex justify-end ">
            <img src={product.image} className="h-16 w-16  right-0 top-0 mt-4 mr-4" alt="Product Image" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          </div>
          <div className="flex justify-between w-full mb-4">
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">Price</p>
              <p className="text-xl">${product.price}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">Sizes</p>
              <p className="text-xl">X, XL</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">Color</p>
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
            BUY
          </button>
          <div className="mt-8">
            <p className="text-gray-600">Additional details:</p>
            <ul className="list-disc list-inside">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full mt-8 animate-spin"></div>
        </div>
      )}
    </div>
  );
  
  
}
