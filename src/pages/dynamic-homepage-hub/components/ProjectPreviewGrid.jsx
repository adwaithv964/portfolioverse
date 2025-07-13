import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectPreviewGrid = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "EcoVision Dashboard",
      category: "Web Application",
      description: "Real-time environmental monitoring platform with interactive data visualization and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      techStack: ["React", "D3.js", "Node.js", "MongoDB"],
      color: "from-green-500 to-emerald-600",
      icon: "BarChart3"
    },
    {
      id: 2,
      title: "FinanceFlow Mobile",
      category: "Mobile App",
      description: "Intuitive personal finance management app with AI-powered spending insights and budget optimization.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?w=600&h=400&fit=crop",
      techStack: ["React Native", "TypeScript", "Firebase", "TensorFlow"],
      color: "from-blue-500 to-indigo-600",
      icon: "Smartphone"
    },
    {
      id: 3,
      title: "ArtSpace Gallery",
      category: "E-commerce",
      description: "Immersive online art gallery with virtual exhibitions, AR preview, and seamless purchasing experience.",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/art-1867781_1280.jpg?w=600&h=400&fit=crop",
      techStack: ["Next.js", "Three.js", "Stripe", "Sanity"],
      color: "from-purple-500 to-pink-600",
      icon: "Palette"
    },
    {
      id: 4,
      title: "MindfulMoments",
      category: "Wellness App",
      description: "Meditation and mindfulness platform with personalized sessions, progress tracking, and community features.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      techStack: ["Vue.js", "Nuxt.js", "Supabase", "WebRTC"],
      color: "from-teal-500 to-cyan-600",
      icon: "Heart"
    },
    {
      id: 5,
      title: "CodeCollab IDE",
      category: "Developer Tool",
      description: "Collaborative coding environment with real-time editing, integrated chat, and project management tools.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=600&h=400&fit=crop",
      techStack: ["Electron", "Monaco Editor", "Socket.io", "Docker"],
      color: "from-orange-500 to-red-600",
      icon: "Code"
    },
    {
      id: 6,
      title: "TravelVerse VR",
      category: "Virtual Reality",
      description: "Immersive virtual travel experiences with 360° environments, cultural insights, and social interactions.",
      image: "https://images.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg?w=600&h=400&fit=crop",
      techStack: ["A-Frame", "WebXR", "Three.js", "WebGL"],
      color: "from-amber-500 to-yellow-600",
      icon: "Globe"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore a curated selection of my latest work, showcasing innovative solutions across web, mobile, and emerging technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link to="/project-showcase-ecosystem" className="block">
                <div className="relative overflow-hidden rounded-xl bg-card creative-shadow creative-transition group-hover:creative-shadow-lg group-hover:scale-105">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover creative-transition group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 creative-transition`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-card/90 text-text-primary backdrop-blur-sm">
                        <Icon name={project.icon} size={14} className="mr-1" />
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Content */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 creative-transition"
                      initial={false}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.9
                      }}
                    >
                      <div className="text-center text-white p-6">
                        <Icon name="ExternalLink" size={32} className="mx-auto mb-4" />
                        <p className="text-sm font-medium">View Project Details</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary creative-transition">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent creative-transition" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/project-showcase-ecosystem">
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium creative-transition hover:bg-primary/90 creative-shadow hover:creative-shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Projects</span>
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPreviewGrid;