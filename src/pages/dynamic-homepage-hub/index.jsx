import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectPreviewGrid from './components/ProjectPreviewGrid';
import SkillsConstellation from './components/SkillsConstellation';
import SocialProofSection from './components/SocialProofSection';
import CallToActionSection from './components/CallToActionSection';

const DynamicHomepageHub = () => {
  useEffect(() => {
    // Set page title
    document.title = 'PortfolioVerse - Creative Developer & Digital Storyteller';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore the creative universe of Alex Rodriguez - a passionate developer crafting immersive digital experiences that bridge imagination and technology.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Project Preview Grid */}
        <ProjectPreviewGrid />

        {/* Skills Constellation */}
        <SkillsConstellation />

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Call to Action Section */}
        <CallToActionSection />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-gradient">PortfolioVerse</span>
            </div>
            <p className="text-text-secondary mb-4">
              Crafting digital experiences that inspire and innovate
            </p>
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} PortfolioVerse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default DynamicHomepageHub;