import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Youtube } from "lucide-react";
import logoImage from "@/assets/ai4i-logo-new.png";
const Footer = () => {
  return <footer className="bg-[#F3F3F3] border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section - Logo + Links */}
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="AI4I Logo" className="rounded-sm" style={{
            width: '50px',
            height: '50px'
          }} width={50} height={50} loading="eager" />
            
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
            <div className="flex items-center gap-2">
              <Linkedin size={20} aria-label="LinkedIn Icon (placeholder)" />
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center gap-2">
              <Youtube size={20} aria-label="YouTube Icon (placeholder)" />
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;