import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    description: ''
  });

  const steps = [
    {
      id: 1,
      title: "Project Type",
      description: "What kind of project are you planning?"
    },
    {
      id: 2,
      title: "Budget & Timeline",
      description: "Help us understand your constraints"
    },
    {
      id: 3,
      title: "Contact Details",
      description: "How can we reach you?"
    },
    {
      id: 4,
      title: "Project Details",
      description: "Tell us more about your vision"
    }
  ];

  const projectTypes = [
    { id: 'brand', title: 'Brand Identity', icon: 'Palette', description: 'Logo, visual identity, brand guidelines' },
    { id: 'web', title: 'Web Design', icon: 'Monitor', description: 'Website design and development' },
    { id: 'ux', title: 'UX/UI Design', icon: 'Smartphone', description: 'User experience and interface design' },
    { id: 'dev', title: 'Development', icon: 'Code', description: 'Technical implementation and coding' }
  ];

  const budgetRanges = [
    { id: 'small', label: '$5K - $15K', description: 'Small projects and quick turnarounds' },
    { id: 'medium', label: '$15K - $50K', description: 'Medium complexity projects' },
    { id: 'large', label: '$50K - $100K', description: 'Large scale projects' },
    { id: 'enterprise', label: '$100K+', description: 'Enterprise level solutions' }
  ];

  const timelineOptions = [
    { id: 'rush', label: '2-4 weeks', description: 'Rush project with premium pricing' },
    { id: 'standard', label: '1-3 months', description: 'Standard project timeline' },
    { id: 'extended', label: '3-6 months', description: 'Complex project with multiple phases' },
    { id: 'ongoing', label: '6+ months', description: 'Long-term partnership' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormData({...formData, projectType: type.id})}
                  className={`p-4 rounded-lg border-2 creative-transition text-left ${
                    formData.projectType === type.id
                      ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      formData.projectType === type.id ? 'bg-accent text-white' : 'bg-muted text-text-secondary'
                    }`}>
                      <Icon name={type.icon} size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">{type.title}</h4>
                      <p className="text-sm text-text-secondary">{type.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-text-primary mb-3">Budget Range</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => setFormData({...formData, budget: budget.id})}
                    className={`p-3 rounded-lg border creative-transition text-left ${
                      formData.budget === budget.id
                        ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="font-medium text-text-primary">{budget.label}</div>
                    <div className="text-sm text-text-secondary">{budget.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-text-primary mb-3">Timeline</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {timelineOptions.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() => setFormData({...formData, timeline: timeline.id})}
                    className={`p-3 rounded-lg border creative-transition text-left ${
                      formData.timeline === timeline.id
                        ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="font-medium text-text-primary">{timeline.label}</div>
                    <div className="text-sm text-text-secondary">{timeline.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <Input
              label="Company Name"
              type="text"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Project Description
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border creative-shadow p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-text-primary mb-2">Start Your Project</h3>
        <p className="text-text-secondary">Let's understand your needs and create something amazing together.</p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium creative-transition ${
                currentStep >= step.id
                  ? 'bg-accent text-white' :'bg-muted text-text-secondary'
              }`}>
                {currentStep > step.id ? (
                  <Icon name="Check" size={16} />
                ) : (
                  step.id
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 creative-transition ${
                  currentStep > step.id ? 'bg-accent' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2">
          <h4 className="font-medium text-text-primary">{steps[currentStep - 1].title}</h4>
          <p className="text-sm text-text-secondary">{steps[currentStep - 1].description}</p>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 1}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Previous
          </Button>

          {currentStep === steps.length ? (
            <Button
              type="submit"
              variant="default"
              iconName="Send"
              iconPosition="right"
              className="bg-cta hover:bg-cta/90 text-cta-foreground"
            >
              Submit Project
            </Button>
          ) : (
            <Button
              type="button"
              variant="default"
              onClick={handleNext}
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-primary hover:bg-primary/90"
            >
              Next Step
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;