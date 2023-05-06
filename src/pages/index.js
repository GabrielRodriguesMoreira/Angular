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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map(product => (
            <a key={product.id} href={`/product/${product.id}`} className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col">
              <div className="relative h-0" style={{ paddingBottom: '90%' }}>
                <img className="absolute h-full w-full object-cover rounded-t-lg" src={product.image} alt={product.name} width={300} height={500} />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                </div>
                <p className="text-gray-900 font-bold text-lg">${product.price.toFixed(2)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
