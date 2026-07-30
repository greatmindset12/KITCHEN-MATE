type Side = "left" | "right";

/**
 * A fixed, decorative rail of hand-drawn kitchen utensils that lines the
 * left or right edge of the viewport. Purely ornamental — aria-hidden and
 * pointer-events-none so it never interferes with content or navigation.
 * Hidden below the xl breakpoint so it never competes with content on
 * tablets or phones.
 */
export default function UtensilRail({ side }: { side: Side }) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 z-0 hidden h-full w-24 xl:block ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      <div
        className={`absolute top-24 flex flex-col gap-16 opacity-[0.16] ${
          isLeft ? "left-4 items-start" : "right-4 items-end"
        }`}
      >
        <Whisk className={isLeft ? "-rotate-6" : "rotate-6"} />
        <WoodenSpoon className={isLeft ? "rotate-3" : "-rotate-3"} />
        <Ladle className={isLeft ? "-rotate-12" : "rotate-12"} />
        <MortarPestle className={isLeft ? "rotate-2" : "-rotate-2"} />
        <RollingPin className={isLeft ? "-rotate-6" : "rotate-6"} />
      </div>
    </div>
  );
}

const stroke = "#1F4D3A";

function Whisk({ className = "" }: { className?: string }) {
  return (
    <svg width="56" height="120" viewBox="0 0 56 120" fill="none" className={className}>
      <path d="M28 6v40" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <rect x="20" y="0" width="16" height="10" rx="4" stroke={stroke} strokeWidth="3" />
      <path
        d="M20 46c-10 10-10 40 0 56M28 46v62M36 46c10 10 10 40 0 56M14 60c-6 12-6 34 4 46M42 60c6 12 6 34-4 46"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WoodenSpoon({ className = "" }: { className?: string }) {
  return (
    <svg width="48" height="130" viewBox="0 0 48 130" fill="none" className={className}>
      <path d="M24 40v84" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="24" cy="18" rx="18" ry="18" stroke={stroke} strokeWidth="3" />
    </svg>
  );
}

function Ladle({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="128" viewBox="0 0 60 128" fill="none" className={className}>
      <path d="M20 30 L44 4" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <path
        d="M8 46c0-14 12-24 24-24s24 10 24 24-12 24-24 24S8 60 8 46Z"
        stroke={stroke}
        strokeWidth="3"
      />
      <path d="M20 30 L2 118" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MortarPestle({ className = "" }: { className?: string }) {
  return (
    <svg width="70" height="100" viewBox="0 0 70 100" fill="none" className={className}>
      <path
        d="M8 60c0 16 12 28 27 28s27-12 27-28"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M4 58h62" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M46 44 L62 6" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="63" cy="4" rx="6" ry="5" stroke={stroke} strokeWidth="3" />
    </svg>
  );
}

function RollingPin({ className = "" }: { className?: string }) {
  return (
    <svg width="128" height="46" viewBox="0 0 128 46" fill="none" className={className}>
      <rect x="18" y="10" width="92" height="26" rx="8" stroke={stroke} strokeWidth="3" />
      <rect x="2" y="16" width="18" height="14" rx="5" stroke={stroke} strokeWidth="3" />
      <rect x="108" y="16" width="18" height="14" rx="5" stroke={stroke} strokeWidth="3" />
    </svg>
  );
}
