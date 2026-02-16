import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-cyan-50 mb-12 max-w-2xl mx-auto">
          Join 10,000+ businesses using Booking Hub to streamline operations and grow revenue.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="px-10 py-5 bg-white text-cyan-600 font-bold rounded-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 text-lg">
            Start Your Free 14-Day Trial
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg">
            Schedule a Demo
          </button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-cyan-50 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
