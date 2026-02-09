import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Globe, BarChart3, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarSection {
  title: string;
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

const sections: SidebarSection[] = [
  {
    title: "Components",
    items: [
      { title: "AI4I Orchestrate", href: "/components/orchestrate", icon: <Globe size={16} /> },
      { title: "Observe", href: "/components/observe", icon: <BarChart3 size={16} /> },
      { title: "Contribute", href: "/components/contribute", icon: <Users size={16} /> },
    ],
  },
];

export const DocsSidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col gap-8 py-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="px-4 mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {section.title}
          </h3>
          <nav className="space-y-1">
            {section.items.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors relative group",
                    isActive
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                  )
                }
                onClick={() => setMobileOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="absolute left-0 w-1 h-8 bg-primary rounded-r"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {item.icon && (
                      <span className={cn("flex-shrink-0", isActive ? "text-primary" : "")}>
                        {item.icon}
                      </span>
                    )}
                    <span className="flex-1">{item.title}</span>
                    <ChevronRight
                      size={14}
                      className={cn(
                        "flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
                        isActive && "opacity-100"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-background border border-border rounded-lg shadow-soft"
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-border bg-background/50 backdrop-blur-sm sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 30 }}
              className="lg:hidden fixed top-16 left-0 bottom-0 w-[280px] bg-background border-r border-border z-50 overflow-y-auto shadow-large"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
