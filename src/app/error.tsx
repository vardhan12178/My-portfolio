"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Runtime error:", error);
  }, [error]);

  return (
    <main className="status-page">
      <div className="status-page-inner">
        <p className="status-code">Something went wrong</p>
        <h1>We could not load this page.</h1>
        <p className="status-copy">
          Please try again. If the problem continues, return to the portfolio.
        </p>
        <div className="status-actions">
          <button className="button button-primary" type="button" onClick={reset}>
            Try again
          </button>
          <Link className="button button-secondary" href="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
