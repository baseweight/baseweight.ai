import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import MailchimpSubscribe from './components/MailChimpSubscribe';


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
      {/* Container for the split layout */}
      <div className="z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: Logo and Branding */}
        <div className="flex flex-col items-center justify-center bg-blue-500 text-white p-8">
          <Image
            src="/BaseWeightMascotWhite.svg" // Update with the path to your logo
            alt="BaseWeight"
            width={150}
            height={150}
            className="mb-6"
          />
          <h1 className="text-3xl font-bold">BaseWeight</h1>
          <p className="text-lg mt-4 text-center">
            Empowering AI Everywhere
          </p>
        </div>

        {/* Right Side: Blurb About the Product */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Transform Your Phone into an AI Powerhouse</h2>
          <p className="text-gray-700 mb-6">
            Our innovative mobile app turns your device into a powerful AI hub, hosting a local LLM (Large Language Model) that can run directly on your phone. 
            Access the AI from your mobile device or any computer on your network using your phone’s IP address. Your data stays secure, private, and local.
          </p>
          <a
            href="/daypack"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>

      <Footer />
    </>
  );
}

