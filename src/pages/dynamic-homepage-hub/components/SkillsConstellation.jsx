import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsConstellation = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = document.getElementById('skills-constellation');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const skills = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      level: 95,
      icon: "Code",
      x: 20,
      y: 30,
      projects: ["EcoVision Dashboard", "FinanceFlow Mobile", "ArtSpace Gallery"],
      color: "text-blue-500"
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      level: 90,
      icon: "Server",
      x: 70,
      y: 25,
      projects: ["EcoVision Dashboard", "CodeCollab IDE"],
      color: "text-green-500"
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Language",
      level: 88,
      icon: "FileCode",
      x: 45,
      y: 15,
      projects: ["FinanceFlow Mobile", "CodeCollab IDE"],
      color: "text-blue-600"
    },
    {
      id: 4,
      name: "Three.js",
      category: "3D Graphics",
      level: 85,
      icon: "Box",
      x: 15,
      y: 60,
      projects: ["ArtSpace Gallery", "TravelVerse VR"],
      color: "text-purple-500"
    },
    {
      id: 5,
      name: "Python",
      category: "Language",
      level: 92,
      icon: "Code2",
      x: 80,
      y: 55,
      projects: ["EcoVision Dashboard", "MindfulMoments"],
      color: "text-yellow-600"
    },
    {
      id: 6,
      name: "Docker",
      category: "DevOps",
      level: 80,
      icon: "Container",
      x: 60,
      y: 70,
      projects: ["CodeCollab IDE"],
      color: "text-cyan-500"
    },
    {
      id: 7,
      name: "WebGL",
      category: "Graphics",
      level: 75,
      icon: "Zap",
      x: 35,
      y: 45,
      projects: ["TravelVerse VR", "ArtSpace Gallery"],
      color: "text-orange-500"
    },
    {
      id: 8,
      name: "Firebase",
      category: "Backend",
      level: 87,
      icon: "Database",
      x: 25,
      y: 80,
      projects: ["FinanceFlow Mobile", "MindfulMoments"],
      color: "text-red-500"
    },
    {
      id: 9,
      name: "Vue.js",
      category: "Frontend",
      level: 82,
      icon: "Layers",
      x: 75,
      y: 40,
      projects: ["MindfulMoments"],
      color: "text-emerald-500"
    },
    {
      id: 10,
      name: "WebXR",
      category: "VR/AR",
      level: 78,
      icon: "Glasses",
      x: 50,
      y: 85,
      projects: ["TravelVerse VR"],
      color: "text-pink-500"
    }
  ];

  const connections = [
    { from: 1, to: 3 }, // React to TypeScript
    { from: 2, to: 5 }, // Node.js to Python
    { from: 4, to: 7 }, // Three.js to WebGL
    { from: 6, to: 2 }, // Docker to Node.js
    { from: 8, to: 2 }, // Firebase to Node.js
    { from: 9, to: 1 }, // Vue.js to React
    { from: 10, to: 4 }, // WebXR to Three.js
    { from: 3, to: 6 }, // TypeScript to Docker
  ];

  const getSkillById = (id) => skills.find(skill => skill.id === id);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Skills <span className="text-gradient">Constellation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore my technical expertise through an interactive visualization. Click on any skill to discover related projects and connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Constellation Visualization */}
          <div className="lg:col-span-2">
            <div
              id="skills-constellation"
              className="relative w-full h-96 bg-card rounded-xl creative-shadow overflow-hidden"
            >
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {connections.map((connection, index) => {
                  const fromSkill = getSkillById(connection.from);
                  const toSkill = getSkillById(connection.to);
                  if (!fromSkill || !toSkill) return null;

                  return (
                    <motion.line
                      key={index}
                      x1={`${fromSkill.x}%`}
                      y1={`${fromSkill.y}%`}
                      x2={`${toSkill.x}%`}
                      y2={`${toSkill.y}%`}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border opacity-30"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  );
                })}
              </svg>

              {/* Skill Nodes */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
                >
                  <div
                    className={`relative w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center creative-shadow creative-transition ${
                      selectedSkill === skill.id ? 'border-accent bg-accent/10' : 'hover:border-accent/50'
                    }`}
                  >
                    <Icon name={skill.icon} size={20} className={skill.color} />
                    
                    {/* Skill Level Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-border opacity-20"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={skill.color}
                        strokeDasharray={`${2 * Math.PI * 22}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
                        whileInView={{ 
                          strokeDashoffset: 2 * Math.PI * 22 * (1 - skill.level / 100) 
                        }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </svg>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-2 py-1 text-xs font-medium text-text-primary whitespace-nowrap creative-shadow"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.name} - {skill.level}%
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skill Details Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 creative-shadow sticky top-8">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {(() => {
                    const skill = skills.find(s => s.id === selectedSkill);
                    return (
                      <>
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center mr-3`}>
                            <Icon name={skill.icon} size={20} className={skill.color} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-text-primary">{skill.name}</h3>
                            <p className="text-sm text-text-secondary">{skill.category}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-text-secondary">Proficiency</span>
                            <span className="text-sm font-bold text-text-primary">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${skill.color.replace('text-', 'from-')} to-accent`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8 }}
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-secondary mb-2">Related Projects</h4>
                          <div className="space-y-2">
                            {skill.projects.map((project, index) => (
                              <div
                                key={index}
                                className="flex items-center text-sm text-text-primary bg-muted rounded-lg px-3 py-2"
                              >
                                <Icon name="Folder" size={16} className="mr-2 text-accent" />
                                {project}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <div className="text-center py-8">
                  <Icon name="MousePointer" size={48} className="mx-auto mb-4 text-text-secondary" />
                  <h3 className="text-lg font-medium text-text-primary mb-2">Explore Skills</h3>
                  <p className="text-sm text-text-secondary">
                    Click on any skill node in the constellation to view detailed information and related projects.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsConstellation;