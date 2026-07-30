export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl text-forest-700 sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={`mt-3 font-body text-base leading-relaxed text-muted ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
