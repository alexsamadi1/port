'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="flex flex-col items-center bg-white">

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 pt-48 pb-32 text-center bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
        {/* Background Shape */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            My Philosophy
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            The future of technology isn't faster. <span className="text-blue-600 font-semibold">It's more human.</span>  
            True progress comes when our systems understand not just what we want — but how we think, feel, and grow.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 1: Human Psychology */}
      <section className="w-full bg-blue-50 py-20">
        <motion.div
          className="max-w-3xl mx-auto text-center px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Must Mirror Human Psychology</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Great technology isn't just built with logic. <span className="text-blue-600 font-semibold">It's built with empathy.</span>  
            Human beings are emotional, relational, dynamic.  
            Systems that enhance life must align with our cognitive patterns, fears, and aspirations — not just automate tasks.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 2: Emotional Intelligence */}
      <section className="w-full bg-teal-50 py-20">
        <motion.div
          className="max-w-3xl mx-auto text-center px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emotional Intelligence is Strategic Advantage</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            In a noisy world, <span className="text-teal-600 font-semibold">clarity wins.</span>  
            Systems that recognize emotional context — stress, motivation, fatigue — make better decisions and support users more effectively.  
            Emotionally intelligent AI isn't about replacing people — it's about reinforcing the rhythms of human achievement.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Section 3: Personalization */}
      <section className="w-full bg-blue-50 py-20">
        <motion.div
          className="max-w-3xl mx-auto text-center px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Personalization is the Next Frontier</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Static tools are a relic of the past. <span className="text-blue-600 font-semibold">The future belongs to dynamic systems</span> that evolve with shifting goals, emotional seasons, and personal rhythms.  
            Growth requires flexibility — and the next generation of AI will adapt just like human relationships do.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Closing Section */}
      <section className="w-full bg-white py-24">
        <motion.div
          className="max-w-2xl mx-auto text-center px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to the Future of Emotionally Intelligent AI</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm building a new generation of systems:  
            Tools that adapt, support, and empower — not overwhelm.  
            Technology should <span className="text-blue-600 font-semibold">protect human potential</span>, not consume it.
          </p>
        </motion.div>
      </section>

    </main>
  );
}
