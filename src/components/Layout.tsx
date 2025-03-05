
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for user's preferred theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || 
        (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    
    // Add a slight delay for the animation to work properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhanced background with gradient and patterns based on theme */}
      <div className={cn(
        "fixed inset-0 -z-10",
        theme === 'light' 
          ? "bg-gradient-to-br from-blue-50 via-white to-cyan-50" 
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950"
      )} aria-hidden="true" />
      
      {/* Tech pattern overlay */}
      <div className={cn(
        "fixed inset-0 bg-tech-pattern -z-10", 
        theme === 'light' ? "opacity-30" : "opacity-20"
      )} aria-hidden="true" />
      
      {/* Radial gradient overlay */}
      <div className={cn(
        "fixed inset-0 -z-10",
        theme === 'light' 
          ? "bg-gradient-radial from-transparent to-white/80" 
          : "bg-gradient-radial from-transparent to-slate-950/90"
      )} aria-hidden="true" />
      
      {/* Tech skills-related background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        {/* AWS Cloud symbol */}
        <div className={cn(
          "absolute top-[15%] right-[10%] w-[15rem] h-[15rem] rounded-full blur-[100px] animate-float",
          theme === 'light' ? "bg-orange-200/30" : "bg-orange-500/10"
        )} />
        
        {/* Docker container symbol */}
        <div className={cn(
          "absolute top-[50%] left-[5%] w-[20rem] h-[20rem] rounded-full blur-[120px] animate-pulse-subtle",
          theme === 'light' ? "bg-blue-200/30" : "bg-blue-500/10"
        )} />
        
        {/* Java/Python programming glow */}
        <div className={cn(
          "absolute bottom-[10%] right-[20%] w-[18rem] h-[18rem] rounded-full blur-[100px] animate-pulse-subtle",
          theme === 'light' ? "bg-indigo-100/30" : "bg-indigo-500/15"
        )} />
        
        {/* Linux/Red Hat symbol */}
        <div className={cn(
          "absolute top-[30%] left-[25%] w-[22rem] h-[22rem] rounded-full blur-[110px] animate-float",
          theme === 'light' ? "bg-red-100/20" : "bg-red-500/10"
        )} />
      </div>
      
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed top-6 right-6 z-50 p-3 rounded-full transition-colors duration-200 hover:scale-105",
          theme === 'light' 
            ? "bg-white/80 text-slate-800 hover:bg-white shadow-sm" 
            : "bg-slate-800/80 text-white hover:bg-slate-700 shadow-md"
        )}
        aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main className={cn(
        "flex-1 container transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0",
        theme === 'dark' ? "text-slate-200" : ""
      )}>
        {children}
      </main>
      
      {/* Footer */}
      <footer className={cn(
        "py-6 mt-auto", 
        theme === 'light' 
          ? "border-t border-slate-200" 
          : "border-t border-slate-700/50"
      )}>
        <div className={cn(
          "container text-center text-sm",
          theme === 'light' ? "text-slate-500" : "text-slate-400"
        )}>
          <p>© {new Date().getFullYear()} Ganapathi Reddy · mrgana.tech</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
