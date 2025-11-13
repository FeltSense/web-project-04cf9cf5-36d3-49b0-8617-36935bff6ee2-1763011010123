'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={
          {
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Elevate Your Business
          <br />
          <span className="text-blue-400">To New Heights</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Professional solutions tailored to drive growth, innovation, and success for your organization
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-blue-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-3"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}