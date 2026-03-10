import { Fragment, ReactNode, useEffect, useRef, useState } from "react";

const partnerPages = [
  { title: "Our Partner Program", to: "/our-partner-program" },
  { title: "Our Professional Certifications", to: "/our-professional-certifications" },
];

const aboutPages = [
  { title: "Overview", to: "/about-us" },
  { title: "Our Team", to: "/our-team-2" },
  { title: "Resources", to: "/resources" },
];

const heroTitles = [
  "Rapid Deployment",
  "Fit to Purpose",
  "Cost Efficient",
];

const breadcrumbMap: Record<string, { label: string; to: string }[]> = {
  "/products": [{ label: "Products", to: "/products" }],
  "/offerings": [{ label: "Offerings", to: "/offerings" }],
  "/partners": [{ label: "Partners", to: "/partners" }],
  "/about-us": [{ label: "About Us", to: "/about-us" }],
  "/our-team-2": [{ label: "About Us", to: "/about-us" }, { label: "Our Team", to: "/our-team-2" }],
  "/resources": [{ label: "About Us", to: "/about-us" }, { label: "Resources", to: "/resources" }],
  "/careers": [{ label: "Careers", to: "/careers" }],
  "/contact-us-2": [{ label: "Contact Us", to: "/contact-us-2" }],
  "/our-partner-program": [{ label: "Partners", to: "/partners" }, { label: "Our Partner Program", to: "/our-partner-program" }],
  "/our-professional-certifications": [{ label: "Partners", to: "/partners" }, { label: "Our Professional Certifications", to: "/our-professional-certifications" }],
  "/leggero-ai": [{ label: "Products", to: "/products" }, { label: "Leggero.ai", to: "/leggero-ai" }],
  "/leggero-data-management-analytics-platform": [{ label: "Products", to: "/products" }, { label: "Leggero Data Management and Analytics Platform", to: "/leggero-data-management-analytics-platform" }],
  "/leggero-dynamic-data-source": [{ label: "Products", to: "/products" }, { label: "Leggero Dynamic Data Source", to: "/leggero-dynamic-data-source" }],
  "/digital-customer-engagement-platform": [{ label: "Products", to: "/products" }, { label: "Digital Customer Engagement Platform", to: "/digital-customer-engagement-platform" }],
  "/advanced-data-integration-platforms": [{ label: "Offerings", to: "/offerings" }, { label: "Advanced Data Integration Platforms", to: "/advanced-data-integration-platforms" }],
  "/audit-and-risk-compliance": [{ label: "Offerings", to: "/offerings" }, { label: "Audit and Risk Compliance", to: "/audit-and-risk-compliance" }],
  "/complex-data-migration": [{ label: "Offerings", to: "/offerings" }, { label: "Complex Data Migrations", to: "/complex-data-migration" }],
  "/gen-ai-enabled-process-automation": [{ label: "Offerings", to: "/offerings" }, { label: "Gen-AI Enabled Process Automation", to: "/gen-ai-enabled-process-automation" }],
  "/omnichannel-customer-engagement": [{ label: "Offerings", to: "/offerings" }, { label: "Omnichannel Customer Engagement", to: "/omnichannel-customer-engagement" }],
  "/operations-management-using-activity-orchestration": [{ label: "Offerings", to: "/offerings" }, { label: "Operations Management using Activity Orchestration", to: "/operations-management-using-activity-orchestration" }],
};
import { Link, Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  aboutPage,
  capabilityCards,
  careersPage,
  certificationsPage,
  contactOffices,
  contactPage,
  detailPages,
  globalTeamMembers,
  homeHero,
  navItems,
  offerings,
  offeringsIntro,
  partnerProgramPage,
  products,
  productsIntro,
  resources,
  resourcesIntro,
  type ResourceItem,
  teamGlobalPresence,
  teamPage,
  whyNyalazone,
  type TextPage,
} from "./content";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main className="page-wrap">
        <BreadcrumbBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsQuadrantPage />} />
          <Route
            path="/offerings"
            element={<CollectionPage title="Offerings" intro={offeringsIntro} items={offerings} className="section-vivid offerings-section" />}
          />
          <Route path="/partners" element={<TextPageView page={partnerProgramPage} />} />
          <Route path="/about-us" element={<TextPageView page={aboutPage} />} />
          <Route path="/our-team-2" element={<TeamPageView />} />
          <Route path="/resources" element={<ResourcesPageView />} />
          <Route path="/careers" element={<CareersPageView />} />
          <Route path="/contact-us-2" element={<ContactPageView />} />
          <Route path="/our-partner-program" element={<TextPageView page={partnerProgramPage} />} />
          <Route path="/our-professional-certifications" element={<TextPageView page={certificationsPage} />} />
          {Object.entries(detailPages).map(([path, page]) => (
            <Route key={path} path={normalizePath(path)} element={<TextPageView page={page} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function normalizePath(path: string) {
  return path.replace(/^\//, "");
}

function Header() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoUrl = "https://nyalazone.ai/wp-content/uploads/2025/04/NZ_AI_Col.png";

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="logo" aria-label="Nyalazone home">
          <img className="logo-image" src={logoUrl} alt="Nyalazone" />
        </Link>

        <nav aria-label="Main navigation" className={`main-nav${mobileOpen ? " main-nav-open" : ""}`}>
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to));

            if (!item.children) {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive: routeActive }) =>
                    routeActive || isActive ? "nav-link nav-link-active" : "nav-link"
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <div
                key={item.to}
                className="nav-item-with-menu"
                onMouseEnter={() => setOpenMenu(item.to)}
                onMouseLeave={() => setOpenMenu((current) => (current === item.to ? null : current))}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive: routeActive }) =>
                    routeActive || isActive ? "nav-link nav-link-active" : "nav-link"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenMenu(openMenu === item.to ? null : item.to);
                  }}
                >
                  {item.label}
                </NavLink>
                <div
                  className={openMenu === item.to ? "dropdown-menu dropdown-menu-open" : "dropdown-menu"}
                  role="menu"
                  aria-label={`${item.label} menu`}
                >
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="dropdown-link"
                      role="menuitem"
                      onClick={() => setOpenMenu(null)}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <button
          className={`nav-hamburger${mobileOpen ? " hamburger-open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function BreadcrumbBar() {
  const location = useLocation();
  if (location.pathname === "/") return null;
  const crumbs = breadcrumbMap[location.pathname] ?? [];
  return (
    <div className="breadcrumb-bar">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          {crumbs.map((crumb, i) => (
            <span key={crumb.to}>
              <span className="breadcrumb-sep"> / </span>
              {i === crumbs.length - 1
                ? <span className="breadcrumb-current">{crumb.label}</span>
                : <Link to={crumb.to} className="breadcrumb-link">{crumb.label}</Link>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

function RotatingHeroTitle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % heroTitles.length);
        setVisible(true);
      }, 380);
    }, 3600);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <h1 className={`hero-rotating-title${visible ? " hero-title-visible" : ""}`}>
      {heroTitles[index]}
    </h1>
  );
}

function OfferingsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  }

  return (
    <div className="offerings-scroll-wrap">
      <button className="scroll-arrow" onClick={() => scroll("left")} aria-label="Scroll left">
        <svg className="scroll-arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <div className="offerings-scroll" ref={scrollRef}>
        {offerings.map((item) => (
          <Link key={item.to} to={item.to} className="offerings-scroll-card">
            <article className="feature-card">
              {item.imageUrl && <img src={item.imageUrl} alt={`${item.title} visual`} className="feature-image" />}
              <h3>{item.title}</h3>
              <span className="learn-more-btn">Learn More</span>
            </article>
          </Link>
        ))}
      </div>
      <button className="scroll-arrow" onClick={() => scroll("right")} aria-label="Scroll right">
        <svg className="scroll-arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
}

function HeroOrbitAnimation() {
  const logoUrl = "https://nyalazone.ai/wp-content/uploads/2025/04/NZ_AI_Col.png";
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let a1 = 40, a2 = 130;
    const r1 = 56, r2 = 90;
    let v1 = 0.35, v2 = 0.25;
    let rafId: number;

    function tick() {
      a1 += v1;
      a2 += v2;

      const apply = (el: HTMLDivElement | null, a: number, r: number) => {
        if (el) el.style.transform = `rotate(${a}deg) translateX(${r}px) rotate(${-a}deg)`;
      };
      apply(icon1Ref.current, a1, r1);
      apply(icon2Ref.current, a2, r2);

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="hero-orbit-column" aria-hidden="true">
      <div className="hero-orbit-wrap">
        <svg className="orbit-rings-svg" viewBox="0 0 220 220" fill="none">
          <circle cx="110" cy="110" r="56" stroke="#c0c0c0" strokeWidth="1.5" strokeDasharray="5 5"/>
          <circle cx="110" cy="110" r="90" stroke="#c0c0c0" strokeWidth="1.5" strokeDasharray="5 5"/>
        </svg>
        <div className="orbit-center">
          <div className="orbit-logo-o" />
          <img src={logoUrl} alt="" className="orbit-center-logo"/>
        </div>
        {/* Unlocked lock - inner ring */}
        <div className="orbit-icon" ref={icon1Ref}>
          <div className="orbit-icon-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0c49a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
            </svg>
          </div>
        </div>
        {/* People — outer ring */}
        <div className="orbit-icon" ref={icon2Ref}>
          <div className="orbit-icon-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0c49a2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
        </div>
      </div>
      <p className="hero-orbit-caption">
        Unlock data to <strong>empower your people</strong>
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero hero-vivid">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow hero-reveal hero-reveal-1">{homeHero.eyebrow}</p>
            <div className="hero-reveal hero-reveal-2"><RotatingHeroTitle /></div>
            <p className="lead hero-reveal hero-reveal-3">{homeHero.subtitle}</p>
            <div className="cta-row hero-reveal hero-reveal-4">
              <Link className="button button-primary" to="/contact-us-2">
                Contact Us
              </Link>
              <Link className="button button-secondary" to="/offerings">
                Our Offerings
              </Link>
            </div>
          </div>
          <HeroOrbitAnimation />
        </div>
      </section>

      <Section title="Our Flagship Products" className="section-flagship">
        <div className="flagship-banner">
          <div className="flagship-row">
            {products.map((item) => (
              <Link key={`flagship-${item.title}`} to={item.to} className="flagship-item">
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt={`${item.title} logo`} className="flagship-logo product-logo-blend" />
                ) : (
                  <span className="flagship-fallback">{item.title}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section title={whyNyalazone.title} className="section-vivid section-why">
        <div className="card-grid">
          {capabilityCards.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Our Offerings" className="section-vivid">
        <OfferingsScroll />
      </Section>

      <HomeEmailCapture />
    </>
  );
}

function HomeEmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@nyalazone.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New Interest Submission",
          _template: "table",
          _captcha: "false",
          email,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="home-capture-section">
      <div className="container home-capture-inner">
        <div className="home-capture-text">
          <p className="home-capture-eyebrow">Stay Connected</p>
          <h2 className="home-capture-heading">Interested in learning more about Nyalazone?</h2>
          <p className="home-capture-sub">Leave your work email and we'll be in touch.</p>
        </div>
        <div className="home-capture-form-wrap">
          {submitted ? (
            <p className="home-capture-thanks">Thanks, we'll be in touch soon.</p>
          ) : (
            <form className="home-capture-form" onSubmit={handleSubmit}>
              <input
                className="home-capture-input"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="home-capture-btn" type="submit" disabled={submitting}>
                {submitting ? "Submitting…" : "Get in Touch"}
              </button>
              {error && <p className="home-capture-error">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ProductsQuadrantPage() {
  return (
    <Section title="Products">
      <p className="lead detail-copy">{productsIntro}</p>
      <div className="products-quadrant">
        {products.map((item) => (
          <Link key={`quadrant-${item.title}`} to={item.to} className="quadrant-link">
            <article className="quadrant-sector">
              <div className="quadrant-logo-wrap">
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt={`${item.title} logo`} className="quadrant-logo product-logo-blend" />
                ) : (
                  <div className="image-placeholder small">Image Placeholder</div>
                )}
              </div>
              <div className="quadrant-text">
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
                <span className="learn-more-btn">Learn More</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function CollectionPage({
  title,
  intro,
  items,
  className,
  boldDescription,
  navGroups,
}: {
  title: string;
  intro: string;
  items: { title: string; description?: string; to: string; imageUrl?: string }[];
  className?: string;
  boldDescription?: boolean;
  navGroups?: { title: string; to: string }[][];
}) {
  return (
    <Section title={title} className={className}>
      <p className="lead detail-copy">{intro}</p>
      <div className="card-grid">
        {items.map((item) => (
          <Link key={`${title}-${item.title}`} to={item.to} className="feature-card-link">
            <article className="feature-card">
              {item.imageUrl && <img src={item.imageUrl} alt={`${item.title} visual`} className="feature-image" />}
              <div className="feature-card-body">
                <h3>{item.title}</h3>
                {item.description && (
                  boldDescription
                    ? <p><strong>{item.description}</strong></p>
                    : <p>{item.description}</p>
                )}
                <span className="learn-more-btn">Learn More</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
      {navGroups && <PageNav groups={navGroups} />}
    </Section>
  );
}

function linkifyEmails(text: string, keyPrefix: string) {
  const parts = text.split(/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(part);
    if (!isEmail) return part;
    return (
      <a key={`${keyPrefix}-${i}`} href={`mailto:${part}`} className="inline-link">
        {part}
      </a>
    );
  });
}

function renderRichText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/);
  if (parts.length === 1) return linkifyEmails(text, "plain");

  return parts.map((part, i) => {
    const content = linkifyEmails(part, `part-${i}`);
    if (i % 2 === 1) return <strong key={`bold-${i}`}>{content}</strong>;
    return <Fragment key={`text-${i}`}>{content}</Fragment>;
  });
}


function AnimatedTagline({ text }: { text: string }) {
  const phrases = text.split(". ").map((p) => (p.endsWith(".") ? p : `${p}.`));
  return (
    <div className="animated-tagline">
      {phrases.map((phrase, i) => (
        <span
          key={phrase}
          className="tagline-phrase"
          style={{ animationDelay: `${i * 0.55}s` }}
        >
          {phrase}
        </span>
      ))}
    </div>
  );
}

function PageContent({ page }: { page: TextPage }) {
  const hasImages = (page.paragraphImages?.length ?? 0) > 0;

  const paragraphNodes = page.paragraphs?.map((paragraph, index) => {
    if (page.animatedTagline && index === 0) {
      return <AnimatedTagline key={paragraph} text={paragraph} />;
    }
    if (page.pulsingTagline && index === 0) {
      return (
        <Fragment key={paragraph}>
          <AnimatedTagline text={page.pulsingTagline} />
          <p className="lead detail-copy">{renderRichText(paragraph)}</p>
        </Fragment>
      );
    }
    const isLead = page.boldFirstParagraph && index === 0;
    const className = `lead detail-copy${isLead ? " detail-copy-leadline" : ""}`;
    return <p key={paragraph} className={className}>{renderRichText(paragraph)}</p>;
  });

  const bulletNodes = page.bullets && (
    <ul className="bullet-list">
      {page.bullets.map((point) => (
        <li key={point}>{renderRichText(point)}</li>
      ))}
    </ul>
  );

  return (
    <div className={page.contentClassName ?? ""}>
      {hasImages ? (
        <>
          {/* Desktop: original two-column layout */}
          <div className={`para-columns para-columns-desktop${page.paragraphImageClassName ? ` ${page.paragraphImageClassName}` : ""}`}>
            <div className="para-col-text">
              {paragraphNodes}
              {bulletNodes}
            </div>
            <div className="para-col-images">
              {page.paragraphImages!.map((img) => (
                <img key={img} src={img} alt="" className="para-col-img" />
              ))}
            </div>
          </div>
          {/* Mobile: interleaved pairs */}
          <div className={`para-columns-mobile${page.paragraphImageClassName ? ` ${page.paragraphImageClassName}` : ""}`}>
            {page.paragraphs?.map((paragraph, index) => {
              const isLead = page.boldFirstParagraph && index === 0;
              const pNode = page.animatedTagline && index === 0
                ? <AnimatedTagline text={paragraph} />
                : page.pulsingTagline && index === 0
                ? <Fragment><AnimatedTagline text={page.pulsingTagline} /><p className="lead detail-copy">{renderRichText(paragraph)}</p></Fragment>
                : <p className={`lead detail-copy${isLead ? " detail-copy-leadline" : ""}`}>{renderRichText(paragraph)}</p>;
              return (
                <div key={paragraph} className="para-image-pair">
                  {pNode}
                  {page.paragraphImages![index] && <img src={page.paragraphImages![index]} alt="" className="para-pair-img" />}
                </div>
              );
            })}
            {bulletNodes}
          </div>
        </>
      ) : (
        <>
          {paragraphNodes}
          {bulletNodes}
        </>
      )}
      {page.sections && (
        <div className="section-list-grid">
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h3>{section.heading}</h3>
              <ul className="bullet-list">
                {section.bullets.map((b) => <li key={b}>{renderRichText(b)}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
      {page.trailingParagraphs?.map((paragraph) => (
        <p key={paragraph} className="lead detail-copy">{renderRichText(paragraph)}</p>
      ))}
    </div>
  );
}

function PageNav({ groups }: { groups: { title: string; to: string }[][] }) {
  const location = useLocation();
  const items = groups.find((g) => g.some((p) => p.to === location.pathname));
  if (!items) return null;
  const index = items.findIndex((p) => p.to === location.pathname);
  const prev = items[index - 1];
  const next = items[index + 1];
  return (
    <div className="page-nav">
      {prev ? (
        <Link to={prev.to} className="page-nav-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          <span className="page-nav-label"><span className="page-nav-hint">Previous</span><span className="page-nav-title">{prev.title}</span></span>
        </Link>
      ) : <span />}
      {next ? (
        <Link to={next.to} className="page-nav-btn page-nav-btn-next">
          <span className="page-nav-label"><span className="page-nav-hint">Next</span><span className="page-nav-title">{next.title}</span></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </Link>
      ) : <span />}
    </div>
  );
}

function TextPageView({ page }: { page: TextPage }) {
  const titleNode = page.headerLogoUrl
    ? <img src={page.headerLogoUrl} alt={page.title} className="section-header-logo" />
    : page.logoUrl
    ? (
      <div className="product-title-block">
        <img src={page.logoUrl} alt={`${page.title} logo`} className="product-title-logo product-logo-blend" />
        {!page.hideTitleSep && <div className="product-title-sep" aria-hidden="true" />}
        {!page.hideTitleSep && <h2 className="product-title-text product-title-desktop">{page.title}</h2>}
        {!page.hideTitleSep && <h2 className="product-title-text product-title-mobile">{page.mobileTitle ?? page.title}</h2>}
      </div>
    )
    : undefined;

  return (
    <Section title={page.title} titleNode={titleNode} className={page.hideTitleSep ? "section-vivid section-logo-only" : undefined}>
      {page.highlights && (
        <div className="highlights-bar">
          {page.highlights.map((h) => (
            <div key={h.label} className="highlight-item">
              <span className="highlight-value">{h.value}</span>
              <span className="highlight-label">{h.label}</span>
            </div>
          ))}
        </div>
      )}
      {page.imageUrl ? (
        <div className="text-image-row">
          <div className="text-image-text"><PageContent page={page} /></div>
          <img src={page.imageUrl} alt={`${page.title} visual`} className="text-image-img" />
        </div>
      ) : (
        <PageContent page={page} />
      )}
      <PageNav groups={[products, offerings, partnerPages, aboutPages]} />
    </Section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TeamCard({ member }: { member: { name: string; role: string; imageUrl: string; paragraphs: string[]; to?: string; linkedinUrl?: string } }) {
  return (
    <article className="team-card">
      {member.linkedinUrl ? (
        <a
          href={member.linkedinUrl}
          className="team-image-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
        >
          <img src={member.imageUrl} alt={member.name} className="team-image" />
        </a>
      ) : (
        <img src={member.imageUrl} alt={member.name} className="team-image" />
      )}
      <h4>{member.name}</h4>
      <p className="team-role">{member.role}</p>
      {member.paragraphs.map((paragraph) => (
        <p key={`${member.name}-${paragraph}`} className="team-copy">
          {paragraph}
        </p>
      ))}
      {member.linkedinUrl && (
        <a
          href={member.linkedinUrl}
          className="team-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`${member.name} on LinkedIn`}
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      )}
    </article>
  );
}

function TeamPageView() {
  return (
    <Section title={teamPage.title}>
      {teamPage.paragraphs?.map((paragraph, index) => (
        <p
          key={paragraph}
          className={`lead detail-copy${teamPage.boldFirstParagraph && index === 0 ? " detail-copy-leadline" : ""}`}
        >
          {paragraph}
        </p>
      ))}

      <p className="lead detail-copy">{renderRichText(teamGlobalPresence)}</p>
      <div className="team-grid">
        {globalTeamMembers.map((member) => <TeamCard key={member.name} member={member} />)}
      </div>
      <PageNav groups={[aboutPages]} />
    </Section>
  );
}


const EMPTY_FORM = { name: "", email: "", role: "", message: "" };

function CareersPageView() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume(e.target.files?.[0] ?? null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append("_subject", "New Careers Interest Submission");
      data.append("_template", "table");
      data.append("_captcha", "false");
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("role", form.role);
      data.append("message", form.message);
      if (resume) data.append("resume", resume, resume.name);

      const response = await fetch("https://formsubmit.co/ajax/recruit@nyalazone.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setForm(EMPTY_FORM);
      setResume(null);
      setSubmitted(true);
    } catch {
      setSubmitError("We could not submit your request right now. Please email recruit@nyalazone.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  const leftPage = { ...careersPage };

  return (
    <Section title={careersPage.title}>
      <div className="careers-layout">
        <div><PageContent page={leftPage} /></div>
        <div className="careers-form-wrap">
        <h3>Express Your Interest</h3>
        {submitted ? (
          <p className="lead detail-copy">Thanks for reaching out. We'll be in touch if there's a fit!</p>
        ) : (
          <form className="careers-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="careers-name">Name</label>
              <input id="careers-name" className="form-input" type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="careers-email">Email</label>
              <input id="careers-email" className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="careers-role">Role of Interest</label>
              <input id="careers-role" className="form-input" type="text" name="role" value={form.role} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="careers-resume">Resume <span className="form-label-hint">(PDF or DOCX)</span></label>
              <input id="careers-resume" className="form-input form-input-file" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
              {resume && <p className="form-file-name">{resume.name}</p>}
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="careers-message">Why Nyalazone?</label>
              <textarea id="careers-message" className="form-textarea" name="message" value={form.message} onChange={handleChange} rows={2} required />
            </div>
            {submitError && <p className="lead detail-copy">{submitError}</p>}
            <button type="submit" className="button button-primary" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
        </div>
      </div>
    </Section>
  );
}

function ShareMenu({ url, title }: { url: string; title: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setOpen(false);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleNativeShare() {
    navigator.share({ title, url });
    setOpen(false);
  }

  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;
  const emailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;

  return (
    <div className="share-menu-wrap" ref={ref}>
      <button className="resource-copy-btn" onClick={() => setOpen((v) => !v)} aria-label="Share video">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
        {copied ? "Copied!" : "Share"}
      </button>
      {open && (
        <div className="share-dropdown">
          {canNativeShare && (
            <button className="share-option" onClick={handleNativeShare}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
              Share via…
            </button>
          )}
          <button className="share-option" onClick={handleCopy}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            Copy Link
          </button>
          <a className="share-option" href={emailHref} onClick={() => setOpen(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Email
          </a>
        </div>
      )}
    </div>
  );
}

function ResourcesPageView() {
  return (
    <Section title="Resources">
      <p className="lead detail-copy">{resourcesIntro}</p>
      <div className="resources-grid">
        {(resources as ResourceItem[]).map((item) => (
          <article key={item.title} className="resource-card">
            <div className="resource-video-wrap">
              <video
                src={item.videoUrl}
                controls
                preload="metadata"
                className="resource-video"
                aria-label={item.title}
              />
            </div>
            <div className="resource-card-body">
              <h3 className="resource-headline">{item.title}</h3>
              <p className="resource-subheadline">{item.headline}</p>
              <p className="resource-desc">{item.description}</p>
              <ShareMenu url={item.videoUrl} title={item.title} />
            </div>
          </article>
        ))}
      </div>
      <PageNav groups={[aboutPages]} />
    </Section>
  );
}

function ContactPageView() {
  return (
    <Section title={contactPage.title}>
      {contactPage.paragraphs?.map((p, i) => (
        <p key={p} className={`lead detail-copy${contactPage.boldFirstParagraph && i === 0 ? " detail-copy-leadline" : ""}`}>
          {p}
        </p>
      ))}
      <p className="lead detail-copy">
        Email: <a href="mailto:info@nyalazone.com" className="inline-link">info@nyalazone.com</a>
      </p>
      <div className="contact-offices-grid">
        {contactOffices.map((office) => (
          <div key={office.country} className="contact-office-card">
            <div className="contact-flag-wrap">
              <img src={office.flagUrl} alt={`${office.country} flag`} className="contact-flag" />
            </div>
            <h3 className="contact-country">{office.country}</h3>
            <p className="contact-detail">{office.address}</p>
            <p className="contact-detail">Tel: {office.phone}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Section({
  title,
  titleNode,
  action,
  children,
  className = "section-vivid",
}: {
  title: string;
  titleNode?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const heading = titleNode ?? <h2>{title}</h2>;
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="section-head">
          {action ? (
            <div className="section-head-row">
              {heading}
              {action}
            </div>
          ) : heading}
        </div>
        {children}
      </div>
    </section>
  );
}

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <footer ref={footerRef} className="site-footer">
      <div className="footer-main">
        <div className="container footer-cols">
          <div className="footer-col">
            <p className="footer-col-title">Products</p>
            {products.map((item) => (
              <Link key={item.to} to={item.to} className="footer-nav-link">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Offerings</p>
            {offerings.map((item) => (
              <Link key={item.to} to={item.to} className="footer-nav-link">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <p className="footer-col-title">About</p>
            <Link to="/" className="footer-nav-link">Home</Link>
            <Link to="/about-us" className="footer-nav-link">About Nyalazone</Link>
            <Link to="/partners" className="footer-nav-link">Partners</Link>
            <Link to="/resources" className="footer-nav-link">Resources</Link>
            <Link to="/contact-us-2" className="footer-nav-link">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className={`footer-divider${visible ? " footer-divider-visible" : ""}`}>
        <Link to="/" className="footer-logo-mask" aria-label="Go to home">
          <img src="https://nyalazone.ai/wp-content/uploads/2025/04/NZ_AI_Col.png" alt="Nyalazone" className="footer-logo-img" />
        </Link>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <p>© {new Date().getFullYear()} Nyalazone Solutions Pvt. Ltd., All Rights Reserved</p>
          <a
            href="https://www.linkedin.com/company/nyalazone-solutions-pvt-ltd-/?originalSubdomain=in"
            className="footer-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nyalazone on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;




