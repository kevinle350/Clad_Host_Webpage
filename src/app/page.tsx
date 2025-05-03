'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Clad</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        We help LLM companies monetize their product through seamless, high-performing ad placements.
        Join us to optimize your ad revenue and manage your layouts intelligently.
      </p>

      <div className="flex gap-4">
        <Link href="/login/host">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Host Login
          </button>
        </Link>

        <Link href="/login/provider">
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border hover:bg-gray-200 transition">
            Provider Login
          </button>
        </Link>
      </div>

      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Clad Inc. All rights reserved.
      </footer>
    </div>
  );
}
