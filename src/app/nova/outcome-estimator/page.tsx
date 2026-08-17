"use client";

import { useState } from "react";
import { AlertTriangle, Gauge } from "lucide-react";
import { LinkButton } from "@/components/Button";
import { siteInfo } from "@/data/site";

type Form = {
  qualification: string;
  english: string;
  funds: string;
  history: string;
};

const bands = ["Low", "Low-Moderate", "Moderate", "Moderate-High", "High"];

function scoreToBand(score: number) {
  if (score <= 1) return bands[0];
  if (score <= 3) return bands[1];
  if (score <= 5) return bands[2];
  if (score <= 7) return bands[3];
  return bands[4];
}

export default function OutcomeEstimatorPage() {
  const [form, setForm] = useState<Form>({ qualification: "al", english: "yes", funds: "yes", history: "clean" });
  const [result, setResult] = useState<string | null>(null);

  const estimate = () => {
    let score = 0;
    if (form.qualification === "degree") score += 3;
    else if (form.qualification === "al") score += 2;
    else score += 1;

    if (form.english === "yes") score += 2;
    if (form.funds === "yes") score += 2;
    if (form.history === "clean") score += 2;
    else if (form.history === "minor-issues") score += 1;

    setResult(scoreToBand(score));
  };

  return (
    <div>
      <section className="bg-navy py-14 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Nova AI · Guidance Tool</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Visa Outcome Estimator</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            A simple rule-based indicator, not a guarantee of any visa outcome. Real decisions depend
            on many factors that only a full case review can capture.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-2xl">
          <div className="card p-6 sm:p-8">
            <div className="space-y-5">
              <RadioGroup
                label="Highest qualification"
                name="qualification"
                value={form.qualification}
                onChange={(v) => setForm((f) => ({ ...f, qualification: v }))}
                options={[
                  { value: "ol", label: "GCE O/L" },
                  { value: "al", label: "GCE A/L" },
                  { value: "degree", label: "Degree or higher" },
                ]}
              />
              <RadioGroup
                label="English proficiency test result meets requirement?"
                name="english"
                value={form.english}
                onChange={(v) => setForm((f) => ({ ...f, english: v }))}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No / not yet taken" },
                ]}
              />
              <RadioGroup
                label="Sufficient proof of funds available?"
                name="funds"
                value={form.funds}
                onChange={(v) => setForm((f) => ({ ...f, funds: v }))}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No / unsure" },
                ]}
              />
              <RadioGroup
                label="Immigration / visa refusal history"
                name="history"
                value={form.history}
                onChange={(v) => setForm((f) => ({ ...f, history: v }))}
                options={[
                  { value: "clean", label: "No prior refusals" },
                  { value: "minor-issues", label: "Minor documentation issues previously" },
                  { value: "refused", label: "Previously refused a visa" },
                ]}
              />
              <button onClick={estimate} className="btn-primary w-full">
                <Gauge className="h-4 w-4" /> Estimate Outcome Band
              </button>
            </div>

            {result && (
              <div className="mt-8 rounded-2xl border border-line bg-mist-2 p-6">
                <p className="text-sm font-semibold text-navy">Estimated outcome band</p>
                <p className="mt-1 font-display text-3xl font-bold text-teal">{result}</p>
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-amber/15 p-4 text-xs text-ink/80">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  <p>
                    This estimate is generated from simple rule-based scoring and is <strong>not a
                    guarantee</strong> of any visa decision. Immigration authorities make the final
                    decision based on a full review of your case. Please book a free consultation for
                    a proper human assessment.
                  </p>
                </div>
                <LinkButton href={siteInfo.whatsappLink} variant="amber" className="mt-4 w-full">
                  Book a Free Consultation
                </LinkButton>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-navy">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              value === opt.value ? "border-teal bg-teal-cyan text-white" : "border-line text-ink/80 hover:border-teal"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
