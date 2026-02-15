import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-[fade-in_0.15s_ease-out]">
      {children}
    </div>
  );
};

export default PageTransition;
