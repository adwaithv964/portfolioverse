import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AnimatedTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineEvents = [
    {
      id: 1,
      year: "2018",
      title: "The Spark",
      description: "First encounter with design a webpage, that changed everything. What started as a simple assignment became a passion that would define my career path.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      icon: "Lightbulb",
      color: "from-yellow-400 to-orange-500"
    },
  
    {
      id: 3,
      year: "2020",
      title: "Digital Transformation",
      description: "Pivoted to digital-first design during the pandemic. Learned React, explored web animations, and discovered the power of interactive learning.",
      image: "https://images.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.jpg?w=400&h=300&fit=crop",
      icon: "Monitor",
      color: "from-green-400 to-teal-500"
    },
    {
      id: 4,
      year: "2021",
      title: "Graphic Designing",
      description: "Joined a creative team where I learned to work in photoshop, Adobe XD etc..",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      icon: "Building",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 5,
      year: "2022",
      title: "Specialization",
      description: "Found my niche in creating immersive digital experiences. Developed expertise in web design, Ai integrating, and conversion optimization.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?w=400&h=300&fit=crop",
      icon: "Target",
      color: "from-red-400 to-rose-500"
    },
    {
      id: 6,
      year: "2023",
      title: "Independent Journey",
      description: "Launched my independent practice, focusing on web development, create memorable digital experiences that drive real results.",
      image: "https://images.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg?w=400&h=300&fit=crop",
      icon: "Rocket",
      color: "from-indigo-400 to-blue-500"
    },
    {
      id: 7,
      year: "2025",
      title: "Learning Cyber Security",
      description: "Currently exploring Ai based Cyber security, sustainable web practices, and creating accessible experiences that don't compromise on creativity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      icon: "Zap",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const progressTransform = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newIndex = Math.floor(latest * timelineEvents.length);
      setActiveIndex(Math.min(newIndex, timelineEvents.length - 1));
    });
    return unsubscribe;
  }, [scrollYProgress, timelineEvents.length]);

  return (
    <div ref={containerRef} className="relative py-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">My Creative Journey</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Every great story has a beginning. Here's how my passion for design evolved into a mission to create meaningful digital experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-accent"
              style={{ height: `${progressTransform}%` }}
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-card rounded-xl p-6 creative-shadow-lg border border-border ${
                      activeIndex >= index ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center mr-4`}>
                        <Icon name={event.icon} size={24} color="white" />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-primary">{event.year}</span>
                        <h3 className="text-xl font-semibold text-text-primary">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-text-secondary mb-4">{event.description}</p>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    animate={{
                      scale: activeIndex >= index ? 1.2 : 1,
                      backgroundColor: activeIndex >= index ? '#4ecdc4' : '#e2e8f0'
                    }}
                    className="w-6 h-6 rounded-full border-4 border-card"
                  />
                </div>

                {/* Empty Space */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-2 mb-6">
            {timelineEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex >= index ? 'bg-accent' : 'bg-border'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-text-secondary">
            Scroll to explore the timeline or click the dots to jump to specific moments
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;