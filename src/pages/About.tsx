import { motion } from 'motion/react';
import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us | Perth's Leading Wheelchair Taxi Service"
        description="Learn about Black Swan Wheelchair Taxis. We are dedicated to providing safe, dignified, and premium transport for the disability and aged care community in Perth."
      />

      {/* Header */}
      <section className="bg-premium-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gold max-w-2xl mx-auto font-medium">
            Providing dignity, independence, and safety through premium accessible transport.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Dedicated to the Perth Community</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Black Swan Wheelchair Taxis was founded with a simple goal: to ensure that every person in Perth, regardless of their mobility needs, has access to premium, reliable transport.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We understand that for many of our clients, a taxi is not just a ride—it's a lifeline to medical care, social connection, and independence. That's why we invest in the best vehicles and the most compassionate drivers.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-3xl font-bold text-gold mb-2">10+</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gold mb-2">50k+</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Trips Completed</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-taxi/800/600" 
              alt="Our Team" 
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Safety First", icon: <Shield />, desc: "Rigorous vehicle maintenance and driver safety training." },
              { title: "Reliability", icon: <CheckCircle />, desc: "We show up on time, every time. No exceptions." },
              { title: "Inclusion", icon: <Users />, desc: "Promoting independence for all members of our community." },
              { title: "Compassion", icon: <Heart />, desc: "Treating every passenger with the respect they deserve." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-gold flex justify-center mb-6">
                  {cloneElement(value.icon, { size: 48 })}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-premium-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-8">Experience the Difference</h2>
          <p className="text-xl text-gray-400 mb-12">
            Book your next journey with Perth's most trusted wheelchair taxi service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="btn-gold px-12 py-4 text-lg">Book Now</Link>
            <Link to="/contact" className="btn-outline-gold px-12 py-4 text-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { cloneElement } from 'react';
