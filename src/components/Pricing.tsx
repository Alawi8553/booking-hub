import React, { useState } from 'react';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  gradient: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses',
    monthlyPrice: 29,
    yearlyPrice: 290,
    gradient: 'from-slate-600 to-slate-700',
    features: [
      'Up to 100 bookings/month',
      'Basic calendar management',
      'Email notifications',
      'Client database',
      'Mobile app access',
    ],
  },
  {
    name: 'Professional',
    description: 'Most popular for growing teams',
    monthlyPrice: 79,
    yearlyPrice: 790,
    highlighted: true,
    gradient: 'from-cyan-500 to-teal-500',
    features: [
      'Unlimited bookings',
      'Advanced scheduling',
      'SMS & Email reminders',
      'Payment processing',
      'Analytics dashboard',
      'Priority support',
      'Custom branding',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    gradient: 'from-purple-600 to-pink-600',
    features: [
      'Everything in Professional',
      'Multi-location support',
      'Advanced analytics',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solution',
    ],
  },
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-slate-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Simple, Transparent </span>
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 glass p-2 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isYearly
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isYearly
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 px-2 py-1 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'glass hover:bg-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-text">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-400">/{isYearly ? 'year' : 'month'}</span>
                </div>
                {isYearly && (
                  <div className="text-sm text-green-400 mt-2">
                    Save ${(plan.monthlyPrice * 12 - plan.yearlyPrice).toFixed(0)}/year
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-cyan-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise contact */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <button className="px-8 py-3 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
