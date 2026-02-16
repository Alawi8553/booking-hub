import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-glow">
            <span className="text-cyan-400 font-semibold text-sm">🚀 Trusted by 10,000+ businesses</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Transform Your </span>
            <span className="gradient-text">Booking Experience</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            The all-in-one booking platform for salons, clinics, and wellness centers. 
            Streamline appointments, boost revenue, and delight your clients.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-slate-300">Active Businesses</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-4xl font-bold text-teal-400 mb-2">5M+</div>
              <div className="text-slate-300">Bookings Per Month</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-slate-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
