import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Generate calendar days for current month
  const getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth, currentYear);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Available time slots
  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "1:30 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:30 PM", available: false }
  ];

  const isDateAvailable = (day) => {
    if (!day) return false;
    const date = new Date(currentYear, currentMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Only allow future dates and weekdays
    return date >= today && date.getDay() !== 0 && date.getDay() !== 6;
  };

  const handleDateSelect = (day) => {
    if (isDateAvailable(day)) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      console.log(`Booking for ${monthNames[currentMonth]} ${selectedDate}, ${currentYear} at ${selectedTime}`);
      // Handle booking logic
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border creative-shadow p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-text-primary mb-2">Schedule Discovery Call</h3>
        <p className="text-text-secondary">Book a free 30-minute consultation to discuss your project.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-text-primary">
              {monthNames[currentMonth]} {currentYear}
            </h4>
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded hover:bg-muted creative-transition">
                <Icon name="ChevronLeft" size={16} className="text-text-secondary" />
              </button>
              <button className="p-1 rounded hover:bg-muted creative-transition">
                <Icon name="ChevronRight" size={16} className="text-text-secondary" />
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="p-2 text-center text-sm font-medium text-text-secondary">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(day)}
                disabled={!isDateAvailable(day)}
                className={`p-2 text-sm rounded-lg creative-transition ${
                  !day
                    ? 'invisible'
                    : !isDateAvailable(day)
                    ? 'text-text-secondary/50 cursor-not-allowed'
                    : selectedDate === day
                    ? 'bg-accent text-white' :'text-text-primary hover:bg-muted'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Time slots */}
        <div>
          <h4 className="text-lg font-medium text-text-primary mb-4">Available Times</h4>
          
          {selectedDate ? (
            <div className="space-y-2">
              <p className="text-sm text-text-secondary mb-3">
                {monthNames[currentMonth]} {selectedDate}, {currentYear}
              </p>
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`w-full p-3 rounded-lg border creative-transition text-left ${
                    !slot.available
                      ? 'border-border bg-muted text-text-secondary/50 cursor-not-allowed'
                      : selectedTime === slot.time
                      ? 'border-accent bg-accent/5 text-accent' :'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{slot.time}</span>
                    {!slot.available && (
                      <span className="text-xs text-text-secondary">Booked</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Icon name="Calendar" size={48} className="text-text-secondary/50 mx-auto mb-3" />
              <p className="text-text-secondary">Select a date to see available times</p>
            </div>
          )}
        </div>
      </div>

      {/* Booking confirmation */}
      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">
                Discovery Call Scheduled
              </p>
              <p className="text-sm text-text-secondary">
                {monthNames[currentMonth]} {selectedDate}, {currentYear} at {selectedTime}
              </p>
            </div>
            <Button
              variant="default"
              onClick={handleBooking}
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      )}

      {/* Meeting details */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <h5 className="font-medium text-text-primary mb-2">What to expect:</h5>
        <ul className="space-y-1 text-sm text-text-secondary">
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-success" />
            <span>30-minute video call via Google Meet</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-success" />
            <span>Project requirements discussion</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-success" />
            <span>Timeline and budget overview</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon name="Check" size={14} className="text-success" />
            <span>Custom proposal within 24 hours</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;