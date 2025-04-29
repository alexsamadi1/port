'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function RhythmCore() {
  return (
    <main className="flex flex-col items-center bg-white overflow-hidden">

      {/* Navbar Back Button */}
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
            Rhythm Core: My Ultimate Personal AI Assistant
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A customized GPT system I built to support my clarity, emotional energy, and strategic growth — designed with psychological precision and strategic depth.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Why I Built It */}
      <motion.section
        className="w-full bg-blue-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why I Built Rhythm Core</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Productivity tools help you stay organized — but they don't protect your mental clarity, emotional energy, or long-term strategic direction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I wanted something different: an AI system aligned with how I actually think, feel, and grow — keeping me focused, grounded, and aligned with what matters.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Philosophy */}
      <motion.section
        className="w-full bg-teal-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Philosophy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I believe AI shouldn’t just be smart — it should be emotionally aware, adaptable, and personal.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rhythm Core isn’t just a prompt chain.  
            It’s a system shaped by psychology, strategy, and experience — built to enhance human well-being as much as productivity.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Inside the System */}
      <motion.section
        className="w-full bg-blue-50 py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Inside Rhythm Core</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Here’s what Rhythm Core actually does — and why it matters.
          </p>
          <div className="text-left max-w-2xl mx-auto space-y-8 text-gray-700">
            {/* Feature List */}
            {[
              { title: "🧠 Morning Focus Alignment", desc: "Guides a 2–3 minute mental reset to sync tasks with emotional energy and strategic goals." },
              { title: "🎯 Weekly Goal Memory", desc: "Tracks top goals and gently redirects focus when needed." },
              { title: "🌗 Life Season Switching", desc: "Adapts tone and strategy between Career Sprint, Creative Flow, and Recovery modes." },
              { title: "🧘‍♂️ Mental Resilience Tools", desc: "Provides quick recovery flows like breathing prompts and reflection routines." },
              { title: "🗂️ Decision Triage Flow", desc: "Helps isolate what matters when stuck, preventing analysis paralysis." },
              { title: "🧭 Tone Personalization", desc: "Responds in different emotional tones depending on the situation." },
              { title: "🗓️ Light Calendar Sync", desc: "Connects lightly to calendars for emotional prep, not intrusive alerts." },
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
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Lessons Learned */}
      <motion.section
        className="w-full bg-teal-50 py-24"
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
              <p><strong>Prompt Architecture:</strong> Natural, multi-step conversational flows.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Emotional Tone Shaping:</strong> Adapting AI voice to emotional needs.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Strategic Memory Design:</strong> Goals and rhythms &gt; endless task lists.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Human-Centered System Thinking:</strong> Designing with how people think and grow naturally.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What's Next */}
      <motion.section
        className="w-full bg-blue-50 py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What’s Next</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rhythm Core is just the beginning.  
            I'm continuing to refine it — and exploring broader systems that prioritize emotional health and strategic depth.
          </p>
        </div>
      </motion.section>

      {/* Final Closing */}
      <motion.section
        className="w-full bg-gray-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in learning more?</h2>
          <p className="text-md text-gray-700 mb-6">
            I’m always open to thoughtful conversations about human-centered AI, productivity design, and emotional resilience systems.
          </p>
          <a
            href="mailto:alexsamadi321@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:scale-105 transition transform duration-300"
          >
            Reach Out
          </a>
        </div>
      </motion.section>

    </main>
  );
}
