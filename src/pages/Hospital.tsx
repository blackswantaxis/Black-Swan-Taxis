import SEO from '../components/SEO';
import { Hospital, Heart, Clock, Shield, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { CONTACT_PHONE } from '../constants';

export default function HospitalTransfers() {
  return (
    <div className="bg-white">
      <SEO 
        title="Hospital Transport Perth | Wheelchair Accessible Medical Travel"
        description="Safe and punctual hospital transfers in Perth. We service Fiona Stanley, SCGH, RPH, and all private hospitals with fully accessible wheelchair taxis."
      />

      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Hospital Transfers</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto">
            Punctual, caring, and professional transport for your medical needs.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://picsum.photos/seed/hospital-wa/800/600" 
              alt="Hospital Entrance Perth" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-display font-bold mb-8">Reliable Medical Transport</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Missing a medical appointment is not an option. At Black Swan Wheelchair Taxis, we understand the importance of punctuality and care when it comes to hospital transfers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our drivers are experienced in navigating Perth's major hospitals and can assist you from the ward right to the vehicle.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Hospital className="text-gold" />, text: "Servicing all public and private Perth hospitals" },
                { icon: <Heart className="text-gold" />, text: "Compassionate drivers trained in patient care" },
                { icon: <Clock className="text-gold" />, text: "Priority scheduling for dialysis and recurring treatments" },
                { icon: <Shield className="text-gold" />, text: "Assistance with discharge paperwork and equipment" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="text-lg font-medium text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest">Major Hospitals We Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fiona Stanley Hospital",
              "Sir Charles Gairdner Hospital",
              "Royal Perth Hospital",
              "St John of God (All Locations)",
              "Hollywood Private Hospital",
              "Perth Children's Hospital",
              "Joondalup Health Campus",
              "Rockingham General Hospital",
              "Mount Hospital"
            ].map(hosp => (
              <div key={hosp} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 font-bold text-gray-700">
                {hosp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-premium-black text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Book a Hospital Transfer</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We offer a "Wait and Return" service for short appointments, or we can coordinate with hospital staff for discharge times.
            </p>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-gold text-xl px-12 py-4 inline-flex">
              <Phone className="w-6 h-6" />
              Call Now: {CONTACT_PHONE}
            </a>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
