import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center sm:px-8">
      <span className="font-display text-7xl text-leaf">404</span>
      <h1 className="mt-4 font-display text-3xl text-forest-700">
        This page isn&apos;t on the menu.
      </h1>
      <p className="mt-3 font-body text-sm text-muted">
        The page you&apos;re looking for may have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-leaf px-7 py-3 font-body text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-leaf-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
