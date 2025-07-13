import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProjects = ({ projects, onProjectSelect }) => {
  return (
    <div className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            You Might Also Like
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore more projects that showcase similar technologies and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-creative border border-border creative-transition hover:shadow-creative-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => onProjectSelect(project)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover creative-transition group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 creative-transition">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      className="bg-white/90 text-primary hover:bg-white w-full"
                    >
                      View Project
                    </Button>
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary creative-transition">
                  {project.title}
                </h3>
                
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
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{project.year}</span>
                  </div>
                  
                  {project.metrics && (
                    <div className="flex items-center space-x-1 text-success font-medium">
                      <Icon name="TrendingUp" size={14} />
                      <span>{project.metrics.value}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Grid3X3"
            iconPosition="left"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;