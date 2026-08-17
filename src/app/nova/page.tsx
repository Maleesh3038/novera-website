import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ListChecks, FileText, Gauge, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Nova AI Tools",
  description: "Explore Novera's rule-based Nova AI utilities: Eligibility Navigator, Document Checklist Generator, SOP Assistant, and Visa Outcome Estimator.",
};

const tools = [
  {
    href: "/nova/navigator",
    icon: Compass,
    title: "Eligibility Navigator",
    description: "A multi-step guidance quiz that recommends an Era and destination based on your goals, timeline, budget and qualifications.",
  },
  {
    href: "/nova/checklist",
    icon: ListChecks,
    title: "Document Checklist Generator",
    description: "Pick a visa type and country to generate a personalised, checkable document checklist.",
  },
  {
    href: "/nova/sop-assistant",
    icon: FileText,
    title: "SOP / Cover Letter Assistant",
    description: "Assemble a starting-point Statement of Purpose draft you can edit and refine.",
  },
  {
    href: "/nova/outcome-estimator",
    icon: Gauge,
    title: "Visa Outcome Estimator",
    description: "A simple rule-based probability band for your profile — always paired with a human-review disclaimer.",
  },
];

export default function NovaHubPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Nova AI Tools</p>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Guidance tools to plan your Era</h1>
          <p className="mt-6 max-w-2xl text-white/80">
            These are rule-based utility tools built to give you a helpful starting point — they are
            not a substitute for a full consultation with a Novera immigration professional.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Explore" title="Choose a tool" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="card group flex flex-col gap-4 p-7 hover:-translate-y-1 transition-transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-cyan text-white">
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{tool.title}</h3>
                <p className="text-sm text-text-soft">{tool.description}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-cyan">
                  Open tool <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
