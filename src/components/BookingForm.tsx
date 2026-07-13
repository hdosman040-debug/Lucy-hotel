import React, { useState } from 'react';
import { Calendar, User, Users, Clock, HelpCircle, Phone, FileText, Moon } from 'lucide-react';

export default function BookingForm() {
  const [serviceType, setServiceType] = useState('Luxury Suite');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [dynamicValue, setDynamicValue] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Contextual configurations based on selected service
  const getDynamicFieldConfig = () => {
    switch (serviceType) {
      case 'Luxury Suite':
        return {
          label: 'Number of Guests / Rooms',
          placeholder: 'e.g., 2 Guests, 1 Suite',
          durationLabel: 'Duration of Stay (Nights)',
          durationPlaceholder: 'e.g., 3 nights',
          icon: <Users className="w-4 h-4 text-gray-400" />
        };
      case 'Food & Restaurant Table':
        return {
          label: 'Preferred Dining Time & Table Size',
          placeholder: 'e.g., 7:30 PM, 4 People',
          durationLabel: 'Seating Period Allocation',
          durationPlaceholder: 'e.g., Standard Dinner window',
          icon: <Clock className="w-4 h-4 text-gray-400" />
        };
      case 'Conference Hall Booking':
        return {
          label: 'Estimated Attendees & Event Type',
          placeholder: 'e.g., 50 People, Corporate Seminar',
          durationLabel: 'Booking Duration (Hours/Days)',
          durationPlaceholder: 'e.g., 8 Hours / 1 Full Day',
          icon: <Users className="w-4 h-4 text-gray-400" />
        };
      case 'Lounge Table Booking':
        return {
          label: 'Arrival Time Canopy',
          placeholder: 'e.g., 9:00 PM onwards',
          durationLabel: 'Expected Stay Duration',
          durationPlaceholder: 'e.g., Evening lounge window',
          icon: <Clock className="w-4 h-4 text-gray-400" />
        };
      default:
        return {
          label: 'Additional Requirements',
          placeholder: 'Any special requests',
          durationLabel: 'Duration',
          durationPlaceholder: 'Specify time scope',
          icon: <HelpCircle className="w-4 h-4 text-gray-400" />
        };
    }
  };

  const fieldConfig = getDynamicFieldConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardened front-end structural data check
    if (!fullName.trim() || !phoneNumber.trim() || !date || !duration.trim()) {
      alert('Please fill out all foundational reservation requirements.');
      return;
    }

    const hotelWhatsAppNumber = '251900000000'; // Target operator line

    // Generates a clean, beautifully formatted corporate text payload block
    const payloadText = 
`🏨 *LUCY HOTEL - LUXURY DISPATCH ENGINE*
---------------------------------------
👤 *Guest Name:* ${fullName}
📞 *Contact Phone:* ${phoneNumber}
📅 *Target Date:* ${date}
⏳ *${fieldConfig.durationLabel}:* ${duration}
✨ *Service Category:* ${serviceType}
📊 *${fieldConfig.label}:* ${dynamicValue || 'Standard Setup'}
📝 *Bespoke Requests:* ${specialRequests || 'None specified'}
---------------------------------------
_Sent via Lucy Front-End Client Matrix._`;

    const encodedPayload = encodeURIComponent(payloadText);
    window.open(`https://wa.me/${hotelWhatsAppNumber}?text=${encodedPayload}`, '_blank');
  };

  return (
    <div className="max-w-md mx-auto bg-[#11141A] border border-gray-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl">
      <div className="text-center space-y-1">
        <h3 className="text-xl font-bold text-white tracking-wide uppercase">Operator Direct Booking</h3>
        <p className="text-xs text-gray-400">Expanded enterprise validation payload routed directly to dispatch.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        {/* Full Name Input */}
        <div className="space-y-1">
          <label className="block text-gray-400 font-medium">Guest Full Name *</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="w-4 h-4 text-gray-400" />
            </span>
            <input 
              type="text" 
              required 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#1a1d24] border border-gray-700 rounded p-2.5 pl-10 text-white focus:outline-none focus:border-amber-500 transition-colors" 
              placeholder="e.g. Osman Mohammed" 
            />
          </div>
        </div>

        {/* Contact Phone Field */}
        <div className="space-y-1">
          <label className="block text-gray-400 font-medium">Callback Phone Number *</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="w-4 h-4 text-gray-400" />
            </span>
            <input 
              type="tel" 
              required 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-[#1a1d24] border border-gray-700 rounded p-2.5 pl-10 text-white focus:outline-none focus:border-amber-500 transition-colors" 
              placeholder="e.g. +251 900 000 000" 
            />
          </div>
        </div>

        {/* Main Selection Dropdown */}
        <div className="space-y-1">
          <label className="block text-gray-400 font-medium">Select Desired Option</label>
          <select 
            value={serviceType}
            onChange={(e) => {
              setServiceType(e.target.value);
              setDynamicValue(''); 
              setDuration('');
            }}
            className="w-full bg-[#1a1d24] border border-gray-700 rounded p-2.5 text-white focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="Luxury Suite">Luxury Suite (Premium Accommodation)</option>
            <option value="Food & Restaurant Table">Food & Restaurant Table Reservation</option>
            <option value="Conference Hall Booking">Executive Conference Hall Booking</option>
            <option value="Lounge Table Booking">Charcoal Lounge & Bar Reservation</option>
          </select>
        </div>

        {/* Dynamic Contextual Field Input Layer */}
        <div className="space-y-1">
          <label className="block text-gray-400 font-medium">{fieldConfig.label}</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {fieldConfig.icon}
            </span>
            <input 
              type="text" 
              value={dynamicValue}
              onChange={(e) => setDynamicValue(e.target.value)}
              className="w-full bg-[#1a1d24] border border-gray-700 rounded p-2.5 pl-10 text-white focus:outline-none focus:border-amber-500 transition-colors" 
              placeholder={fieldConfig.placeholder}
            />
          </div>
        </div>

        {/* Two-Column Date & Dynamic Duration Grid Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-gray-400 font-medium">Target Date *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar className="w-4 h-4 text-gray-400" />
              </span>
              <input 
                type="date" 
                required 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#1a1d24] border border-gray-700 rounded p-2.5 pl-10 text-white focus:outline-none focus:border-amber-500 transition-colors text-xs" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-gray-400 font-medium">{fieldConfig.durationLabel} *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Moon className="w-4 h-4 text-gray-400" />
              </span>
              <input 
                type="text" 
                required 
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-[#1a1d24] border border-gray-700 rounded p-2.5 pl-10 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                placeholder={fieldConfig.durationPlaceholder}
              />
            </div>
          </div>
        </div>

        {/* Bespoke Custom Requests Layer */}
        <div className="space-y-1">
          <label className="block text-gray-400 font-medium">Bespoke Custom Requests (Optional)</label>
          <div className="relative">
            <span className="absolute top-3 left-3 pointer-events-none">
              <FileText className="w-4 h-4 text-gray-400" />
            </span>
            <textarea 
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows={3}
              className="w-full bg-[#1a1d24] border border-gray-700 rounded p-2.5 pl-10 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" 
              placeholder="e.g. Traditional Wollo welcome presentation, high-floor suite preference, or strict dietary guidelines..."
            />
          </div>
        </div>

        {/* Submit Execution Button */}
        <button 
          type="submit" 
          className="w-full bg-amber-500 text-[#11141A] font-bold py-3 rounded hover:bg-amber-600 transition-colors uppercase tracking-wider text-xs font-semibold mt-4 shadow-md active:scale-[0.99] transform"
        >
          Dispatch Extended Payload via WhatsApp
        </button>
      </form>
    </div>
  );
}
