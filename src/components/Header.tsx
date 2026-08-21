"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { siteInfo } from "@/data/site";

type NavChild = { href: string; label: string; desc: string };
type NavItem = { href?: string; label: string; children?: NavChild[] };

const nav: NavItem[] = [
  {
    label: "Our Eras",
    children: [
      {
        href: "/eras/student",
        label: "Student Era",
        desc: "Study abroad, universities and student visas.",
      },
      {
        href: "/eras/visit",
        label: "Visit Era",
        desc: "Travel, tourist and short-stay visas.",
      },
    ],
  },
  { href: "/destinations", label: "Destinations" },
  { href: "/nova", label: "Nova AI" },
  {
    label: "More",
    children: [
      { href: "/about", label: "About Us", desc: "Who we are and why we started." },
      { href: "/resources", label: "Resources", desc: "Guides, checklists and FAQs." },
      { href: "/contact", label: "Contact", desc: "Talk to a counsellor today." },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change ekedi menu tika close karanna
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Mobile drawer open unaama background scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (item: NavItem) =>
    item.href
      ? pathname === item.href || pathname.startsWith(item.href + "/")
      : !!item.children?.some((c) => pathname.startsWith(c.href));

  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/90 shadow-lg backdrop-blur-xl"
          : "border-b border-transparent bg-navy/60 backdrop-blur-md"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <Logo />

        {/* ---------- Desktop nav ---------- */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hoverOpen(item.label)}
                onMouseLeave={hoverClose}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu((v) => (v === item.label ? null : item.label))
                  }
                  aria-expanded={openMenu === item.label}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item) || openMenu === item.label
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    openMenu === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-slate-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 text-sm font-semibold text-navy">
                            {child.label}
                            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </div>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                            {child.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(item)
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* ---------- Desktop actions ---------- */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/portal/login"
            className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-white/50 hover:text-white"
          >
            Client Portal
          </Link>
          <Link
            href={siteInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber whitespace-nowrap !px-5 !py-2.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Free Consultation
          </Link>
        </div>

        {/* ---------- Mobile toggle ---------- */}
        <button
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[85vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="py-1">
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 ${
                  isActive(item) ? "bg-white/10 text-cyan" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href="/portal/login"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/25 px-4 py-2.5 text-center text-sm font-medium text-white/90"
            >
              Client Portal
            </Link>
            <Link
              href={siteInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-amber w-full"
            >
              <MessageCircle className="h-4 w-4" /> Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
