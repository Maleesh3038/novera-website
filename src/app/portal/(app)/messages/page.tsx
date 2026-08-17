"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Message = { id: number; from: "consultant" | "client"; text: string; time: string };

const initialMessages: Message[] = [
  { id: 1, from: "consultant", text: "Hi! I've reviewed your offer letter — looks great. Could you send your updated bank statement when you get a chance?", time: "Mon 10:14 AM" },
  { id: 2, from: "client", text: "Sure, I'll upload it to the Document Vault today.", time: "Mon 11:02 AM" },
  { id: 3, from: "consultant", text: "Perfect, thank you! I'll let you know once it's verified.", time: "Mon 11:05 AM" },
];

export default function PortalMessagesPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "client", text: input, time: "Just now" },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-[70vh] flex-col">
      <div>
        <p className="eyebrow mb-1">Messages</p>
        <h1 className="font-display text-3xl font-bold text-navy">S. Ranasinghe</h1>
        <p className="text-sm text-text-soft">Your assigned Senior Study Visa Consultant</p>
      </div>

      <div className="card mt-4 flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === "client" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${m.from === "client" ? "bg-teal-cyan text-white" : "bg-mist-2 text-ink/80"}`}>
                <p>{m.text}</p>
                <p className={`mt-1 text-[10px] ${m.from === "client" ? "text-white/70" : "text-text-soft"}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-line p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message..."
            className="flex-1 rounded-full border border-line bg-white px-4 py-2.5 text-sm"
          />
          <button onClick={send} className="btn-primary">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="mt-2 text-xs text-text-soft">
        This inbox is a client-side demo — messages are not persisted or delivered to a real consultant.
      </p>
    </div>
  );
}
