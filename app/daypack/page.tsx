import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
          <h1 className="text-5xl font-bold mb-6 text-white">BaseWeight DayPack</h1>
          <h3 className="text-2xl max-w-3xl mb-6 text-white">
            Develop apps quickly
          </h3>

          <a href="/contact" className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-8">
            Contact Us
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

