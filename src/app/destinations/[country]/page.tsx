import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, DollarSign } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Flag from "@/components/Flag";
import { LinkButton } from "@/components/Button";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { siteInfo } from "@/data/site";

export function generateStaticParams() {
  return destinations.map((d) => ({ country: d.slug }));
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const destination = getDestinationBySlug(params.country);
  if (!destination) return { title: "Destination" };
  return {
    title: `Study & Visa Guide — ${destination.name}`,
    description: destination.tagline,
  };
}

/**
 * public/destinations/<slug>.jpg (or .png / .webp) ekak thibboth banner eke
 * eeka penenawa. Nathnam flag panel ekak penenawa. Image ekak add karanna
 * one nam, ee folder ekata file eka daanna witharai - code wenas karanna one na.
 */
function findBannerImage(slug: string) {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const rel = `/destinations/${slug}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

export default function DestinationPage({ params }: { params: { country: string } }) {
  const destination = getDestinationBySlug(params.country);
  if (!destination) notFound();
  const banner = findBannerImage(destination.slug);

  return (
    <div>
      <section className="bg-navy py-16 text-white">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Flag slug={destination.slug} name={destination.name} size="lg" />
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{destination.name}</h1>
            <p className="mt-4 max-w-2xl text-white/80">{destination.tagline}</p>
            <LinkButton href={siteInfo.whatsappLink} variant="amber" className="mt-8">
              Book a Free Consultation
            </LinkButton>
          </div>

          {banner ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[16/11]">
              <Image
                src={banner}
                alt={destination.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="eyebrow text-cyan">At a glance</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-white/50">Intakes</dt>
                  <dd className="font-medium text-white">{destination.intakes}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Work rights</dt>
                  <dd className="font-medium text-white">{destination.workRights}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Typical timeline</dt>
                  <dd className="font-medium text-white">{destination.timeline}</dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionHeading eyebrow="Overview" title={`Studying & moving to ${destination.name}`} />
              <p className="mt-4 text-text-soft">{destination.overview}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Key Advantages</h2>
              <ul className="mt-4 space-y-3">
                {destination.advantages.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm text-ink/80">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Requirements</h2>
              <ul className="mt-4 space-y-3">
                {destination.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <span className="text-sm text-ink/80">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Visa Types</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {destination.visaTypes.map((v) => (
                  <div key={v.name} className="card p-5">
                    <p className="text-sm font-semibold text-navy">{v.name}</p>
                    <p className="mt-1 text-sm text-text-soft">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Typical Journey</h2>
              <ol className="mt-4 space-y-3">
                {destination.journeySteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-cyan font-mono text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink/80">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

          <aside className="space-y-5">
            <div className="card p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <DollarSign className="h-4 w-4 text-teal" /> Cost Band
              </p>
              <p className="mt-2 text-sm text-text-soft">{destination.costBand}</p>
            </div>
            <div className="card p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Clock className="h-4 w-4 text-teal" /> Processing Timeline
              </p>
              <p className="mt-2 text-sm text-text-soft">{destination.timeline}</p>
            </div>
            <div className="card p-6">
              <p className="text-sm font-semibold text-navy">Work Rights</p>
              <p className="mt-2 text-sm text-text-soft">{destination.workRights}</p>
            </div>
            <div className="card p-6">
              <p className="text-sm font-semibold text-navy">Intakes</p>
              <p className="mt-2 text-sm text-text-soft">{destination.intakes}</p>
            </div>
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-sm font-semibold text-cyan">Ready to start?</p>
              <p className="mt-2 text-sm text-white/80">Talk to a Novera consultant about {destination.name} today.</p>
              <LinkButton href={siteInfo.whatsappLink} variant="amber" className="mt-4 w-full">
                WhatsApp Us
              </LinkButton>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
