import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah paul",
      role: "Product Manager",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      content: "Working with this designer transformed our entire product experience. The attention to detail and user-centered approach resulted in a 65% increase in user engagement. Their ability to translate complex requirements into intuitive designs is remarkable.",
      project: "SaaS Dashboard Redesign",
      rating: 5,
      relationship: "Direct Collaboration",
      duration: "8 months"
    },
    {
      id: 2,
      name: "Rahul P",
      role: "CEO",
      company: "StartupVenture Inc.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100&fit=crop",
      content: "The mobile app design exceeded all our expectations. Not only did it look stunning, but the user experience was so intuitive that our customer support tickets decreased by 40%. This designer truly understands how to balance aesthetics with functionality.",
      project: "Mobile App Design",
      rating: 5,
      relationship: "Client",
      duration: "6 months"
    },
    {
      id: 3,
      name: "Priya Menon",
      role: "Marketing Director",
      company: "GreenTech Innovations",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=100&h=100&fit=crop",
      content: "The brand identity and website design perfectly captured our company\'s vision for sustainable technology. The design not only looks professional but also communicates our values effectively. Our lead generation increased by 150% after the launch.",
      project: "Brand Identity & Website",
      rating: 5,
      relationship: "Client",
      duration: "4 months"
    },
    {
      id: 4,
      name: "David ",
      role: "Senior Developer",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content: "As a developer, I appreciate designers who understand technical constraints. This designer creates beautiful designs that are actually implementable. The design system they created made our development process 40% more efficient.",
      project: "Design System Implementation",
      rating: 5,
      relationship: "Team Collaboration",
      duration: "12 months"
    },
    {
      id: 5,
      name: "Lisa Thomson",
      role: "UX Researcher",
      company: "UserFirst Labs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "The collaborative approach to user research and design was exceptional. They didn't just create beautiful interfaces; they ensured every design decision was backed by user insights. The final product tested incredibly well with our target audience.",
      project: "E-commerce Platform UX",
      rating: 5,
      relationship: "Research Partner",
      duration: "10 months"
    }
  ];

  const projectCategories = [
    { name: "All Projects", count: testimonials.length },
    { name: "SaaS Products", count: 2 },
    { name: "Mobile Apps", count: 1 },
    { name: "Brand Identity", count: 2 },
    { name: "E-commerce", count: 1 }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Client Testimonials</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real feedback from real clients and collaborators who've experienced the impact of thoughtful design.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-text-secondary">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4.9</div>
            <div className="text-text-secondary">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-text-secondary">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">150%</div>
            <div className="text-text-secondary">Avg. ROI Increase</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonial List */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-text-primary mb-6">Featured Testimonials</h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={testimonial.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-full text-left p-4 rounded-lg creative-transition ${
                    selectedTestimonial === index
                      ? 'bg-primary text-primary-foreground shadow-creative'
                      : 'bg-card border border-border hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{testimonial.name}</p>
                      <p className={`text-sm truncate ${
                        selectedTestimonial === index ? 'text-primary-foreground/80' : 'text-text-secondary'
                      }`}>
                        {testimonial.role}
                      </p>
                      <p className={`text-xs truncate ${
                        selectedTestimonial === index ? 'text-primary-foreground/60' : 'text-text-secondary'
                      }`}>
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={`${
                            selectedTestimonial === index 
                              ? 'text-yellow-300 fill-current' :'text-yellow-400 fill-current'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Testimonial Detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl p-8 creative-shadow-lg border border-border h-full"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonials[selectedTestimonial].image}
                      alt={testimonials[selectedTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-1">
                      {testimonials[selectedTestimonial].name}
                    </h3>
                    <p className="text-lg text-text-secondary mb-1">
                      {testimonials[selectedTestimonial].role}
                    </p>
                    <p className="text-accent font-medium">
                      {testimonials[selectedTestimonial].company}
                    </p>
                    <div className="flex items-center mt-2">
                      <div className="flex mr-3">
                        {[...Array(testimonials[selectedTestimonial].rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-text-secondary">
                        {testimonials[selectedTestimonial].rating}.0/5.0
                      </span>
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg text-text-primary leading-relaxed mb-6 italic">
                  "{testimonials[selectedTestimonial].content}"
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Project</h4>
                    <p className="text-text-secondary text-sm">
                      {testimonials[selectedTestimonial].project}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Relationship</h4>
                    <p className="text-text-secondary text-sm">
                      {testimonials[selectedTestimonial].relationship}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Duration</h4>
                    <p className="text-text-secondary text-sm">
                      {testimonials[selectedTestimonial].duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">Testimonials by Project Type</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-lg p-4 text-center creative-shadow border border-border creative-transition hover:shadow-creative-lg"
              >
                <div className="text-2xl font-bold text-primary mb-1">{category.count}</div>
                <div className="text-sm text-text-secondary">{category.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create something amazing together. Every great project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold creative-transition hover:bg-gray-100 creative-hover">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Start a Conversation
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold creative-transition hover:bg-white hover:text-primary">
                <Icon name="Eye" size={20} className="mr-2" />
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;