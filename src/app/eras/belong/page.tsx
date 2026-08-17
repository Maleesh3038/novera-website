import type { Metadata } from "next";
import Link from "next/link";
import { Users, ShieldCheck, Landmark } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { LinkButton } from "@/components/Button";
import { destinations } from "@/data/destinations";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Belong Era — Family, PR & Citizenship",
  description: "Family sponsorship, permanent residency, and citizenship or settlement services across 9+ destinations.",
};

const offerings = [
  {
    icon: Users,
    title: "Family Sponsorship & Reunification",
    description: "Guidance for spouse, dependent and family sponsorship visas that bring loved ones together.",
  },
  {
    icon: ShieldCheck,
    title: "Permanent Residency",
    description: "Support navigating points-based and employer or family-linked permanent residency pathways.",
  },
  {
    icon: Landmark,
    title: "Citizenship & Settlement Services",
    description: "Guidance through the final steps of settlement and citizenship applications.",
  },
];

export default function BelongEraPage() {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Belong Era</p>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Family, Settlement &amp; Citizenship</h1>
          <p className="mt-6 max-w-2xl text-white/80">
            The Belong Era brings families together and helps long-term residents put down permanent
            roots — sponsorship, permanent residency, and citizenship or settlement services.
          </p>
          <LinkButton href={siteInfo.whatsappLink} variant="amber" className="mt-8">
            Book a Free Consultation
          </LinkButton>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="What We Help With" title="Belong Era services" />
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
          <SectionHeading eyebrow="Country Guides" title="PR & settlement pathways by destination" />
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
