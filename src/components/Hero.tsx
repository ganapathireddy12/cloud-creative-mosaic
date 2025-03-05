
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center relative py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 animate-fade-in">
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-balance animate-fade-in animate-delay-200">
          <span>Hi, I'm </span>
          <span className="text-gradient">Ganapathi Reddy</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8 animate-fade-in animate-delay-300">
          AWS Certified Developer and Red Hat Certified System Administrator with expertise in cloud computing, DevOps, and automation.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-500">
          <a 
            href="#contact" 
            className="button-hover inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-white font-medium text-base"
          >
            Get in touch
          </a>
          <a 
            href="#projects" 
            className="button-hover inline-flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-5 py-3 text-gray-700 dark:text-gray-200 font-medium text-base"
          >
            View projects
          </a>
        </div>
        
        <div className="mt-16 flex items-center gap-4 animate-fade-in animate-delay-700">
          <a 
            href="https://github.com/ganapathireddy12" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/padala-ganapathi-reddy/" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-400"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
