import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-forest-700 text-sage-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <span className="font-display text-2xl font-semibold text-cream">Kitchen Glory</span>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-sage-light/90">
            A personal record of the Nigerian dishes, snacks and small chops
            worth writing down — cooked in a small kitchen, one pot at a time.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Categories</h3>
          <ul className="mt-3 space-y-2 font-body text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/blog?category=${c.slug}`} className="hover:text-cream">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Site</h3>
          <ul className="mt-3 space-y-2 font-body text-sm">
            <li>
              <Link href="/about" className="hover:text-cream">About Me</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cream">Contact</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-cream">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center font-body text-xs text-sage-light/70 sm:px-8">
        © {new Date().getFullYear()} Kitchen Glory. All recipes and photography are my own.
      </div>
    </footer>
  );
}
