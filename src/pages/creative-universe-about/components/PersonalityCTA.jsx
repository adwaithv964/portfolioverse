import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PersonalityCTA = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [personalityQuote, setPersonalityQuote] = useState(0);

  const personalityQuotes = [
    {
      text: "I believe every pixel has a purpose, every interaction tells a story, and every project is an opportunity to make someone's day a little brighter.",
      emoji: "✨"
    },
    {
      text: "Coffee-fueled creativity meets strategic thinking. I turn complex problems into simple, beautiful solutions that people actually want to use.",
      emoji: "☕"
    },
    {
      text: "I\'m not just designing interfaces—I\'m crafting experiences that bridge the gap between human needs and digital possibilities.",
      emoji: "🌉"
    },
    {
      text: "Passionate about creating designs that don't just look good, but feel right, work seamlessly, and stand the test of time.",
      emoji: "🎯"
    }
  ];

  const collaborationOptions = [
    {
      id: 'project',
      title: "Start a Project",
      description: "Have a specific project in mind? Let's discuss your vision and create something amazing together.",
      icon: "Rocket",
      color: "from-blue-500 to-purple-600",
      action: "Let\'s Build Something"
    },
    {
      id: 'consultation',
      title: "Design Consultation",
      description: "Need expert advice on your design strategy? Book a consultation to explore possibilities.",
      icon: "MessageCircle",
      color: "from-green-500 to-teal-600",
      action: "Schedule a Chat"
    },
    {
      id: 'collaboration',
      title: "Creative Collaboration",
      description: "Fellow creative looking to collaborate? Let\'s combine our skills for something extraordinary.",
      icon: "Users",
      color: "from-purple-500 to-pink-600",
      action: "Let\'s Collaborate"
    },
    {
      id: 'opportunity',
      title: "Career Opportunity",
      description: "Interested in bringing me onto your team? Let\'s discuss how I can contribute to your vision.",
      icon: "Briefcase",
      color: "from-orange-500 to-red-600",
      action: "Explore Opportunities"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const quoteTimer = setInterval(() => {
      setPersonalityQuote((prev) => (prev + 1) % personalityQuotes.length);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, [personalityQuotes.length]);

  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getAvailabilityStatus = () => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    
    // Weekend or outside business hours
    if (day === 0 || day === 6 || hour < 9 || hour > 17) {
      return {
        status: "Away",
        message: "I'll respond within 24 hours",
        color: "bg-yellow-500"
      };
    }
    
    return {
      status: "Available",
      message: "Usually responds within 2 hours",
      color: "bg-green-500"
    };
  };

  const availability = getAvailabilityStatus();

  return (
    <div className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border mb-6">
            <div className={`w-3 h-3 rounded-full ${availability.color} animate-pulse`}></div>
            <span className="text-sm text-text-secondary">{availability.status}</span>
            <span className="text-xs text-text-secondary">•</span>
            <span className="text-xs text-text-secondary">{availability.message}</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            {getTimeBasedGreeting()}!
          </h2>
          
          <motion.div
            key={personalityQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-4">
              <span className="text-3xl mr-2">{personalityQuotes[personalityQuote].emoji}</span>
              {personalityQuotes[personalityQuote].text}
            </p>
          </motion.div>

          <div className="flex justify-center space-x-2 mt-6">
            {personalityQuotes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === personalityQuote ? 'bg-accent w-8' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Collaboration Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-text-primary text-center mb-12">
            How Can We Work Together?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-card rounded-xl p-6 h-full creative-shadow border border-border creative-transition group-hover:shadow-creative-lg">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center group-hover:scale-110 creative-transition`}>
                      <Icon name={option.icon} size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary creative-transition">
                        {option.title}
                      </h4>
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="group-hover:border-accent group-hover:text-accent creative-transition"
                  >
                    {option.action}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 creative-shadow-lg border border-border">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Start the Conversation?
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Whether you have a clear vision or just a spark of an idea, I'd love to hear about it. 
              Every great project starts with a simple "hello."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact-constellation">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground creative-transition creative-hover"
                >
                  Get in Touch
                </Button>
              </Link>
              
              <Link to="/project-showcase-ecosystem">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Eye"
                  iconPosition="left"
                  className="creative-transition hover:border-accent hover:text-accent"
                >
                  View My Work
                </Button>
              </Link>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" size={24} color="white" />
                </div>
                <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                <p className="text-text-secondary text-sm">hello@portfolioverse.com</p>
                <p className="text-xs text-text-secondary mt-1">Response within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Calendar" size={24} color="white" />
                </div>
                <h4 className="font-semibold text-text-primary mb-1">Schedule</h4>
                <p className="text-text-secondary text-sm">Book a 30-min call</p>
                <p className="text-xs text-text-secondary mt-1">Available Mon-Fri, 9AM-5PM PST</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="MessageSquare" size={24} color="white" />
                </div>
                <h4 className="font-semibold text-text-primary mb-1">LinkedIn</h4>
                <p className="text-text-secondary text-sm">Professional network</p>
                <p className="text-xs text-text-secondary mt-1">Connect for opportunities</p>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-text-secondary">
                <Icon name="Coffee" size={16} className="inline mr-2 text-accent" />
                Fun fact: I've had {Math.floor(Math.random() * 3) + 2} cups of coffee today and I'm still excited to talk about your project! ☕
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalityCTA;