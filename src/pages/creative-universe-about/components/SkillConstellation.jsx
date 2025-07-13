import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillConstellation = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const skills = [
    {
      id: 1,
      name: "React Development",
      category: "Frontend",
      proficiency: 95,
      icon: "Code",
      color: "from-blue-400 to-blue-600",
      projects: ["E-commerce Platform", "Portfolio Sites", "SaaS Dashboard"],
      x: 20,
      y: 30
    },
    {
      id: 2,
      name: "UI/UX Design",
      category: "Design",
      proficiency: 90,
      icon: "Palette",
      color: "from-purple-400 to-purple-600",
      projects: ["Mobile App Design", "Brand Identity", "User Research"],
      x: 70,
      y: 20
    },
    {
      id: 3,
      name: "Motion Graphics",
      category: "Animation",
      proficiency: 85,
      icon: "Play",
      color: "from-green-400 to-green-600",
      projects: ["Brand Animations", "Web Interactions", "Video Content"],
      x: 80,
      y: 60
    },
    {
      id: 4,
      name: "Brand Strategy",
      category: "Strategy",
      proficiency: 88,
      icon: "Target",
      color: "from-red-400 to-red-600",
      projects: ["Startup Branding", "Rebranding Projects", "Market Analysis"],
      x: 15,
      y: 70
    },
    {
      id: 5,
      name: "JavaScript",
      category: "Frontend",
      proficiency: 92,
      icon: "Terminal",
      color: "from-yellow-400 to-yellow-600",
      projects: ["Interactive Websites", "Web Applications", "API Integration"],
      x: 50,
      y: 15
    },
    {
      id: 6,
      name: "Photography",
      category: "Visual",
      proficiency: 80,
      icon: "Camera",
      color: "from-indigo-400 to-indigo-600",
      projects: ["Product Photography", "Brand Imagery", "Event Coverage"],
      x: 85,
      y: 85
    },
    {
      id: 7,
      name: "Figma",
      category: "Tools",
      proficiency: 93,
      icon: "Figma",
      color: "from-pink-400 to-pink-600",
      projects: ["Design Systems", "Prototyping", "Team Collaboration"],
      x: 40,
      y: 80
    },
    {
      id: 8,
      name: "Node.js",
      category: "Backend",
      proficiency: 75,
      icon: "Server",
      color: "from-teal-400 to-teal-600",
      projects: ["API Development", "Database Design", "Server Management"],
      x: 60,
      y: 50
    }
  ];

  const connections = [
    { from: 1, to: 5 }, // React to JavaScript
    { from: 2, to: 7 }, // UI/UX to Figma
    { from: 3, to: 2 }, // Motion to UI/UX
    { from: 4, to: 2 }, // Brand Strategy to UI/UX
    { from: 5, to: 8 }, // JavaScript to Node.js
    { from: 6, to: 2 }, // Photography to UI/UX
    { from: 1, to: 8 }, // React to Node.js
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getSkillPosition = (skill, containerWidth, containerHeight) => ({
    x: (skill.x / 100) * containerWidth,
    y: (skill.y / 100) * containerHeight
  });

  return (
    <div className="py-16 bg-gradient-to-br from-muted to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Skill Constellation</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore my interconnected skills and expertise. Hover over each node to discover proficiency levels and recent projects.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative w-full h-96 md:h-[500px] bg-card rounded-2xl border border-border overflow-hidden"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)' }}
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection, index) => {
              const fromSkill = skills.find(s => s.id === connection.from);
              const toSkill = skills.find(s => s.id === connection.to);
              const containerRect = containerRef.current?.getBoundingClientRect();
              
              if (!containerRect) return null;
              
              const fromPos = getSkillPosition(fromSkill, containerRect.width, containerRect.height);
              const toPos = getSkillPosition(toSkill, containerRect.width, containerRect.height);
              
              return (
                <motion.line
                  key={index}
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  stroke="rgba(78, 205, 196, 0.3)"
                  strokeWidth="2"
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
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center creative-shadow-lg border-4 border-card`}>
                <Icon name={skill.icon} size={24} color="white" />
              </div>
              
              {/* Proficiency Ring */}
              <svg className="absolute inset-0 w-16 h-16 transform rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 30}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 30 }}
                  whileInView={{ 
                    strokeDashoffset: 2 * Math.PI * 30 * (1 - skill.proficiency / 100)
                  }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </svg>
            </motion.div>
          ))}

          {/* Skill Details Tooltip */}
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute z-10 bg-card border border-border rounded-lg p-4 creative-shadow-lg max-w-xs"
              style={{
                left: Math.min(mousePosition.x + 20, containerRef.current?.clientWidth - 300),
                top: Math.max(mousePosition.y - 100, 20)
              }}
            >
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${hoveredSkill.color} flex items-center justify-center mr-3`}>
                  <Icon name={hoveredSkill.icon} size={16} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{hoveredSkill.name}</h3>
                  <span className="text-xs text-text-secondary">{hoveredSkill.category}</span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-text-secondary">Proficiency</span>
                  <span className="text-sm font-semibold text-primary">{hoveredSkill.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${hoveredSkill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${hoveredSkill.proficiency}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              
              <div>
                <span className="text-sm text-text-secondary mb-2 block">Recent Projects:</span>
                <div className="space-y-1">
                  {hoveredSkill.projects.map((project, index) => (
                    <div key={index} className="text-xs text-text-primary bg-muted px-2 py-1 rounded">
                      {project}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {['Frontend', 'Design', 'Animation', 'Strategy', 'Visual', 'Tools', 'Backend'].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-sm text-text-secondary">{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillConstellation;