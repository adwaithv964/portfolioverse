import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const clientLogos = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "InnovateLab", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center" },
    { name: "DesignStudio", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "StartupX", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center" },
    { name: "CreativeAgency", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "TechFlow", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center" }
  ];

  const certifications = [
    {
      name: "Google Partner",
      icon: "Award",
      description: "Certified Google Ads & Analytics Partner",
      color: "bg-blue-500"
    },
    {
      name: "AWS Certified",
      icon: "Cloud",
      description: "Amazon Web Services Solutions Architect",
      color: "bg-orange-500"
    },
    {
      name: "Figma Expert",
      icon: "Palette",
      description: "Advanced Figma Design Certification",
      color: "bg-purple-500"
    },
    {
      name: "React Specialist",
      icon: "Code",
      description: "Meta React Developer Certification",
      color: "bg-cyan-500"
    }
  ];

  const achievements = [
    {
      metric: "150+",
      label: "Projects Completed",
      icon: "CheckCircle"
    },
    {
      metric: "98%",
      label: "Client Satisfaction",
      icon: "Heart"
    },
    {
      metric: "5 Years",
      label: "Industry Experience",
      icon: "Calendar"
    },
    {
      metric: "24/7",
      label: "Support Available",
      icon: "Clock"
    }
  ];

  const associations = [
    {
      name: "AIGA",
      fullName: "American Institute of Graphic Arts",
      description: "Professional design organization member"
    },
    {
      name: "Awwwards",
      fullName: "Awwwards Jury Member",
      description: "Recognized for design excellence"
    },
    {
      name: "Dribbble",
      fullName: "Dribbble Pro Member",
      description: "Featured designer in creative community"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Client Logos */}
      <div className="bg-card rounded-xl border border-border creative-shadow p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
          Trusted by Leading Companies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted creative-transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-8 object-contain opacity-60 hover:opacity-100 creative-transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-card rounded-xl border border-border creative-shadow p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
          By the Numbers
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={achievement.icon} size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {achievement.metric}
              </div>
              <div className="text-sm text-text-secondary">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-card rounded-xl border border-border creative-shadow p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
          Professional Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted creative-transition"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cert.color}`}>
                <Icon name={cert.icon} size={20} color="white" />
              </div>
              <div>
                <p className="font-medium text-text-primary">{cert.name}</p>
                <p className="text-sm text-text-secondary">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Associations */}
      <div className="bg-card rounded-xl border border-border creative-shadow p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
          Professional Associations
        </h3>
        <div className="space-y-4">
          {associations.map((association, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted creative-transition"
            >
              <div>
                <p className="font-medium text-text-primary">{association.name}</p>
                <p className="text-sm text-text-secondary">{association.fullName}</p>
                <p className="text-xs text-text-secondary mt-1">{association.description}</p>
              </div>
              <Icon name="ExternalLink" size={16} className="text-accent" />
            </div>
          ))}
        </div>
      </div>

      {/* Security & Trust */}
      <div className="bg-card rounded-xl border border-border creative-shadow p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
          Security & Trust
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} className="text-green-600" />
            </div>
            <p className="font-medium text-text-primary mb-1">SSL Secured</p>
            <p className="text-sm text-text-secondary">256-bit encryption for all communications</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="FileText" size={24} className="text-blue-600" />
            </div>
            <p className="font-medium text-text-primary mb-1">NDA Protected</p>
            <p className="text-sm text-text-secondary">Your ideas and data are completely confidential</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-purple-600" />
            </div>
            <p className="font-medium text-text-primary mb-1">Insured Business</p>
            <p className="text-sm text-text-secondary">Professional liability insurance coverage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;