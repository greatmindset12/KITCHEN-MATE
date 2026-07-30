"use client";

import { useState } from "react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hook this up to your email provider of choice (Mailchimp, ConvertKit, Buttondown, etc.)
    setStatus("submitted");
  }

  return (
    <section className="relative overflow-hidden rounded-xl2 bg-forest-700 px-6 py-12 text-center sm:px-12">
      <div className="mx-auto max-w-lg">
        <h2 className="font-display text-3xl text-cream">Get a new recipe in your inbox</h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-sage-light">
          One email a week — no spam, just the recipe I most recently got right.
        </p>

        {status === "submitted" ? (
          <p className="mt-6 font-body text-sm font-medium text-cream">
            You&apos;re on the list — thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 font-body text-sm text-cream placeholder:text-sage-light/70 focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/40"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-forest-900 transition-colors hover:bg-gold/90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
