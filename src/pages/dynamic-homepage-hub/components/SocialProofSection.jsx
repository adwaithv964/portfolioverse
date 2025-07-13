import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [githubActivity, setGithubActivity] = useState([]);

  useEffect(() => {
    // Mock GitHub activity data
    const mockActivity = [
      { id: 1, type: 'commit', repo: 'portfolio-website', message: 'Add interactive animations', time: '2 hours ago' },
      { id: 2, type: 'pr', repo: 'react-components', message: 'Implement new Button variants', time: '5 hours ago' },
      { id: 3, type: 'issue', repo: 'design-system', message: 'Fix accessibility issues', time: '1 day ago' },
      { id: 4, type: 'commit', repo: 'client-project', message: 'Optimize performance', time: '2 days ago' },
    ];
    setGithubActivity(mockActivity);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sara Paul",
      role: "Product Manager",
      company: "TechFlow Inc.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "PortfolioVers delivered an exceptional web application that exceeded our expectations. The attention to detail and innovative approach to user experience was remarkable.",
      rating: 5,
      project: "EcoVision Dashboard"
    },
    {
      id: 2,
      name: "Rahul P",
      role: "CEO",
      company: "StartupLab",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "Working with PortfolioVers was a game-changer for our startup. The mobile app he developed helped us secure our Series A funding. Highly recommended!",
      rating: 5,
      project: "FinanceFlow Mobile"
    },
    {
      id: 3,
      name: "Priya Menon",
      role: "Creative Director",
      company: "ArtSpace Gallery",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: "The virtual gallery platform PortfolioVerse created transformed how we showcase art. The AR features and seamless user experience have increased our online sales by 300%.",
      rating: 5,
      project: "ArtSpace Gallery"
    }
  ];

  const achievements = [
    { icon: "Award", label: "Design Excellence Award 2024", value: "Winner" },
    { icon: "Users", label: "Happy Clients", value: "50+" },
    { icon: "Star", label: "Average Rating", value: "4.9/5" },
    { icon: "Clock", label: "Project Delivery", value: "On Time" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit': return 'GitCommit';
      case 'pr': return 'GitPullRequest';
      case 'issue': return 'AlertCircle';
      default: return 'Activity';
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
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real results from real clients, backed by continuous innovation and proven expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Client Testimonials */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-8 creative-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-text-primary">Client Testimonials</h3>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full creative-transition ${
                        index === currentTestimonial ? 'bg-accent' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-text-primary leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      Project: {testimonials[currentTestimonial].project}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* GitHub Activity */}
          <div className="bg-card rounded-xl p-6 creative-shadow">
            <div className="flex items-center mb-6">
              <Icon name="Github" size={24} className="mr-3 text-text-primary" />
              <h3 className="text-xl font-bold text-text-primary">Recent Activity</h3>
            </div>

            <div className="space-y-4">
              {githubActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-muted"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={getActivityIcon(activity.type)} size={16} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {activity.repo}
                    </p>
                    <p className="text-xs text-text-secondary truncate">
                      {activity.message}
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">This week</span>
                <span className="font-semibold text-accent">24 contributions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 text-center creative-shadow creative-transition hover:creative-shadow-lg hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={achievement.icon} size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {achievement.value}
              </div>
              <div className="text-sm text-text-secondary">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8">Featured In</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-text-secondary">TechCrunch</div>
            <div className="text-lg font-semibold text-text-secondary">Product Hunt</div>
            <div className="text-lg font-semibold text-text-secondary">Awwwards</div>
            <div className="text-lg font-semibold text-text-secondary">CSS Design Awards</div>
            <div className="text-lg font-semibold text-text-secondary">Dribbble</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;