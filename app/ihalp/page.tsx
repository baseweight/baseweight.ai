import '../baseweight.css';
import React from 'react';
import Link from 'next/link';
import BazonkaHeader from '../components/BazonkaHeader';
import Header from '../components/Header';
import Bear from '../components/BaseBear';
import Yap from '../components/YapYapYap';

export default function Home() {
  return (
    <>
      <Header />
      {/* Content on top of the background */}
      <main className="bg-[#505333] text-[#3A3D40] flex flex-grow justify-center px-4 py-8">
        {/* Centered content wrapper */}
        <div className="flex flex-col  flex-grow md:flex-row items-start justify-between gap-6 w-full max-w-6xl">
          {/* Base Bear */}
          <Bear />
          {/* Text Content */}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
