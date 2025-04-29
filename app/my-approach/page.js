'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function MyApproach() {
  return (
    <main className="flex flex-col items-center bg-white overflow-hidden">

      {/* Back to Home */}
      <header className="w-full max-w-6xl px-6 pt-6">
        <Link href="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>
      </header>

      {/* Hero */}
      <motion.section
        className="relative w-full flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            My Approach
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            From Psychology to Emotionally Intelligent Systems
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 1: Psychology Foundations */}
      <motion.section
        className="w-full bg-blue-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Foundation in Human Psychology</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I studied psychology not to become a therapist — but because I was obsessed with how people think, make decisions, and grow.
            I wanted to understand attention, motivation, burnout, clarity, and what drives meaningful behavior change.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            That foundation continues to guide how I design every system today — not around features, but around how real people function.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 2: Psychology Meets Tech */}
      <motion.section
        className="w-full bg-teal-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Psychology Meets Technology</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Most productivity tools are built to increase output — but not to protect mental clarity or emotional resilience.
            I started building systems like Rhythm Core and Rhythm Flow because I wanted tech that understands the human side of performance.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            From LLM design to UI layout to content strategy, I apply psychology to make tools feel more intuitive, supportive, and aligned with how people *actually* work and grow.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 3: A New Vision */}
      <motion.section
        className="w-full bg-blue-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A New Vision for Technology</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I believe the best systems aren’t built to impress investors — they’re built to protect attention, guide growth, and align with what actually matters to the user.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This is why I design emotionally intelligent systems — tools that adapt, support, and empower people to grow without burning out.
            It’s not just a design choice — it’s a values choice.
          </p>
        </div>
      </motion.section>

      {/* Final Reflection */}
      <motion.section
        className="w-full bg-teal-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Human Side of Systems</h2>
          <p className="text-md text-gray-700 leading-relaxed">
            I build with one goal in mind:  
            <span className="text-blue-600 font-semibold">to create systems that feel like they understand you — not just manage you.</span>
          </p>
          <p className="text-md text-gray-700 mt-6">
            If that vision resonates with you, I’d love to connect.
          </p>
          <a
            href="mailto:alexsamadi321@gmail.com"
            className="inline-block mt-6 bg-blue-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:scale-105 transition transform duration-300"
          >
            Reach Out
          </a>
        </div>
      </motion.section>

    </main>
  );
}
