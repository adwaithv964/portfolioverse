import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/dynamic-homepage-hub', icon: 'Home' },
    { name: 'About', path: '/creative-universe-about', icon: 'User' },
    { name: 'Portfolio', path: '/project-showcase-ecosystem', icon: 'Briefcase' },
    { name: 'Services', path: '/collaboration-hub-services', icon: 'Settings' },
    { name: 'Network', path: '/creative-network-connections', icon: 'Users' },
    { name: 'Contact', path: '/contact-constellation', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-creative border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/dynamic-homepage-hub" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center creative-transition group-hover:scale-110">
                <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gradient">PortfolioVerse</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium creative-transition flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-creative'
                    : 'text-text-primary hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="creative-transition hover:border-accent hover:text-accent"
            >
              Schedule Call
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-cta hover:bg-cta/90 text-cta-foreground creative-transition creative-hover"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-muted creative-transition"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-creative ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 bg-card/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium creative-transition ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-creative'
                      : 'text-text-primary hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTAs */}
            <div className="mt-6 space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                className="creative-transition hover:border-accent hover:text-accent"
                onClick={closeMenu}
              >
                Schedule Call
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-cta hover:bg-cta/90 text-cta-foreground creative-transition"
                onClick={closeMenu}
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;