import Link from 'next/link'

export default function LifeOS() {
  return (
    <main className="bg-black text-white px-6 sm:px-12 py-12 max-w-3xl mx-auto space-y-10">
      
      {/* Back Home */}
      <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
        ← Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-5xl font-extrabold">LifeOS Case Study</h1>
      <p className="text-lg text-gray-300 max-w-xl">
        LifeOS is a GPT‑powered personal operating system designed to bring behavioral design
        into your daily routines. Below is how it came together:
      </p>

      {/* The Challenge */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">🛠 The Challenge</h2>
        <p className="text-gray-200">
          Users struggle with fragmented productivity tools—calendars, to‑do apps, habit trackers—
          none of which speak to each other. The goal was to create a single GPT‑driven assistant
          that could track goals, plan weeks, and prompt daily reflection, all in one place.
        </p>
      </section>

      {/* The Solution */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">💡 The Solution</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li><strong>Custom Prompt Flow:</strong> Designed a conversational loop prompting users each morning for their top 3 weekly goals.</li>
          <li><strong>Multi‑Domain Tracking:</strong> Broke life into 6 domains (Health, Learning, Relationships, Career, Finance, Creativity) with GPT‑generated check‑ins.</li>
          <li><strong>Reflection Engine:</strong> Evening prompts to capture wins, challenges, and adjust upcoming reminders.</li>
          <li><strong>Adaptive Learning:</strong> The GPT tailors follow‑up questions based on past responses, making suggestions smarter over time.</li>
        </ul>
      </section>

      {/* Visual / Screenshots Placeholder */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">📱 Screenshots</h2>
        <p className="text-gray-400 italic">[Insert project screenshots or GIFs here]</p>
      </section>

      {/* Impact */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">🚀 Impact & Next Steps</h2>
        <p className="text-gray-200">
          Early users report a 30% increase in habit completion and stronger weekly planning consistency.
          Next, I’ll integrate calendar sync and add more domains based on user feedback.
        </p>
      </section>
    </main>
  )
}
