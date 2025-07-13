import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      description: 'Best for detailed project discussions and formal inquiries',
      value: 'adwaithv@portfolioverse.com',
      icon: 'Mail',
      action: 'mailto:adwaithv@portfolioverse.com',
      responseTime: '24 hours',
      preferred: true
    },
    {
      id: 'phone',
      title: 'Phone',
      description: 'Quick calls for urgent matters and project consultations',
      value: '+91 5551234567',
      icon: 'Phone',
      action: 'tel:+915551234567',
      responseTime: 'Business hours',
      availability: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Professional networking and collaboration opportunities',
      value: 'Connect with me',
      icon: 'Linkedin',
      action: 'https://linkedin.com/in/portfolioverse',
      responseTime: '48 hours',
      external: true
    },
    {
      id: 'calendar',
      title: 'Schedule a Call',
      description: 'Book a 30-minute discovery call to discuss your project',
      value: 'Available slots',
      icon: 'Calendar',
      action: '#',
      responseTime: 'Instant booking',
      cta: true
    }
  ];

  const handleMethodClick = (method) => {
    if (method.external) {
      window.open(method.action, '_blank');
    } else if (method.action.startsWith('mailto:') || method.action.startsWith('tel:')) {
      window.location.href = method.action;
    } else if (method.id === 'calendar') {
      // Calendar booking logic would go here
      console.log('Opening calendar booking...');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-3">Choose Your Preferred Method</h3>
        <p className="text-text-secondary">
          Multiple ways to connect based on your communication style and urgency
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method) => (
          <div
            key={method.id}
            className={`relative bg-card rounded-xl p-6 border creative-transition cursor-pointer group ${
              method.preferred 
                ? 'border-accent bg-accent/5 ring-2 ring-accent/20' :'border-border hover:border-accent/50 hover:bg-accent/5'
            }`}
            onClick={() => handleMethodClick(method)}
          >
            {method.preferred && (
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Preferred
                </span>
              </div>
            )}

            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${
                method.preferred 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-muted text-text-primary group-hover:bg-accent group-hover:text-accent-foreground'
              } creative-transition`}>
                <Icon name={method.icon} size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-text-primary">{method.title}</h4>
                  {method.external && (
                    <Icon name="ExternalLink" size={16} className="text-text-secondary" />
                  )}
                </div>

                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {method.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary">
                      Response: {method.responseTime}
                    </span>
                  </div>

                  {method.availability && (
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-text-secondary" />
                      <span className="text-xs text-text-secondary">
                        {method.availability}
                      </span>
                    </div>
                  )}
                </div>

                {method.cta ? (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="mt-4 w-full"
                  >
                    {method.value}
                  </Button>
                ) : (
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium text-text-primary">
                      {method.value}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mt-8">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-warning mt-0.5" />
          <div>
            <h4 className="font-semibold text-text-primary mb-2">Response Time Commitment</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              I'm committed to responding to all inquiries within the stated timeframes. 
              For urgent matters, please call directly or mark your email as high priority. 
              Currently accepting new projects with start dates in Q3 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;