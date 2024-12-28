import React from 'react';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import Head from 'next/head';
import Contact from './_components/Contact';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import file from '../public/file.png';
import Header from './dashboard/_components/Header';

const Page = () => {
  return (
    <div>
      <Header  file = {file}/>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-gray-900 to-gray-600 text-white">
        <h2 className="text-5xl font-extrabold">Prepare and Ace Your Next Interview</h2>
        <p className="mt-4 text-xl">Realistic interview simulations powered by AI.</p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-green-300 text-gray-900 rounded-lg shadow hover:bg-green-400 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-6 py-3 border border-green-700 text-white rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-green-100 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Features</h2>
          <p className="mt-4 text-lg">Enhance your preparation with these tools:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'AceTheMocks',
                description: 'Realistic AI-driven interview scenarios.',
              },
              {
                title: 'Instant Feedback',
                description: 'Get actionable feedback on your performance.',
              },
              {
                title: 'Comprehensive Reports',
                description: 'Understand your strengths and areas for improvement.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16  bg-gradient-to-r from-green-400 to-green-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                text: 'The AceTheMocks were incredibly helpful. It improved my confidence and prepared me for the interview. I felt much more confident going into my real interview.',
                name: 'Xavier',
              },
              {
                text: 'The feedback was spot on and helped me improve my answers. Highly recommend this service!',
                name: 'Wade winston wilson (www)',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <p className="text-gray-600">"{testimonial.text}"</p>
                <h4 className="mt-4 text-lg font-semibold text-teal-600">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-100">
        <Contact />
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 AceTheMock. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
