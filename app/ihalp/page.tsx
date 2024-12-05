import '../baseweight.css';
import React from 'react';
import Link from 'next/link';
import BazonkaHeader from '../components/BazonkaHeader';
import Bear from '../components/BaseBear';
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
            <p>
              A backpacker's life is one of adventure, Where each day brings new discoveries. From the mountains to the
              sea, You'll find beauty in each place you see.
              <br />
              With a backpack on your shoulder, You'll make your way to where you're going, No need for a car or a plane,
              Just you and the path that you take.
              <br />
              The landscape will be your guide, As you journey through the wild, And the stars above will be your friend,
              Guiding you on your way to the end.
              <br />
              So pack your bags, and hit the trail, With a backpacker's spirit and a will, You'll find adventure in every
              place, And make memories that will last for eternity.
            </p>
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
