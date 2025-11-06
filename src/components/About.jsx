import React from 'react';
import { Shield, Gauge, Target, Cpu, Radio } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-black"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ABOUT US"
          title="Redefining Aerial Superiority"
          titleAccent="Superiority"
          description="VyomGarud develops cutting-edge unmanned aerial systems that combine military-grade precision with autonomous intelligence. Our platforms deliver unmatched reliability in the most demanding operational environments."
        />
        
        <BentoGrid />
      </div>
    </section>
  );
};

const SectionHeader = ({ badge, title, titleAccent, description }) => (
  <div className="max-w-3xl mb-20">
    <Badge text={badge} />
    <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
      {title.split(titleAccent)[0]} <span className="text-orange-500">{titleAccent}</span>
    </h2>
    <p className="text-xl text-zinc-400 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

const Badge = ({ text }) => (
  <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1 mb-6">
    <span className="text-orange-500 text-xs font-bold tracking-widest">{text}</span>
  </div>
);

const BentoGrid = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <FeatureCard
      icon={<Shield className="w-16 h-16" />}
      title="Mission Critical Reliability"
      description="Built to military specifications with redundant systems and ruggedized components. Our UAVs operate flawlessly in extreme conditions, ensuring 100% mission success rates."
      className="lg:col-span-2 lg:row-span-2"
      footer={<CertificationBadge />}
    />
    
    <StatCard icon={<Gauge className="w-12 h-12" />} value="100%" label="Autonomous Operations" />
    <StatCard icon={<Target className="w-12 h-12" />} value="24/7" label="Operational Ready" />
    <StatCard icon={<Cpu className="w-12 h-12" />} value="AI" label="Neural Networks" />
    <StatCard icon={<Radio className="w-12 h-12" />} value="50km" label="Communication" />
  </div>
);

const FeatureCard = ({ icon, title, description, className = '', footer }) => (
  <div className={`bg-linear-to-br from-zinc-900 to-zinc-800 rounded-3xl p-10 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 group ${className}`}>
    <div className="group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-3xl font-bold mb-4">{title}</h3>
    <p className="text-zinc-400 text-lg leading-relaxed">
      {description}
    </p>
    {footer && <div className="mt-8 pt-8 border-t border-zinc-700">{footer}</div>}
  </div>
);

const CertificationBadge = () => (
  <div className="flex items-center space-x-3">
    <Shield className="w-5 h-5 text-orange-500" />
    <span className="text-sm font-medium">MIL-STD-810 Certified</span>
  </div>
);

const StatCard = ({ icon, value, label }) => (
  <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500">
    <div className="text-orange-500 mb-4">{icon}</div>
    <div className="text-4xl font-black text-orange-500 mb-2">{value}</div>
    <div className="text-sm text-zinc-400">{label}</div>
  </div>
);

export default About;