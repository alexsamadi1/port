// pages/replicore.jsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RepliCorePage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-white via-blue-50 to-gray-100 min-h-screen py-20 px-6 text-gray-800">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-4 text-teal-600">RepliCore: Custom GPTs That Think Like You</h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          We help individuals and organizations train intelligent GPT agents tailored to how they think, work, and communicate — then deliver them with plug-and-play resources that unlock real daily value.
        </p>
      </motion.section>

      {/* How It Works */}
      <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: '1. Train the Core',
            text: 'We create a base GPT personality using your tone, goals, and thinking style — built with emotional intelligence and role alignment.'
          },
          {
            title: '2. Customize to Your Needs',
            text: 'We tailor the GPT to your workflows or organization — whether you need a proposal writer, strategist, planner, or advisor.'
          },
          {
            title: '3. Deliver & Equip',
            text: 'We hand off your GPT with a usage guide, prompt library, and best practices so you or your team can start benefiting immediately.'
          }
        ].map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border-l-4 border-teal-400 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Use Cases */}
      <section className="max-w-5xl w-full mb-24 text-center">
        <h2 className="text-4xl font-bold mb-10">What Can You Build With RepliCore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Personal Assistant',
              text: 'A custom GPT that helps you plan, write, reflect, and make decisions based on your values and goals.'
            },
            {
              title: 'Proposal Generator',
              text: 'An agent trained to draft responses and pitches using your company’s language and past work.'
            },
            {
              title: 'Team Advisor',
              text: 'A GPT that supports onboarding, strategic thinking, or client delivery — tailored to your internal knowledge.'
            }
          ].map((use, idx) => (
            <motion.div
              key={use.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-teal-600 mb-2">{use.title}</h3>
              <p className="text-gray-700">{use.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why RepliCore */}
      <section className="max-w-4xl mx-auto text-center mt-12 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why RepliCore?</h2>
        <p className="text-gray-700 mb-10">
          Most people don’t realize GPTs can be trained like teammates. RepliCore brings emotional intelligence, modular prompt engineering, and custom guidance together to make GPTs that actually think like you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-600 mb-2">Custom Intelligence</h3>
            <p className="text-gray-700">Each GPT is pre-trained with your style, your goals, and your logic — no more generic bots.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-600 mb-2">Delivered With Support</h3>
            <p className="text-gray-700">You get a full toolkit: prompt libraries, how-to guides, and a real-use onboarding experience.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="text-center max-w-xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Interested in a Custom GPT?</h2>
        <p className="text-gray-700 mb-6">
          We’re working with individuals and teams to design their first RepliCore agent. Reach out to start building yours.
        </p>
        <a
          href="mailto:alexsamadi321@gmail.com"
          className="inline-block bg-teal-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-teal-700 hover:scale-105 transition"
        >
          Get In Touch
        </a>
      </motion.section>

    </main>
  );
}
