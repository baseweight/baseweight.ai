import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import MailchimpSubscribe from './components/MailChimpSubscribe';


export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 px-8" style={{
    backgroundImage: "url('/hero.jpg')", // Replace with your image path
  }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="flux justify-center items-center pt-12">
              <Image
                src="/BaseWeightMascotWhite.svg" // Update with the path to your logo
                alt="BaseWeight"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              BaseWeight
            </h1>
            <p className="text-lg mb-6">
              Empowering AI Everywhere
            </p>
          </div>
        </section>


        {/* Call to Action */}
        <section className="bg-gray-100 py-16 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sign up for our newsletter
            </h2>
            <p className="text-lg mb-8">  
              Sign up to to get updates about new products and services currently in development
            </p>
            <MailchimpSubscribe />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

