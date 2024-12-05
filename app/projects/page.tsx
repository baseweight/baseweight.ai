import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
      <Header />

      <main className="bg-background text-foreground py-16 px-8">

        <section className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">DayPack</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
            DayPack is a Python tool allowing for the rapid prototyping of OnDevice ML models.  It allows Python Developers who 
            are comfortable with Gradio to deploy a mobile application and run standard OnDevice ML models on devices such as ONNX Runtime, 
            LiteRT and CoreML.
        </p>
        </section>
        <section className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">LocalLM Chat</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
            LocalLM Chat is an application that specifically caters to OnDevice Machine Learning models, and unlike DayPack, supports exclusively
            GGUF models hosted on HuggingFace.
        </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

