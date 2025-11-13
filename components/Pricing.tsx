'use client';

import { Check, Shield, Award } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our professional services today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">Professional Package</h3>
              <p className="text-blue-100">Everything you need to succeed</p>
            </div>
            
            <div className="p-12">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600 text-xl">/month</span>
                </div>
                <p className="text-gray-600">Billed monthly, cancel anytime</p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">Full access to all consulting services</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">Strategic planning and business analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">Dedicated account manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">Monthly performance reports</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">24/7 priority support</span>
                </div>
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center px-8 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started Now
              </a>

              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Secure Payment</p>
                  <p className="text-xs text-gray-600 mt-1">SSL Encrypted</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Money-Back Guarantee</p>
                  <p className="text-xs text-gray-600 mt-1">30-day refund</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="text-purple-600" size={24} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">No Hidden Fees</p>
                  <p className="text-xs text-gray-600 mt-1">Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}