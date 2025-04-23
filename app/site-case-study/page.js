'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SiteCaseStudy() {
  return (
    <main className="relative w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1f33] to-[#050505] text-white overflow-hidden">
      {/* Top Section - Full Width */}
      <div className="px-6 sm:px-12 lg:px-24 py-20 space-y-24">
        <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-violet-500/20 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Back Home */}
        <Link href="/" className="text-blue-400 hover:text-blue-300 underline block">
          ← Back to Home
        </Link>

        {/* Title */}
        <motion.section
          className="space-y-6 text-center z-10 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight font-[var(--font-grotesk)]">
            Building This Website
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-[var(--font-inter)] max-w-2xl mx-auto">
            A behind-the-scenes look at how I used ChatGPT as a creative partner to design, develop, and continuously refine this portfolio — built with Next.js, Tailwind, and a lot of iteration.
          </p>
        </motion.section>
      </div>

      {/* Content Section - Constrained */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-24">
        {/* Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* Why I Built It */}
        <motion.section
          className="space-y-6 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white font-[var(--font-grotesk)]">Why I Built It</h2>
          <p className="text-gray-300">
            I wanted a site that wasn’t just a portfolio — but a reflection of my personality, my process, and my ability to learn. Rather than following a template, I used ChatGPT to think through design decisions, write code, and solve bugs collaboratively.
          </p>
          <p className="text-gray-300">
            From choosing color palettes and spacing to writing page transitions and custom animations, I used ChatGPT like a co-designer. Every piece of this site was reviewed, iterated, and shaped by conversation and experimentation.
          </p>
        </motion.section>

        {/* Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* Tech Stack */}
        <motion.section
          className="bg-white/5 rounded-xl p-6 sm:p-8 shadow-inner space-y-6 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold font-[var(--font-grotesk)]">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Next.js 15 (App Router)</strong> for modern routing and server-rendered components</li>
            <li><strong>Turbopack</strong> for blazing-fast development and live preview</li>
            <li><strong>Tailwind CSS</strong> for utility-first styling with full responsiveness</li>
            <li><strong>Framer Motion</strong> for smooth animations and transitions</li>
          </ul>
        </motion.section>

        {/* Divider */}
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
            <li><strong>Conversational Design Works:</strong> Using ChatGPT to brainstorm layout, style, and copy made the process more fluid than rigid design tools.</li>
            <li><strong>Iteration Is Everything:</strong> The best ideas came from trying things out, asking questions, and evolving the design live.</li>
            <li><strong>Constraints Are Creative:</strong> I gave myself limits (one font pair, no external libraries unless needed) to focus on craft.</li>
          </ul>
        </motion.section>

        {/* Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* Next Steps */}
        <motion.section
          className="space-y-6 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold font-[var(--font-grotesk)]">What’s Next</h2>
          <p className="text-gray-300">
            I’m planning to add more interactive elements, showcase my GPT projects in greater depth, and maybe even open source parts of this build. The goal is to keep learning in public.
          </p>
        </motion.section>

        {/* Final Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent my-12" />

        {/* Footer Spacer */}
        <div className="pb-24 sm:pb-32" />
      </div>
    </main>
  );
}
