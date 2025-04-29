'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Website() {
  return (
    <main className="flex flex-col items-center bg-white overflow-hidden">

      {/* Back to Home Link */}
      <header className="w-full max-w-6xl px-6 pt-6">
        <Link href="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>
      </header>

      {/* Hero Section */}
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
            Personal Portfolio Website
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A human-centered digital portfolio built to showcase emotionally intelligent design, strategic thinking, and clean technical execution.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Motivation */}
      <motion.section
        className="w-full bg-blue-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why I Built It</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I wanted more than a static resume site.  
            I needed a digital portfolio that communicated the same care, precision, and emotional intelligence that I bring to my actual work.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This site isn’t just a showcase — it’s a live reflection of my design philosophy, technical skill, and commitment to clarity.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Key Features */}
      <motion.section
        className="w-full bg-teal-50 py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What Makes It Unique</h2>
          <div className="text-left max-w-2xl mx-auto space-y-8 text-gray-700">
            {[
              { title: "🎨 Visual Storytelling", desc: "Each section was designed to emotionally connect with the visitor, using color, rhythm, and tone to reflect intention." },
              { title: "💡 Strategic Project Framing", desc: "Instead of listing responsibilities, I reframed each case study around goals, decisions, and outcomes." },
              { title: "📱 Responsive, Animated, Fast", desc: "Built with Tailwind + Framer Motion for smooth scroll effects, sharp layouts, and mobile-first polish." },
              { title: "🧠 Emotionally Intelligent Copy", desc: "Each sentence was written with care — balancing humility, strength, and clarity." },
              { title: "🧰 Modular and Extensible", desc: "The structure is component-based, clean, and scalable — ready to grow with future projects or business pivots." },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <FaCheckCircle className="text-teal-500 mt-1" />
                <div><strong>{feature.title}</strong>: {feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* What I Learned */}
      <motion.section
        className="w-full bg-blue-50 py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I Learned</h2>
          <div className="text-left max-w-2xl mx-auto space-y-8 text-gray-700">
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Polishing UX with Microdetails:</strong> Margins, shadows, and hover states completely change perception.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Writing With Emotional Intelligence:</strong> Balancing clarity, confidence, and warmth takes time — and it pays off.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Building for Human Memory:</strong> Visitors remember feeling — not features. I optimized for that.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="w-full bg-teal-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want help building something similar?</h2>
          <p className="text-md text-gray-700 mb-6">
            I'm open to freelance design for GPT-based website builds.
          </p>
          <a
            href="mailto:alexsamadi321@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:scale-105 transition transform duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.section>

    </main>
  );
}
