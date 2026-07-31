import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story behind Kitchen Glory — a personal kitchen, a family of recipes, and a running record of Nigerian food.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
        About me
      </p>
      <h1 className="mt-3 font-display text-5xl text-forest-700">
        Hi, I&apos;m glad you&apos;re here.
      </h1>

      <div className="mt-8 flex justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-sage-light via-mist to-cream">
          <div className="absolute inset-3 rounded-full border border-forest-100" />
          <span className="font-display text-4xl text-leaf">KG</span>
        </div>
      </div>

      <div className="mt-10 space-y-6 font-body text-base leading-relaxed text-ink">
        <p>
          Kitchen Glory started as a private notebook — the kind with
          flour-dusted pages and sauce stains in the margins — before it ever
          became a website. I kept writing down the same things: how much
          longer the egusi needed, why the jollof caught at the bottom that
          one time (in a good way), what my grandmother did differently with
          her chin chin.
        </p>
        <p>
          I grew up in a kitchen that was always doing two things at once —
          a soup on the back burner and something frying up front for
          whoever walked in hungry. That&apos;s the spirit I&apos;ve tried to keep
          here: proper Sunday mains and soups alongside the snacks, small
          chops and fast food that actually get eaten on a Tuesday.
        </p>
        <p>
          Every recipe on this site has been cooked in my own kitchen,
          usually more than once, before it made it onto the page. Some are
          exactly how I was taught them. Others have been adjusted for a
          smaller pot, a busier week, or a pantry that didn&apos;t have every
          ingredient on hand — and I&apos;ll always tell you when that&apos;s the
          case.
        </p>
        <p>
          If you try something from here, I&apos;d love to hear how it turned
          out. That&apos;s really what this whole notebook was for in the first
          place.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/blog"
          className="rounded-full bg-leaf px-7 py-3 font-body text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-leaf-dark"
        >
          Browse recipes
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-forest-100 px-7 py-3 font-body text-sm font-semibold text-forest-700 transition-colors hover:bg-mist"
        >
          Say hello
        </Link>
      </div>
    </div>
  );
}
