"use client";

import { useState } from "react";
import { Send, Sparkles, PhoneCall } from "lucide-react";

type Message = { id: number; from: "nova" | "user"; text: string };

const welcome: Message = {
  id: 0,
  from: "nova",
  text:
    "Hi! I'm Nova, your Novera concierge. I can answer quick questions about your documents, deadlines and destinations. Try asking about 'documents', 'deadline', or 'visa status'.",
};

// NOTE: This chat is a scripted keyword-matching demo, not a real AI model.
// Wire this up to an actual LLM/backend before relying on it for real advice.
function getNovaReply(input: string): string {
  const text = input.toLowerCase();
  if (text.includes("document")) {
    return "You currently have 1 document expiring soon (IELTS Certificate) and 1 expired (Police Clearance). Head to the Journey tab to view your Document Vault.";
  }
  if (text.includes("deadline")) {
    return "Your next deadline is submitting an updated bank statement, due in 5 days. Your UK biometrics appointment is in 14 days.";
  }
  if (text.includes("visa") || text.includes("status")) {
    return "Your case is currently in the 'Documents' stage. Once your documents are verified, we'll move to 'Submitted'.";
  }
  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I help with your case today?";
  }
  return "I'm a simple scripted assistant for this demo, so I might not have an answer for that yet. For anything specific to your case, please escalate to your human consultant below.";
}

export default function PortalNovaPage() {
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMessage: Message = { id: messages.length, from: "user", text: input };
    const novaMessage: Message = { id: messages.length + 1, from: "nova", text: getNovaReply(input) };
    setMessages((prev) => [...prev, userMessage, novaMessage]);
    setInput("");
  };

  return (
    <div className="flex h-[70vh] flex-col">
      <div>
        <p className="eyebrow mb-1">Nova Concierge</p>
        <h1 className="font-display text-3xl font-bold text-navy">Chat with Nova</h1>
      </div>

      <div className="card mt-4 flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.from === "user" ? "bg-teal-cyan text-white" : "bg-mist-2 text-ink/80"
                }`}
              >
                {m.from === "nova" && (
                  <p className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase text-teal">
                    <Sparkles className="h-3 w-3" /> Nova
                  </p>
                )}
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-line p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask Nova about documents, deadlines, or visa status..."
            className="flex-1 rounded-full border border-line bg-white px-4 py-2.5 text-sm"
          />
          <button onClick={send} className="btn-primary">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button className="btn-amber mt-4 self-start">
        <PhoneCall className="h-4 w-4" /> Escalate to Human Consultant
      </button>
    </div>
  );
}
