import { motion } from 'motion/react';
import { Phone, Calendar, Shield, Clock, Heart, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import SEO from '../components/SEO';
import { CONTACT_PHONE, LOCAL_BUSINESS_SCHEMA, PERTH_SUBURBS } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Premium Wheelchair Taxi Perth | NDIS Transport"
        description="Black Swan Wheelchair Taxis provides premium accessible transport in Perth. NDIS registered, hospital transfers, and airport wheelchair taxis. Book online or call now."
        schema={LOCAL_BUSINESS_SCHEMA}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-premium-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/perth-city/1920/1080" 
            alt="Perth City Skyline" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-gold text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Perth's Premium Accessible Transport
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Perth’s Trusted <span className="text-gold">Wheelchair Accessible</span> Taxi Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Safe, reliable and professional wheelchair transport across Perth for NDIS participants, hospital visits and airport transfers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="btn-gold text-lg px-8 py-4">
                Book Now
              </Link>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-outline-gold text-lg px-8 py-4">
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* Mobile Booking CTA */}
      <section className="lg:hidden bg-gold p-6 text-black text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Taxi Now?</h2>
        <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="bg-black text-white px-8 py-4 rounded-md font-bold text-xl flex items-center justify-center gap-3 mx-auto max-w-xs">
          <Phone className="w-6 h-6" />
          Call {CONTACT_PHONE}
        </a>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-premium-black border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-white">
          {[
            "Wheelchair accessible vehicles",
            "Experienced drivers",
            "NDIS-friendly transport",
            "Hospital & airport transfers",
            "Available across Perth metro"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wider">
              <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-gray-500">
            <Shield className="w-8 h-8 text-gold" />
            <span>NDIS REGISTERED</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-gray-500">
            <Award className="w-8 h-8 text-gold" />
            <span>WA GOVT ACCREDITED</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-gray-500">
            <Heart className="w-8 h-8 text-gold" />
            <span>AGED CARE SPECIALISTS</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Specialized Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide more than just a ride. We offer care, punctuality, and vehicles designed for maximum comfort and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "NDIS Transport",
                desc: "Reliable transport for NDIS participants to appointments, work, or social events.",
                icon: <Shield className="w-10 h-10" />,
                link: "/ndis"
              },
              {
                title: "Airport Transfers",
                desc: "Stress-free wheelchair accessible transfers to and from Perth Airport (T1, T2, T3, T4).",
                icon: <Clock className="w-10 h-10" />,
                link: "/airport"
              },
              {
                title: "Hospital Transfers",
                desc: "Punctual transport for hospital admissions, discharges, and specialist appointments.",
                icon: <Heart className="w-10 h-10" />,
                link: "/hospital"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-gold transition-all"
              >
                <div className="text-gold mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="text-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-premium-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Why Perth Chooses <span className="text-gold">Black Swan</span></h2>
            <div className="space-y-8">
              {[
                { title: "Large Accessible Fleet", desc: "Our vehicles are equipped with modern hydraulic lifts and secure tie-down systems." },
                { title: "Experienced Drivers", desc: "Drivers trained in disability awareness and first aid to ensure your safety." },
                { title: "24/7 Availability", desc: "We operate around the clock, 365 days a year, across all Perth suburbs." },
                { title: "Transparent Pricing", desc: "Fair rates with NDIS billing options and PTSS card acceptance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/wheelchair-taxi/800/1000" 
              alt="Accessible Taxi Vehicle" 
              className="rounded-2xl shadow-2xl border-2 border-gold/20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold text-black p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-sm font-bold uppercase tracking-widest">Reliability Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">Providing wheelchair taxi services across Perth including:</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Joondalup", "Wanneroo", "Yanchep", "Clarkson", "Mindarie",
              "Butler", "Banksia Grove", "Perth CBD", "Fremantle", "Midland"
            ].map(suburb => (
              <Link 
                key={suburb} 
                to="/areas" 
                className="p-4 border border-gray-100 rounded hover:border-gold hover:text-gold transition-all text-sm font-bold uppercase tracking-wider"
              >
                {suburb}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 bg-gold text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Book your wheelchair taxi today with Perth’s reliable accessible transport service.</h2>
          <Link to="/book" className="bg-black text-white px-12 py-4 rounded-md font-bold text-xl inline-block hover:scale-105 transition-transform">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
  );
}
