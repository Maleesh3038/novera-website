import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Novera International's story, mission and vision behind the Student and Visit Eras.",
};

const licenses = [
  "Registered study abroad and visa consultancy operating from Colombo, Sri Lanka",
  "Team includes qualified immigration professionals, not conventional agents",
  "Partnerships with 100+ universities and institutions across 9+ destinations",
  "Compliance-first approach aligned with destination-country visa regulations",
];

const press = [
  { name: "University & Institution Partners", detail: "100+ partner universities and colleges across the UK, Australia, New Zealand, Europe, the Middle East and Asia." },
  { name: "Community Recognition", detail: "Trusted by thousands of Sri Lankan students and families since our founding." },
  { name: "Industry Network", detail: "Active member of the local education and immigration consultancy community in Colombo." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">About Novera International</p>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">Our Story</h1>
          <p className="mt-6 max-w-2xl text-white/80">
            For years, Novera International has been connecting Sri Lankans with global opportunities —
            helping individuals and families take confident steps toward education, career growth, and
            international mobility.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About the Company" title="Immigration professionals, not conventional agents" />
            <p className="mt-6 text-text-soft">
              Novera International is a professional study abroad and visa consultancy offering
              comprehensive support for study and visit visas to leading destinations, including the
              United Kingdom, Australia, New Zealand, the United Arab Emirates, Europe, Singapore and
              Malaysia. Our services are built on a strong foundation of immigration expertise, ensuring
              that every application is managed with accuracy, compliance, and strategic attention to
              detail.
            </p>
            <p className="mt-4 text-text-soft">
              What distinguishes us is our identity as immigration professionals rather than
              conventional agents — we possess an in-depth understanding of visa laws, policies, and
              procedural requirements, enabling us to achieve higher success rates while protecting our
              clients&apos; interests. We are committed to professionalism, transparency, and
              personalized service.
            </p>
          </div>
          <div className="space-y-6">
            <div className="card p-6">
              <p className="eyebrow">Vision</p>
              <p className="mt-2 text-sm text-ink/80">
                To be a globally recognized and trusted immigration service provider, empowering
                individuals and students to access international opportunities through ethical,
                transparent, and expert guidance.
              </p>
            </div>
            <div className="card p-6">
              <p className="eyebrow">Mission</p>
              <p className="mt-2 text-sm text-ink/80">
                To deliver reliable and personalized visa solutions for study and travel by providing
                clear guidance, free consultation, and end-to-end support — from course selection to
                air tickets and accommodation — while upholding the highest standards of integrity,
                transparency, and client care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Eras, not Services"
            title="A journey, not a transaction"
            description="Most consultancies sell you a 'service'. We think in terms of Eras — the chapters of your life we help you unlock: the Student Era and the Visit Era. Each Era carries its own goals, timelines and emotions, and our process is built around that reality rather than a rigid service catalogue."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Licensing & Accreditation" title="Built on compliance and trust" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {licenses.map((l) => (
              <div key={l} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <p className="text-sm text-ink/80">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          TEAM SECTION - thawakalikawa hide karala. Attha team details
          labunaam, meeke pahala tika uncomment karala src/data/team.ts
          eke details update karanna.
      ----------------------------------------------------------------
      <section className="section bg-mist-2">
        <div className="container-page">
          <SectionHeading eyebrow="Our Consultants" title="Meet the team behind your journey" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.id} className="card p-6">
                <div className="mb-4 h-14 w-14 rounded-full bg-teal-cyan" />
                <h3 className="font-display text-base font-bold text-navy">{member.name}</h3>
                <p className="text-xs font-semibold text-teal">{member.role}</p>
                <p className="mt-3 text-sm text-text-soft">{member.bio}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {member.specialties.map((s) => (
                    <span key={s} className="badge">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Partnerships" title="Press & partnerships" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {press.map((p) => (
              <div key={p.name} className="card p-6">
                <h3 className="font-display text-base font-bold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm text-text-soft">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
