import Link from "next/link";
import { GraduationCap, Globe, ArrowRight, LucideIcon } from "lucide-react";
import { Era } from "@/data/eras";

const icons: Record<Era["icon"], LucideIcon> = {
  cap: GraduationCap,
  globe: Globe,
};

export default function EraCard({ era }: { era: Era }) {
  const Icon = icons[era.icon];
  return (
    <Link
      href={`/eras/${era.slug}`}
      className="card group flex flex-col gap-4 p-7 transition-transform hover:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-cyan text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="eyebrow">{era.name}</p>
        <h3 className="mt-1 font-display text-xl font-bold text-navy">{era.headline}</h3>
      </div>
      <p className="text-sm text-text-soft">{era.description}</p>
      <ul className="space-y-1.5 text-sm text-ink/80">
        {era.offerings.map((o) => (
          <li key={o} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
            {o}
          </li>
        ))}
      </ul>
      <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-cyan">
        Explore the {era.name} <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
