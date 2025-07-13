import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MentorInfluences = () => {
  const [currentInfluence, setCurrentInfluence] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const influences = [
    {
      id: 1,
      name: "Dieter Rams",
      role: "Industrial Designer",
      company: "Braun",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      quote: "Good design is as little design as possible.",
      impact: "Taught me that simplicity isn't about removing features—it's about removing everything that doesn't serve a purpose. His ten principles of good design are still my north star.",
      principles: ["Less, but better", "Honest design", "Long-lasting design"],
      color: "from-gray-600 to-gray-800"
    },
    {
      id: 2,
      name: "Paula Scher",
      role: "Graphic Designer",
      company: "Pentagram",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=300&h=300&fit=crop",
      quote: "It\'s through mistakes that you actually can grow.",
      impact: "Showed me that bold, experimental design can coexist with strategic thinking. Her fearless approach to typography and color inspired me to take creative risks.",
      principles: ["Bold experimentation", "Typography as art", "Strategic creativity"],
      color: "from-pink-500 to-red-600"
    },
    {
      id: 3,
      name: "Jony Ive",
      role: "Chief Design Officer",
      company: "Apple",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=300&h=300&fit=crop",
      quote: "Simplicity is not the absence of clutter, that's a consequence of simplicity.",
      impact: "Demonstrated how design thinking can transform entire industries. His obsession with materials and manufacturing processes taught me to consider every aspect of the user experience.",
      principles: ["Obsessive attention to detail", "Material honesty", "Seamless integration"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      name: "Jessica Walsh",
      role: "Creative Director",
      company: "&Walsh",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      quote: "The best work comes from personal experiences and emotions.",
      impact: "Inspired me to bring more personality and emotion into my work. Her ability to blend personal storytelling with commercial design opened my eyes to new possibilities.",
      principles: ["Emotional storytelling", "Personal authenticity", "Bold visual language"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      name: "Adrian Frutiger",
      role: "Typeface Designer",
      company: "Independent",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=300&h=300&fit=crop",
      quote: "Typography is two-dimensional architecture.",
      impact: "Taught me that typography is the foundation of all visual communication. His systematic approach to type design influences how I think about hierarchy and readability.",
      principles: ["Systematic thinking", "Functional beauty", "Universal accessibility"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 6,
      name: "Massimo Vignelli",
      role: "Graphic Designer",
      company: "Vignelli Associates",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      quote: "The life of a designer is a life of fight against the ugliness.",
      impact: "His unwavering commitment to timeless design principles taught me that trends fade, but good design endures. His systematic approach to visual identity still guides my work.",
      principles: ["Timeless design", "Systematic approach", "Intellectual elegance"],
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentInfluence((prev) => (prev + 1) % influences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, influences.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentInfluence((prev) => (prev - 1 + influences.length) % influences.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentInfluence((prev) => (prev + 1) % influences.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentInfluence(index);
  };

  const currentPerson = influences[currentInfluence];

  return (
    <div className="py-16 bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Mentors & Influences</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The visionaries who shaped my creative perspective and continue to inspire my work every day.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="bg-card rounded-2xl creative-shadow-lg border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentInfluence}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image and Basic Info */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-6">
                      <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden creative-shadow-lg">
                        <Image
                          src={currentPerson.image}
                          alt={currentPerson.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r ${currentPerson.color} flex items-center justify-center`}>
                        <Icon name="Quote" size={24} color="white" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-text-primary mb-2">{currentPerson.name}</h3>
                    <p className="text-lg text-text-secondary mb-1">{currentPerson.role}</p>
                    <p className="text-accent font-medium">{currentPerson.company}</p>
                  </div>

                  {/* Content */}
                  <div>
                    <blockquote className="text-2xl font-light text-text-primary mb-6 italic">
                      "{currentPerson.quote}"
                    </blockquote>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-text-primary mb-3">Impact on My Work</h4>
                      <p className="text-text-secondary leading-relaxed">{currentPerson.impact}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">Key Principles</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentPerson.principles.map((principle, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentPerson.color} text-white text-sm font-medium`}
                          >
                            {principle}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center creative-shadow hover:shadow-creative-lg creative-transition hover:bg-muted"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {influences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full creative-transition ${
                    index === currentInfluence ? 'bg-accent' : 'bg-border hover:bg-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center creative-shadow hover:shadow-creative-lg creative-transition hover:bg-muted"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary creative-transition"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span className="text-sm">{isAutoPlaying ? "Pause" : "Play"} Auto-rotation</span>
            </button>
          </div>
        </div>

        {/* Additional Influences Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Other Influences</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Stefan Sagmeister', 'David Carson', 'Neville Brody', 'Chip Kidd', 'Milton Glaser', 'Saul Bass'].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-lg p-4 text-center creative-shadow border border-border creative-transition hover:shadow-creative-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon name="User" size={20} color="white" />
                </div>
                <p className="text-sm font-medium text-text-primary">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorInfluences;