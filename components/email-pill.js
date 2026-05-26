"use client";

import { useState } from "react";
import { Check } from "lucide-react";

// Pill that copies the email address to the clipboard on click (with a brief
// "Copied!" confirmation) instead of opening a mail app. Falls back to mailto
// if the clipboard API is unavailable.
export function EmailPill({ label, email }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Copy email address ${email}`}
      className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[13px] text-white transition-opacity duration-150 hover:opacity-90"
    >
      {copied ? "Copied!" : label}
      {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : null}
    </button>
  );
}
