/**
 * Flag emoji (🇬🇧) Windows walata render wenne na — "GB" wage akuru dekak
 * penenne. Eeka nisa flag image ekak pathi kara gannawa flagcdn.com eken.
 *
 * Use: <Flag slug={d.slug} name={d.name} />   -- destinations data walin
 *   ho: <Flag iso="gb" name="United Kingdom" />
 */

const ISO_BY_SLUG: Record<string, string> = {
  uk: "gb",
  australia: "au",
  "new-zealand": "nz",
  dubai: "ae",
  singapore: "sg",
  malaysia: "my",
  ireland: "ie",
  germany: "de",
  netherlands: "nl",
  malta: "mt",
  sweden: "se",
  france: "fr",
};

export default function Flag({
  slug,
  iso,
  name,
  size = "sm",
  className = "",
}: {
  slug?: string;
  iso?: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const code = iso ?? (slug ? ISO_BY_SLUG[slug] : undefined);
  if (!code) return null;

  const dims = {
    sm: { w: 24, h: 18, cls: "h-[18px] w-6" },
    md: { w: 40, h: 30, cls: "h-[30px] w-10" },
    lg: { w: 60, h: 45, cls: "h-[45px] w-[60px]" },
  }[size];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w${dims.w * 2}/${code}.png`}
      alt={`${name} flag`}
      width={dims.w}
      height={dims.h}
      loading="lazy"
      className={`${dims.cls} shrink-0 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(8,30,61,0.12)] ${className}`}
    />
  );
}
