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
      <main className="bg-[#505333] text-[#3A3D40] flex justify-center px-4 py-8">
        {/* Centered content wrapper */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 w-full max-w-6xl">
          {/* Base Bear */}
          <Bear />
          {/* Text Content */}
          <div className="flex flex-col items-start gap-4 max-w-3xl">
            <h3 className="text-2xl font-bold">
              Pack out your own AI with the BaseWeight DayPack
            </h3>
            <div className="text-lg leading-7 text-[#fddcc4]">
              <Yap />
            </div>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
