import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import OnboardingForm from './components/OnboardingForm';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ProcessTimeline from './components/ProcessTimeline';
import TestimonialCard from './components/TestimonialCard';
import PricingCard from './components/PricingCard';
import FAQSection from './components/FAQSection';
import TrustSignals from './components/TrustSignals';

const CollaborationHubServices = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      id: 1,
      title: "Brand Identity Design",
      subtitle: "Complete visual identity systems",
      icon: "Palette",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      description: "Create a memorable brand identity that resonates with your audience and stands out in the marketplace.",
      timeline: "3-4 weeks",
      startingPrice: "$5,000",
      tags: ["Logo", "Guidelines", "Assets"],
      includes: [
        "Logo design & variations",
        "Brand color palette",
        "Typography system",
        "Brand guidelines document",
        "Business card design",
        "Social media templates"
      ],
      process: [
        { title: "Discovery", description: "Brand research & strategy" },
        { title: "Concept", description: "Initial design exploration" },
        { title: "Refinement", description: "Iterate & perfect design" }
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
          name: "Mike Chen",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
          name: "Lisa Rodriguez",
          avatar: "https://randomuser.me/api/portraits/women/28.jpg"
        }
      ]
    },
    {
      id: 2,
      title: "Web Design & Development",
      subtitle: "Modern, responsive websites",
      icon: "Monitor",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      description: "Build stunning, high-performance websites that convert visitors into customers and grow your business.",
      timeline: "6-8 weeks",
      startingPrice: "$8,000",
      tags: ["Responsive", "CMS", "SEO"],
      includes: [
        "Custom website design",
        "Responsive development",
        "Content management system",
        "SEO optimization",
        "Performance optimization",
        "3 months support"
      ],
      process: [
        { title: "Planning", description: "Sitemap & wireframes" },
        { title: "Design", description: "Visual design & prototypes" },
        { title: "Development", description: "Code & implementation" }
      ],
      testimonials: [
        {
          name: "David Park",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
          name: "Emma Wilson",
          avatar: "https://randomuser.me/api/portraits/women/35.jpg"
        },
        {
          name: "Alex Thompson",
          avatar: "https://randomuser.me/api/portraits/men/38.jpg"
        }
      ]
    },
    {
      id: 3,
      title: "UX/UI Design",
      subtitle: "User-centered digital experiences",
      icon: "Smartphone",
      iconBg: "bg-gradient-to-br from-green-500 to-teal-500",
      description: "Design intuitive user experiences that delight users and drive engagement through thoughtful interface design.",
      timeline: "4-6 weeks",
      startingPrice: "$6,000",
      tags: ["Research", "Prototyping", "Testing"],
      includes: [
        "User research & personas",
        "Information architecture",
        "Wireframes & prototypes",
        "Visual interface design",
        "Usability testing",
        "Design system creation"
      ],
      process: [
        { title: "Research", description: "User needs analysis" },
        { title: "Design", description: "Interface & interaction" },
        { title: "Testing", description: "Validate & optimize" }
      ],
      testimonials: [
        {
          name: "Jennifer Lee",
          avatar: "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
          name: "Robert Kim",
          avatar: "https://randomuser.me/api/portraits/men/29.jpg"
        },
        {
          name: "Maria Garcia",
          avatar: "https://randomuser.me/api/portraits/women/31.jpg"
        }
      ]
    },
    {
      id: 4,
      title: "Technical Development",
      subtitle: "Custom web applications",
      icon: "Code",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      description: "Build robust, scalable web applications with modern technologies and best practices for optimal performance.",
      timeline: "8-12 weeks",
      startingPrice: "$12,000",
      tags: ["React", "Node.js", "Database"],
      includes: [
        "Custom application development",
        "Database design & setup",
        "API development",
        "Third-party integrations",
        "Security implementation",
        "Deployment & hosting"
      ],
      process: [
        { title: "Architecture", description: "Technical planning" },
        { title: "Development", description: "Code implementation" },
        { title: "Testing", description: "QA & optimization" }
      ],
      testimonials: [
        {
          name: "Chris Anderson",
          avatar: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        {
          name: "Nicole Brown",
          avatar: "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
          name: "James Wilson",
          avatar: "https://randomuser.me/api/portraits/men/41.jpg"
        }
      ]
    }
  ];

  const featuredTestimonials = [
    {
      content: "Working with PortfolioVerse transformed our entire digital presence. The attention to detail and creative vision exceeded our expectations. Our website now perfectly represents our brand and has significantly improved our conversion rates.",
      name: "Sarah Mitchell",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      date: "December 2024",
      project: {
        name: "Complete Brand & Website Redesign",
        type: "Brand Identity + Web Development",
        tags: ["Branding", "Web Design", "Development"]
      },
      results: [
        { value: "150%", metric: "Conversion Increase" },
        { value: "3.2s", metric: "Load Time" }
      ]
    },
    {
      content: "The UX research and design process was incredibly thorough. They took time to understand our users and created an interface that's both beautiful and highly functional. Our user engagement has improved dramatically.",
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "InnovateApp",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      rating: 5,
      date: "November 2024",
      project: {
        name: "Mobile App UX/UI Redesign",
        type: "UX/UI Design",
        tags: ["UX Research", "UI Design", "Mobile"]
      },
      results: [
        { value: "85%", metric: "User Satisfaction" },
        { value: "40%", metric: "Task Completion" }
      ]
    }
  ];

  const pricingPackages = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      startingPrice: "3,000",
      priceNote: "Basic package",
      icon: "Zap",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      timeline: "2-3 weeks",
      deliverables: "5-8 items",
      features: [
        { name: "Logo design", included: true },
        { name: "Basic brand guidelines", included: true },
        { name: "Business card design", included: true },
        { name: "Social media templates", included: true },
        { name: "Website design", included: false },
        { name: "Development", included: false },
        { name: "Advanced integrations", included: false },
        { name: "Ongoing support", included: false }
      ],
      ctaText: "Get Started",
      additionalInfo: "Perfect for new businesses"
    },
    {
      name: "Professional",
      description: "Comprehensive solution for growing businesses",
      startingPrice: "8,000",
      priceNote: "Most popular choice",
      icon: "Star",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      timeline: "4-6 weeks",
      deliverables: "10-15 items",
      features: [
        { name: "Complete brand identity", included: true },
        { name: "Comprehensive guidelines", included: true },
        { name: "Marketing materials", included: true },
        { name: "Website design", included: true },
        { name: "Responsive development", included: true },
        { name: "CMS integration", included: true },
        { name: "SEO optimization", included: true },
        { name: "3 months support", included: true }
      ],
      ctaText: "Choose Professional",
      additionalInfo: "Best value for most businesses"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      startingPrice: "15,000",
      priceNote: "Custom pricing available",
      icon: "Crown",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      timeline: "8-12 weeks",
      deliverables: "20+ items",
      features: [
        { name: "Complete brand system", included: true },
        { name: "Advanced web application", included: true },
        { name: "Custom integrations", included: true },
        { name: "Database design", included: true },
        { name: "API development", included: true },
        { name: "Security implementation", included: true },
        { name: "Performance optimization", included: true },
        { name: "12 months support", included: true }
      ],
      ctaText: "Contact Sales",
      additionalInfo: "Tailored for enterprise needs"
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const tabs = [
    { id: 'services', label: 'Services', icon: 'Settings' },
    { id: 'process', label: 'Process', icon: 'GitBranch' },
    { id: 'pricing', label: 'Pricing', icon: 'DollarSign' },
    { id: 'booking', label: 'Book Call', icon: 'Calendar' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services - PortfolioVerse | Professional Design & Development</title>
        <meta name="description" content="Transform your digital presence with our comprehensive design and development services. From brand identity to web applications, we create solutions that drive results." />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                <span>Professional Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Transform Your
                <span className="text-gradient block">Digital Presence</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                From brand identity to web applications, we create comprehensive digital solutions that drive results and elevate your business to new heights.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground"
                  onClick={() => setActiveTab('booking')}
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowDown"
                  iconPosition="right"
                  onClick={() => setActiveTab('services')}
                >
                  View Services
                </Button>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-card rounded-xl border border-border creative-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Results-Driven</h3>
                <p className="text-text-secondary">Every project is designed to achieve measurable business outcomes and ROI.</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border creative-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Collaborative</h3>
                <p className="text-text-secondary">We work closely with you throughout the entire process as true partners.</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border creative-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Future-Ready</h3>
                <p className="text-text-secondary">Built with modern technologies and scalable architecture for long-term success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-1 overflow-x-auto py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium creative-transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-accent text-white shadow-creative'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'services' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Our Services</h2>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    Comprehensive digital solutions tailored to your unique needs and business objectives.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isExpanded={expandedService === service.id}
                      onToggle={handleServiceToggle}
                    />
                  ))}
                </div>

                {/* Featured Testimonials */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Client Success Stories</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredTestimonials.map((testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        testimonial={testimonial}
                        featured={index === 0}
                      />
                    ))}
                  </div>
                </div>

                {/* Trust Signals */}
                <TrustSignals />
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Our Process</h2>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    A proven methodology that ensures successful project delivery and exceptional results.
                  </p>
                </div>
                <ProcessTimeline />
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Investment Packages</h2>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    Transparent pricing with flexible options to match your budget and project scope.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                  {pricingPackages.map((pkg, index) => (
                    <PricingCard
                      key={index}
                      package={pkg}
                      popular={index === 1}
                    />
                  ))}
                </div>

                <FAQSection />
              </div>
            )}

            {activeTab === 'booking' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Let's Start Your Project</h2>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    Ready to transform your digital presence? Schedule a consultation or start your project inquiry.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <OnboardingForm />
                  <AvailabilityCalendar />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something extraordinary together. Start your project today.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => setActiveTab('booking')}
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Chat With Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold">PortfolioVerse</span>
          </div>
          <p className="text-secondary-foreground/80 mb-4">
            Transforming ideas into extraordinary digital experiences.
          </p>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} PortfolioVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CollaborationHubServices;