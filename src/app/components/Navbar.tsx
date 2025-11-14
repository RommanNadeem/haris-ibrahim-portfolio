"use client";

import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

import { heroContent } from "../data/profile";
import { slugify } from "../../lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Snapshot", href: "#snapshot" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Services", href: "#what-i-do" },
  { label: "Experience", href: "#experience-overview" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);
  const memoizedNavItems = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        href: item.href || `#${slugify(item.label)}`,
      })),
    [],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#050607]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 text-sm text-white sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-semibold text-white">
          {heroContent.title}
        </a>
        <nav className="hidden flex-1 items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 md:flex">
          {memoizedNavItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="mailto:harisibrahim1@yahoo.com"
            className="hidden rounded-full border border-white/30 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-slate-900 md:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#050607]/95 text-xs uppercase tracking-[0.3em] text-slate-200 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
            {memoizedNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-white/5 py-3 transition last:border-0 hover:text-white"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto flex max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
            <a
              href="mailto:harisibrahim1@yahoo.com"
              className="inline-flex w-full justify-center rounded-full border border-white/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-slate-900"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

