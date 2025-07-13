import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InteractiveResume = () => {
  const [expandedSection, setExpandedSection] = useState('experience');

  const resumeData = {
    experience: [
      {
        id: 1,
        title: "Junior UX/UI Designer",
        company: "TechFlow Solutions",
        period: "2024",
        location: "Kochi",
        type: "remote",
        description: "Leading design initiatives for B2B SaaS products, managing a team of 3 designers, and establishing design systems that improved development efficiency by 40%.",
        achievements: [
          "Redesigned core product interface, increasing user engagement by 65%",
          "Implemented design system used across 5 product lines",
          "Led user research initiatives that informed product strategy",
          "Mentored junior designers and established design review processes"
        ],
        technologies: ["Figma", "React", "Design Systems", "User Research", "Prototyping"]
      },
      {
        id: 2,
        title: "Product Designer",
        company: "StartupVenture Inc.",
        period: "2020 - 2022",
        location: "Kozhikode",
        type: "remote",
        description: "Designed end-to-end user experiences for mobile and web applications, collaborated with cross-functional teams, and contributed to product strategy decisions.",
        achievements: [
          "Designed mobile app that reached 100K+ downloads in first year",
          "Improved conversion rates by 45% through UX optimization",
          "Conducted user interviews and usability testing sessions",
          "Created interactive prototypes for investor presentations"
        ],
        technologies: ["Sketch", "InVision", "Adobe Creative Suite", "HTML/CSS", "JavaScript"]
      },
      {
        id: 3,
        title: "Freelance Designer",
        company: "Independent",
        period: "2018 - 2020",
        location: "Remote",
        type: "Freelance",
        description: "Provided design services to startups and small businesses, specializing in brand identity, web design, and digital marketing materials.",
        achievements: [
          "Completed 50+ projects for clients across various industries",
          "Developed brand identities for 15 startups",
          "Created websites that improved client lead generation by average 30%",
          "Built long-term relationships with repeat clients"
        ],
        technologies: ["Adobe Creative Suite", "WordPress", "Webflow", "Brand Strategy"]
      }
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor of Computer Science",
        institution: "College of Applied Science",
        period: "2023 - 2026",
        location: "Thamarassery, Kozhikode",
        gpa: "3.8/4.0",
        honors: ["Magna Cum Laude", "Dean's List (6 semesters)"],
        coursework: ["Typography", "Brand Identity", "User Experience Design", "Digital Media", "Design History"],
        projects: [
          "Senior thesis on sustainable design practices",
          "Rebranding project for local nonprofit organization",
          "Interactive installation for college art exhibition"
        ]
      },
      {
        id: 2,
        degree: "Certificate in UX Design",
        institution: "General Assembly",
        period: "2023",
        location: "kozhikode",
        description: "Intensive 10-week program covering user research, wireframing, prototyping, and usability testing.",
        projects: [
          "Mobile app design for food delivery service",
          "E-commerce website redesign case study",
          "User research project for local business"
        ]
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Google UX Design Professional Certificate",
        issuer: "Google",
        date: "2023",
        credentialId: "GUX-2021-4567",
        skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
      },
      {
        id: 2,
        name: "Adobe Certified Expert - Photoshop",
        issuer: "Adobe",
        date: "2023",
        credentialId: "ACE-PS-2020-8901",
        skills: ["Photo Editing", "Digital Art", "Compositing"]
      },
      {
        id: 3,
        name: "Figma Advanced Certification",
        issuer: "Figma",
        date: "2024",
        credentialId: "FIG-ADV-2022-2345",
        skills: ["Design Systems", "Component Libraries", "Collaboration"]
      }
    ],
    awards: [
      {
        id: 1,
        title: "Best Mobile App Design",
        organization: "Design Awards 2023",
        date: "2023",
        project: "FoodieConnect Mobile App",
        description: "Recognized for innovative approach to social dining experiences"
      },
      {
        id: 2,
        title: "Excellence in UX Design",
        organization: "UX Professionals Association",
        date: "2022",
        project: "TechFlow Dashboard Redesign",
        description: "Awarded for significant improvement in user satisfaction metrics"
      },
      {
        id: 3,
        title: "Rising Designer of the Year",
        organization: "Creative Industry Awards",
        date: "2021",
        description: "Recognition for outstanding contribution to the design community"
      }
    ]
  };

  const sections = [
    { id: 'experience', label: 'Experience', icon: 'Briefcase' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'awards', label: 'Awards', icon: 'Trophy' }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-muted to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Professional Journey</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore my professional background, education, and achievements. Click any section to dive deeper.
          </p>
        </motion.div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => toggleSection(section.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg creative-transition ${
                expandedSection === section.id
                  ? 'bg-primary text-primary-foreground shadow-creative'
                  : 'bg-card text-text-secondary hover:text-text-primary hover:bg-muted border border-border'
              }`}
            >
              <Icon name={section.icon} size={18} />
              <span className="font-medium">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {expandedSection && (
            <motion.div
              key={expandedSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Experience Section */}
              {expandedSection === 'experience' && (
                <div className="space-y-8">
                  {resumeData.experience.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-6 creative-shadow border border-border"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-text-primary mb-1">{job.title}</h3>
                          <p className="text-lg text-accent font-medium mb-2">{job.company}</p>
                          <p className="text-text-secondary mb-4">{job.description}</p>
                        </div>
                        <div className="lg:text-right lg:ml-6">
                          <span className="inline-block px-3 py-1 bg-muted text-text-secondary text-sm rounded-full mb-2">
                            {job.type}
                          </span>
                          <p className="text-sm text-text-secondary">{job.period}</p>
                          <p className="text-sm text-text-secondary">{job.location}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-text-primary mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-text-secondary">
                              <Icon name="Check" size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Education Section */}
              {expandedSection === 'education' && (
                <div className="space-y-8">
                  {resumeData.education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-6 creative-shadow border border-border"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-text-primary mb-1">{edu.degree}</h3>
                          <p className="text-lg text-accent font-medium mb-2">{edu.institution}</p>
                          {edu.description && (
                            <p className="text-text-secondary mb-4">{edu.description}</p>
                          )}
                        </div>
                        <div className="lg:text-right lg:ml-6">
                          <p className="text-sm text-text-secondary">{edu.period}</p>
                          <p className="text-sm text-text-secondary">{edu.location}</p>
                          {edu.gpa && (
                            <p className="text-sm text-accent font-medium mt-1">GPA: {edu.gpa}</p>
                          )}
                        </div>
                      </div>
                      
                      {edu.honors && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-text-primary mb-2">Honors:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.honors.map((honor, honorIndex) => (
                              <span
                                key={honorIndex}
                                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                              >
                                {honor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {edu.coursework && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-text-primary mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {edu.projects && (
                        <div>
                          <h4 className="font-semibold text-text-primary mb-2">Notable Projects:</h4>
                          <ul className="space-y-1">
                            {edu.projects.map((project, projectIndex) => (
                              <li key={projectIndex} className="flex items-start text-text-secondary">
                                <Icon name="Check" size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Certifications Section */}
              {expandedSection === 'certifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resumeData.certifications.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-6 creative-shadow border border-border"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                          <Icon name="Award" size={24} color="white" />
                        </div>
                        <span className="text-sm text-text-secondary">{cert.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-text-primary mb-1">{cert.name}</h3>
                      <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                      <p className="text-sm text-text-secondary mb-4">ID: {cert.credentialId}</p>
                      
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Awards Section */}
              {expandedSection === 'awards' && (
                <div className="space-y-6">
                  {resumeData.awards.map((award, index) => (
                    <motion.div
                      key={award.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-6 creative-shadow border border-border"
                    >
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                          <Icon name="Trophy" size={32} color="white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-text-primary">{award.title}</h3>
                            <span className="text-sm text-text-secondary mt-1 sm:mt-0">{award.date}</span>
                          </div>
                          <p className="text-accent font-medium mb-2">{award.organization}</p>
                          {award.project && (
                            <p className="text-sm text-text-secondary mb-2">
                              <span className="font-medium">Project:</span> {award.project}
                            </p>
                          )}
                          <p className="text-text-secondary">{award.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-xl p-8 creative-shadow border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Want the Full Resume?</h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Download a comprehensive PDF version of my resume with complete project details, references, and portfolio samples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg creative-transition hover:bg-primary/90 creative-hover">
                <Icon name="Download" size={20} className="mr-2" />
                Download PDF Resume
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-border text-text-primary rounded-lg creative-transition hover:bg-muted">
                <Icon name="ExternalLink" size={20} className="mr-2" />
                View LinkedIn Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveResume;