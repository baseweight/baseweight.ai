import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 py-16 px-8">

        <section className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">What is BaseWeight?</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
            In hiking, your BaseWeight is the weight of everything that you're carrying on your back minus the consumables such as food, water and fuel. The idea for ultralight backpacking is that the less weight that you carry on your back, the further you are able to go.  To carry that analogy in software, the idea of baseweight is similar to having as few depeendencies as possible for the maximum distribution.  In short, software that has a small footprint should be able to run everywhere, and as such be more sustainable.
        </p>
        </section>


        {/* Team Section */}
        <section className="max-w-5xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">People</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example Team Member */}
            <div className="w-full md:w-1/3">
              <Image
                src="/joe.jpg"
                alt="Joe Bowser"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Joe Bowser</h3>
              <p className="text-gray-700">Founder</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

