"use client";

import { useState } from "react";

/**
 * Flag emoji (🇬🇧) Windows walata render wenne na — "GB" wage akuru dekak
 * penenne. Eeka nisa flag image ekak gannawa flagcdn.com eken.
 *
 * WADAGATH: flagcdn deneka thiyenne me widths witharai —
 * w20, w40, w80, w160, w320, w640. Wena ekak illuwoth 404.
 *
 * Image eka load wenne nathnam (network prashnayak), rate code eka
 * chip ekak widihata penenawa — broken image icon ekak penenne na.
 *
 * Use: <Flag slug={d.slug} name={d.name} />
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

const SIZES = {
  sm: { cdn: "w40", cls: "h-[18px] w-6", text: "text-[9px]" },
  md: { cdn: "w80", cls: "h-[30px] w-10", text: "text-[11px]" },
  lg: { cdn: "w160", cls: "h-[45px] w-[60px]", text: "text-sm" },
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
  const [failed, setFailed] = useState(false);
  const code = iso ?? (slug ? ISO_BY_SLUG[slug] : undefined);
  if (!code) return null;

  const s = SIZES[size];
  const box = `${s.cls} shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgba(8,30,61,0.15)] ${className}`;

  if (failed) {
    return (
      <span
        aria-label={name}
        className={`${box} ${s.text} flex items-center justify-center bg-mist-2 font-mono font-bold uppercase text-navy`}
      >
        {code}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/${s.cdn}/${code}.png`}
      alt={`${name} flag`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${box} object-cover`}
    />
  );
}
