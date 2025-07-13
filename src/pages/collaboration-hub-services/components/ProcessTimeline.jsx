import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      id: 1,
      title: "Discovery & Strategy",
      duration: "1-2 weeks",
      icon: "Search",
      color: "bg-blue-500",
      description: "We dive deep into understanding your business, goals, and target audience to create a solid foundation.",
      deliverables: [
        "Project kickoff meeting",
        "Stakeholder interviews",
        "Competitive analysis",
        "User research insights",
        "Strategic brief document"
      ],
      activities: [
        { name: "Kickoff Workshop", duration: "2 hours" },
        { name: "Research Phase", duration: "3-5 days" },
        { name: "Strategy Development", duration: "2-3 days" },
        { name: "Brief Presentation", duration: "1 hour" }
      ]
    },
    {
      id: 2,
      title: "Concept & Design",
      duration: "2-4 weeks",
      icon: "Palette",
      color: "bg-purple-500",
      description: "Transform insights into visual concepts and design solutions that resonate with your audience.",
      deliverables: [
        "Mood boards & style exploration",
        "Initial design concepts",
        "Design system foundation",
        "Interactive prototypes",
        "Design presentation"
      ],
      activities: [
        { name: "Concept Development", duration: "1 week" },
        { name: "Design Iterations", duration: "1-2 weeks" },
        { name: "Prototype Creation", duration: "2-3 days" },
        { name: "Client Review", duration: "2 days" }
      ]
    },
    {
      id: 3,
      title: "Development & Build",
      duration: "3-6 weeks",
      icon: "Code",
      color: "bg-green-500",
      description: "Bring designs to life with clean, efficient code and robust functionality.",
      deliverables: [
        "Development environment setup",
        "Frontend implementation",
        "Backend integration",
        "Quality assurance testing",
        "Performance optimization"
      ],
      activities: [
        { name: "Environment Setup", duration: "1-2 days" },
        { name: "Frontend Development", duration: "2-3 weeks" },
        { name: "Backend Integration", duration: "1-2 weeks" },
        { name: "Testing & QA", duration: "3-5 days" }
      ]
    },
    {
      id: 4,
      title: "Launch & Optimization",
      duration: "1-2 weeks",
      icon: "Rocket",
      color: "bg-orange-500",
      description: "Deploy your project and ensure everything runs smoothly with ongoing support.",
      deliverables: [
        "Production deployment",
        "Performance monitoring",
        "User training materials",
        "Documentation handover",
        "30-day support period"
      ],
      activities: [
        { name: "Deployment Setup", duration: "1-2 days" },
        { name: "Go-Live Process", duration: "1 day" },
        { name: "Monitoring & Fixes", duration: "1 week" },
        { name: "Training & Handover", duration: "2-3 days" }
      ]
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border creative-shadow p-6">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-text-primary mb-2">Our Process</h3>
        <p className="text-text-secondary">A proven methodology that ensures successful project delivery every time.</p>
      </div>

      {/* Timeline Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-center">
              <button
                onClick={() => setActivePhase(phase.id)}
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center creative-transition ${
                  activePhase === phase.id
                    ? `${phase.color} text-white shadow-lg scale-110`
                    : 'bg-muted text-text-secondary hover:bg-border'
                }`}
              >
                <Icon name={phase.icon} size={20} />
              </button>
              {index < phases.length - 1 && (
                <div className={`w-full h-0.5 mx-4 creative-transition ${
                  activePhase > phase.id ? phase.color : 'bg-border'
                }`} />
              )}
            </div>
          ))}
          
          {/* Progress line background */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-border -z-10" />
        </div>

        {/* Phase labels */}
        <div className="flex items-center justify-between mt-4">
          {phases.map((phase) => (
            <div key={phase.id} className="text-center max-w-24">
              <p className={`text-sm font-medium creative-transition ${
                activePhase === phase.id ? 'text-text-primary' : 'text-text-secondary'
              }`}>
                {phase.title}
              </p>
              <p className="text-xs text-text-secondary mt-1">{phase.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Phase Details */}
      {phases.map((phase) => (
        activePhase === phase.id && (
          <div key={phase.id} className="space-y-6">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${phase.color} text-white mb-4`}>
                <Icon name={phase.icon} size={28} />
              </div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">{phase.title}</h4>
              <p className="text-text-secondary max-w-2xl mx-auto">{phase.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Deliverables */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h5 className="font-medium text-text-primary mb-3 flex items-center">
                  <Icon name="Package" size={16} className="mr-2" />
                  Key Deliverables
                </h5>
                <ul className="space-y-2">
                  {phase.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h5 className="font-medium text-text-primary mb-3 flex items-center">
                  <Icon name="Activity" size={16} className="mr-2" />
                  Phase Activities
                </h5>
                <div className="space-y-3">
                  {phase.activities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">{activity.name}</span>
                      <span className="text-xs text-text-secondary bg-background px-2 py-1 rounded">
                        {activity.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase Progress Indicator */}
            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-primary">Phase Progress</span>
                <span className="text-sm text-text-secondary">
                  Phase {phase.id} of {phases.length}
                </span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div 
                  className={`h-2 rounded-full creative-transition ${phase.color}`}
                  style={{ width: `${(phase.id / phases.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default ProcessTimeline;