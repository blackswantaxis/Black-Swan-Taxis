import SEO from '../components/SEO';
import { Plane, Clock, Luggage, MapPin, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { CONTACT_PHONE } from '../constants';

export default function Airport() {
  return (
    <div className="bg-white">
      <SEO 
        title="Airport Wheelchair Taxi Perth | Accessible Transfers T1-T4"
        description="Reliable wheelchair accessible airport transfers in Perth. We service all terminals (T1, T2, T3, T4) with 24/7 availability and luggage assistance."
      />

      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Airport Transfers</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto">
            Start your journey with comfort and peace of mind.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Stress-Free Perth Airport Travel</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Traveling can be stressful, especially when you need accessible transport. Black Swan Wheelchair Taxis provides a premium door-to-terminal service that ensures you arrive on time and in comfort.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {[
                { icon: <Plane className="text-gold" />, title: "All Terminals", desc: "Servicing T1, T2, T3, and T4 at Perth Airport." },
                { icon: <Clock className="text-gold" />, title: "24/7 Service", desc: "Available for early morning or late night flights." },
                { icon: <Luggage className="text-gold" />, title: "Luggage Help", desc: "Our drivers assist with all your bags and equipment." },
                { icon: <MapPin className="text-gold" />, title: "Meet & Greet", desc: "We meet you inside the terminal for arrivals." }
              ].map((item, i) => (
                <div key={i}>
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/perth-airport/800/600" 
              alt="Perth Airport Terminal" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-gold text-black px-4 py-2 font-bold rounded shadow-lg">
              Fixed Rates Available
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <BookingForm />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-display font-bold mb-8">Book Your Airport Transfer</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We recommend booking at least 24 hours in advance for airport transfers to ensure priority scheduling. For urgent bookings, please call us directly.
            </p>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-gold w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call to Book: {CONTACT_PHONE}
              </a>
              <p className="text-sm text-gray-500 italic">
                * Please provide your flight number for arrival bookings so we can track delays.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
