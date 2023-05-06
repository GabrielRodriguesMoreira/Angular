const products = [
  {
    id: 1,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product1.jpg'
  },
  {
    id: 2,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product2.jpg'
  },
  {
    id: 3,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product3.jpg'
  },
  {
    id: 1,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product1.jpg'
  },
  {
    id: 2,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product2.jpg'
  },
  {
    id: 3,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product3.jpg'
  },
  {
    id: 1,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product1.jpg'
  },
  {
    id: 2,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product2.jpg'
  },
  {
    id: 3,
    name: 'Example Product',
    description: 'This is an example product',
    price: 29.99,
    image: '/product3.jpg'
  },
]

const Products = () => {
  return (
    <div className="bg-light-metalic">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map(product => (
            <a key={product.id} href={`/product/${product.id}`} className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col m-2 bg-gray-200">
  <div className="relative h-64">
    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-lg" />
  </div>
  <div className="p-4">
    <h2 className="font-bold text-xl mb-2">{product.name}</h2>
    <p className="text-gray-700 mb-4">{product.description}</p>
    <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
  </div>
</a>


          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
