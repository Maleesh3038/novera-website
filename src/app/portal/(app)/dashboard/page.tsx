"use client";

import Link from "next/link";
import { ArrowRight, FileText, Globe2, Sparkles, User } from "lucide-react";
import CountdownCard from "@/components/CountdownCard";
import { journeyStages } from "@/data/site";

const mockCase = {
  stage: journeyStages[2],
  consultant: "S. Ranasinghe",
  country: "New Zealand",
  nextAction: "Upload your bank statement for financial documentation review.",
};

const shortcuts = [
  { href: "/nova/checklist", label: "Document Checklist", icon: FileText },
  { href: "/portal/destinations", label: "Compare Destinations", icon: Globe2 },
  { href: "/portal/nova", label: "Ask Nova", icon: Sparkles },
  { href: "/portal/profile", label: "Update Profile", icon: User },
];

export default function PortalDashboardPage() {
  const biometricsDeadline = new Date();
  biometricsDeadline.setDate(biometricsDeadline.getDate() + 14);

  const documentDeadline = new Date();
  documentDeadline.setDate(documentDeadline.getDate() + 5);

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-1">Welcome back</p>
        <h1 className="font-display text-3xl font-bold text-navy">Your Era at a glance</h1>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <CountdownCard title="Document Submission Deadline" targetDate={documentDeadline} subtitle="Bank statement due for New Zealand application" />
        <CountdownCard title="UK Biometrics Appointment" targetDate={biometricsDeadline} subtitle="Sample countdown — synced from your case timeline" />
      </div>

      <div className="card p-6">
        <p className="eyebrow mb-3">Active Case Snapshot</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-text-soft">Current stage</p>
            <p className="text-sm font-semibold text-navy">{mockCase.stage}</p>
          </div>
          <div>
            <p className="text-xs text-text-soft">Assigned consultant</p>
            <p className="text-sm font-semibold text-navy">{mockCase.consultant}</p>
          </div>
          <div>
            <p className="text-xs text-text-soft">Destination</p>
            <p className="text-sm font-semibold text-navy">{mockCase.country}</p>
          </div>
          <div>
            <p className="text-xs text-text-soft">Next action</p>
            <p className="text-sm font-semibold text-navy">{mockCase.nextAction}</p>
          </div>
        </div>
        <Link href="/portal/journey" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-cyan">
          View full journey <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div>
        <p className="eyebrow mb-3">Quick shortcuts</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((s) => (
            <Link key={s.href} href={s.href} className="card flex flex-col items-center gap-2 p-5 text-center hover:-translate-y-1 transition-transform">
              <s.icon className="h-6 w-6 text-teal" />
              <span className="text-sm font-semibold text-navy">{s.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
