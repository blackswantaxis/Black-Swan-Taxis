import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import { Phone, Clock, Shield, Calendar } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

export default function Book() {
  return (
    <div className="bg-white">
      <SEO 
        title="Book a Wheelchair Taxi Perth | Online Booking Request"
        description="Book your wheelchair accessible taxi in Perth online. Reliable transport for NDIS, airport, and hospital transfers. 24/7 service across all suburbs."
      />

      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Book Your Taxi</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto">
            Simple, fast, and reliable booking for your next journey.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Booking Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Advance Bookings</h4>
                    <p className="text-sm text-gray-600">We recommend booking at least 24 hours in advance for guaranteed availability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Urgent Bookings</h4>
                    <p className="text-sm text-gray-600">For immediate transport, please call our dispatch line directly at {CONTACT_PHONE}.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-gold w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">NDIS & PTSS card</h4>
                    <p className="text-sm text-gray-600">Please include your NDIS number or PTSS card details in the notes section.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-premium-black p-8 rounded-xl text-white border-t-4 border-gold">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-400 text-sm mb-6">
                Our friendly team is available 24/7 to assist with your booking or answer any questions.
              </p>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-gold w-full">
                Call {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
