import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase.js'; // Replace 'path/to/firebase.js' with the actual path to your firebase.js file
import { RiShareBoxLine } from 'react-icons/ri';


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
    <div className="bg-gray-100 py-8 px-4 sm:px-8">
      {product && (
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
            </div>
            <div className="lg:w-2/3 p-6">
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-2xl font-bold mb-2">${product.price}</p>
              <div className="flex items-center mb-4">
                {/* Custom amount UI element */}
                <div className="relative inline-flex">
                  <button
                    type="button"
                    className="bg-blue-400 text-white py-2 px-4 rounded-l-lg shadow-md hover:bg-blue-500"
                  >
                    -
                  </button>
                  <span className="bg-blue-100 text-gray-700 py-2 px-4">1</span>
                  <button
                    type="button"
                    className="bg-blue-400 text-white py-2 px-4 rounded-r-lg shadow-md hover:bg-blue-500"
                  >
                    +
                  </button>
                </div>
                <button className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md ml-4 hover:bg-blue-500">
                  Add to Cart
                </button>
                <button className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md ml-2 hover:bg-blue-500">
                  {/* Replace with your desired icon */}
                  Share
                </button>
              </div>
              <div className="text-gray-600">
                <p className="font-bold">Specifications:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Material: 123</li>
                  <li>Size: 123</li>
                  <li>Color: 123</li>
                  <li>Weight: 123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Recommended Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder boxes with image, name, and price */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            <div className="flex justify-center">
              <div className="bg-gray-300 h-48 w-full"></div>
            </div>
            <div className="mt-4">
              <div className="bg-gray-300 h-4 w-2/3"></div>
              <div className="bg-gray-300 h-4 w-1/2 mt-2"></div>
              <div className="bg-gray-300 h-4 w-1/4 mt-2"></div>
            </div>
          </div>
          {/* Repeat the above placeholder boxes as needed */}
        </div>
      </section>
    </div>
  );
};
