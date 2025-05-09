'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-gray-100">

       {/* Navbar */}
       <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/60 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <div className="text-xl font-bold text-gray-900 tracking-tight">Alexander Samadi</div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {['home', 'projects', 'skills', 'my-approach', 'contact'].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={item === 'my-approach' ? `/${item}` : `#${item}`}
                  className="hover:text-teal-500 transition"
                >
                  {item.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {menuOpen && (
          <ul className="md:hidden bg-white/90 backdrop-blur-sm px-6 pb-4 shadow text-gray-700 font-medium space-y-3">
            {['home', 'projects', 'skills', 'my-approach', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={item === 'my-approach' ? `/${item}` : `#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-teal-500"
                >
                  {item.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <motion.section
  id="home"
  className="flex flex-col items-center justify-center pt-36 pb-28 text-center px-6 
    bg-gradient-to-br from-white via-blue-50 to-white 
    bg-[url('/dot-grid.svg')] bg-top bg-repeat bg-[length:80px_80px] border-b border-blue-100"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
    <div className="relative w-40 h-40">
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
    </div>
    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
      Hi, I'm Alexander Samadi
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">
      I blend <span className="text-teal-600 font-semibold">psychology, technology,</span> and strategy 
      to design human-centered systems that help people live and work with more clarity, meaning, and purpose.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
    </div>
  </div>
</motion.section>

<motion.section
  id="projects"
  className="w-full bg-blue-50 py-28 border-t border-b border-blue-100"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects & Case Studies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Project Card */}
      {[
        {
          title: 'Personal AI Assistant',
          description: 'A customized GPT system designed to align emotional energy, strategic growth, and resilience into a daily support rhythm.',
          link: '/rhythm-core',
          color: 'teal'
        },
        {
          title: 'Portfolio Website',
          description: 'A human-centered digital portfolio built to showcase emotionally intelligent design, technical execution, and strategic growth systems.',
          link: '/website',
          color: 'blue'
        },
        {
          title: 'Potencia: Nonprofit Case Study',
          description: 'A 3-year journey of using analytics, marketing, and psychology to help scale an immigrant-focused nonprofit — from intern to board member.',
          link: '/potencia',
          color: 'yellow'
        },
        {
          title: 'Rhythm Flow (Coming Soon)',
          description: 'A visual productivity platform based on daily emotional rhythms, sustainable achievement, and mindful strategic growth.',
          link: null,
          color: 'indigo'
        }
      ].map((project) => (
        <div
          key={project.title}
          className={`border-2 border-${project.color}-400 rounded-3xl p-8 bg-white shadow-md hover:shadow-xl transition-transform hover:-translate-y-1`}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-6">{project.description}</p>
          {project.link ? (
            <a
              href={project.link}
              className={`inline-block font-semibold text-${project.color}-500 hover:underline`}
            >
              Learn More →
            </a>
          ) : (
            <span className="text-gray-400 italic">Case study launching soon</span>
          )}
        </div>
      ))}
    </div>
  </div>
</motion.section>

<motion.section
  id="skills"
  className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-28 border-t border-b border-blue-100"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
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
          title: 'Marketing & Consumer Insight',
          items: ['Market Research', 'Brand Strategy', 'Inbound Marketing', 'User Experience (UX)'],
          color: 'yellow'
        },
        {
          icon: '🤝',
          title: 'Leadership & Communication',
          items: ['Cross-functional Collaboration', 'Project Management', 'Stakeholder Communication', 'Presentation Skills'],
          color: 'gray'
        }
      ].map((group) => (
        <div
          key={group.title}
          className={`bg-white border-l-4 border-${group.color}-400 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
            <span className="text-2xl">{group.icon}</span>
            {group.title}
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</motion.section>

<motion.section
  id="about"
  className="w-full bg-gradient-to-br from-blue-100 via-white to-blue-100 py-28 border-t border-b border-blue-200"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-10">About Me</h2>
    <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
      <p>
        I'm a <span className="text-teal-600 font-semibold">system builder</span> and <span className="text-blue-600 font-semibold">strategist</span> focused on advancing <span className="text-teal-600 font-semibold">human-centered innovation</span>.
      </p>
      <p>
        My work blends <span className="text-blue-600 font-semibold">psychology</span>, <span className="text-blue-600 font-semibold">AI</span>, and <span className="text-teal-600 font-semibold">intentional design</span> to help people and organizations grow with <span className="text-teal-600 font-semibold">clarity, resilience,</span> and meaning.
      </p>
      <p>
        I believe the best technologies don’t just make us faster — they make us <span className="text-blue-600 font-semibold">more human</span>.
      </p>
    </div>
    <div className="mt-10">
      <a
        href="/my-approach"
        className="inline-block bg-teal-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
      >
        Learn More About My Approach
      </a>
    </div>
  </div>
</motion.section>

<motion.section
  id="contact"
  className="w-full bg-teal-100 py-28 border-t border-teal-200"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-8">Let’s Connect</h2>
    <p className="text-lg text-gray-800 mb-4 leading-relaxed">
      I’m always open to connecting with thoughtful builders, strategists, or creators —
      or anyone passionate about designing systems that support <span className="text-blue-700 font-semibold">real human growth</span>.
    </p>
    <p className="text-lg text-gray-800 mb-10 leading-relaxed">
      Whether it’s collaboration, conversation, or exploration — I’d love to hear from you.
    </p>
    <a
      href="mailto:alexsamadi321@gmail.com"
      className="inline-block bg-blue-700 text-white font-semibold px-10 py-4 rounded-full hover:bg-teal-600 hover:scale-105 transition transform duration-300"
    >
      Send Me a Message
    </a>
  </div>
</motion.section>

    </main>
  );
}
