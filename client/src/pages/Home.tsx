/*
  HDM Home Page — Dark Luxury Editorial Design
  Design: Deep navy-black + warm gold, Cormorant Garamond headlines, Space Grotesk body
  Sections: Nav, Hero, Stats, Systems Portfolio (SYS-01 to SYS-07), Markets, About, Pricing, Contact, Footer
  SYS-07 = MBAI Arena: Personal AI Firewall (featured/premium card)
*/

import { useState, useEffect, useRef } from "react";
import { Shield, Cpu, Mic, FileText, DollarSign, Award, Lock, ChevronDown, Phone, Mail, MapPin, Globe, Menu, X, Star } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427322689/4LzFDdY6BHDf2fEm56DQsJ/hdm-hero-bg-ibq5bN6CSLQnnqsaiDoPkp.webp";
const MBAI_SHIELD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427322689/4LzFDdY6BHDf2fEm56DQsJ/mbai-arena-shield-8e35tDNNfpfU6a3dZFXXvt.webp";
const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427322689/4LzFDdY6BHDf2fEm56DQsJ/hdm-about-bg-WYH6kXBcp4RWfy4LRzeLVa.webp";
const FAITH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427322689/4LzFDdY6BHDf2fEm56DQsJ/hdm-faith-church-dmBi7vi7Jc2Jr9TdQnuatu.webp";
const CORP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427322689/4LzFDdY6BHDf2fEm56DQsJ/hdm-corporate-business-CEH2vZaPht9kMCC6PeECuX.webp";

const systems = [
  {
    id: "SYS-01",
    icon: <Cpu size={18} />,
    badge: "CORPORATE",
    name: "Antoinette AI Assistant",
    tagline: "The Intelligent Business Manager",
    description: "A comprehensive AI system that handles email triage, appointment scheduling, client follow-up, and administrative communication — saving 8–12 hours per week.",
    price: "$1,500 setup · $497/mo",
    metric: "3–5× ROI",
    featured: false,
    mbai: false,
  },
  {
    id: "SYS-02",
    icon: <Star size={18} />,
    badge: "FAITH-BASED",
    name: "Sermon Content Engine",
    tagline: "Ministry Amplified",
    description: "Transforms one sermon into a complete 7-day digital content calendar: social posts, video scripts, email newsletter, devotional, and graphic briefs — automatically.",
    price: "$197–$397/mo",
    metric: "30+ pieces of content",
    featured: false,
    mbai: false,
  },
  {
    id: "SYS-03",
    icon: <FileText size={18} />,
    badge: "CORPORATE / LEGAL",
    name: "Doc Coach AI",
    tagline: "Intelligent Document Intelligence",
    description: "AI-powered document analysis, contract review, and knowledge extraction. Turns complex documents into actionable insights in minutes, not hours.",
    price: "$500 setup · $197/mo",
    metric: "90% faster document review",
    featured: false,
    mbai: false,
  },
  {
    id: "SYS-04",
    icon: <Mic size={18} />,
    badge: "CORPORATE",
    name: "AI Receptionist Voice Agent",
    tagline: "Always On, Always Professional",
    description: "A 24/7 AI voice receptionist that answers calls, qualifies leads, schedules appointments, and handles FAQs — indistinguishable from a live professional.",
    price: "$750 setup · $397/mo",
    metric: "97% report revenue increase",
    featured: false,
    mbai: false,
  },
  {
    id: "SYS-05",
    icon: <DollarSign size={18} />,
    badge: "SMB / NONPROFIT",
    name: "AI Funding Finder",
    tagline: "Capital Intelligence Engine",
    description: "Researches, identifies, and prioritizes every applicable grant, credit, and funding program for your specific business profile — with application guidance included.",
    price: "$997–$2,500/project",
    metric: "$742K+ funding potential",
    featured: false,
    mbai: false,
  },
  {
    id: "SYS-06",
    icon: <Award size={18} />,
    badge: "NONPROFIT / MINISTRY",
    name: "Grant Evaluation System",
    tagline: "Maximize Your Application Success",
    description: "Evaluates grant applications for alignment, completeness, and competitive positioning — then provides specific recommendations to increase approval probability.",
    price: "$1,500–$3,000/project",
    metric: "Higher approval rates",
    featured: false,
    mbai: false,
  },
  {
    id: "SYS-07",
    icon: <Shield size={18} />,
    badge: "SECURITY / ELITE",
    name: "MBAI Arena",
    tagline: "Personal AI Firewall",
    description: "As AI agents become autonomous, traditional privacy is no longer enough. MBAI Arena is a comprehensive legal and digital firewall that isolates your identity and financial assets from rogue AI spending, data brokers, and prompt injection attacks.",
    price: "$1,500 setup · $197/mo",
    metric: "100% Asset Isolation",
    featured: true,
    mbai: true,
  },
];

const pricingPlans = [
  {
    tier: "STARTER",
    subtitle: "For small churches & solo businesses",
    price: "$197",
    period: "/month",
    setup: "$0–$297 setup",
    features: [
      "Sermon Content Engine (small church)",
      "7-day content calendar automation",
      "Social media post generation",
      "Email newsletter drafting",
      "Monthly performance report",
      "Email support (4hr response)",
    ],
    cta: "START FREE PILOT",
    highlight: false,
  },
  {
    tier: "PROFESSIONAL",
    subtitle: "For growing businesses & mid-size churches",
    price: "$497",
    period: "/month",
    setup: "$1,500 setup",
    features: [
      "Antoinette AI Assistant",
      "Email triage & scheduling",
      "Client follow-up automation",
      "Document drafting & management",
      "AI Receptionist Voice Agent",
      "Weekly performance reports",
      "Priority support (2hr response)",
      "Monthly strategy call",
    ],
    cta: "GET STARTED",
    highlight: true,
  },
  {
    tier: "ENTERPRISE",
    subtitle: "For organizations needing full AI integration",
    price: "$1,500",
    period: "/month",
    setup: "$5,000 setup",
    features: [
      "All Professional features",
      "3+ integrated AI systems",
      "Custom workflow automation",
      "Dedicated account manager",
      "AI Funding Finder (included)",
      "Grant Evaluation System",
      "Custom reporting dashboard",
      "Same-day support response",
    ],
    cta: "CONTACT US",
    highlight: false,
  },
];

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ type: "BUSINESS", name: "", email: "", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
            <div className="w-8 h-8 border border-gold/60 flex items-center justify-center">
              <span className="text-gold font-mono text-xs font-bold">HDM</span>
            </div>
            <span className="text-white/80 text-xs font-mono tracking-widest uppercase hidden sm:block">His Digital Media</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {["services", "solutions", "about", "pricing", "contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="nav-link">{s}</button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => scrollTo("contact")} className="hidden md:block text-xs font-mono tracking-widest uppercase px-5 py-2 border border-gold/50 text-gold hover:bg-gold/10 transition-all duration-200">
              GET STARTED
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/70 hover:text-gold transition-colors">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/98 border-b border-white/5 px-6 py-6 flex flex-col gap-5">
            {["services", "solutions", "about", "pricing", "contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="nav-link text-left text-sm">{s}</button>
            ))}
            <button onClick={() => scrollTo("contact")} className="text-xs font-mono tracking-widest uppercase px-5 py-2 border border-gold/50 text-gold hover:bg-gold/10 transition-all w-fit">
              GET STARTED
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative z-10 container pt-24 pb-20">
          <AnimatedSection>
            <div className="section-label mb-8">
              <span>Lombard, Illinois · Est. 2025</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6 max-w-3xl">
              Where Purpose<br />
              <em className="text-gold not-italic">Meets Intelligence.</em>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-10">
              His Digital Media Corporation delivers practical AI automation systems that serve both the boardroom and the sanctuary — empowering businesses and faith-based organizations to operate at their highest potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("services")} className="px-8 py-3 bg-gold text-background text-xs font-mono tracking-widest uppercase hover:bg-gold/90 transition-all duration-200 font-semibold">
                EXPLORE SYSTEMS
              </button>
              <button onClick={() => scrollTo("contact")} className="px-8 py-3 border border-white/20 text-white/70 text-xs font-mono tracking-widest uppercase hover:border-gold/40 hover:text-gold transition-all duration-200">
                SCHEDULE CONSULTATION
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/6 bg-background/60 backdrop-blur-sm">
          <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "7+", label: "AI Systems Built" },
              { value: "$7B+", label: "Market Opportunity" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "12hrs", label: "Avg Weekly Time Saved" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="stat-number">{s.value}</div>
                <div className="text-white/40 text-xs font-mono tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => scrollTo("services")} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-gold transition-colors animate-bounce">
          <ChevronDown size={20} />
        </button>
      </section>

      {/* ── SYSTEMS PORTFOLIO ── */}
      <section id="services" className="py-24">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">AI Systems Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-light mb-3">Practical AI. <em className="text-gold not-italic">Measurable Results.</em></h2>
            <p className="text-white/50 max-w-xl mb-16">Every HDM system is built for Monday-morning deployment — not theoretical demonstration. Each one delivers a specific, measurable outcome for your organization.</p>
          </AnimatedSection>

          {/* Regular systems grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {systems.filter(s => !s.mbai).map((sys, i) => (
              <AnimatedSection key={sys.id} className={`delay-${i * 50}`}>
                <div className="sys-card rounded-sm p-6 bg-card h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="sys-label">{sys.id}</span>
                    <span className="badge-gold">{sys.badge}</span>
                  </div>
                  <div className="text-gold/70 mb-3">{sys.icon}</div>
                  <h3 className="text-xl font-light text-white mb-1">{sys.name}</h3>
                  <p className="text-gold/60 text-xs font-mono tracking-wide mb-3">{sys.tagline}</p>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">{sys.description}</p>
                  <div className="gold-rule mb-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gold text-sm font-mono">{sys.price}</div>
                      <div className="text-white/40 text-xs mt-0.5">{sys.metric}</div>
                    </div>
                    <button onClick={() => scrollTo("contact")} className="text-xs font-mono tracking-widest uppercase px-4 py-2 border border-gold/30 text-gold/80 hover:border-gold hover:text-gold transition-all">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* MBAI Arena — Featured Full-Width Card */}
          <AnimatedSection>
            <div className="mbai-card glow-pulse rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.005]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img src={MBAI_SHIELD} alt="MBAI Arena Personal AI Firewall" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="sys-label bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-sm">SYS-07 · NEW</span>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge-gold">SECURITY / ELITE</span>
                    <span className="text-xs font-mono text-gold/60 tracking-widest">FEATURED SYSTEM</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-1">MBAI Arena</h3>
                  <p className="text-gold text-sm font-mono tracking-wide mb-4">Personal AI Firewall</p>
                  <p className="text-white/60 leading-relaxed mb-6">
                    As AI agents become autonomous, traditional privacy is no longer enough. MBAI Arena is a comprehensive legal and digital firewall that isolates your personal identity and financial assets from rogue AI spending, data brokers, and prompt injection attacks.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Anonymous LLC Formation",
                      "Virtual Financial Identity",
                      "Encrypted Communications",
                      "Complete Digital Separation",
                    ].map(f => (
                      <div key={f} className="flex items-start gap-2">
                        <Lock size={12} className="text-gold mt-0.5 shrink-0" />
                        <span className="text-white/60 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="gold-rule mb-5" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gold font-mono">$1,500 setup · $197/mo</div>
                      <div className="text-white/40 text-xs mt-0.5">100% Asset Isolation</div>
                    </div>
                    <button onClick={() => scrollTo("contact")} className="px-6 py-3 bg-gold text-background text-xs font-mono tracking-widest uppercase hover:bg-gold/90 transition-all font-semibold">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section id="solutions" className="py-24 border-t border-white/5">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Our Markets</div>
            <h2 className="text-4xl md:text-5xl font-light mb-3">The Boardroom <em className="text-gold not-italic">&amp;</em> The Sanctuary</h2>
            <p className="text-white/50 max-w-2xl mb-16">HDM occupies a unique position no competitor can replicate — serving both corporate organizations and faith-based communities with equal expertise and cultural fluency.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Corporate & SMB */}
            <AnimatedSection>
              <div className="sys-card rounded-sm bg-card h-full overflow-hidden flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={CORP_IMG} alt="Corporate boardroom" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <Cpu size={18} className="text-gold" />
                    <span className="badge-gold">CORPORATE &amp; SMB</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-light text-white mb-3">The Boardroom</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">Small and mid-size businesses across the Chicago metro area are drowning in administrative overhead. HDM's AI systems eliminate that burden — freeing owners and teams to focus on growth, client relationships, and revenue-generating activities.</p>
                  <div className="gold-rule mb-5" />
                  <ul className="space-y-2">
                    {["Real Estate & Property Management", "Legal & Professional Services", "Healthcare & Dental Practices", "Consulting & Financial Services", "Retail & Service Businesses"].map(i => (
                      <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                        <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Faith-Based Organizations */}
            <AnimatedSection>
              <div className="sys-card rounded-sm bg-card h-full overflow-hidden flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={FAITH_IMG} alt="Church sanctuary" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <Star size={18} className="text-gold" />
                    <span className="badge-gold">FAITH-BASED</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-light text-white mb-3">The Sanctuary</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">Churches and ministries are actively adopting AI — but they need a partner who understands their culture, their values, and their mission. HDM's faith-integrated approach delivers technology that amplifies ministry without compromising identity.</p>
                  <div className="gold-rule mb-5" />
                  <ul className="space-y-2">
                    {["Independent & Denominational Churches", "Ministry Organizations & Nonprofits", "Christian Schools & Education", "Pastoral Counseling Centers", "Faith-Based Community Organizations"].map(i => (
                      <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                        <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={ABOUT_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "INCORPORATED", value: "June 2025" },
                  { label: "IL FILE #", value: "75198078" },
                  { label: "STATUS", value: "Active" },
                  { label: "LOCATION", value: "Lombard, IL" },
                ].map(s => (
                  <div key={s.label} className="bg-card/60 border border-white/6 p-4 rounded-sm">
                    <div className="text-white/30 text-xs font-mono tracking-widest uppercase mb-1">{s.label}</div>
                    <div className="text-white/80 text-sm font-mono">{s.value}</div>
                  </div>
                ))}
                <div className="col-span-2 bg-card/60 border border-gold/20 p-5 rounded-sm">
                  <div className="text-gold/60 text-xs font-mono tracking-widest uppercase mb-2">EIN</div>
                  <div className="text-white/80 font-mono">39-2622563</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="section-label mb-4">About HDM</div>
              <h2 className="text-4xl md:text-5xl font-light mb-4">Built on Purpose.<br /><em className="text-gold not-italic">Powered by Intelligence.</em></h2>
              <p className="text-white/50 leading-relaxed mb-4">His Digital Media Corporation was founded with a singular conviction: that the most powerful technology in the world should be accessible to the organizations doing the most important work — growing businesses, serving communities, and advancing faith.</p>
              <p className="text-white/50 leading-relaxed mb-4">Founded by Jeffrey Hopson in Lombard, Illinois, HDM brings enterprise-grade AI automation to small businesses and faith-based organizations that have historically been underserved by the technology industry.</p>
              <p className="text-white/50 leading-relaxed mb-8">The "HIS" in His Digital Media is not incidental. It is a declaration of values — that this company operates with integrity, serves with purpose, and builds technology that reflects the character of its founder.</p>

              <div className="gold-rule mb-6" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Integrity", sub: "Character-driven leadership" },
                  { title: "Practicality", sub: "Systems that work Monday morning" },
                  { title: "Excellence", sub: "Premium quality at every level" },
                  { title: "Purpose", sub: "Technology that serves mission" },
                ].map(v => (
                  <div key={v.title}>
                    <div className="text-gold text-sm font-semibold mb-0.5">{v.title}</div>
                    <div className="text-white/40 text-xs">{v.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 border-t border-white/5">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Investment</div>
            <h2 className="text-4xl md:text-5xl font-light mb-3">Transparent <em className="text-gold not-italic">Pricing</em></h2>
            <p className="text-white/50 max-w-xl mb-16">Every plan includes a free 30-day pilot. No contracts required to start. Cancel anytime.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {pricingPlans.map((plan) => (
              <AnimatedSection key={plan.tier}>
                <div className={`rounded-sm p-7 h-full flex flex-col transition-all duration-300 ${plan.highlight ? "bg-card border border-gold/40 shadow-[0_0_40px_oklch(0.75_0.12_75/15%)]" : "bg-card/60 border border-white/6 sys-card"}`}>
                  {plan.highlight && <div className="text-xs font-mono tracking-widest text-gold mb-3 uppercase">Most Popular</div>}
                  <div className="text-white/30 text-xs font-mono tracking-widest uppercase mb-1">{plan.tier}</div>
                  <div className="text-white/50 text-sm mb-4">{plan.subtitle}</div>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="stat-number">{plan.price}</span>
                    <span className="text-white/40 text-sm mb-2">{plan.period}</span>
                  </div>
                  <div className="text-white/30 text-xs font-mono mb-5">{plan.setup}</div>
                  <div className="gold-rule mb-5" />
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-gold mt-0.5">◆</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollTo("contact")} className={`w-full py-3 text-xs font-mono tracking-widest uppercase transition-all ${plan.highlight ? "bg-gold text-background hover:bg-gold/90 font-semibold" : "border border-gold/30 text-gold/80 hover:border-gold hover:text-gold"}`}>
                    {plan.cta}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="section-label mb-4">Get In Touch</div>
              <h2 className="text-4xl md:text-5xl font-light mb-4">Ready to Transform<br /><em className="text-gold not-italic">Your Organization?</em></h2>
              <p className="text-white/50 leading-relaxed mb-8">Start with a free 30-day pilot. No commitment, no contracts. Just results. We will identify the right AI system for your specific needs and have it operational within 72 hours of your kickoff call.</p>

              <div className="space-y-4">
                {[
                  { icon: <Phone size={16} />, label: "Phone", value: "(630) 729-4993" },
                  { icon: <Mail size={16} />, label: "Email", value: "jeffery@hisdigitalmedia.com" },
                  { icon: <MapPin size={16} />, label: "Address", value: "422 S Main St, Lombard, IL 60148" },
                  { icon: <Globe size={16} />, label: "Website", value: "hisdigitalmedia.com" },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-gold/30 flex items-center justify-center text-gold/60 shrink-0">{c.icon}</div>
                    <div>
                      <div className="text-white/30 text-xs font-mono tracking-widest uppercase">{c.label}</div>
                      <div className="text-white/70 text-sm">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              {submitted ? (
                <div className="bg-card border border-gold/30 rounded-sm p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <div className="w-12 h-12 border border-gold/50 flex items-center justify-center text-gold mb-4">
                    <Award size={20} />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Message Received</h3>
                  <p className="text-white/50 text-sm">We will respond within 4 business hours. Your free 30-day pilot is included.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-white/6 rounded-sm p-7 space-y-4">
                  <div className="flex gap-3 mb-2">
                    {["BUSINESS", "MINISTRY"].map(t => (
                      <button type="button" key={t} onClick={() => setFormData(d => ({ ...d, type: t }))}
                        className={`text-xs font-mono tracking-widest uppercase px-4 py-2 transition-all ${formData.type === t ? "bg-gold text-background font-semibold" : "border border-white/10 text-white/40 hover:border-gold/30 hover:text-gold/60"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                  {[
                    { key: "name", label: "FULL NAME", type: "text" },
                    { key: "email", label: "EMAIL ADDRESS", type: "email" },
                    { key: "org", label: "ORGANIZATION", type: "text" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="text-white/30 text-xs font-mono tracking-widest uppercase block mb-1.5">{f.label}</label>
                      <input type={f.type} required
                        value={(formData as Record<string, string>)[f.key]}
                        onChange={e => setFormData(d => ({ ...d, [f.key]: e.target.value }))}
                        className="w-full bg-background/60 border border-white/8 text-white/80 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20"
                        placeholder={`Enter your ${f.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-white/30 text-xs font-mono tracking-widest uppercase block mb-1.5">HOW CAN WE HELP?</label>
                    <textarea required rows={4}
                      value={formData.message}
                      onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                      className="w-full bg-background/60 border border-white/8 text-white/80 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/40 transition-colors placeholder:text-white/20 resize-none"
                      placeholder="Tell us about your organization and goals..."
                    />
                  </div>
                  <button type="submit" className="w-full py-3 bg-gold text-background text-xs font-mono tracking-widest uppercase hover:bg-gold/90 transition-all font-semibold">
                    REQUEST FREE CONSULTATION
                  </button>
                  <p className="text-white/25 text-xs text-center">Response within 4 business hours · Free 30-day pilot included</p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border border-gold/60 flex items-center justify-center">
                  <span className="text-gold font-mono text-xs font-bold">HDM</span>
                </div>
                <span className="text-white/60 text-xs font-mono tracking-widest uppercase">His Digital Media</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed">Practical AI automation for businesses and faith-based organizations. Serving the boardroom and the sanctuary since 2025.</p>
              <p className="text-white/20 text-xs font-mono mt-3">IL File #75198078 · EIN 39-2622563</p>
            </div>

            <div>
              <div className="text-white/30 text-xs font-mono tracking-widest uppercase mb-4">Systems</div>
              <ul className="space-y-2">
                {["Antoinette AI", "Sermon Engine", "Doc Coach AI", "AI Receptionist", "Funding Finder", "Grant Evaluator", "MBAI Arena"].map(s => (
                  <li key={s}>
                    <button onClick={() => scrollTo("services")} className="text-white/40 text-sm hover:text-gold transition-colors">{s}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white/30 text-xs font-mono tracking-widest uppercase mb-4">Contact</div>
              <ul className="space-y-2 text-white/40 text-sm">
                <li>(630) 729-4993</li>
                <li>jeffery@hisdigitalmedia.com</li>
                <li>422 S Main St</li>
                <li>Lombard, IL 60148</li>
              </ul>
            </div>
          </div>

          <div className="gold-rule mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/20 text-xs font-mono tracking-widest uppercase">© 2026 His Digital Media Corporation. All Rights Reserved.</p>
            <p className="text-gold/40 text-xs font-mono tracking-widest uppercase">Where Purpose Meets Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
