import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const buildingBlocksMenu = [
  { id: "ai4i-core", label: "AI4I-Orchestrate", icon: Globe },
  { id: "observe", label: "AI4I-Observe", icon: BarChart3 },
  { id: "contribute", label: "AI4I-Contribute", icon: Users },
];
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBuildingBlocksMenu, setShowBuildingBlocksMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navLinks = [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Building Blocks",
    path: "/building-blocks"
  }, {
    name: "Join Us",
    path: "https://docs.google.com/forms/d/e/1FAIpQLScgLYfErsLxkxrZ_iABcX5KKGTf8eDAOY0405u4uz_ww0TRtQ/viewform",
    external: true
  }];
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
          <Link to="/" onClick={handleHomeClick} className="flex items-center space-x-2 group">
            <img 
              src="/ai4i-logo.png" 
              alt="AI4Inclusion Logo" 
              className="group-hover:scale-110 transition-transform duration-300 rounded-sm brightness-110 contrast-125 saturate-110"
              style={{ width: '50px', height: '50px', imageRendering: 'crisp-edges' }}
              width={50}
              height={50}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => {
              const isLastItem = index === navLinks.length - 1;
              
              if (link.external) {
                return (
                  <div key={link.path} className={!isLastItem ? "mr-6" : ""}>
                    <a 
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" className="font-medium text-white hover:text-white hover:bg-white/10">
                        {link.name}
                      </Button>
                    </a>
                  </div>
                );
              }
              
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
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
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
            {navLinks.map(link => {
              if (link.external) {
                return (
                  <a 
                    key={link.path} 
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button variant="ghost" className="w-full justify-start font-medium text-white hover:text-white hover:bg-white/10 mb-1">
                      {link.name}
                    </Button>
                  </a>
                );
              }
              
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
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
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