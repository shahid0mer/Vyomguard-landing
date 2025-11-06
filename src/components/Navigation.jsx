// components/Navigation.js
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-zinc-900/60 backdrop-blur-xl border-b border-orange-500/10 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden lg:flex items-center space-x-12">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#capabilities">Capabilities</NavLink>
            <NavLink href="#highlights">Features</NavLink>
            <ContactButton />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X className="text-orange-500" size={28} /> : <Menu className="text-orange-500" size={28} />}
          </button>
        </div>

        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </nav>
  );
};

const Logo = () => (
  <div className="flex items-center space-x-4">
    <div className="relative">
      <div className="absolute inset-0 bg-orange-500 blur-xl opacity-50"></div>
      <div className="relative w-12 h-12 bg-linear-to-br from-orange-400 via-orange-500 to-orange-600 transform rotate-45 flex items-center justify-center">
        <span className="text-black font-black text-xl -rotate-45">V</span>
      </div>
    </div>
    <div>
      <div className="text-2xl font-black tracking-tight">VyomGarud</div>
      <div className="text-xs text-orange-500 tracking-widest">UAV SYSTEMS</div>
    </div>
  </div>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium hover:text-orange-500 transition-all duration-300 relative group">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const ContactButton = () => (
  <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105">
    Contact
  </a>
);

const MobileMenu = ({ setIsMenuOpen }) => (
  <div className="lg:hidden mt-8 space-y-6 pb-6 border-t border-zinc-800 pt-8">
    <a href="#about" className="block text-sm font-medium hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
    <a href="#capabilities" className="block text-sm font-medium hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
    <a href="#highlights" className="block text-sm font-medium hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
    <a href="#contact" className="block text-sm font-medium hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
  </div>
);

export default Navigation;