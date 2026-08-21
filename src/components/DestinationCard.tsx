import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Flag from "./Flag";
import { Destination } from "@/data/destinations";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="card group flex flex-col gap-3 p-6 transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <Flag slug={destination.slug} name={destination.name} size="lg" />
        {destination.isBonus && <span className="badge">Bonus</span>}
      </div>
      <h3 className="font-display text-lg font-bold text-navy">{destination.name}</h3>
      <p className="text-sm text-text-soft">{destination.tagline}</p>
      <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-cyan">
        Explore destination <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
