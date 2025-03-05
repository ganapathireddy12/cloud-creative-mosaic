
import React from 'react';

type CertificationCategory = {
  title: string;
  certifications: string[];
};

const certificationCategories: CertificationCategory[] = [
  {
    title: "Red Hat Certifications",
    certifications: [
      "Red Hat Certified System Administrator (RHCSA)",
      "Red Hat OpenShift Administration I (DO180) (Certificate of Attendance)",
      "2024 Red Hat Academy - Program Learner"
    ]
  },
  {
    title: "AWS Cloud Certifications",
    certifications: [
      "AWS Certified Developer – Associate",
      "AWS Academy Graduate - AWS Academy Cloud Foundations",
      "AWS Academy Graduate - AWS Academy Cloud Developing"
    ]
  },
  {
    title: "Programming Certifications",
    certifications: [
      "Java Certification (IT Specialist)",
      "IT Specialist - Java",
      "IT Specialist - HTML and CSS"
    ]
  },
  {
    title: "IBM Certification",
    certifications: [
      "Docker Essentials: A Developer Introduction"
    ]
  },
  {
    title: "Cisco Certifications",
    certifications: [
      "CCNA: Introduction to Networks",
      "Introduction to Data Science",
      "Introduction to Cybersecurity",
      "Networking Academy Learn-A-Thon 2023"
    ]
  },
  {
    title: "Other Achievements",
    certifications: [
      "HackerRank: 4-star in C, Python, and Java",
      "GeeksforGeeks: Solved 180+ problems",
      "LeetCode: Solved 100+ problems",
      "HackerRank Problem Solving (Intermediate) Certificate",
      "Earned badges in Future Proof Skills, In-Demand Skills, and API Management"
    ]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block relative">
            <span className="badge bg-blue-100 text-blue-700 absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Qualifications
            </span>
            Certifications & Badges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Professional certifications and achievements demonstrating my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-3">
                {category.certifications.map((certification, certIndex) => (
                  <li key={certIndex} className="flex items-start">
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
                      className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M18.9 9.79A9 9 0 1 1 8.16 5.05" />
                      <path d="m17 8 3 3-3 3" />
                    </svg>
                    <span>{certification}</span>
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

export default Certifications;
