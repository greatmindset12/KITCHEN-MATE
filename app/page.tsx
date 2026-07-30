import Link from "next/link";
import { getFeaturedRecipes, recipes } from "@/lib/recipes";
import { categories } from "@/lib/categories";
import RecipeCard from "@/components/RecipeCard";
import CategoryPill from "@/components/CategoryPill";
import SectionHeading from "@/components/SectionHeading";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  const featured = getFeaturedRecipes();
  const latest = recipes.slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-2">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-leaf">
            A personal recipe journal
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-forest-700 sm:text-6xl">
            Nigerian food,
            <br />
            cooked and written
            <br />
            down properly.
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted">
            Kitchen Glory is where I keep the recipes I actually use — jollof
            rice worth defending, soups that taste like home, and the snacks
            and small chops that disappear before they cool.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-leaf px-7 py-3 font-body text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-leaf-dark"
            >
              Browse recipes
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-forest-100 px-7 py-3 font-body text-sm font-semibold text-forest-700 transition-colors hover:bg-mist"
            >
              About me
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-light via-mist to-cream" />
          <div className="absolute inset-6 rounded-full border border-forest-100" />
          <span className="relative font-display text-7xl text-leaf">KG</span>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10">
        <SectionHeading
          eyebrow="Browse by category"
          title="What's cooking"
          description="Mains, soups, sweets, snacks and drinks — everything is filed where you'd look for it."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <CategoryPill key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-14">
        <SectionHeading eyebrow="Reader favourites" title="Featured recipes" />
        <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {featured.map((recipe, i) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={i} />
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Fresh from the kitchen" title="Latest posts" />
          <Link href="/blog" className="font-body text-sm font-semibold text-leaf hover:underline">
            View all recipes →
          </Link>
        </div>
        <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {latest.map((recipe, i) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={i} />
          ))}
        </div>
      </section>

      <section className="py-14">
        <Newsletter />
      </section>
    </div>
  );
}
