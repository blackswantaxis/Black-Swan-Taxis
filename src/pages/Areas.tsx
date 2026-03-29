import SEO from '../components/SEO';
import { MapPin, CheckCircle, Phone } from 'lucide-react';
import { PERTH_SUBURBS, CONTACT_PHONE } from '../constants';
import { Link } from 'react-router-dom';

export default function Areas() {
  return (
    <div className="bg-white">
      <SEO 
        title="Areas We Service | Wheelchair Taxi Perth Suburbs"
        description="Black Swan Wheelchair Taxis services all Perth suburbs, from Joondalup to Mandurah. We provide accessible transport to all major WA hospitals and airports."
      />

      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Service Areas</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto">
            Providing reliable accessible transport across the entire Perth Metropolitan area.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-display font-bold mb-8">Every Suburb, Every Street</h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                We don't just stick to the CBD. Our fleet is distributed across Perth to ensure we can reach you quickly, whether you're in the northern suburbs, southern corridor, or eastern hills.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
                {PERTH_SUBURBS.map(suburb => (
                  <div key={suburb} className="flex items-center gap-2 p-3 bg-gray-50 rounded border border-gray-100 text-sm font-bold text-gray-700">
                    <MapPin className="text-gold w-4 h-4 flex-shrink-0" />
                    {suburb}
                  </div>
                ))}
                <div className="flex items-center gap-2 p-3 bg-gold/10 rounded border border-gold/20 text-sm font-bold text-gold">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  & All Surrounds
                </div>
              </div>

              <h2 className="text-4xl font-display font-bold mb-8">Local Suburb Specialists</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PERTH_SUBURBS.slice(0, 10).map((suburb) => (
                  <div key={suburb} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-gold transition-colors">
                    <h3 className="text-xl font-bold mb-3">{suburb} Wheelchair Taxi</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Looking for a reliable wheelchair taxi in {suburb}? Black Swan Wheelchair Taxis provides premium, accessible transport for residents and visitors in {suburb}. Whether you need a ride to a local medical appointment, a trip to the city, or NDIS-funded transport, our professional drivers are ready to assist you with safe and comfortable travel.
                    </p>
                    <Link to="/book" className="text-gold font-bold text-sm hover:underline">
                      Book in {suburb} →
                    </Link>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-500 italic text-sm">
                * We service all 350+ suburbs in the Perth Metropolitan area. If your suburb isn't listed above, don't worry—we've got you covered.
              </p>

              <div className="mt-16 p-8 bg-premium-black text-white rounded-2xl border-l-8 border-gold">
                <h3 className="text-2xl font-bold mb-4">Regional Travel</h3>
                <p className="text-gray-400 mb-6">
                  Need to travel outside the Perth metro area? We offer long-distance accessible transport to regional WA hubs. Contact us for a custom quote.
                </p>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-gold inline-flex">
                  Request Regional Quote
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Major Hubs</h3>
                <ul className="space-y-4">
                  {[
                    "Perth Airport (All Terminals)",
                    "Fiona Stanley Hospital",
                    "Sir Charles Gairdner Hospital",
                    "Royal Perth Hospital",
                    "Elizabeth Quay Bus/Train Port",
                    "Perth Convention Centre"
                  ].map(hub => (
                    <li key={hub} className="flex items-center gap-3 font-medium text-gray-700">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      {hub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold p-8 rounded-xl text-black">
                <h3 className="text-2xl font-bold mb-4">Book Now</h3>
                <p className="font-medium mb-6">
                  Ready to book your taxi in any of these areas?
                </p>
                <Link to="/book" className="bg-black text-white w-full py-4 rounded font-bold flex items-center justify-center gap-2">
                  Go to Booking Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
