import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "@/lib/recipes";
import { getCategory } from "@/lib/categories";
import CategoryIcon from "@/components/CategoryIcon";
import RecipeCard from "@/components/RecipeCard";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  return {
    title: recipe.title,
    description: recipe.excerpt,
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const category = getCategory(recipe.category);
  const related = recipes.filter((r) => r.category === recipe.category && r.slug !== recipe.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <Link href="/blog" className="font-body text-sm font-medium text-leaf hover:underline">
        ← Back to all recipes
      </Link>

      <p className="mt-6 font-body text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
        {category?.name}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-forest-700 sm:text-5xl">
        {recipe.title}
      </h1>
      <p className="mt-4 font-body text-lg leading-relaxed text-muted">{recipe.excerpt}</p>

      <div className="mt-8 flex flex-wrap items-center gap-6 rounded-xl2 border border-forest-100 bg-mist px-6 py-5">
        <Stat label="Prep + cook" value={`${recipe.minutes} min`} />
        <Stat label="Servings" value={`${recipe.servings}`} />
        <Stat label="Difficulty" value={recipe.difficulty} />
      </div>

      <div className="mt-10 flex h-64 items-center justify-center rounded-xl2 bg-gradient-to-br from-sage-light via-mist to-cream">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream text-leaf shadow-sm ring-1 ring-forest-100">
          <CategoryIcon icon={category?.icon ?? "pot"} className="h-11 w-11" />
        </div>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-[1fr_1.4fr]">
        <section>
          <h2 className="font-display text-2xl text-forest-700">Ingredients</h2>
          <ul className="mt-4 space-y-3">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="flex gap-3 font-body text-sm text-ink">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                {ing}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-700">Method</h2>
          <ol className="mt-4 space-y-5">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-4 font-body text-sm leading-relaxed text-ink">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-700 font-body text-xs font-semibold text-cream">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {recipe.note && (
        <p className="mt-10 rounded-xl2 border-l-4 border-gold bg-mist px-5 py-4 font-body text-sm italic text-forest-700">
          {recipe.note}
        </p>
      )}

      <div className="mt-10 flex flex-wrap gap-2">
        {recipe.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-forest-100 px-3 py-1 font-body text-xs text-muted"
          >
            #{tag.replace(/\s+/g, "-")}
          </span>
        ))}
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-forest-100 pt-10">
          <h2 className="font-display text-2xl text-forest-700">More {category?.name}</h2>
          <div className="mt-6 columns-1 gap-6 sm:columns-2">
            {related.map((r, i) => (
              <RecipeCard key={r.slug} recipe={r} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-body text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className="font-display text-xl text-forest-700">{value}</p>
    </div>
  );
}
