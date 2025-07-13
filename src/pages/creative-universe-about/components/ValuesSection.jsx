import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const values = [
    {
      id: 1,
      title: "Authenticity",
      shortDescription: "Being genuine in every interaction and creative decision",
      icon: "Shield",
      color: "from-blue-500 to-blue-600",
      detailedExplanation: "Authenticity means staying true to my creative vision while respecting client needs. I believe the best work comes from honest collaboration, transparent communication, and designs that reflect genuine brand personalities rather than following fleeting trends.",
      principles: [
        "Honest feedback and transparent communication",
        "Designs that reflect true brand identity",
        "No false promises or unrealistic timelines",
        "Genuine passion for every project, big or small"
      ]
    },
    {
      id: 2,
      title: "Excellence",
      shortDescription: "Pursuing the highest quality in every detail",
      icon: "Award",
      color: "from-purple-500 to-purple-600",
      detailedExplanation: "Excellence isn't about perfection—it's about continuous improvement and attention to detail. Every pixel, every interaction, and every user journey is crafted with care. I believe that good enough isn't good enough when you can make it exceptional.",
      principles: [
        "Meticulous attention to detail in every design",
        "Continuous learning and skill development",
        "Quality over quantity in project selection",
        "Going beyond expectations, not just meeting them"
      ]
    },
    {
      id: 3,
      title: "Empathy",
      shortDescription: "Understanding and designing for real human needs",
      icon: "Heart",
      color: "from-red-500 to-red-600",
      detailedExplanation: "Great design starts with understanding people. I put myself in the shoes of users, considering their frustrations, goals, and contexts. Empathy drives every design decision, ensuring that what I create truly serves the people who will use it.",
      principles: [
        "User research and testing in every project",
        "Accessibility and inclusive design practices",
        "Considering diverse perspectives and use cases",
        "Designing for emotional as well as functional needs"
      ]
    },
    {
      id: 4,
      title: "Innovation",
      shortDescription: "Pushing boundaries while solving real problems",
      icon: "Lightbulb",
      color: "from-yellow-500 to-orange-600",
      detailedExplanation: "Innovation isn't about using the latest technology for its own sake—it's about finding creative solutions to real problems. I love exploring new possibilities while ensuring that innovation serves a purpose and improves the user experience.",
      principles: [
        "Experimenting with new technologies and techniques",
        "Challenging conventional design patterns when appropriate",
        "Balancing innovation with usability and accessibility",
        "Learning from failures and iterating quickly"
      ]
    },
    {
      id: 5,
      title: "Collaboration",
      shortDescription: "Building success through partnership and teamwork",
      icon: "Users",
      color: "from-green-500 to-teal-600",
      detailedExplanation: "The best work happens when diverse minds come together. I thrive in collaborative environments where ideas can be shared, challenged, and refined. Every stakeholder brings valuable perspective that can elevate the final outcome.",
      principles: [
        "Active listening and open communication",
        "Valuing diverse perspectives and expertise",
        "Sharing knowledge and mentoring others",
        "Building long-term partnerships, not just transactions"
      ]
    },
    {
      id: 6,
      title: "Sustainability",
      shortDescription: "Creating lasting value for people and planet",
      icon: "Leaf",
      color: "from-emerald-500 to-green-600",
      detailedExplanation: "Design has a responsibility to the future. I consider the environmental impact of digital products, create designs that age gracefully, and focus on solutions that provide lasting value rather than quick fixes that need constant replacement.",
      principles: [
        "Optimizing for performance and energy efficiency",
        "Creating timeless designs that don't need frequent updates",
        "Considering the full lifecycle of digital products",
        "Supporting businesses with positive social impact"
      ]
    }
  ];

  const handleCardClick = (cardId) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
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
          <h2 className="text-4xl font-bold text-gradient mb-4">Core Values</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The principles that guide every decision and shape every interaction. Click any card to explore deeper.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-80 perspective-1000"
            >
              <motion.div
                className="relative w-full h-full cursor-pointer preserve-3d"
                animate={{ rotateY: flippedCard === value.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => handleCardClick(value.id)}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-card rounded-xl p-6 h-full creative-shadow border border-border creative-transition hover:shadow-creative-lg flex flex-col justify-between">
                    <div>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 mx-auto`}>
                        <Icon name={value.icon} size={32} color="white" />
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">
                        {value.title}
                      </h3>
                      <p className="text-text-secondary text-center leading-relaxed">
                        {value.shortDescription}
                      </p>
                    </div>
                    <div className="text-center mt-6">
                      <div className="inline-flex items-center text-accent hover:text-accent/80 creative-transition">
                        <span className="text-sm font-medium mr-2">Learn More</span>
                        <Icon name="ArrowRight" size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-card rounded-xl p-6 h-full creative-shadow border border-border overflow-y-auto">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mr-3`}>
                        <Icon name={value.icon} size={20} color="white" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{value.title}</h3>
                    </div>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {value.detailedExplanation}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Key Principles:</h4>
                      <ul className="space-y-2">
                        {value.principles.map((principle, principleIndex) => (
                          <li key={principleIndex} className="flex items-start text-xs text-text-secondary">
                            <Icon name="Check" size={12} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span>{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center mt-4">
                      <button className="inline-flex items-center text-accent hover:text-accent/80 creative-transition text-sm">
                        <Icon name="RotateCcw" size={14} className="mr-1" />
                        <span>Flip Back</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 creative-shadow border border-border">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-text-primary mb-4">Values in Action</h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                These aren't just words on a page—they're the foundation of how I work, make decisions, and build relationships with clients and collaborators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} color="white" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">In Communication</h4>
                <p className="text-text-secondary text-sm">
                  Honest, transparent dialogue that builds trust and ensures everyone is aligned on goals and expectations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={32} color="white" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">In Design</h4>
                <p className="text-text-secondary text-sm">
                  Every design decision is guided by user needs, business goals, and sustainable practices that create lasting value.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Handshake" size={32} color="white" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">In Partnership</h4>
                <p className="text-text-secondary text-sm">
                  Building long-term relationships based on mutual respect, shared success, and continuous collaboration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ValuesSection;