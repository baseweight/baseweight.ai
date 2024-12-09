import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            At <strong>BaseWeight</strong>, we are dedicated to providing best in class AI user experiences on the edge.  Whether they be a hybrid soution that leverages existing cloud
            services, or entirely on device, we are focused on the user to make sure that the AI solutions are helpful and enhance their experience.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to simply local machine learning development for both ML builders, as well as traditional software developers in a sustainable way.  
            We believe in Open Source AI and that when given the choice, we will always choose openness and transparency in everything that we develop.  This is 
            why we are focused on Local ML over the cloud whenever possible.
          </p>
        </section>

        {/* Values Section */}
        <section className="bg-gray-100 py-8 px-4 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Value 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We stay ahead of the curve, constantly exploring and implementing the latest advancements in AI technology.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to ethical practices and prioritize transparency in all our client relationships.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe that the best solutions come from working closely with our clients and understanding their unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/new_joe.jpg"
                alt="Joe Bowser"
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Joe Bowser</h3>
              <p className="text-gray-700">CEO & Founder</p>
              <p className="text-gray-600 mt-2">
                Joe has over twenty years of experience developing web, desktop and mobile applications, and five years working directly on
                AI features in Adobe products such as Photoshop, Lightroom, Illustrator, Premiere Pro and many others.  Before he worked
                in the local ML space, he co-founded PhoneGap, one of the first cross-platform hybrid mobile development frameworks that
                empowered users to developer applications using web technologies.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/vincent.jpg"
                alt="Vincent van Haaff"
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Vincent van Haaff</h3>
              <p className="text-gray-700">CTO & Cofounder</p>
              <p className="text-gray-600 mt-2">
                Hi I'm Vincent, engineer, serial entrepreneur, and tech native. Over the last two decades, I’ve built my career at the intersection of software, hardware, and user-centered design, with expertise in cloud-to-edge computing, embedded systems, digital signal processing (DSP), computer vision (CV), and human-computer interaction (HCI). I’ve had the privilege of working with industry leaders like Microsoft, Bose, and Vancouver Airport Authority, but my true passion lies in fighting for the user.
              </p>
            </div>


          </div>
        </section>
      </div>
    </main>

      <Footer />
    </>
  );
}

