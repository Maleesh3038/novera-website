"use client";

import { useState } from "react";
import { FileUp } from "lucide-react";

type Toggle = { key: string; label: string; value: boolean };

export default function PortalProfilePage() {
  const [kycFiles, setKycFiles] = useState<string[]>([]);
  const [toggles, setToggles] = useState<Toggle[]>([
    { key: "email", label: "Email me deadline reminders", value: true },
    { key: "sms", label: "SMS notifications", value: false },
    { key: "whatsapp", label: "WhatsApp updates", value: true },
    { key: "newsletter", label: "Monthly newsletter", value: false },
  ]);
  const [language, setLanguage] = useState("English");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files;
    if (!uploaded) return;
    setKycFiles((prev) => [...prev, ...Array.from(uploaded).map((f) => f.name)]);
    e.target.value = "";
  };

  const toggle = (key: string) => {
    setToggles((prev) => prev.map((t) => (t.key === key ? { ...t, value: !t.value } : t)));
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-1">Profile</p>
        <h1 className="font-display text-3xl font-bold text-navy">Your account</h1>
      </div>

      <div className="card p-6">
        <p className="eyebrow mb-3">Identity (KYC) Documents</p>
        <label className="btn-ghost inline-flex cursor-pointer text-xs">
          <FileUp className="h-4 w-4" /> Upload ID Document
          <input type="file" multiple className="hidden" onChange={handleUpload} />
        </label>
        <ul className="mt-4 space-y-2">
          {kycFiles.map((f) => (
            <li key={f} className="rounded-xl border border-line px-4 py-2.5 text-sm text-ink/80">{f}</li>
          ))}
          {kycFiles.length === 0 && <p className="text-sm text-text-soft">No documents uploaded yet.</p>}
        </ul>
        <p className="mt-3 text-xs text-text-soft">
          Demo upload UI only — files are not stored on a server.
        </p>
      </div>

      <div className="card p-6">
        <p className="eyebrow mb-3">Notification Preferences</p>
        <div className="space-y-3">
          {toggles.map((t) => (
            <label key={t.key} className="flex items-center justify-between rounded-xl bg-mist-2 px-4 py-3 text-sm text-ink/80">
              {t.label}
              <button
                onClick={() => toggle(t.key)}
                className={`h-6 w-11 rounded-full transition-colors ${t.value ? "bg-teal-cyan" : "bg-line"}`}
                aria-pressed={t.value}
              >
                <span className={`block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform ${t.value ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </label>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <p className="eyebrow mb-3">Language</p>
        <div className="flex gap-2">
          {["English", "සිංහල (Sinhala)"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                language === lang ? "border-teal bg-teal-cyan text-white" : "border-line text-ink/80"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-text-soft">
          UI selector only — full Sinhala translation is not yet implemented site-wide.
        </p>
      </div>
    </div>
  );
}
