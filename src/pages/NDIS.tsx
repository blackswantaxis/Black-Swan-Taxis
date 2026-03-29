import SEO from '../components/SEO';
import { Shield, FileText, CheckCircle, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';
import BookingForm from '../components/BookingForm';

export default function NDIS() {
  return (
    <div className="bg-white">
      <SEO 
        title="NDIS Transport Perth | Registered Wheelchair Taxi Provider"
        description="Black Swan Wheelchair Taxis is a registered NDIS transport provider in Perth. We offer reliable, safe, and accessible travel for NDIS participants with direct billing."
      />

      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">NDIS Transport Perth</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto">
            Your trusted partner for accessible NDIS travel across Western Australia.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 text-gold font-bold mb-6">
              <Shield className="w-8 h-8" />
              <span className="uppercase tracking-widest">Registered Provider</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-8">Making NDIS Travel Simple</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Navigating transport as an NDIS participant should be easy. At Black Swan Wheelchair Taxis, we specialize in providing high-quality transport services that align with your NDIS goals.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you are self-managed, plan-managed, or NDIA-managed, we have the systems in place to handle your bookings and billing seamlessly.
            </p>
            
            <div className="space-y-6">
              {[
                "Direct billing to Plan Managers or NDIA",
                "Regular recurring bookings for therapy or work",
                "Assistance with boarding and securing wheelchairs",
                "Trained drivers who understand disability support",
                "PTSS card accepted"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gold/10 border-l-4 border-gold text-gold font-bold">
              Invoices provided for NDIS claims.
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6">NDIS Booking Request</h3>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-premium-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">How to Book NDIS Transport</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Contact Us", desc: "Call or use our online form to provide your details and NDIS number." },
              { step: "02", title: "Setup Billing", desc: "We'll coordinate with your plan manager to ensure billing is handled correctly." },
              { step: "03", title: "Enjoy the Ride", desc: "Our professional drivers will arrive on time and provide a premium service." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 border border-gold/20 rounded-xl bg-white/5">
                <span className="text-6xl font-display font-bold text-gold/20 absolute top-4 right-4">{item.step}</span>
                <h3 className="text-2xl font-bold mb-4 text-gold">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Coordinators */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-gold/10 rounded-full mb-8">
            <Users className="w-12 h-12 text-gold" />
          </div>
          <h2 className="text-4xl font-display font-bold mb-6">For Support Coordinators</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We work closely with support coordinators across Perth to provide reliable transport solutions for their clients. Contact us today to discuss service agreements and recurring booking schedules.
          </p>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-gold px-12 py-4 text-xl mx-auto">
            Call Coordinator Hotline
          </a>
        </div>
      </section>
    </div>
  );
}

import { Users } from 'lucide-react';
