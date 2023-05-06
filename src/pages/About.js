import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | My Website</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit enim quis massa molestie, non
            euismod ipsum varius.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="https://picsum.photos/200" alt="Person 1" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Person 1</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit enim quis massa molestie, non
                euismod ipsum varius.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="https://picsum.photos/200" alt="Person 2" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Person 2</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit enim quis massa molestie, non
                euismod ipsum varius.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="https://picsum.photos/200" alt="Person 3" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Person 3</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit enim quis massa molestie, non
                euismod ipsum varius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
