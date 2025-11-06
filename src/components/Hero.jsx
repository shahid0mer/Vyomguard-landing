
import React from 'react';
import { Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <BackgroundElements />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};

const BackgroundElements = () => (
  <>
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
      <DiagonalGradient />
    </div>
    <FloatingShapes />
  </>
);

const DiagonalGradient = () => (
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
    <defs>
      <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ff7b00', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#ff7b00', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <polygon points="0,0 100,0 0,100" fill="url(#diagonalGradient)" className="opacity-50" transform="scale(10)" />
  </svg>
);

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <div className="absolute top-20 right-20 w-72 h-72 border border-orange-500/30 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
    <div className="absolute bottom-32 left-32 w-96 h-96 border-2 border-orange-500/20 transform rotate-45"></div>
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full"></div>
  </div>
);

const HeroContent = () => (
  <div>
    <Badge text="MILITARY GRADE AUTONOMY" />
    
    <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
      <span className="block">Vyom</span>
      <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Garud</span>
    </h1>
    
    <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light max-w-xl">
      Next-generation unmanned aerial vehicles engineered for precision, powered by autonomous intelligence, built for critical operations.
    </p>
    
    <div className="flex flex-wrap gap-4">
      <a href="#capabilities" className="group relative bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50">
        <span className="relative z-10">Explore Systems</span>
        <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
      </a>
      <a href="#contact" className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-sm border border-zinc-700 hover:border-orange-500 transition-all duration-300">
        Get Started
      </a>
    </div>

    <MiniStats />
  </div>
);

const Badge = ({ text }) => (
  <div className="inline-flex items-center space-x-3 bg-zinc-900/50 backdrop-blur-sm border border-orange-500/30 rounded-full px-5 py-2 mb-8">
    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
    <span className="text-xs font-bold text-orange-500 tracking-widest">{text}</span>
  </div>
);

const MiniStats = () => (
  <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-zinc-800">
    <Stat value="50+" label="KM RANGE" />
    <Stat value="AI" label="POWERED" />
    <Stat value="24/7" label="READY" />
  </div>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-black text-orange-500 mb-1">{value}</div>
    <div className="text-xs text-zinc-600 font-medium">{label}</div>
  </div>
);

const HeroVisual = () => (
  <div className="relative hidden lg:block">
    <div className="relative w-full h-[600px]">
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 to-zinc-800 rounded-3xl border border-zinc-700 transform rotate-6 opacity-30"></div>
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 to-zinc-800 rounded-3xl border border-zinc-700 transform rotate-3 opacity-50"></div>
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl border border-orange-500/30 p-10 backdrop-blur-sm">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Tactical UAV Systems</h3>
            <p className="text-zinc-400 leading-relaxed">Advanced autonomous platforms designed for defense and surveillance operations.</p>
          </div>
          
          <div className="space-y-4">
            <SpecItem label="Flight Endurance" value="8+ Hours" />
            <SpecItem label="Payload Capacity" value="15 KG" />
            <SpecItem label="Max Altitude" value="5000m" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SpecItem = ({ label, value }) => (
  <div className="flex items-center justify-between bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
    <span className="text-sm font-medium">{label}</span>
    <span className="text-orange-500 font-bold">{value}</span>
  </div>
);

export default Hero;