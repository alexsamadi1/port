'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollBar = document.getElementById('scroll-bar');
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scroll / height) * 100;
      if (scrollBar) {
        scrollBar.style.transform = `scaleX(${scrolled / 100})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-gray-100 min-h-screen">
  
     {/* Navbar */}
<motion.header
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
    isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-blue-100' : 'bg-transparent'
  }`}
>
  <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
    
    {/* Refined Logo */}
    <div className="flex items-center gap-2 transition-transform hover:scale-105">
      <div className="flex items-center justify-center w-8 h-8 bg-teal-400 text-white rounded-full font-medium text-sm shadow-sm opacity-90">
        AS
      </div>
      <span className="text-lg font-medium text-gray-900 tracking-tight">Alexander Samadi</span>
    </div>

    {/* Mobile Menu Toggle */}
    <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

    {/* Desktop Navigation */}
    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
      {['home', 'projects', 'skills', 'my-approach', 'contact'].map((item) => (
        <li key={item} className="relative group">
          <a
            href={item === 'my-approach' ? `/${item}` : `#${item}`}
            className="hover:text-teal-600 transition-all duration-300 ease-out transform hover:scale-[1.03]"
          >
            {item.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-[width] duration-500 ease-out"></span>
          </a>
        </li>
      ))}
    </ul>
  </nav>

  {/* Mobile Navigation */}
  {menuOpen && (
    <motion.ul
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white/90 backdrop-blur-sm px-6 pb-4 shadow text-gray-700 font-medium space-y-3"
    >
      {['home', 'projects', 'skills', 'my-approach', 'contact'].map((item) => (
        <li key={item}>
          <a
            href={item === 'my-approach' ? `/${item}` : `#${item}`}
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:text-teal-500 transition"
          >
            {item.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
          </a>
        </li>
      ))}
    </motion.ul>
  )}

  {/* Scroll Progress Bar */}
  <div id="scroll-bar" className="fixed top-[64px] left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 scale-x-0 origin-left transition-transform duration-300 ease-out" />
</motion.header>

{/* Hero */}
<motion.section
  id="home"
  className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-[#e0f2ff] via-[#f0f9ff] to-[#e6fcf5] overflow-hidden border-b border-blue-100"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Floating Background Blobs */}
  <div className="absolute top-[-120px] left-[-160px] w-[500px] h-[500px] bg-teal-300 opacity-30 blur-3xl rounded-full z-0 animate-[float_8s_ease-in-out_infinite]" />
  <div className="absolute bottom-[-160px] right-[-120px] w-[450px] h-[450px] bg-blue-400 opacity-20 blur-2xl rounded-full z-0 animate-[floatReverse_10s_ease-in-out_infinite]" />
  <div className="absolute top-[240px] right-[180px] w-[200px] h-[200px] bg-teal-200 opacity-20 blur-2xl rounded-full z-0 animate-[float_12s_ease-in-out_infinite]" />

  {/* Main Content */}
  <motion.div
    className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15 }
      }
    }}
  >
    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-40 h-40"
    >
      <div className="absolute inset-0 -z-10 animate-pulse">
        <Image
          src="/blob.svg"
          alt="blob background"
          width={220}
          height={220}
          className="absolute inset-0 w-full h-full object-contain opacity-60"
        />
      </div>
      <Image
        src="/alex.jpeg"
        alt="Alexander Samadi"
        width={160}
        height={160}
        className="rounded-full object-cover shadow-xl border-4 border-white"
      />
    </motion.div>

    {/* Heading */}
    <motion.h1
      className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      Hi, I'm Alexander Samadi
    </motion.h1>

    {/* Subheading */}
    <motion.p
      className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      I blend <span className="text-teal-600 font-semibold">psychology</span>, <span className="text-teal-600 font-semibold">technology</span>, and strategy
      to design human-centered systems that help people live and work with more clarity, meaning, and purpose.
    </motion.p>

    {/* Call to Actions */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
    >
      <a
        href="#projects"
        className="inline-block bg-teal-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-teal-700 hover:scale-105 transition"
      >
        View My Work
      </a>
      <a
        href="#contact"
        className="inline-block border-2 border-teal-500 text-teal-600 font-semibold px-8 py-4 rounded-full hover:bg-teal-500 hover:text-white hover:scale-105 transition"
      >
        Let's Connect
      </a>
    </motion.div>
  </motion.div>

  {/* Scroll Down Cue */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
    <a href="#projects" aria-label="Scroll down">
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </div>
</motion.section>

{/* Projects Section */}
<motion.section
  id="projects"
  className="relative w-full bg-gradient-to-br from-[#f0f9ff] via-white to-[#e6fcf5] py-28 overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Soft Background Shape */}
  <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-200 opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />
  <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-teal-200 opacity-20 blur-2xl rounded-full z-0 pointer-events-none" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
      Projects & Case Studies
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          title: 'Personal AI Assistant',
          description: 'A customized GPT system designed to align emotional energy, strategic growth, and resilience into a daily support rhythm.',
          link: '/rhythm-core',
          color: 'teal',
          icon: '🤖'
        },
        {
          title: 'Portfolio Website',
          description: 'A human-centered digital portfolio built to showcase emotionally intelligent design, technical execution, and strategic growth systems.',
          link: '/website',
          color: 'blue',
          icon: '🌐'
        },
        {
          title: 'Potencia: Nonprofit Case Study',
          description: 'A 3-year journey of using analytics, marketing, and psychology to help scale an immigrant-focused nonprofit — from intern to board member.',
          link: '/potencia',
          color: 'yellow',
          icon: '💡'
        },
        {
          title: 'Rhythm Flow (Coming Soon)',
          description: 'A visual productivity platform based on daily emotional rhythms, sustainable achievement, and mindful strategic growth.',
          link: null,
          color: 'indigo',
          icon: '📈'
        }
      ].map((project, index) => {
        const colorClasses = {
          teal: 'border-teal-400 text-teal-500',
          blue: 'border-blue-400 text-blue-500',
          yellow: 'border-yellow-400 text-yellow-500',
          indigo: 'border-indigo-400 text-indigo-500'
        };

        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`border-2 rounded-3xl p-8 bg-white shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 group ${colorClasses[project.color]}`}
          >
            <div className="text-3xl mb-4">{project.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
            {project.link ? (
              <a
                href={project.link}
                className={`inline-block font-semibold ${colorClasses[project.color]} group-hover:underline group-hover:translate-x-1 transition-all duration-300`}
              >
                Learn More →
              </a>
            ) : (
              <span className="text-gray-400 italic">Case study launching soon</span>
            )}
          </motion.div>
        );
      })}
    </div>
  </div>
</motion.section>

<motion.section
  id="skills"
  className="relative w-full bg-gradient-to-b from-white via-blue-50 to-white py-28 overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Background Accent Blobs */}
  <div className="absolute top-[-100px] left-[-120px] w-[400px] h-[400px] bg-teal-300 opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />
  <div className="absolute bottom-[-80px] right-[-100px] w-[350px] h-[350px] bg-blue-300 opacity-20 blur-2xl rounded-full z-0 pointer-events-none" />

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Skills & Strengths</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
      A cross-disciplinary toolkit shaped by product thinking, strategic insight, and human-centered design.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          icon: '🧠',
          title: 'Product & Strategy',
          items: ['Product Strategy', 'Strategic Planning', 'Growth Strategy', 'Human-Centered Design'],
          color: 'teal'
        },
        {
          icon: '📊',
          title: 'Data & Analytics',
          items: ['Data Analysis', 'Excel (Advanced Formulas)', 'SQL', 'Tableau', 'Data Visualization'],
          color: 'blue'
        },
        {
          icon: '🤖',
          title: 'AI & Emerging Tech',
          items: ['Prompt Engineering', 'Generative AI', 'GPT-4', 'Workflow Automation'],
          color: 'indigo'
        },
        {
          icon: '📈',
          title: 'Marketing & Insight',
          items: ['Market Research', 'Brand Strategy', 'Inbound Marketing', 'User Experience (UX)'],
          color: 'yellow'
        },
        {
          icon: '🤝',
          title: 'Collaboration & Leadership',
          items: ['Cross-functional Collaboration', 'Project Management', 'Stakeholder Communication', 'Presentation Skills'],
          color: 'gray'
        }
      ].map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`bg-white border-l-4 border-${group.color}-400 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
            <span className="text-2xl">{group.icon}</span>
            {group.title}
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-left">
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

{/* About Me Section */}
<motion.section
  id="about"
  className="relative w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-32 overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Soft Background Shapes */}
  <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-teal-200 opacity-20 blur-3xl rounded-full z-0" />
  <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-2xl rounded-full z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <motion.h2
      className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h2>

    <motion.p
      className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      I’m a strategist and builder at the intersection of{" "}
      <span className="text-teal-600 font-semibold">psychology</span>,{" "}
      <span className="text-blue-600 font-semibold">AI</span>, and{" "}
      <span className="text-teal-600 font-semibold">human-centered design</span>. 
      My work is driven by the belief that systems should serve people — not the other way around.
    </motion.p>

    <div className="text-gray-800 space-y-6 text-left max-w-3xl mx-auto leading-loose">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I bring a cross-disciplinary lens to every project — blending{" "}
        <span className="font-medium">behavioral insight</span> with{" "}
        <span className="font-medium">technical execution</span> to help teams grow with clarity, purpose, and resilience.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Whether I’m designing a digital assistant, analyzing growth data, or crafting frameworks for strategic decision-making —
        my goal is to make complex systems feel intuitive, supportive, and deeply human.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I care most about work that’s meaningful, collaborative, and aligned with how people actually think, feel, and live.
      </motion.p>
    </div>

    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <a
        href="/my-approach"
        className="inline-block bg-teal-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
      >
        Learn More About My Approach
      </a>
    </motion.div>
  </div>
</motion.section>

{/* Contact Section */}
<motion.section
  id="contact"
  className="relative w-full bg-gradient-to-br from-teal-100 via-white to-blue-100 py-32 overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Soft Background Shapes */}
  <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-2xl rounded-full z-0" />
  <div className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] bg-teal-300 opacity-20 blur-3xl rounded-full z-0" />

  <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
    <motion.h2
      className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Let’s Connect
    </motion.h2>

    <motion.p
      className="text-lg text-gray-700 mb-4 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Whether you're building something meaningful, exploring an idea, or just want to say hi — I’d love to hear from you.
    </motion.p>

    <motion.p
      className="text-lg text-gray-700 mb-10 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      I’m always open to connecting with thoughtful{" "}
      <span className="text-teal-700 font-semibold">creators</span>,{" "}
      <span className="text-blue-700 font-semibold">strategists</span>, or{" "}
      <span className="text-teal-700 font-semibold">curious minds</span>.
    </motion.p>

    <motion.a
      href="mailto:alexsamadi321@gmail.com"
      className="inline-block bg-teal-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-blue-700 hover:scale-105 transition transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      Send Me a Message
    </motion.a>
  </div>
</motion.section>

      {/* Footer */}

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-12 px-4 text-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left text-sm sm:text-base">
            © 2025 <span className="font-semibold">Alexander Samadi</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm sm:text-base">
            <a
              href="mailto:alexsamadi321@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <FaEnvelope className="text-blue-500 text-lg" /> <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-samadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-blue-500 text-lg" /> <span>LinkedIn</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1G_RLjgnVNIV0r9x6G7ZsDjEouHBs6yh5/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <FaFileAlt className="text-blue-500 text-lg" /> <span>Resume</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
