import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden shadow-creative border border-border creative-transition hover:shadow-creative-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover creative-transition group-hover:scale-105"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent creative-transition ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                iconName="Eye"
                iconPosition="left"
                onClick={() => onViewDetails(project)}
                className="bg-white/90 text-primary hover:bg-white"
              >
                View Details
              </Button>
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-lg">
            {project.category}
          </span>
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Star" size={16} color="white" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary creative-transition">
            {project.title}
          </h3>
          <span className="text-sm text-text-secondary ml-2">
            {project.year}
          </span>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-text-primary text-xs rounded-lg"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-lg">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{project.duration}</span>
            </div>
            {project.teamSize && (
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} />
                <span>{project.teamSize}</span>
              </div>
            )}
          </div>

          {project.metrics && (
            <div className="flex items-center space-x-1 text-success text-sm font-medium">
              <Icon name="TrendingUp" size={14} />
              <span>{project.metrics.value}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;