"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Route,
  Sparkles,
  Globe2,
  MessageSquare,
  Users,
  UserCircle,
  LogOut,
} from "lucide-react";
import { getMockUser, mockLogout, MockUser } from "@/lib/auth";

const links = [
  { href: "/portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/portal/journey", label: "Journey", icon: Route },
  { href: "/portal/nova", label: "Nova Concierge", icon: Sparkles },
  { href: "/portal/destinations", label: "Destinations", icon: Globe2 },
  { href: "/portal/messages", label: "Messages", icon: MessageSquare },
  { href: "/portal/community", label: "Community", icon: Users },
  { href: "/portal/profile", label: "Profile", icon: UserCircle },
];

export default function PortalAppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<MockUser | null | undefined>(undefined);

  useEffect(() => {
    // Client-side auth guard only — see src/lib/auth.ts for details on why
    // this is a mock implementation that needs to be replaced.
    const current = getMockUser();
    if (!current) {
      router.replace("/portal/login");
    } else {
      setUser(current);
    }
  }, [router]);

  if (user === undefined) {
    return (
      <div className="section flex justify-center">
        <p className="text-sm text-text-soft">Loading your portal…</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="bg-mist">
      <div className="container-page grid gap-8 py-10 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="card p-5">
            <p className="text-xs text-text-soft">Signed in as</p>
            <p className="truncate text-sm font-semibold text-navy">{user.name}</p>
            <p className="truncate text-xs text-text-soft">{user.email}</p>
          </div>
          <nav className="card mt-4 flex flex-col gap-1 p-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active ? "bg-teal-cyan text-white" : "text-ink/80 hover:bg-mist-2"
                  }`}
                >
                  <link.icon className="h-4 w-4" /> {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                mockLogout();
                router.push("/portal/login");
              }}
              className="mt-1 flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
