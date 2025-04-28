'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 px-6 py-12">

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <div className="font-bold text-xl text-gray-900">Alexander Samadi</div>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-teal-500 transition">Home</a></li>
            <li><a href="/rhythm-core" className="hover:text-teal-500 transition">Rhythm Core</a></li>
            <li><a href="#projects" className="hover:text-teal-500 transition">Projects</a></li>
            <li><a href="#about" className="hover:text-teal-500 transition">About</a></li>
            <li><a href="#contact" className="hover:text-teal-500 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

         {/* Hero Section */}
         <section id="home" className="flex flex-col items-center justify-center pt-48 pb-32 text-center">
        <motion.div className="max-w-2xl mx-auto flex flex-col items-center" variants={fadeInUp} initial="hidden" animate="show" viewport={{ once: true }}>
          
          {/* Profile Image */}
          <div className="mb-6">
            <img
              src="/alex.jpeg"
              alt="Alexander Samadi"
              className="w-36 h-36 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Hi, I'm Alexander Samadi
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            I build systems that protect human well-being through emotionally intelligent AI, strategic productivity design, and personalized technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-8 py-4 text-white font-semibold text-lg hover:bg-teal-500 hover:scale-105 transition transform duration-300">
              Explore My Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border-2 border-teal-500 text-teal-500 font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:text-white transition transform hover:scale-105 duration-300">
              Get in Touch
            </a>
          </div>

        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
      {/* Projects Section */}
      <section id="projects" className="w-full bg-blue-50 py-20">
        <motion.div className="max-w-5xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" animate="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Rhythm Core</h3>
              <p className="text-gray-600 mb-4">
                Personalized AI assistants built to enhance productivity, protect emotional energy, and support long-term growth.
              </p>
              <a href="/rhythm-core" className="text-blue-600 font-semibold hover:underline">Learn More</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Rhythm Flow</h3>
              <p className="text-gray-600 mb-4">
                A lightweight productivity platform designed to align daily tasks with your emotional and mental rhythms.
              </p>
              <p className="text-blue-600 font-semibold">Coming soon.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Portfolio Websites</h3>
              <p className="text-gray-600 mb-4">
                Custom websites crafted for entrepreneurs and creators to showcase their personal brands professionally.
              </p>
              <p className="text-blue-600 font-semibold">Available upon request.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Organizational Projects Section */}
      <section id="projects-corporate" className="w-full bg-gray-100 py-20">
        <motion.div className="max-w-5xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" animate="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Organizational Projects</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Beyond individual systems, I collaborate with organizations to integrate emotionally intelligent AI solutions into their operations and growth strategies.
          </p>

          <div className="grid grid-cols-1 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Innovim Corporation</h3>
              <p className="text-gray-600 mb-4">
                Building internal GPT systems to support proposal development, emotional resilience, and strategic decision-making for federal contracting environments.
              </p>
              <p className="text-blue-600 font-semibold">Case study coming soon.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-blue-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
      {/* About Section */}
      <section id="about" className="w-full bg-blue-50 py-20">
        <motion.div className="max-w-4xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I’m Alexander Samadi — a strategist, system builder, and creator focused on advancing human-centered innovation.
          </p>
          <p className="text-lg text-gray-700">
            Through projects like Rhythm Core and Rhythm Flow, I’m designing AI systems and technology solutions that empower individuals and organizations to grow with clarity, resilience, and emotional intelligence.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <svg className="w-full h-12 text-teal-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-teal-50 py-20 mb-20">
        <motion.div className="max-w-3xl mx-auto text-center px-6" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <p className="text-lg text-gray-700 mb-6">
            Interested in collaborating or learning more?  
            Feel free to reach out — I’m always open to meaningful conversations.
          </p>
          <a href="mailto:alexsamadi321@gmail.com" className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:scale-105 transition transform duration-300">
            Email Me
          </a>
        </motion.div>
      </section>

    </main>
  );
}
