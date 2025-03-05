
import React from 'react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Weather Forecast Webpage",
    description: "Developed a full-stack weather forecast webpage integrating APIs for real-time weather data.",
    technologies: ["API Integration", "Full-Stack", "Real-time Data"],
    githubUrl: "https://github.com/ganapathireddy12/weather-forecast"
  },
  {
    title: "Serverless Habit Tracker",
    description: "Deployed a serverless habit tracker using AWS Lambda with API calls and S3 bucket for storing and retrieving user data.",
    technologies: ["AWS Lambda", "S3", "Serverless", "API Gateway"],
    githubUrl: "https://github.com/ganapathireddy12/cloud-project"
  },
  {
    title: "Cloud DevOps Projects",
    description: "Various projects implementing cloud infrastructure and DevOps practices using modern tools and technologies.",
    technologies: ["Docker", "Jenkins", "Terraform", "Ansible"],
    githubUrl: "https://github.com/ganapathireddy12"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block relative">
            <span className="badge bg-blue-100 text-blue-700 absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Recent work
            </span>
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
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
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="badge bg-blue-50 text-blue-700 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-primary hover:text-blue-700 transition-colors mt-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
