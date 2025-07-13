import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';


const ContactForm = ({ formType, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    urgency: 'normal',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});

  const projectTypeOptions = [
    { value: 'web-design', label: 'Web Design & Development' },
    { value: 'branding', label: 'Brand Identity & Design' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'mobile-app', label: 'Mobile App Design' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'other', label: 'Other Creative Services' }
  ];

  const budgetOptions = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush project)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'normal', label: 'Normal - Standard project' },
    { value: 'high', label: 'High - Urgent project' },
    { value: 'critical', label: 'Critical - Emergency support' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length < 20) newErrors.message = 'Please provide more details (minimum 20 characters)';
    if (!formData.terms) newErrors.terms = 'Please accept the terms to continue';

    if (formType === 'project') {
      if (!formData.projectType) newErrors.projectType = 'Please select a project type';
      if (!formData.timeline) newErrors.timeline = 'Please select your timeline';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'project': return 'Start Your Project';
      case 'collaboration': return 'Let\'s Collaborate';
      default: return 'Get In Touch';
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case 'project': 
        return 'Ready to bring your vision to life? Share your project details and let\'s create something extraordinary together.';
      case 'collaboration': 
        return 'Interested in partnering up? I\'m always open to exciting collaborations with fellow creatives and innovative brands.';
      default: 
        return 'Have a question, want to say hello, or discuss opportunities? I\'d love to hear from you.';
    }
  };

  return (
    <div className="bg-card rounded-2xl p-8 creative-shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-3">{getFormTitle()}</h3>
        <p className="text-text-secondary leading-relaxed">{getFormDescription()}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company/Organization"
            type="text"
            placeholder="Your company (optional)"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />

          <Select
            label="Inquiry Priority"
            options={urgencyOptions}
            value={formData.urgency}
            onChange={(value) => handleInputChange('urgency', value)}
            placeholder="Select priority level"
          />
        </div>

        {formType === 'project' && (
          <>
            <Select
              label="Project Type"
              options={projectTypeOptions}
              value={formData.projectType}
              onChange={(value) => handleInputChange('projectType', value)}
              placeholder="What type of project?"
              error={errors.projectType}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Budget Range"
                options={budgetOptions}
                value={formData.budget}
                onChange={(value) => handleInputChange('budget', value)}
                placeholder="Select budget range"
              />

              <Select
                label="Timeline"
                options={timelineOptions}
                value={formData.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                placeholder="When do you need this?"
                error={errors.timeline}
                required
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            rows="6"
            placeholder={formType === 'project' 
              ? "Tell me about your project vision, goals, and any specific requirements..."
              : "Share your thoughts, questions, or collaboration ideas..."
            }
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <Checkbox
            label="Subscribe to creative insights and updates"
            description="Get occasional emails about design trends, new projects, and creative resources"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange('newsletter', e.target.checked)}
          />

          <Checkbox
            label="I agree to the terms and privacy policy"
            description="Your information will be used solely for communication purposes"
            checked={formData.terms}
            onChange={(e) => handleInputChange('terms', e.target.checked)}
            error={errors.terms}
            required
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-cta hover:bg-cta/90 text-cta-foreground creative-transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;