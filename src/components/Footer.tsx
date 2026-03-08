import { Link } from "react-router-dom";
import { Linkedin, Youtube, Github, Mail, ArrowUpRight } from "lucide-react";

const footerNav = {
  "Building Blocks": [
    { name: "AI4I-Orchestrate", path: "/building-blocks#ai4i-orchestrate" },
    { name: "AI4I-Observe", path: "/building-blocks#observe" },
    { name: "AI4I-Contribute", path: "/building-blocks#contribute" },
    { name: "AI4I-VoicERA", path: "/building-blocks#voicera" },
  ],
  Explore: [
    { name: "Events", path: "/events" },
    { name: "Engagements", path: "/engagements" },
    { name: "Registrations", path: "/registrations" },
    { name: "Get in Touch", path: "/get-in-touch" },
  ],
  Community: [
    { name: "GitHub", href: "https://github.com/COSS-India" },
    { name: "Discussions", href: "https://github.com/COSS-India/ai4i-core/discussions" },
    { name: "YouTube", href: "https://youtube.com/@ai4inclusion?si=aCS1GUGDMe6kxlDy" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/ai4inclusion/" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white border-t border-white/10">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/ai4i-logo.webp"
                alt="AI4Inclusion Logo"
                className="h-[42px] w-auto"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              AI for Inclusion
            </p>
            <p className="text-white/40 text-xs mb-4">
              An initiative of the Center for Open Societal Systems (COSS)
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/COSS-India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} className="text-white/70" />
              </a>
              <a
                href="https://www.linkedin.com/company/ai4inclusion/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-white/70" />
              </a>
              <a
                href="https://youtube.com/@ai4inclusion?si=aCS1GUGDMe6kxlDy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-white/70" />
              </a>
              <a
                href="mailto:info@ai4inclusion.org"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Email"
              >
                <Mail size={16} className="text-white/70" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isExternal = "href" in link;
                  if (isExternal) {
                    return (
                      <li key={link.name}>
                        <a
                          href={(link as any).href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.name}
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.name}>
                      <Link
                        to={(link as any).path}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <p>&copy; {currentYear} AI4Inclusion. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-white/70 transition-colors">
                Terms of Use
              </Link>
              <span>·</span>
              <Link to="/privacy" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
