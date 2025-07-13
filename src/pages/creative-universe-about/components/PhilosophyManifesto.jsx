import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophyManifesto = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const philosophyPoints = [
    {
      id: 1,
      title: "Design with Purpose",
      content: "Every pixel, every interaction, every color choice should serve a purpose. Beautiful design without function is just decoration.",
      icon: "Target",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Embrace Constraints",
      content: "Limitations spark creativity. The best solutions often emerge when we're forced to think differently within boundaries.",
      icon: "Box",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Human-Centered Approach",
      content: "Technology should adapt to humans, not the other way around. Every design decision should make someone's life a little bit better.",
      icon: "Heart",
      color: "from-red-500 to-pink-600"
    },
    {
      id: 4,
      title: "Continuous Learning",
      content: "The moment we stop learning is the moment we start becoming irrelevant. Stay curious, stay humble, stay growing.",
      icon: "BookOpen",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 5,
      title: "Collaborate, Don't Compete",
      content: "The best work happens when diverse minds come together. Competition breeds mediocrity; collaboration breeds excellence.",
      icon: "Users",
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      title: "Sustainable Design",
      content: "Create for longevity, not trends. Good design should age gracefully and contribute positively to our digital ecosystem.",
      icon: "Leaf",
      color: "from-emerald-500 to-green-600"
    }
  ];

  const manifestoText = `I believe that design is not just about making things look pretty—it's about solving problems, telling stories, and creating connections. In a world overwhelmed by digital noise, my mission is to cut through the clutter and create experiences that matter. Every project is an opportunity to make someone's day a little brighter, their task a little easier, or their business a little more successful. I don't just design interfaces; I craft digital experiences that resonate with real people facing real challenges. The future belongs to those who can bridge the gap between human needs and technological possibilities. That's where I thrive—in the intersection of empathy and innovation, where beautiful design meets meaningful function.`;

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient mb-6">Design Philosophy</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            The principles that guide every decision, every pixel, and every interaction I create
          </p>
        </motion.div>

        {/* Manifesto Text */}
        <motion.div
          style={{ opacity }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 creative-shadow-lg border border-border/50"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-6">
                  <Icon name="Feather" size={32} color="white" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary">My Manifesto</h3>
              </div>
              
              {manifestoText.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-lg text-text-secondary leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Philosophy Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 h-full creative-shadow border border-border creative-transition group-hover:shadow-creative-lg">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${point.color} flex items-center justify-center mr-4 group-hover:scale-110 creative-transition`}>
                    <Icon name={point.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary creative-transition">
                    {point.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {point.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light text-text-primary leading-relaxed mb-8">
              "Design is not just what it looks like and feels like. Design is{' '}
              <span className="text-gradient font-semibold">how it works</span>."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent"></div>
              <div className="text-left">
                <p className="text-lg font-semibold text-text-primary">Steve Jobs</p>
                <p className="text-text-secondary">Co-founder, Apple Inc.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhilosophyManifesto;