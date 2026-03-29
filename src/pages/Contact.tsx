import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../constants';

export default function Contact() {
  return (
    <div className="bg-white">
      <SEO 
        title="Contact Us | Black Swan Wheelchair Taxis Perth"
        description="Get in touch with Black Swan Wheelchair Taxis. Contact us for bookings, quotes, or NDIS transport inquiries in Perth, Western Australia."
      />

      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto">
            We're here to help you get where you need to go.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Have a question about our services or need a custom quote for long-distance transport? Reach out to our friendly Perth-based team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Phone</h4>
                  <p className="text-gray-500 mb-2">Available 24/7 for bookings and inquiries.</p>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-2xl font-bold text-black hover:text-gold transition-colors">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-gray-500 mb-2">For general inquiries and service agreements.</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold text-black hover:text-gold transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Operating Hours</h4>
                  <p className="text-gray-500">24 Hours a Day, 7 Days a Week, 365 Days a Year.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-black transition-all">
                <Facebook />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold hover:text-black transition-all">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Map Embed Placeholder */}
          <div className="h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d115.699464!3d-31.950527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA!5e0!3m2!1sen!2sau!4v1648500000000!5m2!1sen!2sau" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Black Swan Wheelchair Taxis Perth Service Area"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
