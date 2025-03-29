import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import MailchimpSubscribe from './components/MailChimpSubscribe';


export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section - Two Column Layout with Blue Background */}
        <section className="py-16 px-8 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            {/* Left column with logo and text */}
            <div className="md:w-1/2 text-center mb-8 md:mb-0 flex flex-col items-center">
              <Image
                src="/BaseWeightMascotWhite.svg"
                alt="BaseWeight"
                width={150}
                height={150}
                className="mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">
                BaseWeight
              </h1>
              <p className="text-lg mb-6">
                Empowering AI Everywhere
              </p>
              <a
                href="/about"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Learn More
              </a>
            </div>
            
            {/* Right column with product shot */}
            <div className="md:w-1/2 md:pl-12">
              <div className="rounded-xl overflow-hidden shadow-lg border border-blue-500">
                <Image 
                  src="/hero.jpg"
                  alt="Product Preview" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Section - Distribution Platform */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Products</h2>
            
            {/* Distribution Platform */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/hero.jpg" // Replace with distribution platform image
                  alt="Distribution Platform" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Distribution Platform</h3>
                <p className="text-gray-700 mb-6">
                  Our ML distribution platform makes it easy to deploy and manage machine learning models 
                  across devices. With seamless updates, version control, and performance monitoring, 
                  you can focus on building great models while we handle the infrastructure.
                </p>
                <ul className="text-gray-700 mb-6 list-disc pl-5">
                  <li className="mb-2">Simplified model deployment</li>
                  <li className="mb-2">Automatic version management</li>
                  <li className="mb-2">Performance analytics</li>
                  <li className="mb-2">Cross-platform compatibility</li>
                </ul>
                <a href="/platform" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                  Learn More
                </a>
              </div>
            </div>
            
            {/* FannyPack SDK */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/clutter.jpg" // Replace with FannyPack SDK image
                  alt="FannyPack SDK" 
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">FannyPack OnDevice SDK</h3>
                <p className="text-gray-700 mb-6">
                  FannyPack is our lightweight SDK for running ML models directly on devices. 
                  Designed for efficiency and performance, it enables AI capabilities even in 
                  resource-constrained environments without requiring cloud connectivity.
                </p>
                <ul className="text-gray-700 mb-6 list-disc pl-5">
                  <li className="mb-2">Optimized for mobile and edge devices</li>
                  <li className="mb-2">Low memory footprint</li>
                  <li className="mb-2">Privacy-preserving local inference</li>
                  <li className="mb-2">Support for popular model formats</li>
                </ul>
                <a href="/fannypack" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 py-16 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sign up for our newsletter
            </h2>
            <p className="text-lg mb-8">  
              Sign up to get updates about new products and services currently in development
            </p>
            <a
              href="http://eepurl.com/i1nvpc"
              className="inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Click to Subscribe
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

