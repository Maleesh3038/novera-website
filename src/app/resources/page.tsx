import type { Metadata } from "next";
import { Newspaper, Languages, Calculator } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources",
  description: "Visa news by country, Sinhala-language explainers, and cost & timeline calculator tools from Novera International.",
};

const news = [
  { country: "United Kingdom", title: "Graduate Route visa policy remains stable for 2026 intakes", date: "Aug 2026" },
  { country: "Australia", title: "Genuine Student requirement guidance updated for new applicants", date: "Jul 2026" },
  { country: "New Zealand", title: "Post-study work visa settings confirmed for 2026", date: "Jun 2026" },
  { country: "Malaysia", title: "Graduate Pass scheme extended through 2026", date: "May 2026" },
  { country: "Singapore", title: "SOLAR system updates streamline Student's Pass applications", date: "Apr 2026" },
  { country: "Germany", title: "Blocked account minimum requirements reviewed for the new year", date: "Mar 2026" },
];

const sinhalaExplainers = [
  { title: "යූකේ ශිෂ්‍ය වීසා අයදුම් කිරීමේ මූලික පියවර", summary: "UK student visa application — basic steps explained in Sinhala." },
  { title: "ඕස්ට්‍රේලියාවේ Genuine Student අවශ්‍යතාවය", summary: "Understanding Australia's Genuine Student requirement, in Sinhala." },
  { title: "නවසීලන්තයේ පශ්චාත් අධ්‍යාපන කාර්ය බලපත්‍රය", summary: "New Zealand's post-study work visa, explained in Sinhala." },
];

export default function ResourcesPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Resources</p>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Stay informed, plan ahead</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Visa News" title="Latest updates by country" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <div key={n.title} className="card p-5">
                <div className="flex items-center gap-2 text-teal">
                  <Newspaper className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">{n.country}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-navy">{n.title}</h3>
                <p className="mt-1 text-xs text-text-soft">{n.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading eyebrow="සිංහල Explainers" title="Sinhala-language guides" description="A growing library of plain-language explainers in Sinhala for our local community." />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {sinhalaExplainers.map((e) => (
              <div key={e.title} className="card p-5">
                <div className="flex items-center gap-2 text-teal">
                  <Languages className="h-4 w-4" />
                  <span className="badge">Sinhala</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-navy">{e.title}</h3>
                <p className="mt-1 text-xs text-text-soft">{e.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Calculator className="h-10 w-10 text-teal" />
              <div>
                <h3 className="font-display text-xl font-bold text-navy">Cost & timeline calculator</h3>
                <p className="mt-1 max-w-md text-sm text-text-soft">
                  Use our Nova AI tools to generate a document checklist, estimate visa outcome bands,
                  and explore destination cost bands.
                </p>
              </div>
            </div>
            <LinkButton href="/nova">Explore Nova Tools</LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
