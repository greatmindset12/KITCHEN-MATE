import Link from "next/link";
import type { Category } from "@/lib/categories";
import CategoryIcon from "./CategoryIcon";

export default function CategoryPill({ category }: { category: Category }) {
  return (
    <Link
      href={`/blog?category=${category.slug}`}
      className="group flex items-center gap-3 rounded-full border border-forest-100 bg-cream px-5 py-3 shadow-sm transition-colors hover:border-leaf hover:bg-mist"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-leaf group-hover:bg-cream">
        <CategoryIcon icon={category.icon} className="h-5 w-5" />
      </span>
      <span className="font-body text-sm font-medium text-forest-700">{category.name}</span>
    </Link>
  );
}
