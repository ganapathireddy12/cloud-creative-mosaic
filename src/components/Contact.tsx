
import React, { useState } from 'react';
import { Mail, Phone, FileText, Globe, Github, Linkedin, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a backend
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block relative">
            <span className="badge bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Get in touch
            </span>
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
            Available for work globally with a passion for opportunities in Japan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Personal Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail 
                  className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">Email</p>
                  <a href="mailto:reddyganapathi317@gmail.com" className="text-primary hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    reddyganapathi317@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone 
                  className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">Phone</p>
                  <a href="tel:+917893773514" className="text-primary hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    +91 7893773514
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText 
                  className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">Education</p>
                  <div className="text-gray-600 dark:text-gray-300">
                    <p className="font-medium text-gray-800 dark:text-gray-100">Bachelor of Technology (B.Tech) in Computer Science and Engineering</p>
                    <p>🎓 Aditya College of Engineering and Technology, India</p>
                    <p className="text-sm text-primary">Expected Graduation: 2026</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe 
                  className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">Domain</p>
                  <p className="text-primary">mrgana.tech</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">Connect with Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ganapathireddy12" 
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary bg-white/50 dark:bg-slate-800/50 rounded-full transition-colors hover:shadow-md"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/padala-ganapathi-reddy/" 
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary bg-white/50 dark:bg-slate-800/50 rounded-full transition-colors hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800/70 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="button-hover inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-white font-medium text-base w-full"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
