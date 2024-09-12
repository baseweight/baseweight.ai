import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 py-16 px-8">
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">About BaseWeight</h1>
          <p className="text-lg text-gray-700">
            BaseWeight is a leading software consultancy that helps businesses scale their operations with cloud-native solutions and cutting-edge software architectures. 
            Our mission is to empower businesses with the tools and expertise needed to thrive in an ever-evolving digital landscape.
          </p>
        </section>

        {/* Mission Section */}
        <section className="max-w-5xl mx-auto text-center bg-white shadow-lg rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At BaseWeight, our mission is simple: to help businesses unlock their full potential through scalable, reliable, and efficient technology solutions. 
            We believe in providing personalized solutions to meet each business’s unique challenges, and we are committed to delivering results that help companies grow.
          </p>
        </section>

        {/* Team Section */}
        <section className="max-w-5xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example Team Member */}
            <div className="w-full md:w-1/3">
              <Image
                src="/team-member-3.jpg"
                alt="Team member"
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

