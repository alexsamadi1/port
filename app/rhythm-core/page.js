'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function RhythmCore() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="flex flex-col items-center bg-white">

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 pt-48 pb-32 text-center bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Introducing <span className="text-blue-600">Rhythm Core</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A human-centered, emotionally intelligent AI system — custom-built for you.
          </p>
          <p className="text-md text-gray-600 mt-4 italic">*Now accepting Early Access partners*</p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
    {/* Problem Section */}
    <section className="w-full bg-blue-50 py-20">
        <motion.div className="max-w-3xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Most productivity tools manage tasks — but they ignore people.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            They don’t adapt to your energy, your emotional states, or your evolving goals.  
            Over time, they create more noise — not more clarity.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Solution Section */}
      <section className="w-full bg-teal-50 py-20">
        <motion.div className="max-w-3xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Rhythm Core Difference</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Rhythm Core protects your clarity, energy, and resilience — not just your to-do list.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            It’s an emotionally intelligent, strategic system that adapts to your life — aligning your daily actions with your deeper goals and rhythms.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
            {/* Core Benefits */}
            <section className="w-full bg-blue-50 py-20">
        <motion.div className="max-w-3xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              "Protects emotional energy and reduces decision fatigue",
              "Aligns daily focus with your cognitive and emotional rhythms",
              "Adapts to life seasons like Sprints, Recovery, and Exploration",
              "Strengthens resilience and strategic clarity over time",
              "Accelerates sustainable achievement without burning you out",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
                <FaCheckCircle className="text-teal-500 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* How Early Access Works */}
      <section className="w-full bg-teal-50 py-20">
        <motion.div className="max-w-4xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Early Access Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { title: "1. Submit Interest", desc: "Reach out to join the early access list. There's no obligation." },
              { title: "2. Personalization Form", desc: "Fill out a brief profile capturing your rhythms, goals, and energy patterns." },
              { title: "3. (Optional) Calibration Call", desc: "Fine-tune the tone and focus of your Core with a short conversation." },
              { title: "4. Core Delivery", desc: "After personalization and calibration, your Rhythm Core will be launched and ready to support you." },
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
                <FaCheckCircle className="text-blue-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
      {/* How Rhythm Core is Built */}
      <section className="w-full bg-blue-50 py-20">
        <motion.div className="max-w-4xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Rhythm Core is Built</h2>
          <div className="text-left max-w-2xl mx-auto space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Emotional and Strategic Profiling:</strong> Mapping your cognitive patterns, emotional drivers, and motivational rhythms.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Custom Conversational Architecture:</strong> Structuring prompts, responses, and nudges around your preferred style.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Dynamic Mode Switching:</strong> Enabling your Core to shift behavior based on the season of life you're in.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p><strong>Iterative Alignment:</strong> Evolving the system over time to stay aligned as your goals and life patterns shift.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Inside the Ultimate Rhythm Core */}
      <section className="w-full bg-teal-50 py-24">
        <motion.div className="max-w-4xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Inside the Ultimate Rhythm Core</h2>
          <div className="text-left max-w-2xl mx-auto space-y-8 text-gray-700">
            {[
              { title: "Morning Focus Alignment", desc: "Daily mini-reset to prioritize based on your current energy and strategic goals." },
              { title: "Weekly Goal Reflection", desc: "Strategic lightweight check-in and adjustment session every week." },
              { title: "Life Season Mode Switching", desc: "Your Core shifts tone and behavior depending on your season: Sprint, Recovery, Growth." },
              { title: "Decision Fatigue Triage", desc: "When overwhelmed, your Core helps you clarify the top 1–3 next best actions." },
              { title: "Reflective Micro-Journaling", desc: "Optional nightly reflections to reinforce clarity, gratitude, and growth." },
              { title: "Tone Calibration", desc: "You choose your Core's communication style: Encouraging, Strategic, Executive, Reflective." },
              { title: "Calendar-Aware Nudges (Optional)", desc: "Light reminders about major events or emotional prep without overwhelming you." },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <FaCheckCircle className="text-teal-500 mt-1" />
                <div>
                  <strong>{feature.title}:</strong> {feature.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-gray-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
      {/* Final CTA Section */}
      <section className="w-full bg-gray-50 py-24">
        <motion.div className="max-w-2xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Shape the Future?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Rhythm Core is now accepting a limited number of Early Access partners.  
            Build a system designed for your growth, resilience, and strategic clarity.
          </p>
          <a href="mailto:alexsamadi321@gmail.com" className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:scale-105 transition transform duration-300">
            Join Early Access
          </a>
        </motion.div>
      </section>

    </main>
  );
}
