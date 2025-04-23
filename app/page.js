'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeCard = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="relative w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1f33] to-[#050505] text-white overflow-hidden">

      {/* Top Full-Width Section */}
      <div className="px-6 sm:px-12 lg:px-24 py-20 space-y-24">

        {/* Floating Background Glow */}
        <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-violet-500/20 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Nav */}
        <nav className="flex justify-center flex-wrap gap-4 text-sm sm:text-base font-medium z-10 relative">
          <Link
            href="/rhythm"
            className="px-4 py-2 rounded-full border border-white/20 opacity-70 hover:opacity-100 hover:scale-105 text-white transition-all shadow-sm hover:shadow-md"
          >
            Rhythm Case Study
          </Link>
          <Link
            href="/site-case-study"
            className="px-4 py-2 rounded-full border border-white/20 opacity-70 hover:opacity-100 hover:scale-105 text-white transition-all shadow-sm hover:shadow-md"
          >
            Site Case Study
          </Link>
        </nav>

        {/* Hero */}
        <motion.section
          className="space-y-6 text-center z-10 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.img 
            src="/alex.jpeg" 
            alt="Alex Samadi" 
            className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full border-4 border-white/10 shadow-2xl object-cover"
            whileHover={{ scale: 1.05 }}
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-grotesk)]">
            Alex Samadi
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto font-[var(--font-inter)]">
            Building thoughtful systems at the edge of <span className="text-blue-400 font-semibold">behavior</span>, <span className="text-blue-400 font-semibold">strategy</span>, and <span className="text-blue-400 font-semibold">technology</span>.
          </p>
        </motion.section>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-24">

        {/* Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* About Me */}
        <motion.section
          className="space-y-6 text-gray-100 font-[var(--font-inter)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-white font-[var(--font-grotesk)]">About Me</h2>
          <p>
            I’m <strong>Alex Samadi</strong> — a builder, strategist, and lifelong learner with a deep interest in how people <em>think</em>, <em>act</em>, and <em>grow</em>.
          </p>
          <p>
            I graduated from Tufts University with a major in Psychology and a minor in Entrepreneurship, where I explored everything from behavioral science to startup strategy. Since then, I’ve worked at the intersection of technology and human insight — helping people and teams operate smarter through creativity, systems, and design.
          </p>
          <p>
            Right now, I’m focused on building GPT-powered tools that solve real-world problems — blending prompt engineering, behavioral psychology, and UX thinking to create experiences that feel both intelligent and intuitive.
          </p>
          <p>
            I’m especially drawn to work that’s <strong>meaningful</strong>, <strong>collaborative</strong>, and <strong>creatively challenging</strong>. I care about ideas that move people — and systems that help them move forward.
          </p>
        </motion.section>

        {/* Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-12" />

        {/* Projects */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/5 rounded-xl p-6 sm:p-8 shadow-inner"
        >
          <h2 className="text-4xl font-bold mb-8 text-white text-center font-[var(--font-grotesk)]">
            🚀 Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Rhythm */}
            <motion.div variants={fadeCard} whileHover={{ scale: 1.02 }}>
              <Link
                href="/rhythm"
                className="group block border border-white/10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 transition-all hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-violet-500/10"
              >
                <h3 className="text-2xl font-semibold mb-1 group-hover:text-blue-300 transition font-[var(--font-grotesk)]">
                  Rhythm – Your Psychology-First AI Companion
                </h3>
                <p className="text-sm text-blue-400 mb-3">#Prompt Engineering #Behavioral Design</p>
                <p className="text-gray-300 mb-4 font-[var(--font-inter)]">
                  A personal assistant GPT designed to support goal-setting, habit formation, and daily structure — all grounded in human psychology.
                </p>
                <span className="text-blue-400 group-hover:text-blue-300 underline">
                  View Case Study →
                </span>
              </Link>
            </motion.div>

            {/* Site Case Study */}
            <motion.div variants={fadeCard} whileHover={{ scale: 1.02 }}>
              <Link
                href="/site-case-study"
                className="group block border border-white/10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 transition-all hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-violet-500/10"
              >
                <h3 className="text-2xl font-semibold mb-1 group-hover:text-blue-300 transition font-[var(--font-grotesk)]">
                  Building This Website
                </h3>
                <p className="text-sm text-blue-400 mb-3">#Next.js #Tailwind #Turbopack</p>
                <p className="text-gray-300 mb-4 font-[var(--font-inter)]">
                  A deep dive into how I set up this Next.js + Tailwind site with Turbopack, from blank slate to production-ready.
                </p>
                <span className="text-blue-400 group-hover:text-blue-300 underline">
                  View Case Study →
                </span>
              </Link>
            </motion.div>

          </div>
        </motion.section>

      </div>

      {/* Footer (Full-Width) */}
      <section className="w-full px-6 sm:px-12 lg:px-24 pt-10 border-t border-white/10 text-center space-y-3 text-gray-400 text-sm">
        <p className="text-white text-base font-[var(--font-grotesk)]">Let’s Connect!</p>
        <div className="flex flex-wrap justify-center gap-6 text-base font-[var(--font-inter)]">
          <Link href="mailto:alexsamadi321@gmail.com" className="hover:text-blue-400 transition">Email</Link>
          <Link href="https://www.linkedin.com/in/alex-samadi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</Link>
          <Link href="https://drive.google.com/file/d/1G_RLjgnVNIV0r9x6G7ZsDjEouHBs6yh5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Resume</Link>
        </div>
      </section>
    </main>
  );
}
