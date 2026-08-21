import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import FlightPath from "@/components/FlightPath";
import SectionHeading from "@/components/SectionHeading";
import StatTile from "@/components/StatTile";
import DestinationCard from "@/components/DestinationCard";
import EraCard from "@/components/EraCard";
import CountdownCard from "@/components/CountdownCard";
import { LinkButton } from "@/components/Button";
import { destinations } from "@/data/destinations";
import { eras } from "@/data/eras";
import { trustStats, journeyStages, siteInfo } from "@/data/site";

export default function HomePage() {
  const demoDeadline = new Date();
  demoDeadline.setDate(demoDeadline.getDate() + 14);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <FlightPath className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-70" />
        <div className="container-page relative section grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4 text-cyan">Study &amp; Visa Consultancy · Colombo, Sri Lanka</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Transforming Lives.
              <span className="block text-cyan">Creating New Eras.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
              Your trusted partner for study and visit visas to the UK, Australia, New Zealand, Dubai,
              Europe, Singapore, and Malaysia. From your first free consultation to landing in your
              dream country, we guide you every step of the way.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={siteInfo.whatsappLink} variant="amber">
                <MessageCircle className="h-4 w-4" /> Book a Free Consultation
              </LinkButton>
              <LinkButton href="/nova/navigator" variant="outline">
                <Sparkles className="h-4 w-4" /> Try Nova Eligibility Navigator
              </LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="card mx-auto max-w-sm animate-floaty bg-white/95 p-6">
              <p className="eyebrow">Live Demo</p>
              <h3 className="mt-1 font-display text-lg font-bold text-navy">Era Countdown</h3>
              <p className="mb-4 text-sm text-text-soft">A client-portal feature — track key dates for your case.</p>
              <CountdownCard title="UK Biometrics Appointment" targetDate={demoDeadline} subtitle="14 days left · synced from your case timeline" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-line bg-white py-10">
        <div className="container-page grid grid-cols-2 gap-4 sm:grid-cols-4">
          {trustStats.map((s) => (
            <StatTile key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </section>

      {/* Destination strip */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Destinations"
            title="Explore your destination"
            description="From the UK to Sweden, we cover every step of your study, work and settlement journey."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations
              .filter((d) => d.isCoreEra)
              .map((d) => (
                <DestinationCard key={d.slug} destination={d} />
              ))}
          </div>
          <div className="mt-8 text-center">
            <LinkButton href="/destinations" variant="ghost">
              View all destinations <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Eras overview */}
      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading
            eyebrow="Not services. Eras."
            title="Two Eras, one journey"
            description="Novera organizes everything around the moments that matter most — whether you're heading off to study, or simply planning a trip."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {eras.map((era) => (
              <EraCard key={era.slug} era={era} />
            ))}
          </div>
        </div>
      </section>

      {/* Nova teaser */}
      <section className="section">
        <div className="container-page">
          <div className="card grid gap-8 overflow-hidden p-8 lg:grid-cols-2 lg:items-center lg:p-12">
            <div>
              <p className="eyebrow mb-3">Nova AI Tools</p>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Meet Nova, your eligibility navigator
              </h2>
              <p className="mt-4 text-text-soft">
                Answer a few quick questions about your goals, timeline and budget, and Nova will
                recommend the Era and destination that best fits your profile — a guidance tool, not
                a final decision.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href="/nova/navigator">
                  Try the Eligibility Navigator <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton href="/nova" variant="ghost">
                  View all Nova tools
                </LinkButton>
              </div>
            </div>
            <div className="rounded-2xl bg-navy-glass p-6 text-white">
              <p className="text-sm text-cyan">Nova says</p>
              <p className="mt-2 text-lg font-medium">
                &ldquo;Based on your answers, the <span className="text-cyan">Student Era</span> in{" "}
                <span className="text-cyan">New Zealand</span> looks like a strong match — affordable
                tuition, generous work rights, and a clear post-study pathway.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section bg-navy text-white">
        <div className="container-page">
          <SectionHeading
            tone="light"
            eyebrow="How We Do It"
            title="The Journey"
            description="Every case moves through the same transparent stages — visible to you in real time inside the Client Portal."
          />

          {/* Mobile: vertical stepper */}
          <ol className="mt-10 space-y-0 md:hidden">
            {journeyStages.map((stage, i) => (
              <li key={stage} className="relative flex gap-4 pb-7 last:pb-0">
                {i !== journeyStages.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-gradient-to-b from-cyan/70 to-amber/40"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-cyan font-mono text-sm font-bold text-white ring-4 ring-navy">
                  {i + 1}
                </span>
                <div className="pt-2">
                  <p className="text-base font-semibold text-white">{stage}</p>
                  <p className="text-xs uppercase tracking-wider text-white/45">
                    Step {i + 1} of {journeyStages.length}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Tablet & desktop: horizontal stepper */}
          <div className="relative mt-14 hidden md:block">
            <span
              aria-hidden
              className="absolute left-[8.333%] right-[8.333%] top-5 hidden h-px bg-gradient-to-r from-cyan via-cyan/50 to-amber lg:block"
            />
            <ol className="relative grid grid-cols-3 gap-y-12 lg:grid-cols-6">
              {journeyStages.map((stage, i) => (
                <li key={stage} className="flex flex-col items-center px-2 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-cyan font-mono text-sm font-bold text-white ring-4 ring-navy">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-sm font-semibold leading-snug text-white">{stage}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section bg-teal-cyan text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Ready to start your Era?
          </h2>
          <p className="max-w-xl text-white/90">
            Book a free consultation on WhatsApp, or explore the Client Portal to see how we track
            your case from day one.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href={siteInfo.whatsappLink} variant="amber">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </LinkButton>
            <LinkButton href="/contact" variant="outline">
              Free Consultation Form
            </LinkButton>
            <LinkButton href="/portal/login" variant="outline">
              Explore Client Portal
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
