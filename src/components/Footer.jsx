// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <BrandInfo />
          <QuickLinks />
          <SocialLinks />
        </div>

        <BottomBar />
      </div>
    </footer>
  );
};

const BrandInfo = () => (
  <div>
    <Logo />
    <p className="text-zinc-500 text-sm font-light leading-relaxed mt-6">
      Next-generation unmanned aerial vehicles engineered for precision and powered by autonomous intelligence.
    </p>
  </div>
);

const Logo = () => (
  <div className="flex items-center space-x-4">
    <div className="relative">
      <div className="absolute inset-0 bg-orange-500 blur-lg opacity-50"></div>
      <div className="relative w-12 h-12 bg-linear-to-br from-orange-400 via-orange-500 to-orange-600 transform rotate-45 flex items-center justify-center">
        <span className="text-black font-black text-xl -rotate-45">V</span>
      </div>
    </div>
    <div>
      <div className="text-2xl font-black tracking-tight">VyomGarud</div>
      <div className="text-xs text-zinc-600">Military-Grade UAV Systems</div>
    </div>
  </div>
);

const QuickLinks = () => (
  <div>
    <h3 className="text-white font-bold mb-6">Quick Links</h3>
    <div className="space-y-3">
      <FooterLink href="#about" text="About Us" />
      <FooterLink href="#capabilities" text="Capabilities" />
      <FooterLink href="#highlights" text="Features" />
      <FooterLink href="#contact" text="Contact" />
    </div>
  </div>
);

const FooterLink = ({ href, text }) => (
  <a href={href} className="block text-zinc-500 hover:text-orange-500 text-sm transition-colors">
    {text}
  </a>
);

const SocialLinks = () => (
  <div>
    <h3 className="text-white font-bold mb-6">Connect With Us</h3>
    <div className="flex space-x-4">
      <SocialIcon platform="twitter" />
      <SocialIcon platform="linkedin" />
      <SocialIcon platform="facebook" />
      <SocialIcon platform="instagram" />
    </div>
    <div className="mt-8 pt-6 border-t border-zinc-900">
      <p className="text-zinc-600 text-xs font-light">
        Follow us for the latest updates on UAV technology and defense innovations.
      </p>
    </div>
  </div>
);

const SocialIcon = ({ platform }) => {
  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
      </svg>
    )
  };

  return (
    <a href="#" className="w-12 h-12 bg-zinc-900 hover:bg-orange-500 border border-zinc-800 hover:border-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 group">
      <div className="text-zinc-400 group-hover:text-black transition-colors">
        {icons[platform]}
      </div>
    </a>
  );
};

const BottomBar = () => (
  <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-zinc-600 text-sm font-light">
      © 2024 VyomGarud. All Rights Reserved.
    </div>
    <div className="flex items-center space-x-6 text-zinc-600 text-sm">
      <FooterBottomLink href="#" text="Privacy Policy" />
      <span>•</span>
      <FooterBottomLink href="#" text="Terms of Service" />
      <span>•</span>
      <FooterBottomLink href="#" text="Security" />
    </div>
  </div>
);

const FooterBottomLink = ({ href, text }) => (
  <a href={href} className="hover:text-orange-500 transition-colors">
    {text}
  </a>
);

export default Footer;