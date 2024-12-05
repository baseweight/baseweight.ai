import '../baseweight.css';
import React from 'react';
import Link from 'next/link';
import BazonkaHeader from '../components/BazonkaHeader';
import Bear from '../components/BaseBear';
import Yap from '../components/YapYapYap';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <BazonkaHeader />
      {/* Content on top of the background */}
      <main className="flex justify-center items-start mt-2 mb-10 px-[3%] overflow-y-auto text-[#3A3D40] bg-[#505333]">
        {/* Flex container for layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {/* Base Bear! */}
          <Bear />
          {/* Text Content */}
          <h3 className="text-2xl max-w-3xl mb-6">
            Pack out your own AI with the BaseWeight DayPack
          </h3>
          <div className="hey relative z-10 justify-center">
            <Yap />
          </div>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-8"
          >
            Contact Us
          </a>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
