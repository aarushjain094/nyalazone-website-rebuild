export type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export type CardItem = {
  title: string;
  to: string;
  description?: string;
  logoUrl?: string;
  imageUrl?: string;
};

export type TextPage = {
  title: string;
  mobileTitle?: string;
  highlights?: { value: string; label: string }[];
  paragraphs?: string[];
  bullets?: string[];
  sections?: { heading: string; bullets: string[] }[];
  paragraphSections?: { heading: string; bullets: string[] }[];
  trailingParagraphs?: string[];
  imageUrl?: string;
  headerLogoUrl?: string;
  logoUrl?: string;
  paragraphImages?: string[];
  paragraphImageClassName?: string;
  contentClassName?: string;
  boldFirstParagraph?: boolean;
  showCTA?: boolean;
  hideTitleSep?: boolean;
  animatedTagline?: boolean;
  pulsingTagline?: string;
};

export type ContactOffice = {
  country: string;
  flagUrl: string;
  address: string;
  phone: string;
  email: string;
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  paragraphs: string[];
  to?: string;
  linkedinUrl?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Product Suite", to: "/product-suite" },
      { label: "Leggero Data Management and Analytics Platform", to: "/leggero-data-management-analytics-platform" },
      { label: "Leggero Dynamic Data Source", to: "/leggero-dynamic-data-source" },
      { label: "Digital Customer Engagement Platform", to: "/digital-customer-engagement-platform" },
      { label: "Leggero.ai", to: "/leggero-ai" },
    ],
  },
  {
    label: "Offerings",
    to: "/offerings",
    children: [
      { label: "Advanced Data Integration Platforms", to: "/advanced-data-integration-platforms" },
      { label: "Audit and Risk Compliance", to: "/audit-and-risk-compliance" },
      { label: "Complex Data Migration", to: "/complex-data-migration" },
      { label: "Gen-AI Enabled Process Automation", to: "/gen-ai-enabled-process-automation" },
      { label: "Omnichannel Customer Engagement", to: "/omnichannel-customer-engagement" },
      { label: "Operations Management using Activity Orchestration", to: "/operations-management-using-activity-orchestration" },
    ],
  },
  {
    label: "Partners",
    to: "/partners",
    children: [
      { label: "Our Partner Program", to: "/our-partner-program" },
      { label: "Our Professional Certifications", to: "/our-professional-certifications" },
    ],
  },
  {
    label: "About Us",
    to: "/about-us",
    children: [
      { label: "Overview", to: "/about-us" },
      { label: "Our Team", to: "/our-team-2" },
      { label: "Resources", to: "/resources" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact-us-2" },
];

export const homeHero = {
  eyebrow: "Leading provider of digital transformation and data management solutions",
  title: "Elevate Your Enterprise & Deliver AI-enabled Transformation",
  subtitle:
    "Nyalazone is a technology-first company with products that drive digital transformation across industries. We focus on innovation, research and engineering excellence to create custom AI-powered solutions that increase efficiency within your organization.",
  imageUrl: "https://nyalazone.ai/wp-content/uploads/2021/11/Rev-slider-img-1.jpg",
};

export const homeHighlights: CardItem[] = [
  {
    title: "AI-enabled Digital Transformation",
    to: "/offerings",
    description: "Drive enterprise transformation with AI-enabled systems integrating data and experience.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/LP_AI_enabled.png",
  },
  {
    title: "Elevate Stakeholder Engagement",
    to: "/digital-customer-engagement-platform",
    description: "Transform customer and public service engagement through intelligent omni-channel interactions.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/LP_stakeholder_engagement.png",
  },
  {
    title: "Advanced Analytics & Data Management",
    to: "/leggero-data-management-analytics-platform",
    description: "Streamline data management and accelerate decision-making with advanced analytics.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/LP_data_analytics.png",
  },
];

export const whyNyalazone = {
  title: "Why Nyalazone?",
  paragraph:
    "Nyalazone is a technology-first company with products that drive digital transformation across industries. We focus on innovation, research and engineering excellence to create custom AI-powered solutions that increase efficiency within your organization.",
};

export const capabilityCards = [
  {
    title: "Digital Transformation",
    description:
      "Future-proof your business with AI-powered systems, integrated data management, and customer engagement solutions that deliver impactful and measurable outcomes.",
  },
  {
    title: "Flexible Customization",
    description:
      "No two organizations are alike. Our platforms are built to bend, not break, adapting to your workflows, data structures, and business logic without compromising performance.",
  },
  {
    title: "Enterprise-Grade Solutions",
    description:
      "Built for the demands of large-scale operations: robust security, high availability, and the kind of reliability that mission-critical environments require.",
  },
];

export type ProductSuiteItem = {
  shortTitle: string;
  title: string;
  to: string;
  logoUrl: string;
  description: string;
};

export const productSuiteItems: ProductSuiteItem[] = [
  {
    shortTitle: "Leggero.ai",
    title: "Leggero.ai",
    to: "/leggero-ai",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/02/Leggeri.ai_.png",
    description: "Leggero.ai is an **AI-native analytics platform** that transforms enterprise data into **immediate, decision-ready insight**. You can ask questions in natural language, generate dynamic visualisations, and uncover trends in seconds. Built on a scalable warehouse architecture, it ensures governed, real-time intelligence across the organization. Leggero.ai **empowers leaders to move from data to decisive action**.",
  },
  {
    shortTitle: "Leggero DCE",
    title: "Digital Customer Engagement Platform",
    to: "/digital-customer-engagement-platform",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-11.png",
    description: "Leggero Digital Customer Engagement (DCE) is an intelligent engagement platform designed to **orchestrate seamless digital interactions at scale**. It connects communication flows, automates workflows, and delivers real-time operational visibility. DCE utilizes **advanced analytics** to enable organizations to elevate experience, efficiency, and long-term value creation.",
  },
  {
    shortTitle: "Leggero DDS",
    title: "Leggero Dynamic Data Source",
    to: "/leggero-dynamic-data-source",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-12.png",
    description: "Leggero Dynamic Data Source (DDS) is a high-performance data integration and transformation engine built for modernization at scale. It enables **real-time migration, intelligent cleansing, and rule-driven transformation** across complex systems. Its in-memory architecture ensures **precision, speed, and operational continuity**. DDS accelerates enterprise transformation while safeguarding data integrity.",
  },
  {
    shortTitle: "Leggero DMAP",
    title: "Leggero Data Management and Analytics Platform",
    to: "/leggero-data-management-analytics-platform",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-13.png",
    description: "Leggero Data Management & Analytics Platform (DMAP) brings structured and unstructured data together into a **unified, enterprise-grade foundation**. It ingests, harmonizes, and scales multi-terabyte environments with distributed processing power. Advanced analytics and visual intelligence convert fragmented information into strategic clarity. DMAP establishes a **trusted data backbone** that **drives transparency, control, and growth**.",
  },
];

export const productsIntro =
  "Nyalazone provides enterprise-grade products for AI-enabled digital transformation and advanced data management.";

export const products: CardItem[] = [
  {
    title: "Leggero Data Management and Analytics Platform",
    to: "/leggero-data-management-analytics-platform",
    description:
      "Brings structured and unstructured data together into a unified, enterprise-grade foundation. It ingests, harmonizes, and scales multi-terabyte environments with distributed processing power.",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-13.png",
  },
  {
    title: "Leggero Dynamic Data Source",
    to: "/leggero-dynamic-data-source",
    description:
      "A high-performance data integration and transformation engine built for modernization at scale. It enables real-time migration, intelligent cleansing, and rule-driven transformation across complex systems.",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-12.png",
  },
  {
    title: "Digital Customer Engagement Platform",
    to: "/digital-customer-engagement-platform",
    description:
      "An intelligent engagement platform designed to orchestrate seamless digital interactions at scale. It connects communication flows, automates workflows, and delivers real-time operational visibility.",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-11.png",
  },
  {
    title: "Leggero.ai",
    to: "/leggero-ai",
    description:
      "An AI-native analytics platform that transforms enterprise data into immediate, decision-ready insight. Ask questions in natural language, generate dynamic visualisations, and uncover trends in seconds.",
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/02/Leggeri.ai_.png",
  },
];

export const offeringsIntro =
  "Explore Nyalazone offerings designed for integration, compliance, migration, automation, engagement, and operational orchestration.";

export const offerings: CardItem[] = [
  {
    title: "Advanced Data Integration Platforms",
    to: "/advanced-data-integration-platforms",
    description:
      "Purpose-Built Integration. Unified Intelligence. Scalable by Design.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_adv_data.png",
  },
  {
    title: "Audit and Risk Compliance",
    to: "/audit-and-risk-compliance",
    description:
      "Structured Workflows. Intelligent Oversight. Actionable Insights.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_audit_risk.jpg",
  },
  {
    title: "Complex Data Migration",
    to: "/complex-data-migration",
    description:
      "Precision. Performance. AI-Powered at Scale.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_data_mig_1024.png",
  },
  {
    title: "Gen-AI Enabled Process Automation",
    to: "/gen-ai-enabled-process-automation",
    description:
      "Gen-AI enabled process automation powered by Dynamic Data Source (DDS) and Digital Customer Engagement (DCE).",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_gen_ai.png",
  },
  {
    title: "Omnichannel Customer Engagement",
    to: "/omnichannel-customer-engagement",
    description:
      "Seamless Experiences. Every Channel. Every Time.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_omnichannel.png",
  },
  {
    title: "Operations Management using Activity Orchestration",
    to: "/operations-management-using-activity-orchestration",
    description:
      "Streamlined Execution. Clear Accountability. End-to-End Visibility.",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_ops_mngmt.png",
  },
];

export const partnersPage: TextPage = {
  title: "Our Partner Program",
  paragraphs: [
    "The Nyalazone.ai Partnership Program empowers technology providers, consultants, and service companies to unlock new revenue streams by reselling Nyalazone.ai licenses and delivering value-added services. As a partner, you gain access to our AI-driven customer engagement and analytics platforms at preferential rates, along with comprehensive training, sales enablement, and marketing support. Beyond license reselling, the program enables you to expand your service portfolio - ranging from implementation and customization to ongoing support and data strategy consulting. With a clear tiered model, co-branding opportunities and certifications, the program is designed to help partners scale their business while ensuring clients receive seamless adoption of next-generation of digital transformation solutions.",
  ],
  sections: [
    {
      heading: "License Resale for:",
      bullets: [
        "Leggero Data Management and Analytics Platform (Leggero DMAP)",
        "Leggero Dynamic Data Source (Leggero DDS)",
        "Leggero Digital Customer Engagement (Leggero DCE)",
        "Leggero.ai",
      ],
    },
    {
      heading: "Services Partners for:",
      bullets: [
        "Leggero Data Management and Analytics Platform (Leggero DMAP)",
        "Leggero Dynamic Data Source (Leggero DDS)",
        "Leggero Digital Customer Engagement (Leggero DCE)",
        "AI enabled Digital Transformation Consulting",
      ],
    },
  ],
  trailingParagraphs: [
    "To learn more, reach out to us at partners@nyalazone.com. Our partnership team will connect with you promptly to guide you through the onboarding process.",
  ],
  imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/LP_AI_enabled.png",
  boldFirstParagraph: true,
};

export const partnerProgramPage: TextPage = {
  title: "Our Partner Program",
  paragraphs: [
    "The Nyalazone.ai Partnership Program empowers technology providers, consultants, and service companies to unlock **new revenue streams** by reselling Nyalazone.ai licenses and delivering value-added services. As a partner, you gain access to our **AI-driven customer engagement and analytics platforms** at preferential rates, along with comprehensive training, sales enablement, and marketing support. Beyond license reselling, the program enables you to expand your service portfolio - ranging from implementation and customization to ongoing support and data strategy consulting. With a clear tiered model, co-branding opportunities and certifications, the program is designed to help partners scale their business while ensuring clients receive seamless adoption of **next-generation digital transformation solutions**.",
  ],
  sections: [
    {
      heading: "License Resale for:",
      bullets: [
        "Leggero Data Management and Analytics Platform (Leggero DMAP)",
        "Leggero Dynamic Data Source (Leggero DDS)",
        "Leggero Digital Customer Engagement (Leggero DCE)",
        "Leggero.ai",
      ],
    },
    {
      heading: "Services Partners for:",
      bullets: [
        "Leggero Data Management and Analytics Platform (Leggero DMAP)",
        "Leggero Dynamic Data Source (Leggero DDS)",
        "Leggero Digital Customer Engagement (Leggero DCE)",
        "AI enabled Digital Transformation Consulting",
      ],
    },
  ],
  trailingParagraphs: [
    "To learn more, reach out to us at partners@nyalazone.com. Our partnership team will connect with you promptly to guide you through the onboarding process.",
  ],
  boldFirstParagraph: false,
};

export const certificationsPage: TextPage = {
  title: "Our Professional Certifications",
  contentClassName: "content-compact-tail",
  paragraphs: [
    "The Nyalazone.ai Professional Certification Program is designed to validate and enhance the expertise of professionals working with our **AI-driven products and platforms**. Through structured learning paths, hands-on practice, and rigorous assessments, participants gain the knowledge and skills needed to implement, manage, and maximize Nyalazone.ai solutions with confidence.",
    "Whether you are a business analyst, data engineer, consultant, or system integrator, our certifications demonstrate your ability to deliver **measurable impact** using our advanced CRM, analytics, and digital engagement tools. Earning a Nyalazone.ai certification not only strengthens your credibility in the market but also connects you with a growing community of certified experts driving innovation across industries.",
  ],
  bullets: [
    "Certified Leggero DMAP Administrator",
    "Certified Leggero DDS Administrator",
    "Certified Leggero DMAP & DDS Developer",
    "Certified Leggero DCE Administrator",
    "Certified Leggero DCE Workflow Administrator",
  ],
  trailingParagraphs: [
    "For detailed information about our certification programs, including prerequisites and tailored learning paths, connect with us at partners@nyalazone.com. We also offer **customized certification tracks** designed specifically for partner organizations. Our dedicated partnership team will reach out promptly to support your onboarding and ensure a smooth, value-driven experience.",
  ],
};

export const aboutPage: TextPage = {
  title: "Overview",
  animatedTagline: true,
  paragraphs: [
    "Enabling Intelligent Digital Transformation",
    "Nyalazone is a **technology-first company** dedicated to building products that drive meaningful digital transformation across industries. With a strong focus on **innovation, research, and engineering excellence**, we develop intelligent platforms that empower organizations to streamline operations, enhance stakeholder engagement, and unlock the full potential of their data.",
    "Our flagship offerings - **DCE (Digital Customer Engagement), Leggero DMAP (Data Management & Analytics Platform), and DDS (Dynamic Data Source)** - form an integrated ecosystem addressing data integration, customer engagement, and intelligent process automation challenges.",
    "As a product-led organization, we invest heavily in **technology and R&D**, continuously evolving our solutions with **AI, Gen-AI, and deep learning** capabilities to stay ahead of enterprise needs. At Nyalazone, we don't just deliver software - we deliver platforms that transform how organizations operate, collaborate, and grow.",
  ],
  boldFirstParagraph: false,
};

export const teamPage: TextPage = {
  title: "Our Team",
  paragraphs: [
    "Our leadership team combines expertise across transformation strategy, digital service delivery, data, and AI.",
  ],
  boldFirstParagraph: true,
};

export const teamGlobalPresence =
  "Nyalazone is a product-based company with a strong global footprint. With development centers in India and Canada, and a broad network of global partners, we serve businesses worldwide by delivering innovative solutions and localized support. Our R&D team is spread across various geographies, focused on continuously developing cutting-edge technologies that drive progress. Backed by a talented team of engineers, data scientists, and industry experts, we are committed to providing world-class support and delivering exceptional value to every client.";

export const teamMembers: TeamMember[] = [
  {
    name: "Raja Syed",
    role: "CEO and Founder",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/RS-removebg-preview.png",
    paragraphs: [
      "A GTM and business growth strategist with extensive experience in digital transformation and financial services.",
      "Leads strategic vision and enterprise modernization programs at Nyalazone.",
    ],
  },
  {
    name: "Nironi Jayasinghe",
    role: "Principal Consultant",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/NJ-removebg-preview.png",
    paragraphs: [
      "Specialist in digital service design and enterprise delivery governance.",
      "Drives modernization initiatives focused on measurable customer and operational outcomes.",
    ],
  },
  {
    name: "Indika Ekanayake",
    role: "Data and AI Lead",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/IE-removebg-preview.png",
    paragraphs: [
      "An experienced AI and data engineering professional with a strong track record in enterprise transformation.",
      "Leads advanced analytics and AI implementation while helping organizations unlock strategic value from data.",
    ],
  },
];

export const globalTeamMembers: TeamMember[] = [
  {
    name: "Saurabh Kumar",
    role: "Founder & CEO, Nyalazone International",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/About_Team_1-650x650.png",
    paragraphs: [
      "Saurabh brings three decades of worldwide industry experience to his leadership role. He previously held senior positions at Tech Mahindra, IBM, Siemens, and HCL.",
      "Throughout his tenure, he spearheaded major digital transformation initiatives affecting government and corporate sectors, from national infrastructure modernization to artificial intelligence deployments. Known for pragmatic strategy merged with technical acumen, Saurabh converts ambitious visions into functional, results-driven answers. His technique integrates extensive sector knowledge with steadfast dedication to implementation, guaranteeing technology surpasses targets while generating measurable business progress.",
    ],
    to: "/saurabh-kumar",
    linkedinUrl: "https://www.linkedin.com/in/saurabhnyalazone/",
  },
  {
    name: "Aneesh Kumar Bhola",
    role: "Head of Technology, Nyalazone Solutions",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/About_Team_2-650x650.png",
    paragraphs: [
      "Operating from Canada, Aneesh directs technological advancement and product development execution. He manages ongoing technological initiatives while guiding teams through tactical decisions and operational challenges. His responsibilities encompass ensuring smooth implementation of advanced answers aligned with organizational objectives.",
      "Beyond technical competencies, Aneesh maintains serious engagement in filmmaking and animation. This imaginative foundation enables novel methodology toward innovation. His dual concentration on creative expression and technical knowledge cultivates originality and precision across organizational operations.",
    ],
    to: "/aneesh-kumar-bhola",
    linkedinUrl: "https://www.linkedin.com/in/aneesh-k-bhola/",
  },
  {
    name: "Arnab Sharma",
    role: "Head of Client Relations and Systems, Nyalazone Solutions",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/elementor/thumbs/About_Team_3_2-scaled-r3utgaftkaf9ph7h53yr9nbsq3t8r3shi9lliutzww.jpg",
    paragraphs: [
      "Arnab has directed this position since organizational founding. His history encompasses ten-plus years providing enterprise software implementations. He merges uncommon technical comprehension with business-centered methodology in all endeavors.",
      "Throughout his background, he championed cooperation, supervised productive interdisciplinary organizations, and persistently matched company requirements with manageable, meaningful answers. Arnab champions human empowerment plus organizational cultures emphasizing continued development, originality, and responsibility. An ardent soccer devotee, Arnab applies competitive ideals — cooperation, technique, flexibility — to management philosophy. He stays devoted to constructing mechanisms benefiting users while producing authentic client advantage.",
    ],
    to: "/arnab-sharma",
    linkedinUrl: "https://www.linkedin.com/in/arnab-sharma-434166b8/",
  },
];

export const careersPage: TextPage = {
  title: "Join the Zone",
  paragraphs: [
    "If you get hyped about AI, math puzzles, clean code, and building products that actually solve problems - welcome to your people.",
    "At Nyalazone, we blend tech + curiosity to create smart, scalable, and slightly addictive solutions.",
    "We're deep into Python, Angular, gen-AI, and deep learning - and we're always looking for sharp minds to grow with us.",
    "Whether you're just getting started or already have some industry XP, we care more about how you think than what's on your resume.",
    "We move fast, collaborate hard, and we're not big on gatekeeping. If you're driven, curious, and a little obsessed with making cool things - let's build together.",
  ],
  bullets: [
    "AI that actually does something useful",
    "Elegant code (and maybe some chaos, let's be real)",
    "Building things that don't feel like work to use",
    "People who ask \"what if we tried it this way?\"",
  ],
  imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Careers-852x1024.png",
  boldFirstParagraph: true,
};

export const resourcesIntro =
  "Discover our latest insights and product demonstrations across AI, data management, and digital transformation.";

export type ResourceItem = {
  title: string;
  headline: string;
  description: string;
  videoUrl: string;
};

export const resources: ResourceItem[] = [
  {
    title: "AI Lead Management",
    headline: "Turn Every Interaction into an Opportunity",
    description:
      "Captures and organizes leads from multiple channels (social media, campaigns, websites, calls, and events) into a unified platform. Features drag-and-drop pipeline management, automated activities, and real-time analytics to help teams convert prospects into customers.",
    videoUrl: "https://nyalazone.ai/wp-content/uploads/2025/10/Lead-Management.mp4",
  },
  {
    title: "Document Classifier",
    headline: "Intelligence that Organizes Itself",
    description:
      "An AI-powered solution that automatically identifies, sorts, and validates documents upon receipt. Leverages contextual understanding to route files to the appropriate workflows instantly, eliminating manual sorting, reducing errors, and enabling RPA integration.",
    videoUrl: "https://nyalazone.ai/wp-content/uploads/2025/10/Doc-Classifier.mp4",
  },
  {
    title: "Meeting Module",
    headline: "Unlock Smarter Meetings with AI",
    description:
      "Transforms organizational collaboration through automated scheduling, attendance tracking, AI-generated meeting minutes, and automatic task assignments, designed to convert meetings into measurable outcomes.",
    videoUrl: "https://nyalazone.ai/wp-content/uploads/2025/10/NZ-Meeting-Module-1-1.mp4",
  },
];

export const contactPage: TextPage = {
  title: "Contact Us",
  paragraphs: [
    "We'd love to hear from you. Whether you're reaching out about partnerships, product inquiries, or want to join our team - our inbox is open.",
  ],
  boldFirstParagraph: true,
};

export const contactOffices: ContactOffice[] = [
  {
    country: "Midrand, South Africa",
    flagUrl: "https://flagcdn.com/w80/za.png",
    address: "248, Polofields, Waterfall City, Midrand",
    phone: "+27 (062) 463 9701",
    email: "info@nyalazone.com",
  },
  {
    country: "Noida, India",
    flagUrl: "https://flagcdn.com/w80/in.png",
    address: "7th Floor, Plot 32-33, GM IT Park, Sector 142, Noida-201305",
    phone: "+91 120 417 7324",
    email: "info@nyalazone.com",
  },
  {
    country: "Dubai, UAE",
    flagUrl: "https://flagcdn.com/w80/ae.png",
    address: "Business Center, Dubai World Central, P.O. Box 390667, Dubai - UAE",
    phone: "+971 (0) 50 847 2656",
    email: "info@nyalazone.com",
  },
];

export const detailPages: Record<string, TextPage> = {
  "/leggero-ai": {
    title: "Leggero.ai",
    highlights: [
      { value: "AI-First", label: "BI Platform" },
      { value: "Natural Language", label: "Query Interface" },
      { value: "Governed", label: "Enterprise Analytics" },
    ],
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/02/Leggeri.ai_.png",
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2026/02/ChatGPT-Image-Feb-20-2026-05_45_45-PM-1024x683.png",
      "https://nyalazone.ai/wp-content/uploads/2026/02/ChatGPT-Image-Feb-20-2026-05_14_45-PM-1024x683.png",
      "https://nyalazone.ai/wp-content/uploads/2026/02/ChatGPT-Image-Feb-20-2026-05_35_18-PM-1024x683.png",
    ],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "An **AI-first business intelligence platform** built on an enterprise data warehouse foundation",
          "Transforms **natural language into governed analytical models**",
          "Designed for organizations that demand **clarity, speed, and control**",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "Unifies **AI-powered cross-tab intelligence**, **adaptive visual analytics**, and **reusable analytical models**",
          "Questions evolve into **structured datasets**, surfacing multidimensional patterns instantly",
          "Intelligent visualizations present results with clarity and precision",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Every query operates within structured business definitions and **trusted data architecture**",
          "Built for **mission-critical environments** — secure, scalable, and explainable",
          "Operates at **warehouse scale** while maintaining business logic integrity",
          "Every insight can be **traced back to its source**",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/leggero-data-management-analytics-platform": {
    title: "Leggero Data Management and Analytics Platform",
    mobileTitle: "Leggero DMAP",
    highlights: [
      { value: "Multi-TB", label: "Data Scale" },
      { value: "Cloud & On-Prem", label: "Flexible Deployment" },
      { value: "End-to-End", label: "Data Lifecycle Management" },
    ],
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-13.png",
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DMAP_1-1024x683.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DMAP_2-1024x694.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DMAP_3-1024x683.png",
    ],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "A comprehensive platform for storing, accessing, and analyzing data from **diverse sources and formats**",
          "Manages **multiple terabytes of data** with support for continuous inflow",
          "Handles structured and unstructured data — including text and XML files",
          "Deploys on **cloud infrastructure or dedicated hardware**",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "End-to-end data lifecycle management: ingestion, storage, metadata, transformation, and analytics",
          "**Distributed computing** for big data and high-volume clustered workloads",
          "Interactive reports and dashboards — pie, bar, area, time series, and more",
          "Dynamic, schema-free data exploration — **not bound by rigid schema definitions**",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Consolidates disparate data sources into a **single, intelligent platform**",
          "Role-based, permission-aware visualizations tailored to your teams",
          "Drives **data-informed decision-making** across the enterprise",
          "Lower total cost of ownership versus traditional data warehouses",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
    pulsingTagline: "Scalable Architecture. Advanced Visualizations. Low Total Cost of Ownership.",
  },
  "/leggero-dynamic-data-source": {
    title: "Leggero Dynamic Data Source",
    mobileTitle: "Leggero DDS",
    highlights: [
      { value: "Real-Time", label: "Data Integration" },
      { value: "AI-Ready", label: "Architecture" },
      { value: "LLM-Enabled", label: "GenAI Support" },
    ],
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-12.png",
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DDS_1-1024x645.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DDS_2-1024x673.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DDS_3-1024x654.png",
    ],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "A powerful data engineering, integration, and transformation platform",
          "Designed for **large-scale data migration and modernization** initiatives",
          "Integrates data from **multiple structured and unstructured sources** in real time",
          "Out-of-the-box **API configurator** for seamless external data source connectivity",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "**Proprietary in-memory engine** (\"Data Objects\") for high-speed transformations and mappings",
          "**Computed Columns**: merges multiple source attributes into clean, consolidated outputs",
          "**Fuzzy Logic and Pattern Matching** for intelligent deduplication and data accuracy",
          "Configurable, persistent transformation rules tailored to unique migration workflows",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "**Built-in intelligence layer** designed for AI and ML workloads",
          "Support for **dataset generation for Large Language Models (LLMs)**",
          "**Generative AI capabilities** to extract structured insights from text-heavy documents",
          "Reduces manual data prep effort and accelerates migration cycles",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/digital-customer-engagement-platform": {
    title: "Digital Customer Engagement Platform",
    mobileTitle: "Leggero DCE",
    highlights: [
      { value: "Omnichannel", label: "Web, Mobile, Email, SMS, WhatsApp" },
      { value: "AI-Powered", label: "Workflow Engine" },
      { value: "GenAI & Deep Learning", label: "Intelligent Engagement" },
    ],
    logoUrl: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-11.png",
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_1-1024x683.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_3-1024x690.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_4-1024x682.png",
    ],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "An enterprise-grade platform for unifying engagement across customers, teams, and partners",
          "Supports real-time communication through **web, mobile, email, SMS, and WhatsApp**",
          "Built for **complex, multi-stakeholder ecosystems**",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "Orchestrates **structured, rule-driven processes** using task groups and task instances",
          "**Advanced notification engine** for timely alerts, reminders, and escalations across channels",
          "Enables **targeted campaign** creation and launch via email, SMS, and WhatsApp",
          "Integrated **Knowledge Management** module with semantic search and AI-powered recommendations",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Delivers **consistent, intelligent, and contextual interactions** across all touchpoints",
          "Powered by **AI-enabled rule engines** for automated decision-making",
          "Empowers **seamless, personalized experiences** powered by Generative AI and Deep Learning",
          "Eliminates fragmented communication across departments and channels",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/advanced-data-integration-platforms": {
    title: "Advanced Data Integration Platforms",
    animatedTagline: true,
    highlights: [
      { value: "Real-Time", label: "Data Ingestion" },
      { value: "Unified", label: "Analytics Intelligence" },
      { value: "AI / ML-Ready", label: "Dataset Output" },
    ],
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Off_adv_data.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DDS_1-1024x645.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DMAP_1-1024x683.png",
    ],
    paragraphs: ["Purpose-Built Integration. Unified Intelligence. Scalable by Design."],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "A purpose-built **Data Integration Platform** combining DDS and Leggero DMAP",
          "Designed for organizations with fragmented data environments and complex integration needs",
          "Supports both **operational agility** and **analytical depth**",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "**DDS** enables real-time ingestion, transformation, and unification across disparate sources",
          "**In-memory processing, fuzzy matching, pattern recognition, and computed columns** for intelligent integration",
          "**Leggero** centralizes storage, semantic enrichment, governance, and analytics",
          "Transforms raw datasets into **actionable intelligence** through dashboards and AI-powered modeling",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Turns complex, fragmented data into a **strategic asset**",
          "Flexible APIs with native support for structured and unstructured data",
          "Delivers **high-quality, AI-ready datasets** for downstream analytics and ML workflows",
          "Adapts to your **evolving data ecosystem** — cloud, on-prem, or hybrid",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/audit-and-risk-compliance": {
    title: "Audit and Risk Compliance",
    animatedTagline: true,
    highlights: [
      { value: "Automated", label: "Audit Workflows" },
      { value: "Real-Time", label: "Compliance Dashboards" },
      { value: "Multi-Channel", label: "Alerts & Escalations" },
    ],
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Off_audit_risk.jpg",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_1-1024x683.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DMAP_2-1024x694.png",
    ],
    paragraphs: ["Structured Workflows. Intelligent Oversight. Actionable Insights."],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "An **intelligent audit and risk management system** built on Nyalazone's DCE platform",
          "Designed to ensure **accountability, transparency, and timely resolution** across departments",
          "Combines **workflow automation** with real-time analytics via Leggero",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "**Logs, categorizes, and assigns audit findings** with configurable workflows and automated rule engines",
          "Tracks action items through their **entire lifecycle** with clear ownership and escalation paths",
          "Sends alerts via **email, SMS, and WhatsApp** to ensure timely action",
          "Delivers **real-time dashboards and automated reporting** on audit progress and team performance",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Unified view of audit resolution across functions — enabling **faster decisions**",
          "**Role-based access model** upholds data integrity and control",
          "Eliminates manual follow-up with **automated escalation and notification workflows**",
          "Backed by Leggero analytics for **continuous compliance monitoring**",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/complex-data-migration": {
    title: "Complex Data Migrations",
    animatedTagline: true,
    highlights: [
      { value: "AI-Powered", label: "Transformation Engine" },
      { value: "Fuzzy Logic", label: "Intelligent Matching" },
      { value: "In-Memory", label: "High-Speed Processing" },
    ],
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Off_data_mig_1024.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DDS_2-1024x673.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DDS_3-1024x654.png",
    ],
    paragraphs: ["Precision. Performance. AI-Powered at Scale."],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "An AI-powered migration solution built on Nyalazone's **Dynamic Data Source (DDS)**",
          "Engineered for the complexities of **legacy systems, inconsistent formats, and dynamic transformation logic**",
          "Handles attribute- and instance-level transformations across multi-source environments",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "**Fuzzy logic matching, pattern recognition, computed columns, and multi-source joins** for deduplication and standardization",
          "**Proprietary in-memory processing engine** for real-time validation and iterative cleansing at high speed",
          "Built-in **API configurator** for flexible hybrid and modern architecture connectivity",
          "**Gen-AI and LLMs** extract structured data from unstructured sources and recommend transformation logic",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Dramatically reduces migration risk with **intelligent data validation and cleansing**",
          "Prepares **high-quality, AI-ready datasets** for downstream use",
          "Sets the foundation for **long-term data intelligence and adaptability**",
          "Handles complex entity mappings that rule-based tools cannot",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/gen-ai-enabled-process-automation": {
    title: "Gen-AI Enabled Process Automation",
    pulsingTagline: "Intelligent. Adaptive. End-to-End.",
    highlights: [
      { value: "Gen-AI", label: "Powered Automation" },
      { value: "NLP", label: "Natural Language Understanding" },
      { value: "End-to-End", label: "Process Automation" },
    ],
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Off_gen_ai.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DDS_3-1024x654.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_3-1024x690.png",
    ],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "A **Gen-AI enabled automation ecosystem** integrating DDS and DCE platforms",
          "Designed to transform how organizations **manage data, engage stakeholders, and drive operations**",
          "Automates not just actions, but **decisions**",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "**DDS** enriches, cleanses, and correlates enterprise data in real time for AI-ready output",
          "**DCE** orchestrates task instances, service ticketing, and lead management with intelligent workflows",
          "**Gen-AI** enhances interactions through natural language understanding and AI-generated responses",
          "Powers advanced use cases: **QA automation, invoice and PO verification, document validation**",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Moves beyond rule-based automation into **adaptive, AI-driven process intelligence**",
          "Delivers **personalized, efficient service at scale** across all stakeholder touchpoints",
          "Reduces manual overhead through **self-evolving, proactive operations**",
          "Integrates with existing enterprise data and communication infrastructure",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/omnichannel-customer-engagement": {
    title: "Omnichannel Customer Engagement",
    animatedTagline: true,
    highlights: [
      { value: "5+ Channels", label: "Unified Communication" },
      { value: "AI-Driven", label: "Campaign Automation" },
      { value: "Context-Aware", label: "Customer Journeys" },
    ],
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Off_omnichannel.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_1-1024x683.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_3-1024x690.png",
    ],
    paragraphs: ["Seamless Experiences. Every Channel. Every Time."],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "A purpose-built **omnichannel engagement platform** powered by Nyalazone's DCE",
          "Enables consistent, personalized customer experiences across **web, mobile, email, SMS, WhatsApp, and more**",
          "Designed for organizations with **complex, multi-channel customer journeys**",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "Unifies interactions across channels into a **single intelligent workflow**",
          "Keeps customer journeys **continuous and context-aware** — no lost history, no broken context",
          "Automates notifications, personalizes outreach, and triggers **contextual workflows** based on behavior",
          "Campaigns, alerts, and escalations routed to the **right channel at the right time**",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Drives **improved customer satisfaction, faster resolution times, and stronger brand trust**",
          "AI-backed **dynamic engagement strategies** that adapt to customer preferences automatically",
          "Centralizes communication for consistent messaging across all channels",
          "Eliminates the operational overhead of managing fragmented channel tools",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
  "/operations-management-using-activity-orchestration": {
    title: "Operations Management using Activity Orchestration",
    animatedTagline: true,
    highlights: [
      { value: "AI-Enabled", label: "Activity Orchestration" },
      { value: "Real-Time", label: "Task Visibility" },
      { value: "Automated", label: "Workflow Execution" },
    ],
    paragraphImages: [
      "https://nyalazone.ai/wp-content/uploads/2025/04/Off_ops_mngmt.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_3-1024x690.png",
      "https://nyalazone.ai/wp-content/uploads/2025/04/Prod_DCE_4-1024x682.png",
    ],
    paragraphs: ["Streamlined Execution. Clear Accountability. End-to-End Visibility."],
    paragraphSections: [
      {
        heading: "What is it?",
        bullets: [
          "An **AI-enabled operations management system** built on Nyalazone's DCE platform",
          "Powers modern Operations Management through an **advanced Activity Orchestration engine**",
          "Ensures every task, stakeholder, and outcome is **aligned and accounted for**",
        ],
      },
      {
        heading: "What does it do?",
        bullets: [
          "Defines, assigns, and monitors tasks across teams using **task groups and task instances**",
          "**System tasks** that trigger automatically within workflows — reducing manual intervention",
          "Intelligently routes tasks, surfaces insights, and **optimizes performance** across operations",
          "**Built-in escalation rules, real-time status updates, and performance metrics** for every activity",
        ],
      },
      {
        heading: "Why use it?",
        bullets: [
          "Provides a **centralized command center for operations** — eliminating ambiguity",
          "Enforces **clear accountability and consistent execution** at every stage",
          "Combines **AI-enabled orchestration** with structured, dependency-aware workflows",
          "Replaces disconnected task tools with a single, end-to-end visibility layer",
        ],
      },
    ],
    showCTA: true,
    boldFirstParagraph: false,
  },
};

export type PageSEO = {
  title: string;
  description: string;
  ogImage?: string;
};

export const pageSEOMeta: Record<string, PageSEO> = {
  "/": {
    title: "Nyalazone — AI-Enabled Digital Transformation",
    description: "Nyalazone builds enterprise-grade AI, analytics, and digital engagement products for digital transformation. Explore our platforms and services.",
    ogImage: "https://nyalazone.ai/wp-content/uploads/2021/11/Rev-slider-img-1.jpg",
  },
  "/products": {
    title: "Products | Nyalazone",
    description: "Discover Nyalazone's enterprise products: Leggero DMAP, Leggero DDS, Digital Customer Engagement Platform (DCE), and Leggero.ai.",
    ogImage: "https://nyalazone.ai/wp-content/uploads/2026/01/Group-13.png",
  },
  "/offerings": {
    title: "Offerings | Nyalazone",
    description: "Explore Nyalazone's offerings: advanced data integration, audit and risk compliance, complex data migration, Gen-AI process automation, and omnichannel engagement.",
    ogImage: "https://nyalazone.ai/wp-content/uploads/2025/04/LP_AI_enabled.png",
  },
  "/partners": {
    title: "Partner Program | Nyalazone",
    description: "Join the Nyalazone Partner Program to resell AI-driven platforms and deliver digital transformation services. Tiered model with co-branding and certifications.",
  },
  "/about-us": {
    title: "About Us | Nyalazone",
    description: "Nyalazone is a technology-first company driving digital transformation through AI, analytics, and intelligent enterprise engagement solutions.",
  },
  "/our-team-2": {
    title: "Our Team | Nyalazone",
    description: "Meet the Nyalazone leadership team driving innovation in AI, data management, and enterprise digital transformation.",
  },
  "/resources": {
    title: "Resources | Nyalazone",
    description: "Watch Nyalazone product demos and insights across AI lead management, document classification, meeting intelligence, and more.",
  },
  "/careers": {
    title: "Careers | Nyalazone",
    description: "Join Nyalazone and work on AI, deep learning, and enterprise digital transformation. We value curiosity, collaboration, and clean code.",
  },
  "/contact-us-2": {
    title: "Contact Us | Nyalazone",
    description: "Get in touch with Nyalazone. Offices in Australia, New Zealand, India, and Canada. Reach out to start your digital transformation journey.",
  },
  "/our-partner-program": {
    title: "Our Partner Program | Nyalazone",
    description: "Partner with Nyalazone to resell and deliver AI-driven platforms. Access preferential licensing, training, sales enablement, and co-branding support.",
  },
  "/our-professional-certifications": {
    title: "Professional Certifications | Nyalazone",
    description: "Earn Nyalazone professional certifications to validate expertise in AI-driven products and platforms. Structured learning paths and rigorous assessments.",
  },
  "/leggero-ai": {
    title: "Leggero.ai — AI-Native Business Intelligence | Nyalazone",
    description: "Leggero.ai is an AI-first BI platform that transforms enterprise data into decision-ready insight using natural language queries, governed analytics, and dynamic visualizations.",
  },
  "/leggero-data-management-analytics-platform": {
    title: "Leggero DMAP — Data Management & Analytics Platform | Nyalazone",
    description: "Leggero DMAP (Data Management & Analytics Platform) by Nyalazone manages multi-TB enterprise data with real-time reporting, advanced analytics, and flexible cloud or on-prem deployment.",
  },
  "/leggero-dynamic-data-source": {
    title: "Leggero DDS — Dynamic Data Source | Nyalazone",
    description: "Leggero DDS (Dynamic Data Source) is Nyalazone's high-performance data integration and transformation engine for complex migrations, real-time cleansing, and AI-ready dataset generation.",
  },
  "/digital-customer-engagement-platform": {
    title: "Leggero DCE — Digital Customer Engagement Platform | Nyalazone",
    description: "Leggero DCE (Digital Customer Engagement Platform) by Nyalazone delivers omnichannel enterprise engagement across web, mobile, email, SMS, and WhatsApp, powered by intelligent workflows and AI.",
  },
  "/advanced-data-integration-platforms": {
    title: "Advanced Data Integration Platforms | Nyalazone",
    description: "Nyalazone's DDS and Leggero DMAP deliver purpose-built, enterprise-grade data integration with real-time ingestion, AI-ready outputs, and advanced analytics intelligence.",
  },
  "/audit-and-risk-compliance": {
    title: "Audit and Risk Compliance | Nyalazone",
    description: "Automate audit workflows and risk compliance with Nyalazone's DCE and Leggero DMAP. Track findings, manage resolution, and access real-time compliance dashboards.",
  },
  "/complex-data-migration": {
    title: "Complex Data Migration | Nyalazone",
    description: "Nyalazone's Leggero DDS handles complex enterprise data migrations with AI-powered transformation, fuzzy logic matching, and in-memory high-speed processing.",
  },
  "/gen-ai-enabled-process-automation": {
    title: "Gen-AI Enabled Process Automation | Nyalazone",
    description: "Automate enterprise processes end-to-end with Nyalazone's Gen-AI powered DDS and DCE platforms — intelligent workflows, NLP understanding, and adaptive automation.",
  },
  "/omnichannel-customer-engagement": {
    title: "Omnichannel Customer Engagement | Nyalazone",
    description: "Deliver seamless, context-aware customer experiences across web, mobile, email, SMS, and WhatsApp with Nyalazone's DCE platform.",
  },
  "/operations-management-using-activity-orchestration": {
    title: "Operations Management via Activity Orchestration | Nyalazone",
    description: "Nyalazone's DCE platform powers operations management through AI-enabled activity orchestration, structured workflows, real-time task visibility, and automated execution.",
  },
};

