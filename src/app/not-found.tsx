import Link from "next/link";

export default function NotFound() {
  return (
    <main className="status-page">
      <div className="status-page-inner">
        <p className="status-code">404 — Page not found</p>
        <h1>This page does not exist.</h1>
        <p className="status-copy">
          The link may be old or the page may have moved. You can return to the
          portfolio or go straight to the projects.
        </p>
        <div className="status-actions">
          <Link className="button button-primary" href="/">
            Return home
          </Link>
          <Link className="button button-secondary" href="/#projects">
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
