import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToActionSection = () => {
  const quickActions = [
    {
      title: "Start a Project",
      description: "Ready to bring your vision to life? Let's discuss your next big idea.",
      icon: "Rocket",
      action: "Get Started",
      link: "/contact-constellation",
      color: "from-cta to-red-600",
      bgColor: "bg-cta/10"
    },
    {
      title: "Schedule a Call",
      description: "Book a free consultation to explore how we can work together.",
      icon: "Calendar",
      action: "Book Now",
      link: "/contact-constellation",
      color: "from-accent to-teal-600",
      bgColor: "bg-accent/10"
    },
    {
      title: "View Portfolio",
      description: "Explore detailed case studies and see the full scope of my work.",
      icon: "Briefcase",
      action: "Explore Work",
      link: "/project-showcase-ecosystem",
      color: "from-primary to-blue-600",
      bgColor: "bg-primary/10"
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Ready to Create Something
            <span className="block text-gradient">Extraordinary?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Let's transform your ideas into digital experiences that captivate, engage, and deliver results. 
            Your next breakthrough project starts with a conversation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact-constellation">
              <Button
                variant="default"
                size="xl"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-cta hover:bg-cta/90 text-cta-foreground creative-transition creative-hover"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/project-showcase-ecosystem">
              <Button
                variant="outline"
                size="xl"
                iconName="Eye"
                iconPosition="left"
                className="creative-transition hover:border-accent hover:text-accent"
              >
                View My Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={action.link}>
                <div className="bg-card rounded-xl p-8 creative-shadow creative-transition group-hover:creative-shadow-lg group-hover:scale-105 h-full">
                  <div className={`w-16 h-16 rounded-xl ${action.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 creative-transition`}>
                    <Icon name={action.icon} size={32} className={`bg-gradient-to-r ${action.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary creative-transition">
                    {action.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  
                  <div className="flex items-center text-accent font-medium group-hover:text-primary creative-transition">
                    <span>{action.action}</span>
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 creative-transition" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 creative-shadow mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-6">
            Let's Connect
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center text-text-secondary">
              <Icon name="Mail" size={20} className="mr-2 text-accent" />
              <span>adwaithv@portfolioverse.com</span>
            </div>
            <div className="flex items-center text-text-secondary">
              <Icon name="Phone" size={20} className="mr-2 text-accent" />
              <span>+91 5551234567</span>
            </div>
            <div className="flex items-center text-text-secondary">
              <Icon name="MapPin" size={20} className="mr-2 text-accent" />
              <span>Kerala</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white creative-transition"
            >
              <Icon name="Github" size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white creative-transition"
            >
              <Icon name="Linkedin" size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white creative-transition"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white creative-transition"
            >
              <Icon name="Dribbble" size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;