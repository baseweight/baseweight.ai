import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative flex flex-col items-center justify-center h-screen bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg" // Reference to the image in the public folder
            alt="Mountain landscape"
            layout="fill" // This makes the image cover the entire div
            objectFit="cover" // Ensures the image covers the whole area without distortion
            className="opacity-80" // Add opacity to make the text stand out
          />
        </div>

        {/* Content on top of the background */}
        <section className="relative z-10 text-center justify-center">
      	  <Image src="/BaseWeightMascotWhite.svg" alt="BaseWeight Logo" className="inline" width={200} height={200}/>
          <h1 className="text-5xl font-bold mb-6 text-white">BaseWeight</h1>
          <a href="#contact" className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-8">
            Learn More
          </a>
        </section>
      </main>

     {/* New Pitch Section */}
      <section className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">What is BaseWeight?</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
        In hiking, your BaseWeight is the weight of everything that you're carrying on your back minus the consumables such as food, water and fuel. The idea for ultralight backpacking is that the less weight that you carry on your back, the further you are able to go.  To carry that analogy in software, the idea of baseweight is similar to having as few depeendencies as possible for the maximum distribution, namely making sure that software is optimized so that it can run in the most places at the lowest cost.
	</p>
      </section>

      <Footer />
    </>
  );
}

