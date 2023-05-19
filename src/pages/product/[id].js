import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase.js';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CartContext } from '../../services/CartContext.js';
import ShareButton from '../../services/ShareButton.js';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [amount, setAmount] = useState(1);

  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const productSnapshot = await getDoc(productRef);
        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          setProduct(productData);
          setMainImage(productData.image);
        } else {
          console.log('Product not found');
        }
      } catch (error) {
        console.error('Error retrieving product:', error);
      }
    };

    getProductDetails();
  }, [id]);

  const handleImageChange = (newImage) => {
    setMainImage(newImage);
  };

  const handleAmountChange = (event) => {
    const newAmount = parseInt(event.target.value, 10);
    setAmount(newAmount);
  };

  const handleAddToCart = (image, name, price, quantity) => {
    const product = {
      id: Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111,
      image,
      name,
      price,
      quantity,
    };
    addToCart(product);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-400 to-transparent via-blue-400 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="bg-white p-4 sm:mb-0 shadow-md rounded-lg">
            <div className="flex justify-center">
              <img src={mainImage} alt={product.name} className="w-full h-auto rounded-lg" />
            </div>
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-3 gap-5">
                <img
                  src={product.image}
                  className="w-12 h-auto cursor-pointer rounded-lg border-2 border-black p-1"
                  onClick={() => handleImageChange(product.image)}
                />
                {product.slide_images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Small Image ${index + 1}`}
                    className="w-12 h-auto cursor-pointer rounded-lg border-2 border-black p-1"
                    onClick={() => handleImageChange(image)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{product.name}</h2>
            <p className="text-lg text-white mb-6">{product.description}</p>
            <p className="text-3xl bg-white p-3 rounded-lg text-blue-400 font-bold mb-4 max-w-max ">${product.price}</p>
            <div className="mb-4">
              <ul className="text-white text-lg">
                <li className="mb-1">Material: 123</li>
                <li className="mb-1">Size: 123</li>
                <li className="mb-1">Color: 123</li>
                <li className="mb-1">Weight: 123</li>
              </ul>
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="bg-white text-lg text-blue-400 font-semibold mb-2 mr-1 p-3 rounded-tl-lg rounded-bl-lg">
                Amount:
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                value={amount}
                onChange={handleAmountChange}
                className="border-2 border-white bg-transparent w-20 px-4 py-2 text-white text-lg font-semibold focus:outline-none rounded-tr-lg rounded-br-lg"
              />
            </div>
            <div className="mb-4 flex">
              <button
                onClick={() => {
                  handleAddToCart(product.image, product.name, product.price, amount);
                }}
                className="px-6 py-2 rounded-md bg-white text-blue-400 text-lg font-semibold inline-flex items-center mr-4"
              >
                <span className="mx-auto">Add to cart</span> <BsFillCartPlusFill className="ml-2" />
              </button>
              <ShareButton url={currentUrl} />
            </div>
          </div>
        </div>
      </div>
      <section>{/* Recommended */}</section>
    </div>
  );
}
