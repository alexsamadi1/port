'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50">

      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-white/80 shadow backdrop-blur' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <div className="text-xl font-bold text-gray-900">Alexander Samadi</div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-teal-500 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-teal-500 transition">Projects</a></li>
            <li><a href="/my-approach" className="hover:text-teal-500 transition">My Approach</a></li>
            <li><a href="#contact" className="hover:text-teal-500 transition">Contact</a></li>
          </ul>
        </nav>
        {menuOpen && (
          <ul className="md:hidden bg-white px-6 pb-4 shadow text-gray-700 font-medium space-y-3">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="/my-approach" onClick={() => setMenuOpen(false)}>My Approach</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="flex flex-col items-center justify-center pt-48 pb-32 text-center px-6 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Image
            src="/alex.jpeg"
            alt="Alexander Samadi"
            width={144}
            height={144}
            className="rounded-full object-cover shadow-lg mb-6"
          />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Hi, I'm Alexander Samadi
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            I blend <span className="text-teal-500 font-semibold">psychology, technology,</span> and strategy to create human-centered systems, products, and ideas that help people live and work with more clarity, meaning, and purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#projects" className="inline-block bg-blue-700 text-white font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:scale-105 transition">
              Explore My Work
            </a>
            <a href="#contact" className="inline-block border-2 border-teal-500 text-teal-500 font-semibold px-8 py-4 rounded-md hover:bg-teal-500 hover:text-white hover:scale-105 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="w-full max-w-6xl mx-auto mt-12 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Projects & Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-2 border-teal-400 rounded-3xl p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Personal AI Assistant</h3>
            <p className="text-gray-600 mb-6">
              A customized GPT system designed to align emotional energy, strategic growth, and resilience into a daily support rhythm.
            </p>
            <a href="/rhythm-core" className="inline-block font-semibold text-teal-500 hover:underline">
              Learn More →
            </a>
          </div>

          <div className="border-2 border-blue-400 rounded-3xl p-8 bg-white shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Portfolio Website</h3>
            <p className="text-gray-600 mb-6">
              A human-centered digital portfolio built to showcase emotionally intelligent design, technical execution, and strategic growth systems.
            </p>
            <a href="/website" className="inline-block font-semibold text-blue-500 hover:underline">
              Learn More →
            </a>
          </div>

          <div className="border-2 border-indigo-400 rounded-3xl p-8 bg-white shadow-lg hover:shadow-xl transition md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Rhythm Flow (Coming Soon)</h3>
            <p className="text-gray-600 mb-6">
              A visual productivity platform based on daily emotional rhythms, sustainable achievement, and mindful strategic growth.
            </p>
            <span className="text-gray-400 italic">Case study launching soon</span>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="w-full bg-blue-100 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">About Me</h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            I'm a <span className="text-teal-600 font-semibold">system builder</span> and <span className="text-blue-600 font-semibold">strategist</span> focused on advancing <span className="text-teal-600 font-semibold">human-centered innovation</span>.
          </p>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            My work blends <span className="text-blue-600 font-semibold">psychology</span>, <span className="text-blue-600 font-semibold">AI</span>, and <span className="text-teal-600 font-semibold">intentional design</span> — helping people and organizations grow with <span className="text-teal-600 font-semibold">clarity, resilience,</span> and meaning.
          </p>
          <p className="text-lg text-gray-800 mb-10 leading-relaxed">
            I believe the best technologies don't just make us faster — they make us <span className="text-blue-600 font-semibold">more human</span>.
          </p>
          <a
            href="/my-approach"
            className="inline-block bg-teal-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full bg-teal-100 py-24 mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Let's Connect</h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            I'm always open to connecting with thoughtful builders, strategists, and creators — or anyone passionate about designing systems that support <span className="text-blue-600 font-semibold">real human growth</span>.
          </p>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            Whether it's collaboration, conversation, or exploration — feel free to reach out.
          </p>
          <a
            href="mailto:alexsamadi321@gmail.com"
            className="inline-block bg-blue-700 text-white font-semibold px-10 py-4 rounded-full hover:bg-teal-500 hover:scale-105 transition transform duration-300"
          >
            Send a Message
          </a>
        </div>
      </motion.section>
    </main>
  );
}
