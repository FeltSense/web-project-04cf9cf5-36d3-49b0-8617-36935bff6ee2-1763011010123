'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Adams',
    role: 'CEO, TechStart Inc',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'Working with this team transformed our business. Their strategic insights and hands-on approach delivered results beyond our expectations.'
  },
  {
    name: 'Robert Martinez',
    role: 'Founder, Growth Dynamics',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'The professionalism and expertise demonstrated throughout our engagement was exceptional. They truly understand what it takes to scale a business.'
  },
  {
    name: 'Lisa Chen',
    role: 'COO, InnovateCorp',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    quote: 'Their team development program revolutionized our organizational culture. We saw immediate improvements in productivity and employee satisfaction.'
  },
  {
    name: 'James Wilson',
    role: 'Managing Director, Apex Solutions',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    quote: 'Outstanding consulting services. They helped us navigate complex challenges and positioned us for sustainable long-term growth.'
  },
  {
    name: 'Amanda Foster',
    role: 'VP of Operations, Summit Group',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    quote: 'The strategic planning process was incredibly thorough. Their data-driven approach gave us the confidence to make critical business decisions.'
  },
  {
    name: 'Daniel Park',
    role: 'President, Venture Partners',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'A truly professional team that delivers on their promises. The ROI from their consulting services exceeded our initial projections significantly.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses achieve remarkable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}