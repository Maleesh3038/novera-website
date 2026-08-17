"use client";

import { useState } from "react";
import { Wand2 } from "lucide-react";

export default function SopAssistantPage() {
  const [form, setForm] = useState({
    name: "",
    destination: "",
    course: "",
    goals: "",
  });
  const [draft, setDraft] = useState("");

  const generate = () => {
    const { name, destination, course, goals } = form;
    const text = `Statement of Purpose

My name is ${name || "[Your Name]"}, and I am applying to study ${course || "[Course Name]"} in ${destination || "[Destination Country]"}. I have always been drawn to this field because of the opportunities it offers to grow both academically and professionally.

${goals || "[Describe your academic and career goals here — why this course, why this country, and what you hope to achieve.]"}

I chose ${destination || "[Destination Country]"} because of its strong academic reputation, quality of life, and the career opportunities available to graduates in this field. I am confident that studying ${course || "[Course Name]"} will equip me with the skills and knowledge to achieve my long-term goals.

I am committed to making the most of this opportunity, and I look forward to contributing positively to the student community while pursuing my studies. Upon completion, I plan to apply the skills I gain to build a meaningful career, whether in ${destination || "[Destination Country]"} through available post-study pathways or back home in Sri Lanka.

Thank you for considering my application.

Sincerely,
${name || "[Your Name]"}`;
    setDraft(text);
  };

  return (
    <div>
      <section className="bg-navy py-14 text-white">
        <div className="container-page">
          <p className="eyebrow mb-3 text-cyan">Nova AI · Guidance Tool</p>
          <h1 className="text-3xl font-bold sm:text-4xl">SOP / Cover Letter Assistant</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Fill in a few details and Nova will assemble a templated starting draft. This is a
            starting point only — not a final document — and should be personalised and reviewed
            with your consultant before submission.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-navy">Your details</h2>
            <div className="mt-5 space-y-4">
              <Field label="Full name" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} placeholder="e.g. Amara Fernando" />
              <Field label="Destination country" value={form.destination} onChange={(v) => setForm((f) => ({ ...f, destination: v }))} placeholder="e.g. United Kingdom" />
              <Field label="Course / programme" value={form.course} onChange={(v) => setForm((f) => ({ ...f, course: v }))} placeholder="e.g. MSc International Business" />
              <label className="block text-sm">
                <span className="font-semibold text-navy">Academic & career goals</span>
                <textarea
                  value={form.goals}
                  onChange={(e) => setForm((f) => ({ ...f, goals: e.target.value }))}
                  rows={4}
                  placeholder="Briefly describe why this course and what you hope to achieve."
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
                />
              </label>
              <button onClick={generate} className="btn-primary w-full">
                <Wand2 className="h-4 w-4" /> Generate Draft
              </button>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-navy">Editable draft</h2>
            <p className="mt-1 text-xs text-text-soft">
              This is an assembled starting draft, not a final SOP. Edit freely below.
            </p>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={18}
              placeholder="Your generated draft will appear here — click 'Generate Draft' to begin."
              className="mt-4 w-full rounded-xl border border-line bg-mist-2 px-4 py-3 text-sm leading-relaxed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="font-semibold text-navy">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
      />
    </label>
  );
}
