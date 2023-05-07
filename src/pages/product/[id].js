import Link from 'next/link';

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((product) => product.id.toString() === params.id);

  return { props: { product } };
}

const Product = ({ product }) => {
  return (
    <div className="bg-light-metalic min-h-screen p-2">
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-96 w-full object-cover md:w-96" src={product.image} alt={product.name} />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">{product.name}</div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-900 font-bold text-2xl">${product.price.toFixed(2)}</p>
              </div>
              <div className="mt-8">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Size: M, L, XL</li>
              <li>Color: Black</li>
              <li>Material: 100% cotton</li>
              <li>Care instructions: Machine washable</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600 mb-2">"This product is amazing! I would definitely recommend it to anyone."</p>
              <p className="text-gray-800 font-bold">- John Doe</p>
            </div>
            <div className="bg-gray-100 p-4 mt-4 rounded-lg">
              <p className="text-gray-600 mb-2">"I am very satisfied with my purchase. The quality is excellent."</p>
              <p className="text-gray-800 font-bold">- Jane Smith</p>
            </div>
            <div className="mt-8">
              <Link href="/">
                <span className="text-indigo-500 hover:text-indigo-700 font-bold">Back to Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;