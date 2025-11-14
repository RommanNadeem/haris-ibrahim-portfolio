"use client";

import type { ComponentType } from "react";
import {
  BarChart3,
  Compass,
  Layers,
  LandPlot,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Rocket,
  Tag,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import Navbar from "./components/Navbar";
import {
  contactInfo,
  contentBlocks,
  heroContent,
  profileHeadline,
} from "./data/profile";

const featureIcons: Record<string, ComponentType<{ className?: string }>> = {
  demand: Target,
  product: Megaphone,
  strategy: Compass,
  sales: Workflow,
  analytics: BarChart3,
  leadership: Users,
  founder: Rocket,
  marketing_head: Megaphone,
  global_role: GlobeIcon,
  software: Layers,
  pricing: Tag,
  operations: LandPlot,
  case_intech_demand: Rocket,
  case_software: Layers,
  case_jazz: Megaphone,
};

const caseLabels: Record<string, string> = {
  case_intech_demand: "INTECH",
  case_software: "Software",
  case_jazz: "Jazz",
};

function GlobeIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}

export default function Home() {
  const emailContact = contactInfo.find((item) => item.label === "Email");
  const mobileContact = contactInfo.find((item) => item.label === "Mobile");
  const locationContact = contactInfo.find((item) => item.label === "Location");
  const linkedInLink = heroContent.links.find((link) =>
    link.label.toLowerCase().includes("linkedin"),
  );

  const heroContacts = [
    emailContact && { ...emailContact, Icon: Mail },
    mobileContact && { ...mobileContact, Icon: Phone },
    locationContact && { ...locationContact, Icon: MapPin },
    linkedInLink && {
      label: "LinkedIn",
      value: linkedInLink.url.replace("https://", ""),
      href: linkedInLink.url,
      Icon: Linkedin,
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string;
    Icon: ComponentType<{ className?: string }>;
  }[];

  const skillsBlock =
    contentBlocks.find(
      (block) => block.title === "Skills and Tools" && block.type === "bullets",
    ) ?? null;

  const certificationsBlock =
    contentBlocks.find(
      (block) => block.title === "Certifications" && block.type === "bullets",
    ) ?? null;

  const orderedBlocks = [
    {
      type: "callout" as const,
      id: "about",
      content: contentBlocks.find((block) => block.type === "callout"),
    },
    {
      type: "metrics" as const,
      id: "snapshot",
      content: contentBlocks.find((block) => block.type === "metrics"),
    },
    {
      type: "feature_grid" as const,
      id: "experience-overview",
      content: contentBlocks.find(
        (block) => block.title === "Experience Overview",
      ),
    },
    {
      type: "feature_grid" as const,
      id: "case-studies",
      content: contentBlocks.find((block) => block.title === "Case Studies"),
    },
    {
      type: "feature_grid" as const,
      id: "what-i-do",
      content: contentBlocks.find((block) => block.title === "What I Do"),
    },
    {
      type: "bullets" as const,
      id: "selected-career-highlights",
      content: contentBlocks.find(
        (block) => block.title === "Selected Career Highlights",
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#050607] text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <section
          id="home"
          className="scroll-mt-28 space-y-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-10 shadow-[0_20px_120px_rgba(0,0,0,0.45)]"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {heroContent.meta.dates}
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Hi, I&apos;m {heroContent.title}
          </h1>
                <p className="text-xl font-medium text-slate-400">
                  {heroContent.subtitle}
                </p>
              </div>
              <p className="text-base leading-relaxed text-slate-300">
                {profileHeadline}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {heroContent.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                Book a call
              </button>
            </div>
            <div className="space-y-4 text-sm text-slate-400">
              {heroContacts.map((contact) => (
                <div key={contact.label} className="flex flex-col gap-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                    <contact.Icon className="h-4 w-4 text-slate-300" />
                    <span>{contact.label}</span>
                  </div>
                  <a
                    href={contact.href}
                    target={
                      contact.label === "LinkedIn" ? "_blank" : undefined
                    }
                    rel={
                      contact.label === "LinkedIn"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-base text-slate-200 transition hover:text-white"
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {orderedBlocks.map((orderedBlock, index) => {
          const block = orderedBlock.content;
          if (!block) return null;

          const sectionId = orderedBlock.id || `section-${index}`;

          if (orderedBlock.id === "about" && block.type === "callout") {
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 border-t border-white/10 pt-10"
              >
                <div className="rounded-3xl border border-sky-500/20 bg-sky-500/10 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                    {block.title || "About"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:text-base">
                    {block.body}
                  </p>
                </div>
              </section>
            );
          }

          if (orderedBlock.id === "snapshot" && block.type === "metrics") {
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Snapshot
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {block.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition hover:-translate-y-1"
                      title={item.tooltip}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {item.value}
                        {item.suffix && (
                          <span className="ml-1 text-base text-slate-400">
                            {item.suffix}
                          </span>
                        )}
                      </p>
                      {item.tooltip && (
                        <p className="mt-1 text-xs leading-snug text-slate-500">
                          {item.tooltip}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (orderedBlock.id === "case-studies" && block.type === "feature_grid") {
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Proof of impact
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">
                      Case Studies
                    </h2>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-white/40"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase text-white">
                            {caseLabels[item.iconKey || ""] || item.iconKey || "Case"}
                          </span>
                        </div>
                        <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs font-semibold text-slate-200">
                          Outcome
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <div className="space-y-1.5 text-xs leading-relaxed text-slate-300">
                        <p>
                          <span className="font-semibold text-white">
                            Problem:
                          </span>{" "}
                          {item.body.split("Problem:")[1]?.split("Approach:")[0]?.trim() ||
                            item.body}
                        </p>
                        <p>
                          <span className="font-semibold text-white">
                            Approach:
                          </span>{" "}
                          {item.body.split("Approach:")[1]?.split("Outcome:")[0]?.trim() ||
                            "Focused demand design & exec alignment"}
                        </p>
                        <p>
                          <span className="font-semibold text-white">
                            Outcome:
                          </span>{" "}
                          {item.body.split("Outcome:")[1]?.trim() ||
                            "Growth unlocked across acquisition + retention"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (orderedBlock.id === "what-i-do" && block.type === "feature_grid") {
            const IconComponent = ({ iconKey }: { iconKey?: string }) => {
              const Icon = iconKey ? featureIcons[iconKey] : undefined;
              if (!Icon) {
                return (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[11px] font-semibold text-slate-200">
                    {iconKey?.slice(0, 2).toUpperCase() || "•"}
                  </span>
                );
              }
              return (
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                  <Icon className="h-4 w-4 text-white" />
                </span>
              );
            };

            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Services
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    What I Do
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:border-white/30"
                    >
                      <IconComponent iconKey={item.iconKey} />
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (
            orderedBlock.id === "selected-career-highlights" &&
            block.type === "bullets"
          ) {
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Track record
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Selected Career Highlights
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {block.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-[10px] font-semibold text-emerald-200">
                        ✓
                      </span>
                      <p className="text-sm leading-relaxed text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (
            orderedBlock.id === "experience-overview" &&
            block.type === "feature_grid"
          ) {
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Context
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Experience Overview
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                    >
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          if (block.type === "bullets") {
            const isChecks = block.style === "checks";
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
              >
                {block.title && (
                  <h2 className="text-lg font-semibold text-white">
                    {block.title}
                  </h2>
                )}
                <ul className="space-y-3 text-slate-300">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      {isChecks ? (
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-200">
                          ✓
                        </span>
                      ) : block.style === "dashes" ? (
                        <span className="mt-2 inline-block h-px w-4 bg-slate-500" />
                      ) : (
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-500" />
                      )}
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          return null;
        })}

        {skillsBlock && (
          <section
            id="skills"
            className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Skills &amp; Tools
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                Operating strengths
              </h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:p-8">
              <ul className="space-y-3 text-slate-200">
                {skillsBlock.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-[10px] font-semibold text-emerald-200">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-slate-100">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {certificationsBlock && (
          <section
            id="certifications"
            className="scroll-mt-28 space-y-4 border-t border-white/10 pt-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Certifications
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                Continuous learning
              </h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:p-8">
              <ul className="space-y-3 text-slate-200">
                {certificationsBlock.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-[10px] font-semibold text-emerald-200">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-slate-100">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section
          id="contact"
          className="scroll-mt-28 space-y-8 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-white/15 via-white/5 to-white/15 p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.45)] md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-3xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Contact &amp; Availability
              </p>
              <p className="text-lg font-semibold">
                Open to executive marketing leadership roles, advisory
                engagements, and strategic consulting.
          </p>
        </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:harisibrahim1@yahoo.com?subject=Let’s work together&body=Hi Haris,%0D%0A%0D%0AI came across your portfolio and would love to discuss..."
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Get in touch
          </a>
            </div>
          </div>
        </section>
        </div>
      </main>
  );
}
