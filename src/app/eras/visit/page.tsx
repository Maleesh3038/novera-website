import type { Metadata } from "next";
import { CheckCircle2, Plane, FileText, Ticket, BedDouble, LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Flag from "@/components/Flag";
import { LinkButton } from "@/components/Button";
import {
  visitServices,
  visitWhyChooseUs,
  visitProcessSteps,
  visitCountryGuides,
  siteInfo,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Visit Era — Travel, Visit Visas & Short-Stay Journeys",
  description:
    "Tourist and visitor visa applications, travel documentation, and short-term stay planning for the UK, Schengen Area, Ireland, Malaysia and more.",
};

const serviceIcons: LucideIcon[] = [Plane, FileText, Ticket, BedDouble];

export default function VisitEraPage() {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-3 text-cyan">Visit Era</p>
            <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">
              Travel, Visit Visas &amp; Short-Stay Journeys
            </h1>
            <p className="mt-6 max-w-2xl text-white/80">
              The Visit Era is about getting you from Sri Lanka to wherever you need to be — for
              tourism, family, business or a short-term stay — with the right visa, on time, and
              without the guesswork.
            </p>
            <LinkButton href={siteInfo.whatsappLink} variant="amber" className="mt-8">
              Book a Free Consultation
            </LinkButton>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="eyebrow text-cyan">Where we can take you</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {visitCountryGuides.map((c) => (
                <div
                  key={c.iso}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5"
                >
                  <Flag iso={c.iso} name={c.name} />
                  <span className="truncate text-xs font-semibold text-white">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="What We Help With" title="Visit Era services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {visitServices.map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <div key={s.title} className="card p-6">
                  <Icon className="h-8 w-8 text-teal" />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-text-soft">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading eyebrow="Why Choose Us" title="Simple, fast, and personal" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visitWhyChooseUs.map((w) => (
              <div
                key={w.title}
                className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-semibold text-navy">{w.title}</p>
                  <p className="mt-1 text-sm text-text-soft">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="How We Do It" title="Our visit visa process" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visitProcessSteps.map((step, i) => (
              <li key={step.title} className="card p-6">
                <span className="font-mono text-2xl font-bold text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-text-soft">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading eyebrow="Country Guides" title="Visit visa options by destination" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visitCountryGuides.map((c) => (
              <div key={c.iso} className="card p-6">
                <div className="flex items-center gap-3">
                  <Flag iso={c.iso} name={c.name} size="md" />
                  <h3 className="font-display text-base font-bold text-navy">{c.name}</h3>
                </div>
                <p className="mt-3 text-sm font-semibold text-teal">{c.visa}</p>
                <p className="mt-2 text-sm text-text-soft">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
