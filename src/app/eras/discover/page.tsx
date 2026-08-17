import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Gavel, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { LinkButton } from "@/components/Button";
import { destinations } from "@/data/destinations";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Discover Era — Work & Business Immigration",
  description: "Skilled worker visas, employer-sponsored routes, business and investor immigration, and visa appeals across 9+ destinations.",
};

const offerings = [
  {
    icon: Briefcase,
    title: "Skilled Worker & Employer-Sponsored Visas",
    description: "Guidance for skilled migration and employer-sponsored routes, matching your profile to in-demand occupation lists and sponsor requirements.",
  },
  {
    icon: TrendingUp,
    title: "Business & Investor Immigration",
    description: "Support for entrepreneurs and investors exploring business and investor visa pathways abroad.",
  },
  {
    icon: Gavel,
    title: "Visa Appeals & Rejection Reviews",
    description: "A detailed review of rejected applications to identify gaps and build a stronger resubmission.",
  },
];

export default function DiscoverEraPage() {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Discover Era</p>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Work, Skilled Migration &amp; Business Pathways</h1>
          <p className="mt-6 max-w-2xl text-white/80">
            The Discover Era is about new professional horizons — skilled migration, employer-sponsored
            work visas, and business or investor immigration routes for those ready to build a career or
            company abroad.
          </p>
          <LinkButton href={siteInfo.whatsappLink} variant="amber" className="mt-8">
            Book a Free Consultation
          </LinkButton>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="What We Help With" title="Discover Era services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {offerings.map((o) => (
              <div key={o.title} className="card p-6">
                <o.icon className="h-8 w-8 text-teal" />
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-text-soft">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading eyebrow="Country Guides" title="Work-visa pathways by destination" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {destinations.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="card flex items-center gap-3 p-4 hover:-translate-y-0.5 transition-transform">
                <span className="text-2xl">{d.flag}</span>
                <span className="text-sm font-semibold text-navy">{d.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
