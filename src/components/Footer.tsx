import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { siteInfo } from "@/data/site";

const columns = [
  {
    title: "Eras",
    links: [
      { href: "/eras/student", label: "Student Era" },
      { href: "/eras/visit", label: "Visit Era" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/destinations", label: "Destinations" },
      { href: "/about", label: "About Us" },
      { href: "/resources", label: "Resources" },
      { href: "/nova", label: "Nova AI Tools" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/portal/login", label: "Client Portal" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/70">{siteInfo.tagline}</p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {siteInfo.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-cyan" /> {siteInfo.whatsapp}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-cyan" /> {siteInfo.email}
            </p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Link href={siteInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href={siteInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href={siteInfo.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <MessageCircle className="h-4 w-4" />
            </Link>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-cyan">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Novera International. All rights reserved.</p>
          <p>{siteInfo.hours.map((h) => `${h.days}: ${h.time}`).join("  ·  ")}</p>
        </div>
      </div>
    </footer>
  );
}
