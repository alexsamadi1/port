export default function RhythmCaseStudy() {
    return (
      <main className="bg-black text-white px-6 sm:px-12 py-12 max-w-4xl mx-auto space-y-16">
        {/* Back Link */}
        <a href="/" className="text-blue-400 hover:text-blue-300 underline">
          ← Back to Home
        </a>
  
        {/* Hero Section */}
        <section className="space-y-4 text-center">
          <h1 className="text-5xl font-extrabold">Rhythm: Psychology Meets AI</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rhythm is a personal assistant GPT designed to bring structure, reflection, and sustainable progress into your daily flow — rooted in psychology and built with LLMs.
          </p>
        </section>
  
        {/* Problem / Solution */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-300">📌 The Problem</h2>
          <p className="text-gray-300">
            Most productivity tools are fragmented — task managers, calendars, habit trackers — and none really "understand" you. It’s easy to get overwhelmed and fall out of sync.
          </p>
          <h2 className="text-3xl font-bold text-green-300 mt-6">💡 The Solution</h2>
          <p className="text-gray-300">
            Rhythm combines behavioral psychology with large language models to create a daily assistant that listens, adapts, and helps you build your rhythm — one day at a time.
          </p>
        </section>
  
        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-yellow-300">⚙️ Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Daily planning with emotional intelligence</li>
            <li>Built-in habit and goal structure across life domains</li>
            <li>Natural conversation + reflection integration</li>
            <li>Memory-based evolution (if enabled)</li>
          </ul>
        </section>
  
        {/* Design Philosophy */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-300">🧠 Design Philosophy</h2>
          <p className="text-gray-300">
            Rhythm was built with a few principles in mind: psychology-first design, low-friction interaction, emotional intelligence, and a clean, focused visual style.
          </p>
        </section>
  
        {/* Placeholder for screenshots or demo */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-pink-300">📸 Screenshots & Demo</h2>
          <p className="text-gray-400 italic">
            Coming soon — interactive demo and visuals.
          </p>
        </section>
  
        {/* Final Thoughts */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-cyan-300">📈 Reflections & What’s Next</h2>
          <p className="text-gray-300">
            Rhythm is still evolving — next steps include deeper customization, better visual summaries, and eventually integrating with external tools like calendars and health apps.
          </p>
        </section>
      </main>
    );
  }
  