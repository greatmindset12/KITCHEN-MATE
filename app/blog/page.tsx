import type { Metadata } from "next";
import Link from "next/link";
import { recipes } from "@/lib/recipes";
import { categories, type CategorySlug } from "@/lib/categories";
import RecipeCard from "@/components/RecipeCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog — All Recipes",
  description:
    "Every recipe on Kitchen Glory: Nigerian mains, soups and swallows, confectionery, snacks, small chops, fast food and drinks.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category as CategorySlug | undefined;

  const filtered = activeCategory
    ? recipes.filter((r) => r.category === activeCategory)
    : recipes;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <SectionHeading
        eyebrow="The archive"
        title="All recipes"
        description="Filter by category, or scroll through everything I've cooked and written down so far."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full border px-4 py-2 font-body text-sm font-medium transition-colors ${
            !activeCategory
              ? "border-leaf bg-leaf text-cream"
              : "border-forest-100 text-forest-700 hover:bg-mist"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/blog?category=${c.slug}`}
            className={`rounded-full border px-4 py-2 font-body text-sm font-medium transition-colors ${
              activeCategory === c.slug
                ? "border-leaf bg-leaf text-cream"
                : "border-forest-100 text-forest-700 hover:bg-mist"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((recipe, i) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={i} />
          ))}
        </div>
      ) : (
        <p className="mt-10 font-body text-muted">No recipes in this category yet — check back soon.</p>
      )}
    </div>
  );
}
