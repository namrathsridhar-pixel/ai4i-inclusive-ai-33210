import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe, BarChart3, Users, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const buildingBlocksMenu = [
  { id: "ai4i-orchestrate", label: "AI4I-Orchestrate", icon: Globe },
  { id: "observe", label: "AI4I-Observe", icon: BarChart3 },
  { id: "contribute", label: "AI4I-Contribute", icon: Users },
  { id: "voicera", label: "AI4I-VoicERA", icon: Phone },
];

// Links that are coming soon and should not navigate
const comingSoonPaths = ["/who-we-are", "/blogs"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBuildingBlocksMenu, setShowBuildingBlocksMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navLinks = [
    // { name: "Who We Are", path: "/who-we-are" },
    { name: "Building Blocks", path: "/building-blocks" },
    { name: "Events", path: "/events" },
    { name: "Registrations", path: "/registrations" },
    { name: "Engagements", path: "/engagements" },
    // { name: "Blogs", path: "/blogs" },
    { name: "Get in Touch", path: "/get-in-touch" },
  ];
  const isActive = (path: string) => location.pathname === path;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      scrollToTop();
    }
  };
  return <nav className="fixed top-0 w-full bg-[#0a1628] backdrop-blur-md border-b border-white/10 z-50 shadow-large rounded-b-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={handleHomeClick} className="flex items-center space-x-2">
            <img 
              src="/ai4i-logo.svg" 
              alt="AI4Inclusion Logo" 
              className="object-contain"
              style={{ width: 'auto', height: '40px' }}
              height={40}
              loading="eager"
              decoding="sync"
            />
          </Link>

          {/* Try VoicERA Button */}
          <Link to="/try-voicera" className="hidden md:block ml-6">
            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 hover:text-white font-medium">
              <Phone size={14} className="mr-1.5" />
              Try VoicERA
            </Button>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => {
              const isLastItem = index === navLinks.length - 1;
              
              if (link.path === "/building-blocks") {
                return (
                  <div 
                    key={link.path}
                    className={`relative ${!isLastItem ? "mr-6" : ""}`}
                    onMouseEnter={() => setShowBuildingBlocksMenu(true)}
                    onMouseLeave={() => setShowBuildingBlocksMenu(false)}
                  >
                    <Link to={link.path}>
                      <Button variant={isActive(link.path) ? "default" : "ghost"} className={`font-medium ${isActive(link.path) ? '' : 'text-white hover:text-white hover:bg-white/10'}`}>
                        {link.name}
                      </Button>
                    </Link>
                    
                    {showBuildingBlocksMenu && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-[#0a1628] border border-white/20 rounded-lg shadow-large z-50 animate-fade-in">
                        <div className="p-2">
                          {buildingBlocksMenu.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.id}
                                to={`/building-blocks#${item.id}`}
                                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                              >
                                <Icon size={18} />
                                <span className={item.label === "VoicERA" ? "font-gonzaga" : ""}>{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              // Handle "Coming Soon" links
              if (comingSoonPaths.includes(link.path)) {
                return (
                  <div key={link.path} className={!isLastItem ? "mr-6" : ""}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="font-medium text-white hover:text-white hover:bg-white/10 cursor-default">
                          {link.name}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#0a1628] text-white border-white/20">
                        <p>Coming soon...</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                );
              }
              
              return (
                <div key={link.path} className={!isLastItem ? "mr-6" : ""}>
                  <Link to={link.path} onClick={link.path === "/" ? handleHomeClick : undefined}>
                    <Button variant={isActive(link.path) ? "default" : "ghost"} className={`font-medium ${isActive(link.path) ? '' : 'text-white hover:text-white hover:bg-white/10'}`}>
                      {link.name}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4 animate-fade-in">
            <Link to="/try-voicera" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start font-medium mb-2 text-white border-white/20 hover:bg-white/10 hover:text-white">
                <Phone size={14} className="mr-1.5" />
                Try VoicERA
              </Button>
            </Link>
            {navLinks.map(link => {
              if (link.path === "/building-blocks") {
                return (
                  <div key={link.path}>
                    <Link to={link.path} onClick={() => setIsOpen(false)}>
                      <Button variant={isActive(link.path) ? "default" : "ghost"} className={`w-full justify-start font-medium mb-1 ${isActive(link.path) ? '' : 'text-white hover:text-white hover:bg-white/10'}`}>
                        {link.name}
                      </Button>
                    </Link>
                    <div className="ml-4 space-y-1">
                      {buildingBlocksMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.id}
                            to={`/building-blocks#${item.id}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            <Icon size={16} />
                            <span className={item.label === "VoicERA" ? "font-gonzaga" : ""}>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              
              // Handle "Coming Soon" links in mobile
              if (comingSoonPaths.includes(link.path)) {
                return (
                  <Tooltip key={link.path}>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start font-medium mb-1 text-white hover:text-white hover:bg-white/10 cursor-default">
                        {link.name}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#0a1628] text-white border-white/20">
                      <p>Coming soon...</p>
                    </TooltipContent>
                  </Tooltip>
                );
              }
              
              return (
                <Link key={link.path} to={link.path} onClick={(e) => {
                  setIsOpen(false);
                  if (link.path === "/") handleHomeClick(e);
                }}>
                  <Button variant={isActive(link.path) ? "default" : "ghost"} className={`w-full justify-start font-medium mb-1 ${isActive(link.path) ? '' : 'text-white hover:text-white hover:bg-white/10'}`}>
                    {link.name}
                  </Button>
                </Link>
              );
            })}
          </div>}
      </div>
    </nav>;
};
export default Navigation;