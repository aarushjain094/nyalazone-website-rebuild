import { ReactNode, useEffect, useRef, useState } from "react";

const heroTitles = [
  "AI-enabled Digital Transformation",
  "Elevate Stakeholder Engagement",
  "Advanced Analytics & Data Management",
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
  "/saurabh-kumar": [{ label: "About Us", to: "/about-us" }, { label: "Our Team", to: "/our-team-2" }, { label: "Saurabh Kumar", to: "/saurabh-kumar" }],
  "/aneesh-kumar-bhola": [{ label: "About Us", to: "/about-us" }, { label: "Our Team", to: "/our-team-2" }, { label: "Aneesh Kumar Bhola", to: "/aneesh-kumar-bhola" }],
  "/arnab-sharma": [{ label: "About Us", to: "/about-us" }, { label: "Our Team", to: "/our-team-2" }, { label: "Arnab Sharma", to: "/arnab-sharma" }],
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
  partnersPage,
  products,
  productsIntro,
  resources,
  resourcesIntro,
  teamGlobalPresence,
  teamMembers,
  teamPage,
  whyNyalazone,
  type TextPage,
} from "./content";

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-wrap">
        <BreadcrumbBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsQuadrantPage />} />
          <Route
            path="/offerings"
            element={<CollectionPage title="Offerings" intro={offeringsIntro} items={offerings} className="section-vivid" />}
          />
          <Route path="/partners" element={<TextPageView page={partnersPage} />} />
          <Route path="/about-us" element={<TextPageView page={aboutPage} />} />
          <Route path="/our-team-2" element={<TeamPageView />} />
          <Route path="/resources" element={<CollectionPage title="Resources" intro={resourcesIntro} items={resources} />} />
          <Route path="/careers" element={<TextPageView page={careersPage} />} />
          <Route path="/contact-us-2" element={<ContactPageView />} />
          <Route path="/our-partner-program" element={<TextPageView page={partnerProgramPage} />} />
          <Route path="/our-professional-certifications" element={<TextPageView page={certificationsPage} />} />
          {globalTeamMembers.filter((m) => m.to).map((member) => (
            <Route key={member.to} path={member.to} element={<TeamMemberDetailView member={member} />} />
          ))}
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
  const logoUrl = "https://nyalazone.ai/wp-content/uploads/2025/04/NZ_AI_Col.png";

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="logo" aria-label="Nyalazone home">
          <img className="logo-image" src={logoUrl} alt="Nyalazone" />
        </Link>

        <nav aria-label="Main navigation" className="main-nav">
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
                  onClick={() => setOpenMenu(null)}
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
    }, 3200);
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
      <button className="scroll-arrow" onClick={() => scroll("left")} aria-label="Scroll left">&#8249;</button>
      <div className="offerings-scroll" ref={scrollRef}>
        {offerings.map((item) => (
          <Link key={item.to} to={item.to} className="offerings-scroll-card">
            <article className="feature-card">
              {item.imageUrl && <img src={item.imageUrl} alt={`${item.title} visual`} className="feature-image" />}
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              <span className="learn-more-btn">Learn More</span>
            </article>
          </Link>
        ))}
      </div>
      <button className="scroll-arrow" onClick={() => scroll("right")} aria-label="Scroll right">&#8250;</button>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero hero-vivid">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{homeHero.eyebrow}</p>
            <RotatingHeroTitle />
            <p className="lead">{homeHero.subtitle}</p>
            <div className="cta-row">
              <Link className="button button-primary" to="/contact-us-2">
                Contact Us
              </Link>
              <Link className="button button-secondary" to="/offerings">
                Our Offerings
              </Link>
            </div>
          </div>
          <img src={homeHero.imageUrl} alt="Nyalazone hero" className="hero-image" />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="flagship-banner">
            <h2>Our Flagship Products</h2>
            <div className="flagship-row">
              {products.map((item) => (
                <Link key={`flagship-${item.title}`} to={item.to} className="flagship-item">
                  {item.logoUrl ? (
                    <img src={item.logoUrl} alt={`${item.title} logo`} className="flagship-logo" />
                  ) : (
                    <span className="flagship-fallback">{item.title}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section title="Our Offerings" className="section-vivid">
        <OfferingsScroll />
      </Section>

      <Section title={whyNyalazone.title} className="section-why">
        <p className="lead detail-copy">{whyNyalazone.paragraph}</p>
        <div className="card-grid">
          {capabilityCards.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function ProductsQuadrantPage() {
  return (
    <Section title="Products">
      <p className="lead detail-copy">{productsIntro}</p>
      <div className="products-quadrant">
        {products.map((item) => (
          <article
            key={`quadrant-${item.title}`}
            className="quadrant-sector"
          >
            <div className="quadrant-logo-wrap">
              {item.logoUrl ? (
                <img src={item.logoUrl} alt={`${item.title} logo`} className="quadrant-logo" />
              ) : (
                <div className="image-placeholder small">Image Placeholder</div>
              )}
            </div>
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
            <Link to={item.to} className="learn-more-btn">
              Learn More
            </Link>
          </article>
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
}: {
  title: string;
  intro: string;
  items: { title: string; description?: string; to: string; imageUrl?: string }[];
  className?: string;
  boldDescription?: boolean;
}) {
  return (
    <Section title={title} className={className}>
      <p className="lead detail-copy">{intro}</p>
      <div className="card-grid">
        {items.map((item) => (
          <Link key={`${title}-${item.title}`} to={item.to} className="feature-card-link">
            <article className="feature-card">
              {item.imageUrl && <img src={item.imageUrl} alt={`${item.title} visual`} className="feature-image" />}
              <h3>{item.title}</h3>
              {item.description && (
                boldDescription
                  ? <p><strong>{item.description}</strong></p>
                  : <p>{item.description}</p>
              )}
              <span className="learn-more-btn">Learn More</span>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function TextPageView({ page }: { page: TextPage }) {
  const titleNode = page.headerLogoUrl ? (
    <img src={page.headerLogoUrl} alt={page.title} className="section-header-logo" />
  ) : undefined;

  const textContent = (
    <>
      {page.paragraphs?.map((paragraph, index) => (
        <p
          key={paragraph}
          className={`lead detail-copy${page.boldFirstParagraph && index === 0 ? " detail-copy-leadline" : ""}`}
        >
          {paragraph}
        </p>
      ))}
      {page.bullets && (
        <ul className="bullet-list">
          {page.bullets.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <Section title={page.title} titleNode={titleNode}>
      {page.imageUrl ? (
        <div className="text-image-row">
          <div className="text-image-text">{textContent}</div>
          <img src={page.imageUrl} alt={`${page.title} visual`} className="detail-image real-image text-image-img" />
        </div>
      ) : (
        textContent
      )}
    </Section>
  );
}

function TeamCard({ member }: { member: { name: string; role: string; imageUrl: string; paragraphs: string[]; to?: string } }) {
  const card = (
    <article className={`team-card${member.to ? " team-card-clickable" : ""}`}>
      <img src={member.imageUrl} alt={member.name} className="team-image" />
      <h4>{member.name}</h4>
      <p className="team-role">{member.role}</p>
      {member.paragraphs.map((paragraph) => (
        <p key={`${member.name}-${paragraph}`} className="team-copy">
          {paragraph}
        </p>
      ))}
    </article>
  );
  return member.to ? (
    <Link to={member.to} className="team-card-anchor">{card}</Link>
  ) : card;
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

      <h3 className="team-subtitle">Global Presence</h3>
      <p className="lead detail-copy">{teamGlobalPresence}</p>
      <div className="team-grid">
        {globalTeamMembers.map((member) => <TeamCard key={member.name} member={member} />)}
      </div>
    </Section>
  );
}

function TeamMemberDetailView({ member }: { member: { name: string; role: string; imageUrl: string; paragraphs: string[] } }) {
  return (
    <Section title={member.name}>
      <div className="team-detail-header">
        <img src={member.imageUrl} alt={member.name} className="team-detail-image" />
        <div>
          <p className="team-detail-role">{member.role}</p>
          {member.paragraphs.map((p) => (
            <p key={p} className="lead detail-copy">{p}</p>
          ))}
        </div>
      </div>
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
      <div className="contact-offices-grid">
        {contactOffices.map((office) => (
          <div key={office.country} className="contact-office-card">
            <div className="contact-flag-wrap">
              <img src={office.flagUrl} alt={`${office.country} flag`} className="contact-flag" />
            </div>
            <h3 className="contact-country">{office.country}</h3>
            <p className="contact-detail">{office.address}</p>
            <p className="contact-detail">Tel: {office.phone}</p>
            <p className="contact-detail">{office.email}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Section({
  title,
  titleNode,
  children,
  className = "section-vivid",
}: {
  title: string;
  titleNode?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className="section-head">
          {titleNode ?? <h2>{title}</h2>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
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
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Nyalazone Solutions Pvt. Ltd., All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
