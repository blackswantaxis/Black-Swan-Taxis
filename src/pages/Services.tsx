import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import { Phone, CheckCircle, MapPin, Plane, Hospital, Shield } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

export default function Services() {
  return (
    <div className="bg-white">
      <SEO 
        title="Wheelchair Taxi Services Perth | Accessible Transport"
        description="Comprehensive wheelchair taxi services in Perth. We offer NDIS transport, airport transfers, hospital appointments, and social outings in fully accessible vehicles."
      />

      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto">
            Specialized transport solutions tailored to your mobility needs.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {[
            {
              title: "NDIS Registered Transport",
              desc: "As an NDIS registered provider, we offer reliable transport for participants. We can bill directly to your plan manager or the NDIA, making your travel stress-free.",
              icon: <Shield className="w-12 h-12" />,
              features: ["Direct NDIS Billing", "Assistance with boarding", "Regular recurring bookings", "Support worker friendly"],
              img: "https://picsum.photos/seed/ndis/800/500"
            },
            {
              title: "Accessible Airport Transfers",
              desc: "Start or end your journey with ease. Our drivers meet you at the terminal and assist with luggage. We service all Perth Airport terminals (T1-T4).",
              icon: <Plane className="w-12 h-12" />,
              features: ["Flight tracking", "Luggage assistance", "Fixed price options", "Available 24/7"],
              img: "https://picsum.photos/seed/airport/800/500"
            },
            {
              title: "Hospital & Medical Appointments",
              desc: "We prioritize medical transport to ensure you never miss an appointment. We service all major Perth hospitals including Fiona Stanley, SCGH, and RPH.",
              icon: <Hospital className="w-12 h-12" />,
              features: ["Punctual arrivals", "Wait-and-return service", "Ward-to-vehicle assistance", "Comfortable, smooth ride"],
              img: "https://picsum.photos/seed/hospital/800/500"
            },
            {
              title: "Social & Event Transport",
              desc: "Don't miss out on life's moments. Whether it's a family wedding, a trip to the beach, or a night at the theatre, we'll get you there in style.",
              icon: <MapPin className="w-12 h-12" />,
              features: ["Group bookings available", "Multiple wheelchair capacity", "Evening & weekend service", "Perth-wide coverage"],
              img: "https://picsum.photos/seed/social/800/500"
            }
          ].map((service, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="text-gold mb-6">{service.icon}</div>
                <h2 className="text-4xl font-display font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700 font-medium">
                      <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-gold inline-flex">
                  Book This Service
                </a>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Need a Custom Transport Plan?</h2>
            <p className="text-gray-600 text-lg mb-8">
              If you have recurring medical appointments or need transport for a large group, contact us for a tailored quote and priority scheduling.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-gold">
              <h4 className="text-xl font-bold mb-4">Our Commitment</h4>
              <p className="text-gray-600 italic">
                "We treat every passenger like family. Your comfort and safety are our only priorities."
              </p>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
