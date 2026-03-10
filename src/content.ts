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
  trailingParagraphs?: string[];
  imageUrl?: string;
  headerLogoUrl?: string;
  logoUrl?: string;
  paragraphImages?: string[];
  paragraphImageClassName?: string;
  contentClassName?: string;
  boldFirstParagraph?: boolean;
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
  "Nyalazone is a **product-based company** with a strong **global footprint**. With development centers in India and Canada, and a broad network of global partners, we serve businesses worldwide by delivering innovative solutions and localized support.";

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
      "Over 30 years of global industry experience delivering transformative solutions for government agencies and enterprises.",
      "Previously held senior roles at Tech Mahindra, IBM, Siemens, and HCL. Led digital transformation initiatives and AI implementations, known for turning strategic ideas into high-performing solutions.",
    ],
    to: "/saurabh-kumar",
    linkedinUrl: "https://www.linkedin.com/in/saurabhnyalazone/",
  },
  {
    name: "Aneesh Kumar Bhola",
    role: "Head of Technology, Nyalazone Solutions",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/About_Team_2-650x650.png",
    paragraphs: [
      "Based in Canada, oversees technological innovation and product roadmap execution.",
      "Brings expertise in seamless solution delivery and tech strategy. Has a passion for filmmaking and animation, allowing him to approach technology with a creative and imaginative perspective.",
    ],
    to: "/aneesh-kumar-bhola",
    linkedinUrl: "https://www.linkedin.com/in/aneesh-k-bhola/",
  },
  {
    name: "Arnab Sharma",
    role: "Head of Client Relations and Systems, Nyalazone Solutions",
    imageUrl: "https://nyalazone.ai/wp-content/uploads/elementor/thumbs/About_Team_3_2-scaled-r3utgaftkaf9ph7h53yr9nbsq3t8r3shi9lliutzww.jpg",
    paragraphs: [
      "Over a decade of enterprise software delivery experience. Champions collaboration and cross-functional team leadership aligned with business needs.",
      "Football enthusiast who values teamwork and adaptability, committed to building systems that deliver real value for clients.",
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
    paragraphs: [
      "Leggero.ai is an **AI-first business intelligence platform** built on an enterprise data warehouse foundation, designed for organizations that demand **clarity, speed, and control**.",
      "It transforms **natural language into governed analytical models**, ensuring that every query operates within structured business definitions and **trusted data architecture**.",
      "By aligning physical warehouse structure with semantic intelligence, Leggero.ai delivers insight that is not only fast - but **consistent, explainable, and enterprise-ready**.",
      "At its core, Leggero.ai unifies **AI-powered cross-tab intelligence**, **adaptive visual analytics**, and **reusable analytical models** into one seamless flow.",
      "Questions evolve into **structured datasets**, multidimensional analysis surfaces patterns instantly, and intelligent visualizations present results with precision.",
      "Built for **mission-critical environments**, Leggero.ai balances innovation with governance. It operates securely at **warehouse scale**, maintains business logic integrity, and ensures that every insight can be **traced back to its source**.",
    ],
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
    paragraphs: [
      "Leggero Data Management & Analytics Platform (DMAP) is a comprehensive solution that enables organizations to seamlessly store, access, homogenize, and analyze data from **diverse sources and formats**.",
      "The platform can efficiently manage **multiple terabytes of data** and support a continuous inflow of information. It transforms **raw, fragmented, and unstructured data** - including text and XML files - into unified datasets that can be used for real-time reporting, historical analysis, and advanced modeling.",
      "Whether deployed on **cloud infrastructure or dedicated hardware**, Leggero provides the flexibility to adapt to your enterprise's specific implementation needs.",
      "The system supports **end-to-end data lifecycle management** - from data ingestion and storage to metadata management, transformation, and advanced analytics. It offers **distributed computing capabilities** to support big data processing and can be scaled in a clustered environment for high-volume workloads.",
      "Its visual layer enables users to create **interactive reports and dashboards** using configurable charts and graphs - pie, bar, area, time series, and more - tailored to roles and permissions.",
      "Unlike traditional data warehouses, Leggero is **not bound by rigid schema definitions**, allowing for **dynamic and flexible data exploration**.",
      "By consolidating disparate data sources into a **single, intelligent platform**, Leggero helps enterprises unlock deeper insights and drive **data-informed decision-making** across teams.",
    ],
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
    contentClassName: "dds-content-compact",
    paragraphs: [
      "Leggero Dynamic Data Source (DDS) is Nyalazone's **powerful data engineering, integration and transformation platform** designed to address the complexities of **large-scale data migration and modernization initiatives**.",
      "The platform enables **real-time integration, iterative cleansing, and intelligent transformation** of data from multiple sources - both structured and unstructured. Its **flexible configuration engine** allows users to define and persist complex integration and transformation rules tailored to unique migration workflows.",
      "At the platform's foundation is a **proprietary in-memory database engine** called \"Data Objects,\" which accelerates processing by storing commonly used data structures for transformations, mappings, and cleansing routines.",
    ],
    bullets: [
      "**Computed Columns**: merges multiple input attributes from source entities to derive clean, consolidated outputs",
      "**Fuzzy Logic and Pattern Matching** for enhanced data accuracy",
      "**Built-in intelligence layer** and AI-ready architecture",
      "Support for **dataset generation for Large Language Models (LLMs)**",
      "**Generative AI capabilities** to extract contextually rich insights from text-heavy documents",
      "Out-of-the-box **API configurator** for seamless external data source connectivity",
    ],
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
    paragraphs: [
      "Digital Customer Engagement (DCE) is Nyalazone's **enterprise-grade platform** designed to unify and streamline engagement across customers, internal teams, and external partners.",
      "Built for **complex, multi-stakeholder ecosystems**, DCE enables organizations to deliver **consistent, intelligent, and contextual interactions** across all touchpoints. With **powerful omni-channel integration**, the platform supports real-time communication through web, mobile, email, SMS, and WhatsApp.",
      "At the heart of DCE is an **intelligent workflow engine** that enables advanced automation and decision-making. Using task groups and task instances, organizations can orchestrate **structured, rule-driven processes** across teams, powered by AI-enabled rule engines.",
      "DCE features an **advanced notification engine** that drives timely alerts, reminders, and escalations across channels. Marketing and engagement teams can create and launch **targeted campaigns** through email, SMS, and WhatsApp.",
      "DCE also provides a robust foundation for **enterprise knowledge and content management**. The integrated Knowledge Management module supports **semantic search and AI-powered recommendations**.",
      "By bringing together engagement, automation, collaboration, and intelligence, DCE empowers enterprises to deliver **seamless, personalized experiences** powered by Generative AI and Deep Learning.",
    ],
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
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_adv_data.png",
    paragraphs: [
      "Purpose-Built Integration. Unified Intelligence. Scalable by Design.",
      "In today's fragmented data landscape, organizations require more than standard ETL tools - they need a **flexible, intelligent, and scalable Data Integration Platform** that connects systems, harmonizes data, and drives business-ready insights. Nyalazone's **DDS (Dynamic Data Source) and Leggero Data Management & Analytics Platform** work in tandem to deliver exactly that: a purpose-built, enterprise-grade DIP tailored for both operational agility and analytical depth.",
      "At the integration layer, **DDS serves as the powerhouse for real-time data ingestion**, transformation, and unification across multiple, disparate sources. It supports complex integration logic with features like **in-memory processing, fuzzy matching, pattern recognition, and computed columns**. DDS also offers flexible APIs and native support for structured and unstructured data - ensuring seamless, rule-driven integration and preparation of **high-quality, AI-ready datasets**.",
      "Layered with DDS, **Leggero brings advanced capabilities in data storage, semantic enrichment, governance, and analytics**. It enables the centralized management of structured data, supports large-scale distributed processing, and transforms raw datasets into **actionable intelligence** through interactive dashboards, advanced visualizations, and AI-powered modeling tools.",
      "Together, **DDS and Leggero form a comprehensive, future-ready Data Integration Platform** that adapts to your organization's evolving data ecosystem. This integrated stack delivers the **performance, intelligence, and flexibility** required to turn complex data into strategic advantage.",
    ],
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
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_audit_risk.jpg",
    paragraphs: [
      "Structured Workflows. Intelligent Oversight. Actionable Insights.",
      "Managing audit findings and mitigating risk requires a system that ensures accountability, transparency, and timely resolution. Nyalazone's **Digital Customer Engagement (DCE) platform** delivers exactly that - an **intelligent workflow system** that streamlines the end-to-end audit management process across departments and regions.",
      "With DCE, organizations can **log, categorize, and assign audit findings** using configurable workflows and automated rule engines. Action items are generated, routed to the right teams, and tracked through their **entire lifecycle** - with ownership, status, and escalation paths clearly defined. Notifications across channels like email, SMS, and WhatsApp ensure timely alerts, while a **role-based access model** upholds data integrity and control.",
      "Paired with **Leggero, our advanced analytics platform**, the solution offers **real-time dashboards and automated reporting** for audit progress, overdue actions, and team performance. Stakeholders get a unified view of audit resolution across functions, enabling faster decisions and continuous compliance.",
      "Together, **DCE and Leggero form a powerful framework for Audit and Risk Compliance** - ensuring structured resolution, collaborative execution, and **data-backed governance**.",
    ],
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
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_data_mig_1024.png",
    paragraphs: [
      "Precision. Performance. AI-Powered at Scale.",
      "Data migrations in modern enterprises demand more than just data transfer - they require intelligent handling of legacy systems, inconsistent formats, and dynamic transformation logic. **Nyalazone's Dynamic Data Source (DDS) is engineered for these complexities**, offering deep configuration capabilities for **attribute- and instance-level transformations**, seamless multi-source integration, and rule-driven data restructuring.",
      "DDS supports advanced migration workflows with features like **fuzzy logic matching, pattern recognition, computed columns, and multi-source joins** - essential for deduplication, standardization, and complex entity mappings. Its **proprietary in-memory processing engine** accelerates transformation cycles, enabling real-time validation and iterative cleansing with high performance.",
      "The built-in **API configurator** allows external APIs to act as live data sources, expanding flexibility in hybrid and modern architectures.",
      "Taking it further, **DDS is enhanced with AI-enabled transformation capabilities**. Leveraging **Gen-AI and LLMs**, the platform can intelligently extract structured data from unstructured sources, recommend transformation logic, and generate derived attributes on the fly - preparing **high-quality, AI-ready datasets** during migrations.",
      "DDS not only ensures smooth transitions but also **sets the foundation for long-term data intelligence and adaptability**.",
    ],
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
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_gen_ai.png",
    paragraphs: [
      "In an era where agility and intelligence define enterprise success, Nyalazone delivers **next-generation Gen-AI enabled process automation** by integrating the powerful capabilities of **Dynamic Data Source (DDS) and Digital Customer Engagement (DCE) platforms**. Together, they form a cohesive, AI-powered automation ecosystem that transforms how organizations manage data, engage stakeholders, and drive operational excellence.",
      "At the core, **DDS streamlines enterprise data transformation** with real-time enrichment, cleansing, and correlation. Its **in-memory engine and AI capabilities** convert unstructured data into structured, AI-ready datasets - extracting insights, detecting patterns, and enabling semantic understanding to drive intelligent automation.",
      "Layered on top is **DCE, our enterprise-grade engagement platform** that connects stakeholders through **intelligent workflows and omni-channel communication**. DCE uses AI to orchestrate task instances, automate service ticketing, lead management, and notification flows, and streamline multi-party collaboration.",
      "With Gen-AI integrated, it enhances interactions through **natural language understanding, AI-generated responses**, intelligent knowledge recommendations, and predictive engagement flows. DCE also powers advanced use cases like **QA process automation, invoice and PO verification**, and document validation - transforming routine tasks into proactive, self-evolving operations.",
      "Together, **DDS and DCE enable organizations to move beyond rule-based automation** into a world of **adaptive, AI-driven process automation**. Our platforms automate not just actions, but decisions - delivering personalized, efficient service at scale.",
    ],
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
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_omnichannel.png",
    paragraphs: [
      "Seamless Experiences. Every Channel. Every Time.",
      "In today's hyper-connected world, customers expect consistent, personalized experiences regardless of how or where they choose to engage. Nyalazone's **Digital Customer Engagement (DCE) platform** is purpose-built to deliver **true omni-channel engagement**, enabling organizations to connect with customers seamlessly across **web, mobile, email, SMS, WhatsApp, and more**.",
      "At its core, **DCE unifies interactions across channels into a single intelligent workflow**, ensuring that customer journeys remain **continuous and context-aware**. Whether it's a support request initiated via email, a follow-up on WhatsApp, or a campaign touchpoint via SMS, DCE ensures all interactions are captured, coordinated, and personalized - without losing history or context.",
      "Backed by **AI and automation**, the platform enables **dynamic engagement strategies** - automating notifications, personalizing outreach, and triggering contextual workflows based on customer behavior and preferences. Campaigns, alerts, and escalations are intelligently routed and delivered across the right channels at the right time.",
      "By centralizing communication and enabling consistent messaging, DCE transforms fragmented interactions into **unified experiences**. The result: **improved customer satisfaction, faster resolution times, and stronger brand trust** - no matter the channel.",
    ],
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
    imageUrl: "https://nyalazone.ai/wp-content/uploads/2025/04/Off_ops_mngmt.png",
    paragraphs: [
      "Streamlined Execution. Clear Accountability. End-to-End Visibility.",
      "Efficient operations require more than task lists - they demand structured orchestration, role clarity, and real-time visibility across every stage of execution. Nyalazone's **Digital Customer Engagement (DCE) platform** powers modern Operations Management through its **advanced Activity Orchestration engine**, ensuring that every task, stakeholder, and outcome is aligned and accounted for.",
      "At the core of DCE is a **robust task management engine** that enables organizations to define, assign, and monitor tasks across teams and departments with precision. DCE structures workflows into **task groups and task instances** - clearly delineating responsibilities, dependencies, and SLAs at every stage.",
      "The engine also supports **system tasks that can be automatically triggered** within workflows - reducing manual intervention and accelerating execution. Combined with **AI-enabled orchestration**, DCE can intelligently route tasks, surface insights, and optimize performance across operations.",
      "Each activity is tracked end-to-end, with **built-in escalation rules, real-time status updates, and performance metrics**. With DCE at the helm, organizations gain a **centralized command center for operations** - eliminating ambiguity, enforcing accountability, and driving consistent execution.",
    ],
    boldFirstParagraph: false,
  },
};

