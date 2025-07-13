import React from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial, featured = false }) => {
  return (
    <div className={`bg-card rounded-xl border border-border creative-shadow p-6 ${
      featured ? 'ring-2 ring-accent/20' : ''
    }`}>
      {/* Quote Icon */}
      <div className="mb-4">
        <Icon name="Quote" size={24} className="text-accent" />
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-text-primary mb-6 leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      {/* Project Details */}
      {testimonial.project && (
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-primary">{testimonial.project.name}</p>
              <p className="text-xs text-text-secondary">{testimonial.project.type}</p>
            </div>
            <div className="flex items-center space-x-2">
              {testimonial.project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-background text-xs font-medium text-text-secondary rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Client Info */}
      <div className="flex items-center space-x-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-medium text-text-primary">{testimonial.name}</p>
          <p className="text-sm text-text-secondary">{testimonial.role}</p>
          <p className="text-sm text-text-secondary">{testimonial.company}</p>
        </div>
        {testimonial.rating && (
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-border'}
              />
            ))}
          </div>
        )}
      </div>

      {/* Results/Metrics */}
      {testimonial.results && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm font-medium text-text-primary mb-2">Project Results:</p>
          <div className="grid grid-cols-2 gap-3">
            {testimonial.results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-semibold text-accent">{result.value}</p>
                <p className="text-xs text-text-secondary">{result.metric}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Date */}
      <div className="mt-4 text-xs text-text-secondary">
        {testimonial.date}
      </div>
    </div>
  );
};

export default TestimonialCard;