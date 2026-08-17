"use client";

import { useState } from "react";
import { FileUp, Trash2 } from "lucide-react";
import StageTracker from "@/components/StageTracker";
import { journeyStages } from "@/data/site";

type VaultFile = {
  name: string;
  status: "valid" | "expiring" | "expired";
};

const initialFiles: VaultFile[] = [
  { name: "Passport_Scan.pdf", status: "valid" },
  { name: "IELTS_Certificate.pdf", status: "expiring" },
  { name: "Bank_Statement_June.pdf", status: "valid" },
  { name: "Police_Clearance.pdf", status: "expired" },
];

const deadlines = [
  { label: "Submit updated bank statement", due: "In 5 days" },
  { label: "UK biometrics appointment", due: "In 14 days" },
  { label: "IELTS certificate renewal", due: "In 20 days" },
];

const statusClass: Record<VaultFile["status"], string> = {
  valid: "bg-teal-cyan text-white",
  expiring: "bg-amber text-ink",
  expired: "bg-red-500 text-white",
};

export default function PortalJourneyPage() {
  const [files, setFiles] = useState<VaultFile[]>(initialFiles);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files;
    if (!uploaded) return;
    const newFiles: VaultFile[] = Array.from(uploaded).map((f) => ({ name: f.name, status: "valid" }));
    setFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  };

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-1">Your Journey</p>
        <h1 className="font-display text-3xl font-bold text-navy">Case stage tracker</h1>
      </div>

      <div className="card p-6">
        <StageTracker currentStage={journeyStages[2]} />
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <p className="eyebrow">Document Vault</p>
          <label className="btn-ghost cursor-pointer text-xs">
            <FileUp className="h-4 w-4" /> Upload File
            <input type="file" multiple className="hidden" onChange={handleUpload} />
          </label>
        </div>
        <ul className="mt-4 space-y-2">
          {files.map((f) => (
            <li key={f.name} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
              <span className="text-sm text-ink/80">{f.name}</span>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${statusClass[f.status]}`}>
                  {f.status}
                </span>
                <button onClick={() => removeFile(f.name)} aria-label={`Remove ${f.name}`} className="text-text-soft hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
          {files.length === 0 && <p className="text-sm text-text-soft">No documents uploaded yet.</p>}
        </ul>
        <p className="mt-3 text-xs text-text-soft">
          Upload UI is for demo purposes — files are listed client-side only and are not stored on a
          server.
        </p>
      </div>

      <div className="card p-6">
        <p className="eyebrow mb-3">Upcoming Deadlines</p>
        <ul className="space-y-2">
          {deadlines.map((d) => (
            <li key={d.label} className="flex items-center justify-between rounded-xl bg-mist-2 px-4 py-3">
              <span className="text-sm text-ink/80">{d.label}</span>
              <span className="text-xs font-semibold text-amber">{d.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
