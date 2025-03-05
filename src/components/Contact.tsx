
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block relative">
            <span className="badge bg-blue-100 text-blue-700 absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Get in touch
            </span>
            Contact Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Available for work globally with a passion for opportunities in Japan
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:reddyganapathi317@gmail.com" className="text-primary hover:text-blue-700 transition-colors">
                      reddyganapathi317@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+917893773514" className="text-primary hover:text-blue-700 transition-colors">
                      +91 7893773514
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  >
                    <path d="M20.9 18.55c.06-.43.1-.86.1-1.3 0-3.2-2.68-5.8-6-5.8s-6 2.6-6 5.8 2.68 5.8 6 5.8c1.76 0 3.33-.75 4.4-1.93" />
                    <path d="M15 8V5l-3-3H7a2 2 0 0 0-2 2v14" />
                    <path d="M18 15h-5" />
                  </svg>
                  <div>
                    <p className="font-medium">Education</p>
                    <div className="text-gray-600">
                      <p className="font-medium text-gray-800">Bachelor of Technology (B.Tech) in Computer Science and Engineering</p>
                      <p>🎓 Aditya College of Engineering and Technology, India</p>
                      <p className="text-sm text-primary">Expected Graduation: 2026</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm6.5 12.5L12 8l-6.5 6.5" />
                  </svg>
                  <div>
                    <p className="font-medium">Domain</p>
                    <p className="text-primary">mrgana.tech</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out for job opportunities, collaborations, or just to say hello!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/ganapathireddy12" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 mr-3">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/padala-ganapathi-reddy/" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 mr-3">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
