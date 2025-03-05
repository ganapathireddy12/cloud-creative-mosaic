
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/icons/Logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-50">
          <Logo className="w-8 h-8" />
          <span className="font-display font-semibold text-xl text-gray-800 dark:text-white">mrgana.tech</span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors link-underline py-1"
            >
              {link.name}
            </button>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile navigation */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute top-0 left-0 w-full",
        mobileMenuOpen 
          ? "h-screen bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm" 
          : "h-0 pointer-events-none"
      )}>
        <nav className="container py-24 flex flex-col space-y-6 items-center text-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-xl font-medium text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
