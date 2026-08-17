"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { mockLogin } from "@/lib/auth";

export default function PortalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: MOCK AUTH ONLY. Any email/password combination "succeeds" here.
    // Replace with a real authentication provider before production use.
    mockLogin({ name: email.split("@")[0] || "Client", email: email || "client@example.com" });
    router.push("/portal/dashboard");
  };

  return (
    <div className="section flex justify-center">
      <div className="container-page max-w-md">
        <div className="card p-8">
          <p className="eyebrow mb-2">Client Portal</p>
          <h1 className="font-display text-2xl font-bold text-navy">Welcome back</h1>
          <p className="mt-1 text-sm text-text-soft">Sign in to track your case, documents and deadlines.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
              <LogIn className="h-4 w-4" /> Sign In
            </button>
          </form>
          <p className="mt-4 text-xs text-text-soft">
            This demo uses mock authentication — any email/password will sign you in.
          </p>
          <p className="mt-4 text-sm text-text-soft">
            New to Novera?{" "}
            <Link href="/portal/signup" className="font-semibold text-teal hover:text-cyan">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
