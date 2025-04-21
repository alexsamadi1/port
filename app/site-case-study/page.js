// app/site-case-study/page.js
import Link from 'next/link';

export default function SiteCaseStudy() {
  return (
    <main className="bg-black text-white px-6 sm:px-12 py-12 max-w-3xl mx-auto space-y-10">
      
      {/* Back Home */}
      <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
        ← Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-5xl font-extrabold">Building This Website</h1>
      <p className="text-lg text-gray-300 max-w-xl">
        A behind‑the‑scenes look at how I built this portfolio using Next.js, Tailwind, and Turbopack.
      </p>

      {/* Goals */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">🎯 Goals</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>Ultra‑fast development feedback with Turbopack</li>
          <li>Utility‑first, responsive styling via Tailwind CSS</li>
          <li>Simple, modular structure (App Router) for easy updates</li>
          <li>Polished, dynamic visuals without heavy frameworks</li>
        </ul>
      </section>

      {/* Stack & Configuration */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">🛠 Stack & Configuration</h2>
        <p className="text-gray-200">
          - **Next.js 15 (App Router)** for server components and static rendering.<br />
          - **Turbopack** enabled out‑of‑the‑box for near‑instant HMR.<br />
          - **Tailwind CSS** with a custom `postcss.config.js` and global CSS for animations.<br />
          - **Public folder** hosting images and assets, including my profile photo and resume.
        </p>
      </section>

      {/* Challenges & Solutions */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">⚙️ Challenges & Solutions</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li><strong>Tailwind/PostCSS Setup:</strong> Resolved by installing <code>@tailwindcss/postcss</code> and adjusting <code>postcss.config.js</code>.</li>
          <li><strong>Link API Changes:</strong> Updated to the new Link syntax—moved classes onto <code>&lt;Link&gt;</code> directly.</li>
          <li><strong>Animations:</strong> Switched from styled‑jsx to global CSS utilities for fade‑in effects.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">🚀 Next Steps</h2>
        <p className="text-gray-200">
          - Add a blog section using MDX.<br />
          - Integrate a contact form with server‑less functions.<br />
          - Deploy versioned snapshots to showcase progress over time.
        </p>
      </section>

    </main>
  );
}
