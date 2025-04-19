"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white px-6">
      <h1 className="text-6xl font-bold text-purple-500 mb-4 animate-bounce">404</h1>
      <p className="text-lg text-gray-300 mb-8">
        Oops! The page you're looking for doesn’t exist 😕
      </p>
      <Link
        href="/"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
