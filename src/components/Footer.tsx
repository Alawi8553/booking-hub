import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Booking Hub</h3>
            <p className="text-slate-400 mb-4 max-w-md">
              The all-in-one booking platform trusted by thousands of businesses worldwide.
              Transform your scheduling experience today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <span className="text-xl">fb</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Booking Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
