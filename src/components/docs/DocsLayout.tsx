import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DocsSidebar } from "./DocsSidebar";

interface DocsLayoutProps {
  children: ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex pt-16">
        <DocsSidebar />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
