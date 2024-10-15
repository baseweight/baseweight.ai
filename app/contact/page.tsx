import React, { FormEvent, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success (e.g., show a success message or reset form)
      console.log('Message sent successfully');
    } else {
      // Handle error (e.g., show error message)
      console.error('Error sending message');
    }
  };

  return (
    <>
      <Header />

      <main className="bg-gray-50 py-16 px-8">
        <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-gray-700 text-center mb-8">
            Have any questions or want to work with us? Please fill out the form below, and we’ll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-block w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
