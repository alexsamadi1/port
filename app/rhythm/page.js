// app/rhythm/page.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function RhythmCaseStudy() {
  return (
    <main className="relative w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1f33] to-[#050505] text-white overflow-hidden">
      {/* Top Section */}
      <div className="px-6 sm:px-12 lg:px-24 py-20 space-y-24">
        <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-violet-500/20 rounded-full blur-3xl pointer-events-none z-0" />

        <Link href="/" className="text-blue-400 hover:text-blue-300 underline block">
          ← Back to Home
        </Link>

        <motion.section
          className="space-y-6 text-center z-10 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight font-[var(--font-grotesk)]">
            Rhythm – Your Psychology-First AI Companion
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-[var(--font-inter)] max-w-2xl mx-auto">
            A look at how I built Rhythm — a GPT-powered daily assistant grounded in behavioral science, designed to help users stay in sync with their goals, habits, and focus.
          </p>
        </motion.section>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-24">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* Origins */}
        <motion.section
          className="space-y-6 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white font-[var(--font-grotesk)]">Why I Built Rhythm</h2>
          <p className="text-gray-300">
            I wanted a system that supported me not just in what I had to do — but who I wanted to become. Something flexible, intelligent, and emotionally aware. So I started building Rhythm.
          </p>
          <p className="text-gray-300">
            It began as a tool to manage tasks, but quickly grew into something more: a self-reflective assistant that uses behavioral science to help users structure their day around meaning, not just productivity.
          </p>
        </motion.section>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* Key Features */}
        <motion.section
          className="bg-white/5 rounded-xl p-6 sm:p-8 shadow-inner space-y-6 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold font-[var(--font-grotesk)]">Core Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Daily Rhythm Flow:</strong> Morning planning, evening review, and habit reminders</li>
            <li><strong>Life Domain Framework:</strong> Tracks progress across goals like Health, Career, Creativity, etc.</li>
            <li><strong>Memory-Aware:</strong> Custom GPT version remembers goals and tasks for continuity</li>
            <li><strong>Emotionally Intelligent:</strong> Designed to support well-being, not just execution</li>
          </ul>
        </motion.section>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* What I Learned */}
        <motion.section
          className="space-y-6 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold font-[var(--font-grotesk)]">What I Learned</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Designing with Psychology:</strong> Applying behavioral science helped shape features that actually stick</li>
            <li><strong>ChatGPT as a Collaborator:</strong> From system prompts to interface flow, I used GPT to ideate, refine, and improve</li>
            <li><strong>Simplicity Wins:</strong> The best feedback came from making it feel personal — not complex</li>
          </ul>
        </motion.section>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* What’s Next */}
        <motion.section
          className="space-y-6 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold font-[var(--font-grotesk)]">What’s Next</h2>
          <p className="text-gray-300">
            Rhythm is still evolving. I’m exploring integrations with calendar APIs, richer journaling prompts, and deeper customization features. The goal is to build a truly personal interface for living.
          </p>
        </motion.section>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent my-12" />
        <div className="pb-24 sm:pb-32" />
      </div>
    </main>
  );
}