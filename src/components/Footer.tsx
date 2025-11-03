import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-[#F3F3F3] border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section - Logo + Links */}
          <div className="flex items-center gap-4">
            <img src="/ai4i-logo.png" alt="AI4I Logo" className="rounded-sm" style={{
            width: '50px',
            height: '50px'
          }} width={50} height={50} loading="eager" fetchPriority="high" decoding="async" />
            
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

          {/* Right Section - Copyright */}
          <div className="text-sm text-foreground/80">
            <span>© 2025-2026 All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;