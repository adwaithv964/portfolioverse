import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBusinessHours, setIsBusinessHours] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Business hours: Mon-Fri, 9AM-6PM EST
      const day = now.getDay();
      const hour = now.getHours();
      const isWeekday = day >= 1 && day <= 5;
      const isDuringHours = hour >= 9 && hour < 18;
      setIsBusinessHours(isWeekday && isDuringHours);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const availabilityData = {
    currentCapacity: 'Accepting New Projects',
    projectSlots: 2,
    nextAvailable: 'August 2025',
    responseTime: isBusinessHours ? '2-4 hours' : '24 hours',
    status: isBusinessHours ? 'online' : 'offline'
  };

  const projectTypes = [
    { type: 'Web Design & Development', available: true, timeline: '4-8 weeks' },
    { type: 'Brand Identity Design', available: true, timeline: '2-4 weeks' },
    { type: 'UI/UX Consultation', available: true, timeline: '1-2 weeks' },
    { type: 'Rush Projects', available: false, timeline: 'Limited availability' }
  ];

  const getStatusColor = () => {
    switch (availabilityData.status) {
      case 'online': return 'text-success';
      case 'busy': return 'text-warning';
      default: return 'text-text-secondary';
    }
  };

  const getStatusIcon = () => {
    switch (availabilityData.status) {
      case 'online': return 'Circle';
      case 'busy': return 'Clock';
      default: return 'Moon';
    }
  };

  const getStatusText = () => {
    if (isBusinessHours) {
      return 'Online & Available';
    }
    return 'Outside Business Hours';
  };

  return (
    <div className="bg-card rounded-2xl p-8 creative-shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-3">Current Availability</h3>
        <p className="text-text-secondary">
          Real-time status and project capacity information
        </p>
      </div>

      {/* Current Status */}
      <div className="bg-muted rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Icon 
                name={getStatusIcon()} 
                size={20} 
                className={`${getStatusColor()} ${availabilityData.status === 'online' ? 'fill-current' : ''}`} 
              />
              {availabilityData.status === 'online' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
              )}
            </div>
            <span className={`font-semibold ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>
          <span className="text-sm text-text-secondary">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              timeZoneName: 'short'
            })}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {availabilityData.projectSlots}
            </div>
            <div className="text-sm text-text-secondary">Open Slots</div>
          </div>

          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">
              {availabilityData.responseTime}
            </div>
            <div className="text-sm text-text-secondary">Response Time</div>
          </div>

          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl font-bold text-warning mb-1">
              {availabilityData.nextAvailable}
            </div>
            <div className="text-sm text-text-secondary">Next Opening</div>
          </div>
        </div>
      </div>

      {/* Project Type Availability */}
      <div className="mb-8">
        <h4 className="font-semibold text-text-primary mb-4">Service Availability</h4>
        <div className="space-y-3">
          {projectTypes.map((project, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-muted rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  project.available ? 'bg-success' : 'bg-error'
                }`}></div>
                <span className="font-medium text-text-primary">{project.type}</span>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${
                  project.available ? 'text-success' : 'text-error'
                }`}>
                  {project.available ? 'Available' : 'Limited'}
                </span>
                <div className="text-xs text-text-secondary">{project.timeline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capacity Notice */}
      <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Icon name="Calendar" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-semibold text-text-primary mb-2">Project Scheduling</h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              I maintain a selective project roster to ensure quality and attention to detail. 
              Current capacity allows for {availabilityData.projectSlots} new projects starting in {availabilityData.nextAvailable}.
            </p>
            <div className="flex items-center space-x-2 text-sm text-accent">
              <Icon name="CheckCircle" size={16} />
              <span>Quality-focused approach with dedicated attention</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;