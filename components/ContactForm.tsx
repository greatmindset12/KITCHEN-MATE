"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to an API route, Formspree, Resend, or your provider of choice.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-xl2 border border-forest-100 bg-mist p-8 text-center">
        <h3 className="font-display text-2xl text-forest-700">Message sent!</h3>
        <p className="mt-2 font-body text-sm text-muted">
          Thanks for reaching out — I read every message and reply as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-body text-sm font-medium text-forest-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-forest-100 bg-cream px-4 py-3 font-body text-sm text-ink focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-forest-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-forest-100 bg-cream px-4 py-3 font-body text-sm text-ink focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-body text-sm font-medium text-forest-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-lg border border-forest-100 bg-cream px-4 py-3 font-body text-sm text-ink focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-body text-sm font-medium text-forest-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-forest-100 bg-cream px-4 py-3 font-body text-sm text-ink focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
          placeholder="Tell me what's on your mind..."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-leaf px-8 py-3 font-body text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-leaf-dark"
      >
        Send message
      </button>
    </form>
  );
}
