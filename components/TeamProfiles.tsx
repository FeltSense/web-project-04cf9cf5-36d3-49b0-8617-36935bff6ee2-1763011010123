'use client';

import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'With over 15 years of leadership experience, Sarah drives our vision and strategic direction.',
    linkedin: '#',
    email: 'sarah@probusiness.com'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Michael specializes in business transformation and has helped hundreds of companies scale successfully.',
    linkedin: '#',
    email: 'michael@probusiness.com'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Emily brings operational excellence and process optimization expertise to every client engagement.',
    linkedin: '#',
    email: 'emily@probusiness.com'
  },
  {
    name: 'David Thompson',
    role: 'Senior Business Consultant',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'David has a proven track record in financial strategy and business development across multiple industries.',
    linkedin: '#',
    email: 'david@probusiness.com'
  }
];

export default function TeamProfiles() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group/icon"
                  >
                    <Linkedin className="text-blue-600 group-hover/icon:text-white transition-colors" size={20} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 group/icon"
                  >
                    <Mail className="text-gray-600 group-hover/icon:text-white transition-colors" size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}