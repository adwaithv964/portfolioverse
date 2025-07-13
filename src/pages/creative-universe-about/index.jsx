import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AnimatedTimeline from './components/AnimatedTimeline';
import SkillConstellation from './components/SkillConstellation';
import PhilosophyManifesto from './components/PhilosophyManifesto';
import BehindTheScenes from './components/BehindTheScenes';
import ValuesSection from './components/ValuesSection';
import MentorInfluences from './components/MentorInfluences';
import InteractiveResume from './components/InteractiveResume';
import TestimonialsSection from './components/TestimonialsSection';
import PersonalityCTA from './components/PersonalityCTA';

const CreativeUniverseAbout = () => {
  return (
    <>
      <Helmet>
        <title>About - Creative Universe | PortfolioVerse</title>
        <meta name="description" content="Discover the creative journey, philosophy, and expertise behind PortfolioVerse. Explore my skills, values, and the story that drives exceptional design work." />
        <meta name="keywords" content="about designer, creative journey, design philosophy, UX designer, portfolio, skills, experience" />
        <meta property="og:title" content="About - Creative Universe | PortfolioVerse" />
        <meta property="og:description" content="Discover the creative journey, philosophy, and expertise behind PortfolioVerse. Explore my skills, values, and the story that drives exceptional design work." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/creative-universe-about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto creative-shadow-lg">
                  <span className="text-4xl">👋</span>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
                Welcome to My Universe
              </h1>
              
              <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
                I'm a passionate designer who believes that every pixel has a purpose, every interaction tells a story, 
                and every project is an opportunity to make someone's day a little brighter.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary"
              >
                <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border">
                  <span>📍</span>
                  <span>Kerala, India</span>
                </div>
                <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border">
                  <span>☕</span>
                  <span>Powered by coffee & creativity</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Animated Timeline Section */}
        <AnimatedTimeline />

        {/* Skill Constellation Section */}
        <SkillConstellation />

        {/* Philosophy Manifesto Section */}
        <PhilosophyManifesto />

        {/* Behind the Scenes Section */}
        <BehindTheScenes />

        {/* Values Section */}
        <ValuesSection />

        {/* Mentor Influences Section */}
        <MentorInfluences />

        {/* Interactive Resume Section */}
        <InteractiveResume />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Personality CTA Section */}
        <PersonalityCTA />

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Thanks for taking the time to get to know me!
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  This journey is just the beginning. I'm always excited to meet new people, 
                  learn new things, and create something amazing together.
                </p>
              </motion.div>
              
              <div className="pt-8 border-t border-border">
                <p className="text-text-secondary text-sm">
                  © {new Date().getFullYear()} PortfolioVerse. Crafted with ❤️ and lots of ☕
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CreativeUniverseAbout;