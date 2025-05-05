'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Potencia() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-800 px-6 py-24">

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full text-center mb-20 py-16 px-6 bg-gradient-to-b from-[#e6f0ff] to-white rounded-xl shadow-sm"
      >
        <h1 className="text-5xl font-bold mb-4 text-[#004080]">Potencia: Supporting a Nonprofit’s Growth</h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/potencia_logo.png"
            alt="Potencia Logo"
            width={160}
            height={160}
            className="mx-auto mb-6 rounded-md shadow-md"
          />
        </motion.div>
        <p className="text-lg text-gray-700">
          From intern to strategic advisor — how I applied marketing, psychology, and analytics to help a mission-driven organization grow with clarity.
        </p>
        <a
          href="https://www.potenciainc.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-[#FFC857] text-[#004080] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#e6b84c] transition"
        >
          Visit Potencia’s Website →
        </a>
      </motion.section>

      {/* Sections */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full space-y-20"
      >
        <div className="bg-[#f9fafb] p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">🌱 Where It All Began</h2>
          <p className="mb-4">
            Redesigning Potencia’s site wasn’t just a facelift — it was a strategic shift to align their voice, mission, and digital presence.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>✅ Redesigned their Wix website</strong> using UI/UX and psychology principles</li>
            <li><strong>✅ Achieved first-page SEO ranking on Google</strong></li>
            <li><strong>✅ Boosted site traffic and engagement</strong></li>
          </ul>
        </div>

        <div className="border-l-4 border-[#FFC857] pl-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">📱 Building Their Digital Presence</h2>
          <p className="mb-4">
            I developed a long-term Instagram content strategy rooted in audience relevance and connection.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>📈 Boosted engagement to 11%</strong> through data-informed content</li>
            <li><strong>🎯 Built a multi-channel marketing strategy</strong> to boost brand visibility and recruit tutors</li>
            <li>Balanced creative content with data-driven iteration</li>
          </ul>
        </div>

        <div className="bg-[#f9fafb] p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">👥 Scaling the Work with a Team</h2>
          <p className="mb-4">
            In 2022, I became Co-President of Tufts’ Imaginet Marketing Collective. I onboarded Potencia as a client and managed a team of four consultants supporting them directly.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>🧠 Acted as strategic brand advisor</strong> guiding messaging and outreach</li>
            <li><strong>🔄 Managed a team of consultants</strong> executing day-to-day support</li>
            <li><strong>🤝 Built a sustainable marketing support system</strong> for the org</li>
          </ul>
        </div>

        <div className="border-l-4 border-[#FFC857] pl-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">📊 Turning Data into Story</h2>
          <p className="mb-4">
            After graduation, I developed Excel and Tableau dashboards to visualize program outcomes and communicate impact more clearly.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>📤 Used in grant applications</strong> and stakeholder reports</li>
            <li><strong>📊 Highlighted key performance data</strong> in clear, digestible formats</li>
            <li>Drew on post-grad analytics & consumer insight skills</li>
          </ul>
        </div>

        <div className="bg-[#f9fafb] p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">📈 Building a Full-Scale Excel Dashboard</h2>
          <Image
            src="/potencia_dashboard.png"
            alt="Potencia Excel Dashboard Overview"
            width={1200}
            height={700}
            className="rounded-xl shadow-lg mx-auto border border-gray-200"
          />
          <p className="text-sm text-gray-600 mt-4">
            This dashboard was built from scratch in Excel — a full-cycle analytics project that included cleaning raw survey data, merging tables, building out key visualizations, and designing the interface for interactivity and clarity. It served as a powerful tool to communicate learner impact to funders.
          </p>
        </div>

        <div className="border-l-4 border-[#FFC857] pl-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">🌍 Visualizing Community Impact</h2>
          <Image
            src="/potencia_map.png"
            alt="Tableau map showing where Potencia learners are from"
            width={1200}
            height={700}
            className="rounded-xl shadow-lg mx-auto border border-gray-200"
          />
          <p className="text-center text-sm text-gray-500 mt-2 italic">
            This Tableau dashboard helped visualize learner locations and language diversity across Massachusetts — a key data piece in our grant narratives.
          </p>
        </div>

        <div className="bg-[#f9fafb] p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">🤝 Becoming a Trusted Advisor</h2>
          <p>
            In August 2024, I joined Potencia’s Advisory Board after three years of continued collaboration. I now consult on brand strategy and analytics to support their continued growth.
          </p>
        </div>

        <div className="bg-[#FFF7E6] p-6 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">💭 Reflection</h2>
          <p>
            Potencia helped shape how I think about strategy, impact, and growth. It taught me how to blend storytelling, structure, and empathy into systems that serve real people. I didn’t just contribute to their mission — I grew alongside it.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#004080]">🧰 Skills Demonstrated</h2>
          <ul className="list-disc list-inside space-y-2">
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