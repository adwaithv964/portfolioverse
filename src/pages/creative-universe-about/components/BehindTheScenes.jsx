import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehindTheScenes = () => {
  const [activeTab, setActiveTab] = useState('workspace');

  const workspaceImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      alt: "Main workspace setup with dual monitors",
      caption: "My main creative command center - where the magic happens"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?w=600&h=400&fit=crop",
      alt: "Sketching and ideation corner",
      caption: "The analog corner - sometimes the best ideas start with pen and paper"
    },
    {
      id: 3,
      src: "https://images.pixabay.com/photo/2020/05/11/06/20/coffee-5156595_1280.jpg?w=600&h=400&fit=crop",
      alt: "Coffee and inspiration setup",
      caption: "Fuel station - great coffee makes great design"
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Research",
      description: "Every project starts with understanding the problem, the users, and the context. I dive deep into research, competitor analysis, and user interviews.",
      icon: "Search",
      color: "from-blue-500 to-blue-600",
      tools: ["Notion", "Miro", "Google Analytics", "User Interviews"]
    },
    {
      id: 2,
      title: "Ideation & Sketching",
      description: "Ideas flow freely in this phase. I sketch concepts, create mind maps, and explore different approaches before touching any digital tools.",
      icon: "PenTool",
      color: "from-purple-500 to-purple-600",
      tools: ["Paper & Pen", "Whimsical", "Crazy 8s", "Brainstorming"]
    },
    {
      id: 3,
      title: "Design & Prototyping",
      description: "This is where concepts become reality. I create wireframes, design systems, and interactive prototypes that bring ideas to life.",
      icon: "Palette",
      color: "from-green-500 to-green-600",
      tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"]
    },
    {
      id: 4,
      title: "Testing & Iteration",
      description: "Design is never done on the first try. I test with real users, gather feedback, and iterate until the solution truly solves the problem.",
      icon: "RefreshCw",
      color: "from-orange-500 to-orange-600",
      tools: ["Maze", "Hotjar", "UserTesting", "A/B Testing"]
    },
    {
      id: 5,
      title: "Development & Launch",
      description: "Working closely with developers, I ensure the design vision is implemented perfectly and the final product exceeds expectations.",
      icon: "Code",
      color: "from-red-500 to-red-600",
      tools: ["React", "Framer Motion", "Tailwind CSS", "Git"]
    }
  ];

  const favoriteTools = [
    {
      name: "Figma",
      category: "Design",
      description: "My go-to design tool for everything from wireframes to final designs. The collaboration features are unmatched.",
      icon: "Figma",
      rating: 5,
      affiliate: true
    },
    {
      name: "Notion",
      category: "Productivity",
      description: "Project management, note-taking, and knowledge base all in one. Keeps my creative chaos organized.",
      icon: "FileText",
      rating: 5,
      affiliate: true
    },
    {
      name: "Adobe Creative Suite",
      category: "Design",
      description: "For advanced photo editing, illustration, and motion graphics. Still the industry standard for a reason.",
      icon: "Image",
      rating: 4,
      affiliate: false
    },
    {
      name: "Framer Motion",
      category: "Development",
      description: "Brings designs to life with smooth animations and interactions. Perfect for creating engaging user experiences.",
      icon: "Zap",
      rating: 5,
      affiliate: false
    },
    {
      name: "Unsplash",
      category: "Resources",
      description: "High-quality stock photography that doesn't look stock. Essential for mockups and inspiration.",
      icon: "Camera",
      rating: 4,
      affiliate: true
    },
    {
      name: "Linear",
      category: "Productivity",
      description: "Issue tracking and project management built for modern teams. Clean, fast, and beautifully designed.",
      icon: "CheckSquare",
      rating: 4,
      affiliate: true
    }
  ];

  const tabs = [
    { id: 'workspace', label: 'Workspace', icon: 'Home' },
    { id: 'process', label: 'Process', icon: 'GitBranch' },
    { id: 'tools', label: 'Tools', icon: 'Settings' }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Behind the Scenes</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get an inside look at my creative process, workspace, and the tools that help bring ideas to life.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-lg p-1 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md creative-transition ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-creative'
                    : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'workspace' && (
            <motion.div
              key="workspace"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workspaceImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-card rounded-xl overflow-hidden creative-shadow border border-border creative-transition group-hover:shadow-creative-lg">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 creative-transition"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 creative-transition" />
                      </div>
                      <div className="p-6">
                        <p className="text-text-secondary leading-relaxed">{image.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'process' && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-card rounded-xl p-6 creative-shadow border border-border">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                            <Icon name={step.icon} size={24} color="white" />
                          </div>
                          <div>
                            <span className="text-sm text-text-secondary">Step {step.id}</span>
                            <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-text-secondary mb-4">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {step.id}
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'tools' && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favoriteTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group"
                  >
                    <div className="bg-card rounded-xl p-6 creative-shadow border border-border creative-transition group-hover:shadow-creative-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                            <Icon name={tool.icon} size={24} color="white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-text-primary flex items-center">
                              {tool.name}
                              {tool.affiliate && (
                                <span className="ml-2 px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                                  Affiliate
                                </span>
                              )}
                            </h3>
                            <span className="text-sm text-text-secondary">{tool.category}</span>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={16}
                              className={i < tool.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-text-secondary">{tool.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BehindTheScenes;