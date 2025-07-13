import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactPreferences = () => {
  const preferences = [
    {
      category: 'Project Inquiries',
      icon: 'Briefcase',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      items: [
        'Detailed project briefs with clear objectives',
        'Budget range and timeline expectations',
        'Reference materials and inspiration',
        'Team structure and key stakeholders',
        'Technical requirements and constraints'
      ],
      preferredMethod: 'Email or project inquiry form',
      responseTime: '24-48 hours'
    },
    {
      category: 'Collaboration Opportunities',
      icon: 'Users',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      items: [
        'Partnership proposals with mutual benefits',
        'Creative challenges and experimental projects',
        'Speaking engagements and workshops',
        'Mentorship and knowledge sharing',
        'Community initiatives and events'
      ],
      preferredMethod: 'LinkedIn or collaboration form',
      responseTime: '48-72 hours'
    },
    {
      category: 'General Inquiries',
      icon: 'MessageCircle',
      color: 'text-success',
      bgColor: 'bg-success/10',
      items: [
        'Design advice and consultations',
        'Career guidance and mentorship',
        'Tool recommendations and resources',
        'Industry insights and trends',
        'Press and media requests'
      ],
      preferredMethod: 'Any contact method',
      responseTime: '2-5 business days'
    }
  ];

  const communicationStyle = {
    approach: 'Direct and collaborative',
    values: ['Transparency', 'Creativity', 'Quality', 'Timeliness'],
    workingStyle: [
      'Regular check-ins and progress updates',
      'Open feedback and iterative improvement',
      'Clear documentation and deliverables',
      'Flexible communication based on project needs'
    ]
  };

  const idealProjects = [
    {
      type: 'Brand Identity & Strategy',
      description: 'Complete brand development from concept to implementation',
      duration: '6-12 weeks',
      engagement: 'High collaboration'
    },
    {
      type: 'Digital Product Design',
      description: 'Web applications, mobile apps, and digital experiences',
      duration: '8-16 weeks',
      engagement: 'Ongoing partnership'
    },
    {
      type: 'Design System Development',
      description: 'Scalable design systems for growing organizations',
      duration: '4-8 weeks',
      engagement: 'Technical collaboration'
    },
    {
      type: 'Creative Consultation',
      description: 'Strategic design guidance and creative direction',
      duration: '2-4 weeks',
      engagement: 'Advisory role'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-3">Communication Preferences</h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Understanding how I work best helps ensure smooth collaboration and successful outcomes. 
          Here's what makes for effective communication and project partnerships.
        </p>
      </div>

      {/* Contact Preferences by Category */}
      <div className="space-y-6">
        {preferences.map((pref, index) => (
          <div key={index} className="bg-card rounded-xl p-6 creative-shadow">
            <div className="flex items-start space-x-4 mb-6">
              <div className={`p-3 rounded-lg ${pref.bgColor}`}>
                <Icon name={pref.icon} size={24} className={pref.color} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-text-primary mb-2">{pref.category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-text-primary">Preferred Method:</span>
                    <span className="text-text-secondary ml-2">{pref.preferredMethod}</span>
                  </div>
                  <div>
                    <span className="font-medium text-text-primary">Response Time:</span>
                    <span className="text-text-secondary ml-2">{pref.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-text-primary mb-3">What to Include:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {pref.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className={pref.color} />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Communication Style */}
      <div className="bg-card rounded-xl p-8 creative-shadow">
        <h4 className="text-xl font-bold text-text-primary mb-6">My Communication Style</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="MessageSquare" size={18} className="text-accent" />
              <span>Approach & Values</span>
            </h5>
            <p className="text-text-secondary mb-4 leading-relaxed">
              I believe in {communicationStyle.approach.toLowerCase()} communication that builds trust and drives results.
            </p>
            <div className="flex flex-wrap gap-2">
              {communicationStyle.values.map((value, index) => (
                <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="Settings" size={18} className="text-primary" />
              <span>Working Style</span>
            </h5>
            <div className="space-y-2">
              {communicationStyle.workingStyle.map((style, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={16} className="text-primary mt-0.5" />
                  <span className="text-sm text-text-secondary">{style}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ideal Project Types */}
      <div className="bg-card rounded-xl p-8 creative-shadow">
        <h4 className="text-xl font-bold text-text-primary mb-6">Ideal Project Partnerships</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {idealProjects.map((project, index) => (
            <div key={index} className="p-6 bg-muted rounded-lg">
              <h5 className="font-semibold text-text-primary mb-2">{project.type}</h5>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Duration:</span>
                  <span className="text-text-primary font-medium">{project.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Engagement:</span>
                  <span className="text-text-primary font-medium">{project.engagement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Guidelines */}
      <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-warning mt-0.5" />
          <div>
            <h4 className="font-semibold text-text-primary mb-2">Tips for Effective Communication</h4>
            <div className="text-sm text-text-secondary space-y-2">
              <p>• <strong>Be specific:</strong> Clear project details help me provide better guidance and accurate timelines.</p>
              <p>• <strong>Share inspiration:</strong> Visual references and examples help align creative vision early.</p>
              <p>• <strong>Discuss budget openly:</strong> Transparent budget discussions ensure we're aligned on scope and expectations.</p>
              <p>• <strong>Timeline flexibility:</strong> Quality work takes time - let's discuss realistic timelines that work for both of us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPreferences;