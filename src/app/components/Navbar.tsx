"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { heroContent } from "../data/profile";

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

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#050607]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-white sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-semibold text-white">
          {heroContent.title}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center md:flex">
          <a
            href="mailto:harisibrahim1@yahoo.com?subject=Book%20a%20call"
            className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:text-white"
          >
            Book a call
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#050607]/95 text-white md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="mailto:harisibrahim1@yahoo.com?subject=Book%20a%20call"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:text-white"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

