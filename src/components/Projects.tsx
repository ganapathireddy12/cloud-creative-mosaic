
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  learnings: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Weather Forecast Webpage",
    description: "Developed a full-stack weather forecast webpage integrating APIs for real-time weather data.",
    technologies: ["JavaScript", "React", "API Integration", "CSS/SCSS", "REST APIs"],
    learnings: ["API integration best practices", "Real-time data handling", "Responsive UI design"],
    githubUrl: "https://github.com/ganapathireddy12/weather-forecast",
    demoUrl: "https://weatherapp.mrgana.tech"
  },
  {
    title: "Serverless Habit Tracker",
    description: "Deployed a serverless habit tracker using AWS Lambda with API calls and S3 bucket for storing and retrieving user data.",
    technologies: ["AWS Lambda", "S3", "Serverless", "API Gateway", "DynamoDB", "Node.js"],
    learnings: ["Serverless architecture", "AWS service integration", "Optimizing cloud resource usage"],
    githubUrl: "https://github.com/ganapathireddy12/cloud-project"
  },
  {
    title: "Cloud DevOps Projects",
    description: "Various projects implementing cloud infrastructure and DevOps practices using modern tools and technologies.",
    technologies: ["Docker", "Jenkins", "Terraform", "Ansible", "Git", "CI/CD"],
    learnings: ["Infrastructure as Code", "Containerization", "Automation workflows", "DevOps best practices"],
    githubUrl: "https://github.com/ganapathireddy12"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block relative">
            <span className="badge bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Recent work
            </span>
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
            Explore my portfolio of projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                {/* Tech used section */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="badge bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* What I learned section */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">What I Learned:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx}>{learning}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Links section */}
                <div className="flex space-x-3 mt-auto pt-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-primary hover:text-blue-700 dark:hover:text-blue-300 transition-colors button-hover"
                  >
                    <Github size={18} className="mr-1" />
                    GitHub
                  </a>
                  
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors button-hover"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
