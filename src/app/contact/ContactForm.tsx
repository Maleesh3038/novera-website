"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    era: "Learn Era",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: This form is client-side only for this demo build. Wire it up to
    // a real backend (email service / CRM / API route) before going live.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-teal" />
        <h3 className="font-display text-xl font-bold text-navy">Thank you, {form.name || "there"}!</h3>
        <p className="max-w-sm text-sm text-text-soft">
          Your free consultation request has been received. A Novera consultant will reach out to you
          shortly via phone, email or WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-semibold text-navy">Full name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="font-semibold text-navy">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-semibold text-navy">Phone</span>
          <input
            required
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
            placeholder="+94 7X XXX XXXX"
          />
        </label>
        <label className="block text-sm">
          <span className="font-semibold text-navy">Preferred Era</span>
          <select
            value={form.era}
            onChange={(e) => setForm((f) => ({ ...f, era: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
          >
            <option>Discover Era</option>
            <option>Learn Era</option>
            <option>Belong Era</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-semibold text-navy">Message</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
          placeholder="Tell us a little about your goals..."
        />
      </label>
      <button type="submit" className="btn-primary w-full">
        <Send className="h-4 w-4" /> Book a Free Consultation
      </button>
    </form>
  );
}
