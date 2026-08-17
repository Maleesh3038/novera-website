"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function PortalDestinationsPage() {
  const [favorites, setFavorites] = useState<string[]>(["uk", "australia"]);
  const [compareList, setCompareList] = useState<string[]>(["uk", "new-zealand"]);

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  const toggleCompare = (slug: string) => {
    setCompareList((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) return prev;
      return [...prev, slug];
    });
  };

  const compared = destinations.filter((d) => compareList.includes(d.slug));

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-1">Destinations</p>
        <h1 className="font-display text-3xl font-bold text-navy">Browse & compare</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <div key={d.slug} className="card p-5">
            <div className="flex items-start justify-between">
              <span className="text-3xl">{d.flag}</span>
              <button onClick={() => toggleFavorite(d.slug)} aria-label={`Favorite ${d.name}`}>
                <Heart className={`h-5 w-5 ${favorites.includes(d.slug) ? "fill-amber text-amber" : "text-text-soft"}`} />
              </button>
            </div>
            <h3 className="mt-2 font-display text-base font-bold text-navy">{d.name}</h3>
            <p className="mt-1 text-xs text-text-soft">{d.tagline}</p>
            <label className="mt-3 flex items-center gap-2 text-xs text-ink/80">
              <input
                type="checkbox"
                checked={compareList.includes(d.slug)}
                onChange={() => toggleCompare(d.slug)}
              />
              Add to compare
            </label>
          </div>
        ))}
      </div>

      <div className="card overflow-x-auto p-6">
        <p className="eyebrow mb-4">Compare ({compared.length}/3)</p>
        {compared.length === 0 ? (
          <p className="text-sm text-text-soft">Select up to 3 destinations above to compare.</p>
        ) : (
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase text-text-soft">
                <th className="py-2 pr-4">Destination</th>
                <th className="py-2 pr-4">Cost Band</th>
                <th className="py-2 pr-4">Timeline</th>
                <th className="py-2 pr-4">Popular Visa Type</th>
              </tr>
            </thead>
            <tbody>
              {compared.map((d) => (
                <tr key={d.slug} className="border-b border-line last:border-0">
                  <td className="py-3 pr-4 font-semibold text-navy">{d.flag} {d.name}</td>
                  <td className="py-3 pr-4 text-ink/80">{d.costBand}</td>
                  <td className="py-3 pr-4 text-ink/80">{d.timeline}</td>
                  <td className="py-3 pr-4 text-ink/80">{d.visaTypes[0]?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
