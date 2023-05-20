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
    <div>
      <h1>Admin page</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={formData.image} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Tags:
          <input type="text" name="tags" value={formData.tags} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Image Slides:
          <input type="text" name="slide_images" value={formData.slide_images} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>ID:</strong> {product.id} <br />
            <strong>Name:</strong> {product.name} <br />
            <strong>Image:</strong> {product.image} <br />
            <strong>Price:</strong> {product.price} <br />
            <strong>Description:</strong> {product.description} <br />
            <strong>Tags:</strong> {product.tags && product.tags.join(', ')} <br />
            <strong>Image Slides:</strong> {product.slide_images && product.slide_images.join(', ')} <br />
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
