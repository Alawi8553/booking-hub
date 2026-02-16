import React from 'react';

const SocialProof: React.FC = () => {
  const stats = [
    { label: 'Customer Satisfaction', value: '98%' },
    { label: 'Average Revenue Increase', value: '40%' },
    { label: 'Time Saved Per Week', value: '15hrs' },
    { label: 'No-Show Reduction', value: '65%' },
  ];

  const testimonials = [
    {
      quote: "Booking Hub transformed our salon. We've seen a 40% increase in bookings and our clients love the convenience!",
      author: "Sarah Johnson",
      role: "Owner, Luxe Beauty Salon",
      avatar: "👩‍💼",
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. It's like having a business consultant built-in.",
      author: "Michael Chen",
      role: "Director, Wellness Clinic",
      avatar: "👨‍⚕️",
    },
    {
      quote: "Setup took minutes, not days. Our staff adapted instantly and our clients are booking more than ever.",
      author: "Emma Rodriguez",
      role: "Manager, Zen Spa",
      avatar: "👩",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Trusted by Industry </span>
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join thousands of businesses already growing with Booking Hub
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              {/* Quote */}
              <div className="text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-8">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-2xl font-bold text-white">SALON PRO</div>
            <div className="text-2xl font-bold text-white">WELLNESS+</div>
            <div className="text-2xl font-bold text-white">BEAUTY FIRST</div>
            <div className="text-2xl font-bold text-white">SPA ELITE</div>
            <div className="text-2xl font-bold text-white">CLINIC CARE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
