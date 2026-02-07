import { Link } from "react-router-dom";
import { Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section - Logo + Links */}
          <div className="flex items-center gap-4">
            <img
              src="/ai4i-logo.png"
              alt="AI4I Logo"
              className="rounded-sm"
              style={{ width: '50px', height: '50px' }}
              width={50}
              height={50}
              loading="eager"
              decoding="async"
            />
            
            <div className="hidden md:block w-px h-12 bg-border"></div>
            
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of Use
              </Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex items-center gap-6 text-sm text-foreground/80">
            <a
              href="https://www.linkedin.com/company/ai4inclusion/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin size={20} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://youtube.com/@coss-y1w?si=YPgbEdt4zCWlwn76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FF0000] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="Visit our YouTube channel"
            >
              <Youtube size={20} className="text-[#FF0000]" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
