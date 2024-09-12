import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative flex flex-col items-center justify-center h-screen bg-gray-50">

        {/* Content on top of the background */}
        <section className="relative z-10 text-center justify-center">
        </section>
      </main>

      <Footer />
    </>
  );
}

