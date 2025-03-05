
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a slight delay for the animation to work properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhanced background with gradient and patterns */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10" aria-hidden="true" />
      <div className="fixed inset-0 bg-tech-pattern -z-10 opacity-30" aria-hidden="true" />
      <div className="fixed inset-0 bg-gradient-radial from-transparent to-white/80 -z-10" aria-hidden="true" />
      
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-[10%] right-[5%] w-[25rem] h-[25rem] bg-blue-200/40 rounded-full blur-[128px] animate-float" />
        <div className="absolute top-[40%] left-[10%] w-[30rem] h-[30rem] bg-cyan-200/40 rounded-full blur-[128px] animate-pulse-subtle" />
        <div className="absolute bottom-[15%] right-[15%] w-[20rem] h-[20rem] bg-indigo-100/30 rounded-full blur-[100px] animate-pulse-subtle" />
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main className={cn(
        "flex-1 container transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        {children}
      </main>
      
      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 mt-auto">
        <div className="container text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ganapathi Reddy · mrgana.tech</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
