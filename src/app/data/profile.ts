type ContactInfo = {
  label: string;
  value: string;
  href: string;
};

type MetricsItem = {
  label: string;
  value: string;
  suffix?: string;
  tooltip?: string;
};

type FeatureGridItem = {
  title: string;
  body: string;
  iconKey?: string;
};

type CalloutBlock = {
  type: "callout";
  title: string;
  body: string;
};

type MetricsBlock = {
  type: "metrics";
  items: MetricsItem[];
};

type FeatureGridBlock = {
  type: "feature_grid";
  title: string;
  items: FeatureGridItem[];
};

type BulletsBlock = {
  type: "bullets";
  title?: string;
  style?: "checks" | "dashes" | "dots";
  items: string[];
};

export type ContentBlock =
  | CalloutBlock
  | MetricsBlock
  | FeatureGridBlock
  | BulletsBlock;

export const heroContent = {
  title: "Haris Ibrahim",
  subtitle: "Fractional CMO and B2B Growth Marketer",
  meta: {
    dates: "2011 — PRESENT",
  },
  badges: ["B2B Marketing", "Industrial", "Automation", "Telecom", "Tech"],
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/placeholder-haris",
    },
  ],
};

export const profileHeadline =
  "CMO-level operator with deep experience in industrial marketing, product commercialization, and data-driven growth across energy, automation, and telecom.";

export const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: "harisibrahim1@yahoo.com",
    href: "mailto:harisibrahim1@yahoo.com",
  },
  {
    label: "Mobile",
    value: "+92 300 8817098",
    href: "tel:+923008817098",
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://maps.app.goo.gl/NYC",
  },
];

export const contentBlocks: ContentBlock[] = [
  {
    type: "callout",
    title: "About Haris",
    body: "Fractional CMO with 12+ years operating inside industrial, telecom, and technology companies to commercialize products, scale demand engines, and prove the business case with hard revenue. I connect digital-first acquisition, category marketing, and downstream sales enablement so every campaign rolls up to pipeline and profit.",
  },
  {
    type: "metrics",
    items: [
      {
        label: "Experience",
        value: "12+",
        suffix: "years",
        tooltip: "B2B marketing across industrial, telecom, technology",
      },
      {
        label: "Qualified pipeline",
        value: "$3M+",
        tooltip: "INTECH digital campaigns FY 2017-18",
      },
      {
        label: "Incremental revenue",
        value: "$0.98M",
        tooltip: "Bottom line revenue from INTECH programs FY 2017-18",
      },
      {
        label: "Software category growth",
        value: "165%",
        tooltip: "Average YoY revenue growth for new software portfolio",
      },
      {
        label: "Mobile internet revenue",
        value: "152%",
        tooltip: "Revenue uplift at Jazz in 12 months",
      },
      {
        label: "Project savings",
        value: "$0.76M",
        tooltip: "Capital and process savings delivered at BAT",
      },
    ],
  },
  {
    type: "feature_grid",
    title: "Case Studies",
    items: [
      {
        title: "Case study 1 · INTECH",
        iconKey: "case_intech_demand",
        body: "Context: Global industrial automation company looking to turn marketing into a predictable revenue engine. Problem: Digital was fragmented and underused with no single view of performance across SEO, SEM, email, and content, and limited link to pipeline. Approach: Built a full digital demand stack including SEO, SEM, email nurture, content partnerships, and reporting dashboards tied into CRM and revenue. Outcome: Generated 3M+ USD in qualified pipeline and 0.98M USD in incremental revenue in FY 2017–18, giving executives clear visibility into where growth was coming from.",
      },
      {
        title: "Case study 2 · Advanced Software Solutions",
        iconKey: "case_software",
        body: "Context: New software product line that needed a category story and repeatable growth. Problem: No clear positioning or go to market, so revenue was ad hoc and dependent on individual deals. Approach: Defined the category narrative, pricing, and go to market plan, then aligned sales, marketing, and customer success around a focused demand program. Outcome: Delivered 165 percent average year-on-year revenue growth and exceeded annual targets by 25 percent, turning the line into one of the fastest-growing parts of the portfolio.",
      },
      {
        title: "Case study 3 · Jazz",
        iconKey: "case_jazz",
        body: "Context: Leading telecom operator aiming to accelerate data adoption and revenue. Problem: Mobile internet revenue and penetration were below potential; packs, pricing, and retail enablement were not optimized for growth. Approach: Led product and pricing for mobile internet, launched new packs and pricing, and built a retail growth program onboarding 25,000 new outlets to sell data effectively. Outcome: Achieved 152 percent revenue growth in 12 months, 56 percent subscriber growth, and a 520 percent revenue uplift worth 56K USD from the retail program alone.",
      },
    ],
  },
  {
    type: "feature_grid",
    title: "What I Do",
    items: [
      {
        title: "Build demand engines",
        body: "Design and run digital-first demand generation across SEO, SEM, paid, email, and content tied directly into CRM and revenue reporting.",
        iconKey: "demand",
      },
      {
        title: "Product and category marketing",
        body: "Define positioning, messaging, and GTM plans that help new software and services categories grow fast and profitably.",
        iconKey: "product",
      },
      {
        title: "Go to market strategy",
        body: "Use market, customer, and competitive insights to shape multi-year marketing and sales strategies across territories and verticals.",
        iconKey: "strategy",
      },
      {
        title: "Sales and channel enablement",
        body: "Partner with sales to improve account planning, create enablement content, and lift sales force effectiveness.",
        iconKey: "sales",
      },
      {
        title: "Analytics and reporting",
        body: "Implement dashboards and reporting in Tableau and Google Analytics to track funnel performance and ROI.",
        iconKey: "analytics",
      },
      {
        title: "Team and vendor leadership",
        body: "Lead internal teams and agencies to execute multi-channel programs on time and on budget while maintaining brand consistency.",
        iconKey: "leadership",
      },
    ],
  },
  {
    type: "bullets",
    title: "Selected Career Highlights",
    style: "checks",
    items: [
      "Generated over 3M USD in qualified pipeline and 0.98M USD incremental revenue from INTECH digital campaigns in a single fiscal year.",
      "Increased revenues for a new software product category by an average of 165 percent YoY, exceeding targets by 25 percent.",
      "Helped INTECH achieve its highest-ever revenues with 12 percent YoY growth driven by global brand and demand programs.",
      "Grew mobile internet revenues by 152 percent in 12 months at Jazz while increasing subscribers by 56 percent.",
      "Expanded Jazz’s retail partner base by 25,000 outlets and drove a 520 percent revenue increase worth 56K USD in five months.",
      "Delivered 0.76M USD in project cost savings and a 27 percent capacity increase at BAT through capital and process improvements.",
    ],
  },
  {
    type: "feature_grid",
    title: "Experience Overview",
    items: [
      {
        title: "Co-Founder & CMO · Tensai Technologies",
        body: "Built the marketing function for a data and analytics technology company, defined positioning, and set up analytics translating customer data into sales and leadership insights.",
        iconKey: "founder",
      },
      {
        title: "Head of Marketing · Avanceon",
        body: "Owned annual marketing plan across MEA & South Asia, managed communications, digital channels, and research to generate qualified leads.",
        iconKey: "global_role",
      },
      {
        title: "Global Marketing Manager · INTECH",
        body: "Led global brand, digital, and product marketing; developed a digital stack and dashboards that generated multi-million-dollar pipeline and revenue.",
        iconKey: "marketing_head",
      },
      {
        title: "Marketing & Business Development · Advanced Software Solutions",
        body: "Set direction and GTM for a new software category, combining new account acquisition and wallet share growth.",
        iconKey: "product",
      },
      {
        title: "Specialist – Product & Pricing · Jazz",
        body: "Managed the mobile internet portfolio, pricing, and new product development, driving triple-digit revenue growth.",
        iconKey: "sales",
      },
      {
        title: "Engineering & Operations · BAT & Mari Petroleum",
        body: "Managed capital projects, production shifts, and maintenance workflows, delivering significant cost savings and capacity gains.",
        iconKey: "operations",
      },
    ],
  },
  {
    type: "bullets",
    title: "Skills and Tools",
    style: "checks",
    items: [
      "B2B demand generation, product marketing, and GTM for industrial and technology companies",
      "Campaign planning across SEO, SEM, paid media, email, content, and events",
      "Market and customer research, competitive analysis, and multi-year strategic planning",
      "Sales and channel enablement, account planning, and sales force effectiveness",
      "Data and analytics tools: Tableau, Google Analytics, Google Tag Manager, SPSS",
      "Team leadership, budget ownership, vendor management, stakeholder alignment",
    ],
  },
  {
    type: "bullets",
    title: "Certifications",
    style: "checks",
    items: [
      "Stanford University (Coursera) – Machine Learning",
      "Tableau Desktop – Fundamentals, Desktop II, Desktop III",
      "Google – Advanced Google Analytics, Google Tag Manager, Google Analytics IQ",
    ],
  },
];

