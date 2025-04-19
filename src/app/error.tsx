"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white px-6">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Something went wrong 😵‍💫</h1>
      <p className="text-lg text-gray-300 mb-8">
        An unexpected error occurred. Try refreshing the page.
      </p>
      <button
        onClick={reset}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition"
      >
        Try Again
      </button>
    </section>
  );
}
