"use client";

import { useState } from "react";
import { Check, Pencil, X } from "lucide-react";

type CaseRow = {
  id: string;
  client: string;
  era: "Discover" | "Learn" | "Belong";
  country: string;
  stage: string;
  deadline: string;
};

type Lead = {
  id: string;
  name: string;
  interest: string;
  score: number;
};

type DraftUpdate = {
  id: string;
  client: string;
  text: string;
  status: "pending" | "approved" | "rejected";
};

const caseload: CaseRow[] = [
  { id: "c1", client: "Ishara Perera", era: "Learn", country: "United Kingdom", stage: "Submitted", deadline: "3 days" },
  { id: "c2", client: "Dinuka Wijesinghe", era: "Learn", country: "Australia", stage: "Documents", deadline: "5 days" },
  { id: "c3", client: "Malith Gunasekara", era: "Belong", country: "United Kingdom", stage: "Matched", deadline: "12 days" },
  { id: "c4", client: "Priyanka Fernando", era: "Discover", country: "Australia", stage: "Decision", deadline: "1 day" },
  { id: "c5", client: "Nethmi Karunaratne", era: "Learn", country: "Singapore", stage: "Documents", deadline: "8 days" },
  { id: "c6", client: "Oshadi Vidanapathirana", era: "Belong", country: "Netherlands", stage: "Submitted", deadline: "6 days" },
];

const leads: Lead[] = [
  { id: "l1", name: "Kasun Abeysekara", interest: "UK · Learn Era", score: 92 },
  { id: "l2", name: "Hiruni Wickramasinghe", interest: "Australia · Discover Era", score: 78 },
  { id: "l3", name: "Sahan Mendis", interest: "Malaysia · Learn Era", score: 65 },
  { id: "l4", name: "Anjali Rodrigo", interest: "Germany · Learn Era", score: 54 },
  { id: "l5", name: "Ruwan Silva", interest: "New Zealand · Belong Era", score: 41 },
];

const initialDrafts: DraftUpdate[] = [
  { id: "d1", client: "Ishara Perera", text: "Your visa application has been lodged successfully. We expect a decision within 6-8 weeks.", status: "pending" },
  { id: "d2", client: "Dinuka Wijesinghe", text: "Your OSHC policy has been confirmed — no further action needed at this time.", status: "pending" },
  { id: "d3", client: "Nethmi Karunaratne", text: "Your SOLAR application is under review by ICA. We'll notify you as soon as your IPA is issued.", status: "pending" },
];

function scoreBadgeClass(score: number) {
  if (score >= 80) return "bg-teal-cyan text-white";
  if (score >= 60) return "bg-amber text-ink";
  return "bg-mist-2 text-navy";
}

export default function AdminDashboardPage() {
  const [drafts, setDrafts] = useState<DraftUpdate[]>(initialDrafts);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const setStatus = (id: string, status: DraftUpdate["status"]) => {
    setDrafts((prev) => prev.map((d) => (d.id === id ? { ...d, status } : d)));
  };

  const startEdit = (draft: DraftUpdate) => {
    setEditingId(draft.id);
    setEditText(draft.text);
  };

  const saveEdit = (id: string) => {
    setDrafts((prev) => prev.map((d) => (d.id === id ? { ...d, text: editText } : d)));
    setEditingId(null);
  };

  return (
    <div className="section">
      <div className="container-page space-y-10">
        <div>
          <p className="eyebrow mb-1">Admin</p>
          <h1 className="font-display text-3xl font-bold text-navy">Novera Admin Dashboard</h1>
          <p className="mt-1 text-sm text-text-soft">
            All data on this page is mock/demo data for UI purposes — connect a real backend and
            authentication before production use.
          </p>
        </div>

        <div className="card overflow-x-auto p-6">
          <p className="eyebrow mb-4">Predictive Caseload</p>
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase text-text-soft">
                <th className="py-2 pr-4">Client</th>
                <th className="py-2 pr-4">Era</th>
                <th className="py-2 pr-4">Country</th>
                <th className="py-2 pr-4">Stage</th>
                <th className="py-2 pr-4">Next Deadline</th>
              </tr>
            </thead>
            <tbody>
              {caseload.map((c) => (
                <tr key={c.id} className="border-b border-line last:border-0">
                  <td className="py-3 pr-4 font-semibold text-navy">{c.client}</td>
                  <td className="py-3 pr-4"><span className="badge">{c.era}</span></td>
                  <td className="py-3 pr-4 text-ink/80">{c.country}</td>
                  <td className="py-3 pr-4 text-ink/80">{c.stage}</td>
                  <td className="py-3 pr-4 font-semibold text-amber">{c.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-6">
          <p className="eyebrow mb-4">Lead Scoring</p>
          <div className="space-y-2">
            {leads.map((l) => (
              <div key={l.id} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-navy">{l.name}</p>
                  <p className="text-xs text-text-soft">{l.interest}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${scoreBadgeClass(l.score)}`}>{l.score}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <p className="eyebrow mb-4">Auto-Drafted Client Updates Awaiting Approval</p>
          <div className="space-y-4">
            {drafts.map((d) => (
              <div key={d.id} className="rounded-xl border border-line p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-navy">{d.client}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${
                      d.status === "approved"
                        ? "bg-teal-cyan text-white"
                        : d.status === "rejected"
                        ? "bg-red-500 text-white"
                        : "bg-mist-2 text-navy"
                    }`}
                  >
                    {d.status}
                  </span>
                </div>
                {editingId === d.id ? (
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows={3}
                    className="mt-2 w-full rounded-xl border border-line px-3 py-2 text-sm"
                  />
                ) : (
                  <p className="mt-2 text-sm text-ink/80">{d.text}</p>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {editingId === d.id ? (
                    <button onClick={() => saveEdit(d.id)} className="btn-ghost text-xs">
                      <Check className="h-3.5 w-3.5" /> Save
                    </button>
                  ) : (
                    <button onClick={() => startEdit(d)} className="btn-ghost text-xs">
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                  )}
                  <button onClick={() => setStatus(d.id, "approved")} className="btn-primary text-xs">
                    <Check className="h-3.5 w-3.5" /> Approve
                  </button>
                  <button onClick={() => setStatus(d.id, "rejected")} className="btn-outline border-red-400 text-xs text-red-600">
                    <X className="h-3.5 w-3.5" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
