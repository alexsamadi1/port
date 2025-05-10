'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Potencia() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-800 overflow-hidden">

      {/* Header Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-full text-center py-28 px-6 bg-gradient-to-br from-blue-100 to-white overflow-hidden border-b border-blue-200 shadow-inner"
      >
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-teal-200 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-blue-300 opacity-20 blur-2xl rounded-full z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Image
            src="/potencia_logo.png"
            alt="Potencia Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-md shadow-md"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#004080] mb-4 leading-tight tracking-tight">
            Potencia: Supporting a Nonprofit’s Growth
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
            From intern to strategic advisor — how I applied marketing, psychology, and analytics to help a mission-driven organization grow with clarity.
          </p>
          <a
            href="https://www.potenciainc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC857] text-[#004080] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#e6b84c] transition"
          >
            Visit Potencia’s Website →
          </a>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full max-w-3xl px-6 py-20 space-y-20"
      >
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#004080]">🌱 Where It All Began</h2>
          <p className="mb-4 text-gray-700">
            Redesigning Potencia’s site wasn’t just a facelift — it was a strategic shift to align their voice, mission, and digital presence.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>✅ Redesigned their Wix website</strong> using UI/UX and psychology principles</li>
            <li><strong>✅ Achieved first-page SEO ranking on Google</strong></li>
            <li><strong>✅ Boosted site traffic and engagement</strong></li>
          </ul>
        </div>

        <div className="bg-[#fffdf5] border-l-4 border-[#FFC857] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#004080]">📱 Building Their Digital Presence</h2>
          <p className="mb-4 text-gray-700">
            I developed a long-term Instagram content strategy rooted in audience relevance and connection.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>📈 Boosted engagement to 11%</strong> through data-informed content</li>
            <li><strong>🎯 Built a multi-channel marketing strategy</strong> to boost brand visibility and recruit tutors</li>
            <li>Balanced creative content with data-driven iteration</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#004080]">👥 Scaling the Work with a Team</h2>
          <p className="mb-4 text-gray-700">
            In 2022, I became Co-President of Tufts’ Imaginet Marketing Collective. I onboarded Potencia as a client and managed a team of four consultants supporting them directly.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>🧠 Acted as strategic brand advisor</strong> guiding messaging and outreach</li>
            <li><strong>🔄 Managed a team of consultants</strong> executing day-to-day support</li>
            <li><strong>🤝 Built a sustainable marketing support system</strong> for the org</li>
          </ul>
        </div>

        <div className="bg-[#fffdf5] border-l-4 border-[#FFC857] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#004080]">📊 Turning Data into Story</h2>
          <p className="mb-4 text-gray-700">
            After graduation, I developed Excel and Tableau dashboards to visualize program outcomes and communicate impact more clearly.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>📤 Used in grant applications</strong> and stakeholder reports</li>
            <li><strong>📊 Highlighted key performance data</strong> in clear, digestible formats</li>
            <li>Drew on post-grad analytics & consumer insight skills</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#004080]">🤝 Becoming a Trusted Advisor</h2>
          <p className="text-gray-700">
            In August 2024, I joined Potencia’s Advisory Board after three years of continued collaboration. I now consult on brand strategy and analytics to support their continued growth.
          </p>
        </div>

        <div className="bg-[#FFF7E6] p-6 rounded-xl shadow-inner">
          <h2 className="text-2xl font-bold mb-4 text-[#004080]">💭 Reflection</h2>
          <p className="text-gray-700">
            Potencia helped shape how I think about strategy, impact, and growth. It taught me how to blend storytelling, structure, and empathy into systems that serve real people. I didn’t just contribute to their mission — I grew alongside it.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#004080]">🧰 Skills Demonstrated</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Strategic Marketing & Brand Messaging</li>
            <li>Website UX/UI Design (Wix + psychology-based layout)</li>
            <li>Content Strategy & Organic Growth</li>
            <li>Team Leadership & Mentorship</li>
            <li>Data Visualization (Excel & Tableau)</li>
            <li>Nonprofit Advisory & Mission-Driven Strategy</li>
          </ul>
        </div>

        <div className="text-center pt-10">
          <Link
            href="/"
            className="inline-block bg-[#004080] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#002f66] transition"
          >
            ← Back to Homepage
          </Link>
        </div>
      </motion.section>

    </main>
  );
}
