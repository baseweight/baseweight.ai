import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DayPack() {
    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-blue-500 text-white py-16 px-8">
                    <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        DayPack: Deploy any model OnDevice
                    </h1>
                    <p className="text-lg mb-6">
                        Your phone becomes a powerful AI hub, capable of hosting not only Local LLMs, but any model that can be accessed
                        from any device on your network.
                    </p>
                    <a
                        href="#features"
                        className="inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
                    >
                        Learn More
                    </a>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 px-8">
                    <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Local AI Hosting</h3>
                        <p className="text-gray-700">
                            Run a fully functional LLM server directly on your mobile device, eliminating dependency on cloud services and ensuring your data stays private.
                        </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Access Anywhere</h3>
                        <p className="text-gray-700">
                            Access the AI locally on your phone or from any device (laptop, desktop) using your phone’s IP address.
                        </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                        <p className="text-gray-700">
                            Easily connect the server with desktop or web applications for real-time AI interactions and processing.
                        </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Optimized for Mobile</h3>
                        <p className="text-gray-700">
                            Designed to leverage the power of modern mobile processors without compromising battery life or performance.
                        </p>
                        </div>
                        {/* Feature 5 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
                        <p className="text-gray-700">
                            Your data never leaves your device, ensuring absolute privacy and compliance with sensitive use cases.
                        </p>
                        </div>
                        {/* Feature 6 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Open-Source Friendly</h3>
                        <p className="text-gray-700">
                            Build on an open-source architecture that encourages customization and community-driven enhancements.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gray-100 py-16 px-8">
                    <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience AI Like Never Before?</h2>
                    <p className="text-lg mb-8">
                        Download our app today and transform your phone into a powerful AI server, accessible from anywhere on your network.
                    </p>
                    <a
                        href="/download"
                        className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                        Download Now
                    </a>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 px-8">
                    <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {/* Question 1 */}
                        <div>
                        <h3 className="text-xl font-semibold mb-2">How does DayPack work?</h3>
                        <p className="text-gray-700">
                            DayPack runs a server on the device, and utilizes Open Source OnDevice inference frameworks such as Executorch 
                            to run the models on the device.
                        </p>
                        </div>
                        {/* Question 2 */}
                        <div>
                        <h3 className="text-xl font-semibold mb-2">What devices are supported?</h3>
                        <p className="text-gray-700">
                            The application runs best on iPhone 15 or above, and on Qualcomm Snapdragon Gen 2 devices and Mediatek devices.
                        </p>
                        </div>
                        {/* Question 3 */}
                        <div>
                        <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
                        <p className="text-gray-700">
                            Yes. All computations and data processing occur locally on your device, ensuring your data remains private and secure.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Why Executorch?</h3>
                        <p className="text-gray-700">
                            Please read this blog post about the decisions made when developing DayPack.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
  );
};
