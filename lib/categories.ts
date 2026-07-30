export type CategorySlug =
  | "nigerian-mains"
  | "soups-swallows"
  | "confectionery"
  | "snacks-small-chops"
  | "fast-food"
  | "drinks";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: "pot" | "bowl" | "whisk" | "tray" | "burger" | "cup";
}

export const categories: Category[] = [
  {
    slug: "nigerian-mains",
    name: "Nigerian Mains",
    description: "The rice, stews and everyday dinners that anchor a Nigerian table.",
    icon: "pot",
  },
  {
    slug: "soups-swallows",
    name: "Soups & Swallows",
    description: "Egusi, efo riro, and the swallows that go with them.",
    icon: "bowl",
  },
  {
    slug: "confectionery",
    name: "Confectionery & Baking",
    description: "Chin chin, buns, cakes and other things worth heating the oven for.",
    icon: "whisk",
  },
  {
    slug: "snacks-small-chops",
    name: "Snacks & Small Chops",
    description: "Puff-puff, akara, small chops platters — party trays and quiet cravings.",
    icon: "tray",
  },
  {
    slug: "fast-food",
    name: "Fast Food & Street Food",
    description: "Suya, shawarma, meat pies — the food that meets you on the go.",
    icon: "burger",
  },
  {
    slug: "drinks",
    name: "Drinks",
    description: "Zobo, chapman and other things worth chilling a jug for.",
    icon: "cup",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
