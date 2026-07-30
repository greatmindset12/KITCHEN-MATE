import type { Category } from "@/lib/categories";

export default function CategoryIcon({
  icon,
  className = "",
}: {
  icon: Category["icon"];
  className?: string;
}) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (icon) {
    case "pot":
      return (
        <svg {...common}>
          <path d="M3 10h18v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-4Z" />
          <path d="M2 10h20M7 10V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
          <path d="M1 7l2 2M23 7l-2 2" />
        </svg>
      );
    case "bowl":
      return (
        <svg {...common}>
          <path d="M3 11h18a9 9 0 0 1-9 9 9 9 0 0 1-9-9Z" />
          <path d="M8 11c0-3 1.5-5 4-5s4 2 4 5" />
        </svg>
      );
    case "whisk":
      return (
        <svg {...common}>
          <path d="M12 2v6" />
          <path d="M9 8c-3 3-3 9 0 13M12 8v13M15 8c3 3 3 9 0 13M7 10c-2 4-2 8 1 11M17 10c2 4 2 8-1 11" />
        </svg>
      );
    case "tray":
      return (
        <svg {...common}>
          <rect x="2" y="8" width="20" height="4" rx="1" />
          <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
          <path d="M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
      );
    case "burger":
      return (
        <svg {...common}>
          <path d="M4 10h16a1 1 0 0 1 1 1 6 6 0 0 1-6 6H9a6 6 0 0 1-6-6 1 1 0 0 1 1-1Z" />
          <path d="M4 10c0-3 3.5-6 8-6s8 3 8 6" />
          <path d="M5 19h14" />
        </svg>
      );
    case "cup":
      return (
        <svg {...common}>
          <path d="M6 4h9v11a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V4Z" />
          <path d="M15 7h2a3 3 0 0 1 0 6h-2" />
          <path d="M9 2v2M12 2v2" />
        </svg>
      );
    default:
      return null;
  }
}
