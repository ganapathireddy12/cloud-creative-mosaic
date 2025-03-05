
import React from 'react';
import { Check } from 'lucide-react';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Computing",
    skills: ["AWS Cloud", "AWS Certified Developer – Associate"]
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C"]
  },
  {
    title: "DevOps & Automation",
    skills: ["Docker", "Jenkins", "Terraform", "Ansible"]
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "Red Hat System Administrator (RHCSA)"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS"]
  },
  {
    title: "Networking & Security",
    skills: ["CCNA", "Cybersecurity"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block relative">
            <span className="badge bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              What I'm good at
            </span>
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
            A comprehensive overview of my technical expertise and specializations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
