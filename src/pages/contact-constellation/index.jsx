import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import AvailabilityStatus from './components/AvailabilityStatus';
import SocialConnections from './components/SocialConnections';
import ContactPreferences from './components/ContactPreferences';

const ContactConstellation = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [selectedFormType, setSelectedFormType] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const tabs = [
    { id: 'contact', label: 'Get In Touch', icon: 'Mail' },
    { id: 'methods', label: 'Contact Methods', icon: 'Phone' },
    { id: 'availability', label: 'Availability', icon: 'Calendar' },
    { id: 'social', label: 'Social Media', icon: 'Share2' },
    { id: 'preferences', label: 'Preferences', icon: 'Settings' }
  ];

  const formTypes = [
    { id: 'general', label: 'General Inquiry', description: 'Questions, feedback, or general discussion' },
    { id: 'project', label: 'Project Inquiry', description: 'Detailed project requirements and collaboration' },
    { id: 'collaboration', label: 'Collaboration', description: 'Partnership opportunities and creative ventures' }
  ];

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setSelectedFormType('general');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return (
          <div className="space-y-8">
            {/* Form Type Selection */}
            <div className="bg-card rounded-2xl p-8 creative-shadow-lg">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Choose Your Inquiry Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {formTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedFormType(type.id)}
                    className={`p-6 rounded-xl border-2 creative-transition text-left ${
                      selectedFormType === type.id
                        ? 'border-accent bg-accent/5 ring-2 ring-accent/20' :'border-border hover:border-accent/50 hover:bg-accent/5'
                    }`}
                  >
                    <h4 className="font-semibold text-text-primary mb-2">{type.label}</h4>
                    <p className="text-sm text-text-secondary">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="bg-success/10 border border-success/20 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-success" />
                  <div>
                    <h4 className="font-semibold text-success mb-1">Message Sent Successfully!</h4>
                    <p className="text-sm text-text-secondary">
                      Thank you for reaching out. I'll get back to you within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <ContactForm 
              formType={selectedFormType}
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        );
      case 'methods':
        return <ContactMethods />;
      case 'availability':
        return <AvailabilityStatus />;
      case 'social':
        return <SocialConnections />;
      case 'preferences':
        return <ContactPreferences />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Constellation - PortfolioVerse</title>
        <meta name="description" content="Connect with PortfolioVerse through multiple channels. Get in touch for projects, collaborations, or creative discussions." />
        <meta name="keywords" content="contact, collaboration, creative services, design consultation, project inquiry" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Zap" size={16} />
                <span>Let's Create Something Amazing Together</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Contact <span className="text-gradient">Constellation</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
                Multiple pathways to connect, collaborate, and create. Whether you have a project in mind, 
                want to explore partnerships, or simply want to say hello - I'm here and ready to listen.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground creative-transition creative-hover"
                  onClick={() => setActiveTab('contact')}
                >
                  Start Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="creative-transition hover:border-accent hover:text-accent"
                  onClick={() => setActiveTab('availability')}
                >
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-card border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <nav className="flex space-x-1 overflow-x-auto py-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium creative-transition whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground shadow-creative'
                        : 'text-text-primary hover:bg-muted hover:text-primary'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderTabContent()}
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Don't let great ideas wait. Reach out today and let's discuss how we can 
              bring your vision to life with creativity, strategy, and exceptional execution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90 creative-transition creative-hover"
                onClick={() => {
                  setActiveTab('contact');
                  setSelectedFormType('project');
                }}
              >
                Start Project Discussion
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary creative-transition"
              >
                Schedule Quick Call
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <span className="text-xl font-bold">PortfolioVerse</span>
                </div>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  Creating digital experiences that inspire, engage, and deliver results. 
                  Let's build something extraordinary together.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Contact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span>adwaithv@portfolioverse.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span>+91 5551234567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>Mon-Fri, 9AM-6PM EST</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Follow the Journey</h4>
                <div className="flex space-x-4">
                  {['Linkedin', 'Twitter', 'Dribbble', 'Instagram'].map((platform) => (
                    <button
                      key={platform}
                      className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground creative-transition"
                    >
                      <Icon name={platform} size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-secondary-foreground/60 text-sm">
                © {new Date().getFullYear()} PortfolioVerse. All rights reserved. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ContactConstellation;