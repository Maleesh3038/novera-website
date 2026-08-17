export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" = light background walata (navy text). "light" = navy/dark background walata (white text). */
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? "text-cyan" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg ${light ? "text-white/75" : "text-text-soft"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}