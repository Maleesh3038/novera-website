"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { mockLogin } from "@/lib/auth";

export default function PortalSignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: MOCK AUTH ONLY — no account is actually created on a server.
    // Replace with real signup/authentication before production use.
    mockLogin({ name: name || "Client", email: email || "client@example.com" });
    router.push("/portal/dashboard");
  };

  return (
    <div className="section flex justify-center">
      <div className="container-page max-w-md">
        <div className="card p-8">
          <p className="eyebrow mb-2">Client Portal</p>
          <h1 className="font-display text-2xl font-bold text-navy">Create your account</h1>
          <p className="mt-1 text-sm text-text-soft">Set up access to your Novera Client Portal.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="font-semibold text-navy">Full name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold text-navy">Email</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold text-navy">Password</span>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm"
                placeholder="••••••••"
              />
            </label>
            <button type="submit" className="btn-primary w-full">
              <UserPlus className="h-4 w-4" /> Create Account
            </button>
          </form>
          <p className="mt-4 text-xs text-text-soft">
            This demo uses mock authentication — no data is saved to a server.
          </p>
          <p className="mt-4 text-sm text-text-soft">
            Already have an account?{" "}
            <Link href="/portal/login" className="font-semibold text-teal hover:text-cyan">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
