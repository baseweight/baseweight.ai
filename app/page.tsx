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
            <a
              href="/about"
              className="inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Product Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 items-center content-center text-center">
          <div className="max-w-3xl mx-auto items-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to simply local machine learning development for both ML builders, as well as traditional software developers in a sustainable way.  
              We believe in Open Source AI and that when given the choice, we will always choose openness and transparency in everything that we develop.  This is 
              why we are focused on Local ML over the cloud whenever possible.
            </p>
            <br />
            <p className="text-gray-700">
              We're currently working on a wide variety of use cases for Local ML, such as the widespread CV and NLP use cases
              as well as Generative AI use cases and will have some annoucements in early 2025.  Subscribe to keep in touch.
            </p>
            
          </div>
        </section>

        <section className="relative text-white py-16 px-8" style={{
    backgroundImage: "url('/clutter.jpg')", // Replace with your image path
  }}>
          <div className="max-w-5xl mx-auto text-center">

            <h1 className="text-4xl font-bold mb-4">
              Remove the complexity of local ML
            </h1>
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

