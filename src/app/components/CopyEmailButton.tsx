"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const email = "balavardhanpula@gmail.com";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button className="copy-email" type="button" onClick={copyEmail} aria-label="Copy email address">
      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span>{copied ? "Copied" : "Copy"}</span>
      <span className="sr-only" role="status" aria-live="polite">{copied ? "Email copied" : ""}</span>
    </button>
  );
}
