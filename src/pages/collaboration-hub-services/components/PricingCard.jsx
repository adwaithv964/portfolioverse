import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCard = ({ package: pkg, popular = false }) => {
  return (
    <div className={`bg-card rounded-xl border creative-shadow p-6 relative ${
      popular 
        ? 'border-accent ring-2 ring-accent/20 scale-105' :'border-border hover:border-accent/50'
    } creative-transition`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      {/* Package Header */}
      <div className="text-center mb-6">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${pkg.iconBg}`}>
          <Icon name={pkg.icon} size={28} color="white" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">{pkg.name}</h3>
        <p className="text-text-secondary text-sm">{pkg.description}</p>
      </div>

      {/* Pricing */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-sm text-text-secondary">Starting at</span>
          <span className="text-3xl font-bold text-text-primary">${pkg.startingPrice}</span>
        </div>
        <p className="text-sm text-text-secondary mt-1">{pkg.priceNote}</p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <ul className="space-y-3">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Icon 
                name={feature.included ? "Check" : "X"} 
                size={16} 
                className={feature.included ? "text-success" : "text-text-secondary/50"} 
              />
              <span className={`text-sm ${
                feature.included ? "text-text-primary" : "text-text-secondary/50"
              }`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline & Deliverables */}
      <div className="mb-6 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={14} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">Timeline</span>
          </div>
          <span className="text-sm text-text-secondary">{pkg.timeline}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Package" size={14} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">Deliverables</span>
          </div>
          <span className="text-sm text-text-secondary">{pkg.deliverables}</span>
        </div>
      </div>

      {/* CTA Button */}
      <Button
        variant={popular ? "default" : "outline"}
        fullWidth
        iconName="ArrowRight"
        iconPosition="right"
        className={popular ? "bg-accent hover:bg-accent/90 text-white" : ""}
      >
        {pkg.ctaText}
      </Button>

      {/* Additional Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-text-secondary">
          {pkg.additionalInfo}
        </p>
      </div>
    </div>
  );
};

export default PricingCard;