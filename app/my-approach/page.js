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
        className="relative w-full flex flex-col items-center justify-center px-6 pt-32 pb-28 text-center bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden border-b border-blue-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-200 opacity-20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-160px] right-[-120px] w-[450px] h-[450px] bg-teal-200 opacity-20 blur-2xl rounded-full z-0 animate-[floatReverse_10s_ease-in-out_infinite]" />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-teal-600 mb-2">My Philosophy</p>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Human-First Systems, Psychology-Led Strategy
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Why I build digital systems that feel human — and the principles I carry into every project.
          </p>
        </div>
      </motion.section>

      {/* Section 1 */}
      <motion.section
        className="w-full bg-gradient-to-b from-blue-50 to-white py-28 border-t border-blue-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
            Psychology is My Toolkit
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My foundation in psychology isn’t academic — it’s practical. I studied how people focus, feel, and make decisions so I could build better systems. Motivation science, habit loops, emotional regulation — these principles now guide the way I design.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            That’s why my digital work is grounded in human experience — not just functionality.
          </p>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="w-full bg-gradient-to-b from-white via-teal-50 to-white py-28 border-t border-teal-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
            I Design With the Human in Mind
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            From building a daily rhythm assistant powered by GPT-4 to leading nonprofit growth campaigns, I approach every project with the same question: how will this feel to the person using it?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Because tools that honor emotional energy, friction points, and cognitive flow — those are the tools people actually keep using.
          </p>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="w-full bg-gradient-to-b from-blue-50 to-white py-28 border-t border-blue-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
            Strategy Rooted in Real Life
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether managing NOAA’s $17B property system or scaling a nonprofit's digital presence, I bridge technical execution with human needs. I turn complex problems into clean workflows that support focus, autonomy, and clarity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            It’s not just about solving problems — it’s about solving them sustainably, and making people feel empowered in the process.
          </p>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="w-full bg-gradient-to-b from-teal-50 via-white to-blue-50 py-28 border-t border-teal-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
            Curious to Learn More?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If this approach resonates with you — or sparks an idea of something we could build together — I’m always up for a thoughtful conversation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Whether it leads to collaboration, feedback, or just a good chat — feel free to reach out.
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
