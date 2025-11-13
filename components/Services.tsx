'use client';

import { Briefcase, Target, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Develop comprehensive strategies that align with your business goals and drive sustainable growth in competitive markets.'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Scale your operations efficiently with data-driven insights and proven methodologies for measurable results.'
  },
  {
    icon: Users,
    title: 'Team Development',
    description: 'Build high-performing teams through leadership training, organizational development, and talent optimization.'
  },
  {
    icon: Briefcase,
    title: 'Consulting Services',
    description: 'Expert guidance across operations, finance, marketing, and technology to transform your business capabilities.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to empower your business and achieve exceptional outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}