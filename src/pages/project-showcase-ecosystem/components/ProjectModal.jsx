import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'process', label: 'Process', icon: 'Workflow' },
    { id: 'results', label: 'Results', icon: 'BarChart3' },
    { id: 'technical', label: 'Technical', icon: 'Code' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <p className="text-text-secondary">{project.category} • {project.year}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
            className="hover:bg-destructive/10 hover:text-destructive"
          />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium creative-transition ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-muted/50'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Project Overview</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.fullDescription}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={project.gallery[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    
                    {project.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center creative-transition"
                        >
                          <Icon name="ChevronLeft" size={16} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center creative-transition"
                        >
                          <Icon name="ChevronRight" size={16} />
                        </button>
                        
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                          {project.gallery.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full creative-transition ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="text-sm text-text-secondary">Duration</div>
                      <div className="font-semibold text-foreground">{project.duration}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="text-sm text-text-secondary">Team Size</div>
                      <div className="font-semibold text-foreground">{project.teamSize}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Development Process</h3>
              
              <div className="space-y-6">
                {project.processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-text-secondary mb-3">{step.description}</p>
                      {step.image && (
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={step.image}
                            alt={step.title}
                            className="w-full h-32 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Project Results</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-muted rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name={result.icon} size={24} color="var(--color-success)" />
                    </div>
                    <div className="text-2xl font-bold text-success mb-1">{result.value}</div>
                    <div className="text-sm text-text-secondary">{result.label}</div>
                  </div>
                ))}
              </div>

              {project.testimonial && (
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <blockquote className="text-text-primary italic mb-4">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{project.testimonial.author}</div>
                      <div className="text-sm text-text-secondary">{project.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Technical Implementation</h3>
              
              <div className="space-y-4">
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Architecture Overview</h4>
                  <p className="text-text-secondary text-sm">{project.architecture}</p>
                </div>

                {project.codeSnippet && (
                  <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-300 text-sm font-medium">Code Example</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Copy"
                        className="text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        Copy
                      </Button>
                    </div>
                    <pre className="text-gray-300 text-sm font-mono overflow-x-auto">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Frontend</h4>
                    <ul className="space-y-1">
                      {project.frontend.map((tech, index) => (
                        <li key={index} className="text-text-secondary text-sm flex items-center space-x-2">
                          <Icon name="Check" size={14} color="var(--color-success)" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Backend</h4>
                    <ul className="space-y-1">
                      {project.backend.map((tech, index) => (
                        <li key={index} className="text-text-secondary text-sm flex items-center space-x-2">
                          <Icon name="Check" size={14} color="var(--color-success)" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <div className="flex items-center space-x-4">
            {project.liveUrl && (
              <Button
                variant="default"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                View Live Project
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                iconName="Github"
                iconPosition="left"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                View Code
              </Button>
            )}
          </div>
          
          <div className="text-sm text-text-secondary">
            Last updated: {project.lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;