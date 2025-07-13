import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectHero = ({ project, onViewLive, onViewCode }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="text-white/70 text-sm">{project.timeline}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={onViewLive}
                className="bg-white text-primary hover:bg-white/90"
              >
                View Live Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Github"
                iconPosition="left"
                onClick={onViewCode}
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Code
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl creative-hover">
              <Image
                src={project.heroImage}
                alt={`${project.title} preview`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {project.metrics && (
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">
                      {project.metrics.improvement}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {project.metrics.metric}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;