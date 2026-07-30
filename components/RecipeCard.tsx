import Link from "next/link";
import type { Recipe } from "@/lib/recipes";
import { getCategory } from "@/lib/categories";
import CategoryIcon from "./CategoryIcon";

const heights = ["h-44", "h-56", "h-64", "h-48"];

export default function RecipeCard({ recipe, index = 0 }: { recipe: Recipe; index?: number }) {
  const category = getCategory(recipe.category);
  const headerHeight = heights[index % heights.length];

  return (
    <Link
      href={`/blog/${recipe.slug}`}
      className="group mb-6 block break-inside-avoid overflow-hidden rounded-xl2 border border-forest-100 bg-cream shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div
        className={`relative flex ${headerHeight} items-center justify-center overflow-hidden bg-gradient-to-br from-mist via-sage-light to-mist`}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream text-leaf shadow-sm ring-1 ring-forest-100 transition-transform duration-300 group-hover:scale-105">
          <CategoryIcon icon={category?.icon ?? "pot"} className="h-9 w-9" />
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-3 py-1 font-body text-xs font-medium text-forest-700 ring-1 ring-forest-100">
          {recipe.minutes} min
        </span>
      </div>
      <div className="p-5">
        <p className="font-body text-xs font-semibold uppercase tracking-wide text-leaf">
          {category?.name}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-snug text-forest-700">
          {recipe.title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted">
          {recipe.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 font-body text-xs text-muted">
          <span>{recipe.difficulty}</span>
          <span aria-hidden="true">•</span>
          <span>Serves {recipe.servings}</span>
        </div>
      </div>
    </Link>
  );
}
