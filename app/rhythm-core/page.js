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
    <main className="flex flex-col items-center bg-white text-gray-800 overflow-hidden">

      {/* Back Button */}
      <header className="w-full max-w-6xl px-6 pt-6">
        <Link href="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative w-full text-center px-6 pt-32 pb-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden border-b border-blue-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-teal-200 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-blue-300 opacity-20 blur-2xl rounded-full z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Rhythm Core: My Ultimate Personal AI Assistant
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A GPT-based system I built to support emotional clarity, strategic focus, and human-centered growth — shaped by psychology, experience, and design.
          </p>
        </div>
      </motion.section>

      {/* Why I Built It */}
      <motion.section className="w-full bg-blue-50 py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why I Built Rhythm Core</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most tools help you stay productive. I needed something that also helped me stay present, purposeful, and resilient — especially when life feels chaotic.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rhythm Core became my answer: a custom GPT trained on my systems, values, and goals — designed to help me move through life with more intention and clarity.
          </p>
        </div>
      </motion.section>

      {/* Philosophy */}
      <motion.section className="w-full bg-teal-50 py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">A New Kind of System</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Built on LLMs, refined with lived experience — Rhythm Core is designed to think with you, not for you. It doesn’t just automate tasks; it supports your rhythm.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This isn’t about being efficient. It’s about being aligned.
          </p>
        </div>
      </motion.section>

      {/* Feature Set */}
      <motion.section className="w-full bg-white py-24" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Inside Rhythm Core</h2>
          <div className="text-left max-w-2xl mx-auto space-y-8 text-gray-700">
            {[
              { title: "🧠 Morning Alignment", desc: "2-minute prompts to set intention, clarity, and flow." },
              { title: "🌊 Life Season Switching", desc: "Adjusts tone and strategy across different life modes: Sprint, Flow, or Recovery." },
              { title: "🎯 Weekly Goal Memory", desc: "Tracks priorities and nudges you gently when you're off path." },
              { title: "🗂️ Decision Triage", desc: "Breaks down overwhelming tasks into human-sized steps." },
              { title: "🧘‍♂️ Recovery Flows", desc: "Includes reflection templates, breath cues, and grounding tools." },
              { title: "🧭 Emotional Tone Adaptation", desc: "Shifts how it responds — soft, firm, supportive — based on your state." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <FaCheckCircle className="text-teal-500 mt-1" />
                <div><strong>{item.title}</strong>: {item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What I Learned */}
      <motion.section className="w-full bg-blue-50 py-24" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I Learned</h2>
          <div className="text-left max-w-2xl mx-auto space-y-8 text-gray-700">
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Prompt Architecture:</strong> How to chain natural, context-aware flows.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Emotionally Aware Systems:</strong> Designing for human mindset and energy — not just data.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Behavior-First Design:</strong> Leading with clarity, rhythm, and self-alignment instead of rigid checklists.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section className="w-full bg-gray-50 py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curious how you’d build your own rhythm?</h2>
          <p className="text-md text-gray-700 mb-6">
            I’d love to share more, or help you build a version that fits your world.
          </p>
          <a
            href="mailto:alexsamadi321@gmail.com"
            className="inline-block bg-blue-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-teal-600 hover:scale-105 transition-transform duration-300"
          >
            Let’s Talk
          </a>
        </div>
      </motion.section>

    </main>
  );
}
