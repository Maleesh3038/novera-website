"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/Button";
import Flag from "@/components/Flag";
import { destinations } from "@/data/destinations";
import { siteInfo } from "@/data/site";

type Answers = {
  goal: "study" | "visit" | "";
  timeline: "asap" | "6-12" | "1-2yrs" | "";
  region: "uk-europe" | "anz" | "asia-me" | "no-preference" | "";
  budget: "under-2m" | "2-5m" | "5m-plus" | "";
  qualification: "ol" | "al" | "degree" | "";
};

const steps = ["Goal", "Timeline", "Region Interest", "Budget", "Qualifications", "Result"];

const goalToEra: Record<string, { slug: string; name: string }> = {
  study: { slug: "student", name: "Student Era" },
  visit: { slug: "visit", name: "Visit Era" },
};

function recommendCountry(answers: Answers) {
  let pool = destinations;
  if (answers.region === "uk-europe") {
    pool = destinations.filter((d) => d.region === "Europe");
  } else if (answers.region === "anz") {
    pool = destinations.filter((d) => ["Australia", "New Zealand"].includes(d.name));
  } else if (answers.region === "asia-me") {
    pool = destinations.filter((d) => ["Asia", "Middle East"].includes(d.region));
  }

  if (answers.budget === "under-2m") {
    const affordable = pool.filter((d) => ["malaysia", "dubai", "sri-lanka"].includes(d.slug) || d.slug === "malaysia");
    if (affordable.length) pool = affordable;
  }

  return pool[0] ?? destinations[0];
}

export default function NavigatorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    goal: "",
    timeline: "",
    region: "",
    budget: "",
    qualification: "",
  });

  const canProceed = useMemo(() => {
    switch (step) {
      case 0:
        return answers.goal !== "";
      case 1:
        return answers.timeline !== "";
      case 2:
        return answers.region !== "";
      case 3:
        return answers.budget !== "";
      case 4:
        return answers.qualification !== "";
      default:
        return true;
    }
  }, [step, answers]);

  const era = answers.goal ? goalToEra[answers.goal] : null;
  const country = step === 5 ? recommendCountry(answers) : null;

  return (
    <div>
      <section className="bg-navy py-14 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Nova AI · Guidance Tool</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Eligibility Navigator</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            A simple, rule-based quiz — not a real AI model — that suggests an Era and destination to
            explore next. It is a starting point for a conversation with a Novera consultant, not a
            final decision.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-2xl">
          <div className="mb-8 flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-teal-cyan" : "bg-line"}`} />
            ))}
          </div>

          <div className="card p-8">
            {step === 0 && (
              <QuizStep
                title="What's your main goal?"
                options={[
                  { value: "study", label: "Study at a university or college abroad" },
                  { value: "visit", label: "Travel, visit family or a short business trip" },
                ]}
                value={answers.goal}
                onChange={(v) => setAnswers((a) => ({ ...a, goal: v as Answers["goal"] }))}
              />
            )}
            {step === 1 && (
              <QuizStep
                title="What's your ideal timeline?"
                options={[
                  { value: "asap", label: "As soon as possible" },
                  { value: "6-12", label: "In 6–12 months" },
                  { value: "1-2yrs", label: "In 1–2 years" },
                ]}
                value={answers.timeline}
                onChange={(v) => setAnswers((a) => ({ ...a, timeline: v as Answers["timeline"] }))}
              />
            )}
            {step === 2 && (
              <QuizStep
                title="Which region interests you most?"
                options={[
                  { value: "uk-europe", label: "UK & Europe" },
                  { value: "anz", label: "Australia & New Zealand" },
                  { value: "asia-me", label: "Asia & Middle East" },
                  { value: "no-preference", label: "No preference — recommend one for me" },
                ]}
                value={answers.region}
                onChange={(v) => setAnswers((a) => ({ ...a, region: v as Answers["region"] }))}
              />
            )}
            {step === 3 && (
              <QuizStep
                title="What's your approximate budget (initially)?"
                options={[
                  { value: "under-2m", label: "Under LKR 2M" },
                  { value: "2-5m", label: "LKR 2M – 5M" },
                  { value: "5m-plus", label: "LKR 5M+" },
                ]}
                value={answers.budget}
                onChange={(v) => setAnswers((a) => ({ ...a, budget: v as Answers["budget"] }))}
              />
            )}
            {step === 4 && (
              <QuizStep
                title="What's your highest qualification?"
                options={[
                  { value: "ol", label: "GCE O/L" },
                  { value: "al", label: "GCE A/L" },
                  { value: "degree", label: "Degree or higher" },
                ]}
                value={answers.qualification}
                onChange={(v) => setAnswers((a) => ({ ...a, qualification: v as Answers["qualification"] }))}
              />
            )}
            {step === 5 && era && country && (
              <div>
                <div className="flex items-center gap-2 text-teal">
                  <Sparkles className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-wide">Recommendation</p>
                </div>
                <h2 className="mt-3 flex flex-wrap items-center gap-2 font-display text-2xl font-bold text-navy">
                  {era.name} <span className="text-text-soft">·</span>
                  <Flag slug={country.slug} name={country.name} size="md" />
                  {country.name}
                </h2>
                <p className="mt-4 text-sm text-text-soft">
                  Based on your goal, timeline, region interest and budget, the <strong>{era.name}</strong>{" "}
                  in <strong>{country.name}</strong> looks like a strong fit to explore first.
                  {country.workRights && ` ${country.workRights}`}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton href={`/destinations/${country.slug}`}>
                    View {country.name} guide <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton href={siteInfo.whatsappLink} variant="amber">
                    Book a Free Consultation
                  </LinkButton>
                </div>
                <p className="mt-6 text-xs text-text-soft">
                  This is a guidance tool using simple local scoring logic — not an eligibility guarantee.
                  A Novera consultant will confirm your actual eligibility.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="btn-ghost disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            {step < 5 ? (
              <button
                onClick={() => setStep((s) => Math.min(5, s + 1))}
                disabled={!canProceed}
                className="btn-primary disabled:opacity-40"
              >
                {step === 4 ? "See Recommendation" : "Next"} <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <Link href="/nova" className="btn-ghost">
                Explore other Nova tools
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function QuizStep({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
      <div className="mt-5 space-y-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
              value === opt.value
                ? "border-teal bg-mist-2 text-navy"
                : "border-line text-ink/80 hover:border-teal"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
