import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Flag from "@/components/Flag";
import { LinkButton } from "@/components/Button";
import { destinations } from "@/data/destinations";
import { services, whyChooseUs, processSteps, siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Student Era — Study Abroad & University Pathways",
  description:
    "Student visa consultancy, university and course matching, and post-study work pathways across the UK, Australia, New Zealand and more.",
};

export default function StudentEraPage() {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-3 text-cyan">Student Era</p>
            <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">
              Study Abroad, Universities &amp; Student Visas
            </h1>
            <p className="mt-6 max-w-2xl text-white/80">
              Novera International is a professional study abroad and visa consultancy helping Sri
              Lankans access global education opportunities. With years of hands-on experience in
              international education, we guide you from course selection all the way to arrival.
            </p>
            <LinkButton href={siteInfo.whatsappLink} variant="amber" className="mt-8">
              Book a Free Consultation
            </LinkButton>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="eyebrow text-cyan">Where you could study</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {destinations.map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 transition-colors hover:bg-white/20"
                >
                  <Flag slug={d.slug} name={d.name} />
                  <span className="truncate text-xs font-semibold text-white">{d.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Our Services" title="Everything you need for the Student Era" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card p-6">
                <h3 className="font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-text-soft">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading eyebrow="Why Choose Us" title="Free, thorough, and personal" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
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
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-navy">
            &ldquo;Our team is friendly, reliable, and committed to offering personalized advice to
            every client.&rdquo;
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="How We Do It" title="Our study visa process" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
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
          <SectionHeading eyebrow="Study Destinations" title="Explore where you could study" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="card flex items-center gap-3 p-4 transition-transform hover:-translate-y-0.5"
              >
                <Flag slug={d.slug} name={d.name} size="md" />
                <span className="text-sm font-semibold text-navy">{d.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
