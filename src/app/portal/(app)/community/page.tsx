"use client";

import { useState } from "react";
import { Heart, MessageCircle as MessageCircleIcon } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function PortalCommunityPage() {
  const [reactions, setReactions] = useState<Record<string, number>>({});
  const [comments, setComments] = useState<Record<string, string[]>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const react = (id: string) => {
    setReactions((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const addComment = (id: string) => {
    const draft = drafts[id]?.trim();
    if (!draft) return;
    setComments((prev) => ({ ...prev, [id]: [...(prev[id] ?? []), draft] }));
    setDrafts((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="eyebrow mb-1">Community</p>
        <h1 className="font-display text-3xl font-bold text-navy">Success stories feed</h1>
      </div>

      <div className="space-y-5">
        {testimonials.map((t) => (
          <div key={t.id} className="card p-6">
            <p className="text-sm font-semibold text-navy">{t.name}</p>
            <p className="text-xs text-text-soft">{t.country} · {t.era.charAt(0).toUpperCase() + t.era.slice(1)} Era</p>
            <p className="mt-3 text-sm text-ink/80">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-4">
              <button onClick={() => react(t.id)} className="flex items-center gap-1.5 text-sm text-teal hover:text-cyan">
                <Heart className="h-4 w-4" /> {reactions[t.id] ?? 0}
              </button>
              <span className="flex items-center gap-1.5 text-sm text-text-soft">
                <MessageCircleIcon className="h-4 w-4" /> {(comments[t.id] ?? []).length}
              </span>
            </div>
            {(comments[t.id] ?? []).length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {(comments[t.id] ?? []).map((c, i) => (
                  <li key={i} className="rounded-xl bg-mist-2 px-3 py-2 text-xs text-ink/80">{c}</li>
                ))}
              </ul>
            )}
            <div className="mt-3 flex items-center gap-2">
              <input
                value={drafts[t.id] ?? ""}
                onChange={(e) => setDrafts((prev) => ({ ...prev, [t.id]: e.target.value }))}
                onKeyDown={(e) => e.key === "Enter" && addComment(t.id)}
                placeholder="Add a supportive comment..."
                className="flex-1 rounded-full border border-line bg-white px-4 py-2 text-xs"
              />
              <button onClick={() => addComment(t.id)} className="btn-ghost text-xs">
                Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
