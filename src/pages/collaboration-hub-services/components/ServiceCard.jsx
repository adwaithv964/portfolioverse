import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  return (
    <div className={`bg-card rounded-xl border border-border creative-shadow creative-transition ${
      isExpanded ? 'ring-2 ring-accent/20' : 'hover:creative-shadow-lg'
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.iconBg}`}>
              <Icon name={service.icon} size={24} color="white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary">{service.title}</h3>
              <p className="text-sm text-text-secondary">{service.subtitle}</p>
            </div>
          </div>
          <button
            onClick={() => onToggle(service.id)}
            className="p-2 rounded-lg hover:bg-muted creative-transition"
          >
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-text-secondary" 
            />
          </button>
        </div>

        <p className="text-text-secondary mb-4">{service.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={16} className="text-accent" />
              <span className="text-sm text-text-secondary">{service.timeline}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="DollarSign" size={16} className="text-accent" />
              <span className="text-sm text-text-secondary">From {service.startingPrice}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {service.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-xs font-medium text-text-secondary rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div className="border-t border-border pt-4 space-y-4">
            <div>
              <h4 className="font-medium text-text-primary mb-2">What's Included:</h4>
              <ul className="space-y-1">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Check" size={14} className="text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-text-primary mb-2">Process Overview:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{step.title}</p>
                      <p className="text-xs text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {service.testimonials.slice(0, 3).map((testimonial, index) => (
                    <img
                      key={index}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full border-2 border-card object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary">
                  {service.testimonials.length}+ happy clients
                </span>
              </div>
              <Button
                variant="default"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;