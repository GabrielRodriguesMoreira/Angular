import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, deleteDoc, doc, addDoc } from '@firebase/firestore';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    tags: '',
    slide_images: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name: formData.name,
        image: formData.image,
        price: parseFloat(formData.price),
        description: formData.description,
        tags: formData.tags.split(',').map((tag) => tag.trim()),
        slide_images: formData.slide_images.split(',').map((slide) => slide.trim()),
      };

      const docRef = await addDoc(collection(db, 'products'), newProduct);
      setProducts([...products, { id: docRef.id, ...newProduct }]);
      console.log('Document successfully created!');
      setFormData({
        name: '',
        image: '',
        price: '',
        description: '',
        tags: '',
        slide_images: '',
      });
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
      setProducts(products.filter((product) => product.id !== productId));
      console.log('Document successfully deleted!');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Admin page</h1>
      <form onSubmit={handleFormSubmit} className="mb-8">
        <label className="block mb-4">
          <span className="text-lg font-semibold">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="block w-full border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg font-semibold">Image:</span>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
            className="block w-full border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg font-semibold">Price:</span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="block w-full border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg font-semibold">Description:</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="block w-full border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg font-semibold">Tags:</span>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            required
            className="block w-full border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg font-semibold">Image Slides:</span>
          <input
            type="text"
            name="slide_images"
            value={formData.slide_images}
            onChange={handleInputChange}
            required
            className="block w-full border-gray-300 rounded-md mt-1 px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-blue-400 text-white font-semibold"
        >
          Create
        </button>
      </form>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id} className="border border-gray-300 p-4 rounded-lg flex flex-col justify-between">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-md mb-4"
            />
            <div>
              <strong className="text-lg font-semibold">ID:</strong> {product.id} <br />
              <strong className="text-lg font-semibold">Name:</strong> {product.name} <br />
              <strong className="text-lg font-semibold">Price:</strong> {product.price} <br />
              <strong className="text-lg font-semibold">Description:</strong> {product.description} <br />
              <strong className="text-lg font-semibold">Tags:</strong> {product.tags && product.tags.join(', ')} <br />
              
            </div>
            <button
              onClick={() => handleDelete(product.id)}
              className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold mt-2 self-start"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
