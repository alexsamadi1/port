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
  <Link href="/" className="text-teal-600 font-semibold hover:underline text-sm sm:text-base">
    ← Back to Home
  </Link>
</header>

{/* Hero */}
<motion.section
  className="relative w-full flex flex-col items-center justify-center px-6 pt-32 pb-28 text-center 
    bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden border-b border-blue-100"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  {/* Background blob light effect */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
  
  <div className="relative max-w-4xl mx-auto">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
      The Psychology Behind My Work
    </h1>
    <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
      Why I build human-centered systems — and the values that guide them.
    </p>
  </div>
</motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 1 */}
      <motion.section
  className="w-full bg-gradient-to-b from-blue-50 to-white py-24 border-t border-blue-100"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
      Rooted in Psychology
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I studied psychology not to become a therapist — but because I was fascinated by how people think, feel, focus, and grow. My curiosity led me to explore motivation, behavior change, and emotional regulation — not in isolation, but in how they shape daily life, productivity, and decision-making.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      Today, that same foundation drives how I approach everything I build — whether it’s a digital tool, a system, or a strategy.
    </p>
  </div>
</motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 2 */}
      <motion.section
  className="w-full bg-gradient-to-b from-white via-teal-50 to-white py-24 border-t border-teal-100"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
      Why Systems Matter to Me
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I believe the systems we use shape our behavior, energy, and identity. Most digital tools focus on productivity and speed. I build tools that prioritize clarity, intentionality, and emotional alignment.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      Whether it’s a GPT-powered assistant or a workflow strategy, I design with the human at the center — not the metric.
    </p>
  </div>
</motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      <motion.section
  className="w-full bg-gradient-to-b from-blue-50 to-white py-24 border-t border-blue-100"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
      Professional Range, Human Focus
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      My work has spanned federal agencies and nonprofits — from managing the integrity of NOAA’s $17B property system to leading strategy and insights for a nonprofit serving immigrants.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      In every environment, I’ve applied the same lens: simplify complexity, protect what matters, and make decisions human-first.
    </p>
  </div>
</motion.section>

<motion.section
  className="w-full bg-gradient-to-b from-teal-50 via-white to-blue-50 py-24 border-t border-teal-100"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-2xl mx-auto text-center px-6">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
      What I’m Building Toward
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I want to help reshape how people relate to work, time, and themselves — not through overwhelming tech, but through tools and systems that feel like allies.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-10">
      If you’re building toward that too, I’d love to connect.
    </p>
    <a
      href="mailto:alexsamadi321@gmail.com"
      className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-teal-600 hover:scale-105 transition-transform duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0l-4-4m4 4l-4 4" />
      </svg>
      Reach Out
    </a>
  </div>
</motion.section>


    </main>
  );
}