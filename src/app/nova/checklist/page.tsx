"use client";

import { useMemo, useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import { checklistCountries, checklistVisaTypes, generateChecklist } from "@/data/checklist";

export default function ChecklistPage() {
  const [country, setCountry] = useState<string>(checklistCountries[0]);
  const [visaType, setVisaType] = useState<string>(checklistVisaTypes[0]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const checklist = useMemo(() => generateChecklist(country, visaType), [country, visaType]);
  const completedCount = checklist.filter((item) => checked[item]).length;

  const toggle = (item: string) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div>
      <section className="bg-navy py-14 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Nova AI · Guidance Tool</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Document Checklist Generator</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Pick a visa type and country to generate a checklist using our rule-based mapping of
            typical requirements. Always confirm the final list with your consultant.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-semibold text-navy">Country</span>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
                >
                  {checklistCountries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-semibold text-navy">Visa Type</span>
                <select
                  value={visaType}
                  onChange={(e) => setVisaType(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
                >
                  {checklistVisaTypes.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-navy">
                {country} · {visaType}
              </p>
              <p className="text-sm text-text-soft">
                {completedCount}/{checklist.length} complete
              </p>
            </div>

            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-mist-2">
              <div
                className="h-full bg-teal-cyan transition-all"
                style={{ width: `${checklist.length ? (completedCount / checklist.length) * 100 : 0}%` }}
              />
            </div>

            <ul className="mt-6 space-y-2">
              {checklist.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => toggle(item)}
                    className="flex w-full items-start gap-3 rounded-xl border border-line px-4 py-3 text-left text-sm hover:border-teal"
                  >
                    {checked[item] ? (
                      <CheckSquare className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    ) : (
                      <Square className="mt-0.5 h-5 w-5 shrink-0 text-text-soft" />
                    )}
                    <span className={checked[item] ? "text-text-soft line-through" : "text-ink/80"}>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
