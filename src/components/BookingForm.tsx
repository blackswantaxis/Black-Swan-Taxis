import React, { useState } from 'react';
import { Phone, Mail, Calendar, MapPin, Clock, Users } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    wheelchairType: 'Manual Wheelchair',
    returnTrip: false,
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to send booking request. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-gold text-center">
        <h3 className="text-2xl font-bold mb-4">Booking Request Received!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for choosing Black Swan Wheelchair Taxis. One of our dispatchers will contact you shortly to confirm your booking.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="btn-gold mx-auto"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-2xl border-t-4 border-gold">
      <h3 className="text-2xl font-bold mb-6 text-black">Request a Wheelchair Taxi</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Full Name</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input 
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel" 
              placeholder="0400 000 000"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Pickup Address</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input 
            required
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            type="text" 
            placeholder="Street address, suburb"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Destination Address</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input 
            required
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            type="text" 
            placeholder="Hospital, Airport, or Street address"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input 
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date" 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input 
              required
              name="time"
              value={formData.time}
              onChange={handleChange}
              type="time" 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Wheelchair Type</label>
          <select 
            name="wheelchairType"
            value={formData.wheelchairType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
          >
            <option>Manual Wheelchair</option>
            <option>Electric Wheelchair</option>
            <option>Mobility Scooter</option>
            <option>Oversized Wheelchair</option>
          </select>
        </div>
        <div className="flex items-center pt-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              name="returnTrip"
              checked={formData.returnTrip}
              onChange={handleChange}
              type="checkbox" 
              className="w-5 h-5 accent-gold" 
            />
            <span className="text-sm font-bold uppercase tracking-wider text-gray-700">Return Trip Required?</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold mb-1 uppercase tracking-wider text-gray-700">Additional Notes (e.g. NDIS Number, Extra Passengers)</label>
        <textarea 
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Any special requirements..."
          className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-gold outline-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full btn-gold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Confirm Booking Request'}
      </button>
      
      <p className="mt-4 text-xs text-gray-500 text-center italic">
        * This is a booking request. We will contact you to confirm availability.
      </p>
    </form>
  );
}
