import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kitchen Glory — questions, collaborations, or recipe requests.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
        Get in touch
      </p>
      <h1 className="mt-3 font-display text-5xl text-forest-700">Contact</h1>
      <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted">
        Questions about a recipe, ingredient swaps, collaborations, or just
        want to say the jollof worked out? Send a message — I read every one.
      </p>

      <div className="mt-10 rounded-xl2 border border-forest-100 bg-cream p-6 shadow-card sm:p-10">
        <ContactForm />
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl2 border border-forest-100 bg-mist p-6">
          <h3 className="font-display text-lg text-forest-700">Email</h3>
          <p className="mt-2 font-body text-sm text-muted">hello@kitchenglory.com</p>
        </div>
        <div className="rounded-xl2 border border-forest-100 bg-mist p-6">
          <h3 className="font-display text-lg text-forest-700">Response time</h3>
          <p className="mt-2 font-body text-sm text-muted">Usually within 2–3 business days.</p>
        </div>
      </div>
    </div>
  );
}
