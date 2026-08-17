"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { eras } from "@/data/eras";

const eraFilters = [{ slug: "all", name: "All Eras" }, ...eras];

export default function SuccessStoriesPage() {
  const [eraFilter, setEraFilter] = useState<string>("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");

  const countries = useMemo(
    () => Array.from(new Set(testimonials.map((t) => t.country))).sort(),
    []
  );

  const filtered = testimonials.filter((t) => {
    const eraMatch = eraFilter === "all" || t.era === eraFilter;
    const countryMatch = countryFilter === "all" || t.country === countryFilter;
    return eraMatch && countryMatch;
  });

  return (
    <div>
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Real Journeys</p>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Success stories from our clients</h1>
          <p className="mt-6 max-w-2xl text-white/80">
            Every Era begins with someone brave enough to take the first step. Here are a few of
            theirs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Filter" title="Browse by Era & country" />
          <div className="mt-6 flex flex-wrap gap-2">
            {eraFilters.map((e) => (
              <button
                key={e.slug}
                onClick={() => setEraFilter(e.slug)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                  eraFilter === e.slug ? "border-teal bg-teal-cyan text-white" : "border-line text-ink/80"
                }`}
              >
                {e.name}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setCountryFilter("all")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                countryFilter === "all" ? "border-teal bg-teal-cyan text-white" : "border-line text-ink/80"
              }`}
            >
              All Countries
            </button>
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setCountryFilter(c)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                  countryFilter === c ? "border-teal bg-teal-cyan text-white" : "border-line text-ink/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-sm text-text-soft">No stories match these filters yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
