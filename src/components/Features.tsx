import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: '📅',
    title: 'Smart Scheduling',
    description: 'AI-powered appointment scheduling that eliminates double bookings and optimizes your calendar.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '💳',
    title: 'Integrated Payments',
    description: 'Accept payments online, in-app, or in-person with our seamless payment processing.',
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Gain insights into your business with real-time analytics and customizable reports.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    description: 'Beautiful, responsive interface that works flawlessly on any device.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: '🔔',
    title: 'Smart Reminders',
    description: 'Reduce no-shows with automated SMS and email reminders for your clients.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: '👥',
    title: 'Client Management',
    description: 'Build lasting relationships with comprehensive client profiles and history.',
    gradient: 'from-cyan-500 to-teal-500',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Everything You Need to </span>
            <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to save you time and increase revenue
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 glass rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 text-3xl`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
