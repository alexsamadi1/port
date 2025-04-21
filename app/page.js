import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black text-white px-6 sm:px-12 py-12 max-w-4xl mx-auto space-y-16">
      
      {/* Nav */}
      <nav className="flex justify-center space-x-6 mb-12">
        <Link
          href="/lifeos"
          className="hover:text-blue-400 transition"
        >
          LifeOS Case Study
        </Link>
        <Link
          href="/site-case-study"
          className="hover:text-blue-400 transition"
        >
          Site Case Study
        </Link>
      </nav>

      {/* Header Section */}
      <section className="space-y-4 text-center">
        <img 
          src="/alex.jpeg" 
          alt="Alex Samadi" 
          className="w-40 h-40 mx-auto rounded-full border-4 border-white/20 shadow-xl object-cover mb-4 transition-transform hover:scale-105"
        />
        <h1 className="text-6xl font-extrabold">Alex Samadi</h1>
        <p className="text-2xl font-light max-w-2xl mx-auto">
          Psychology meets AI. Strategy meets design.
        </p>
      </section>

      {/* About Me */}
      <section className="mt-16 space-y-4 text-gray-200">
        <h2 className="text-4xl font-bold mb-2">👨‍🏫 About Me</h2>
        <p>
          I graduated from Tufts University with a major in psychology and a minor in entrepreneurship.
          I combine behavioral insight, creativity, and GPT‑powered tools to help people and organizations
          operate at their best.
        </p>
      </section>

      {/* Resume */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold mb-2">📄 Resume</h2>
        <Link
          href="/Samadi.Resume.pdf"
          className="text-blue-400 hover:text-blue-300 underline text-lg"
        >
          Download My Resume
        </Link>
      </section>

      {/* Projects */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold mb-6">🚀 Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* LifeOS Card */}
          <Link
            href="/lifeos"
            className="group block border border-white/20 rounded-2xl p-6 transition-shadow hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-300 transition">
              LifeOS – Goal & Habit Coaching GPT
            </h3>
            <p className="text-gray-300 mb-4">
              A personalized GPT assistant that integrates goal tracking, weekly planning,
              and reflection across 6 life domains.
            </p>
            <span className="text-blue-400 group-hover:text-blue-300 underline">
              View Case Study →
            </span>
          </Link>

          {/* Site Case Study Card */}
          <Link
            href="/site-case-study"
            className="group block border border-white/20 rounded-2xl p-6 transition-shadow hover:shadow-2xl opacity-90 hover:opacity-100"
          >
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-300 transition">
              Building This Website
            </h3>
            <p className="text-gray-300 mb-4">
              A deep dive into how I set up this Next.js + Tailwind site with Turbopack,
              from blank slate to production-ready.
            </p>
            <span className="text-blue-400 group-hover:text-blue-300 underline">
              View Case Study →
            </span>
          </Link>

          {/* Innovim hidden for now */}
          {false && <div></div>}

        </div>
      </section>
    </main>
  );
}
