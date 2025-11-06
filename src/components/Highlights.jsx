// components/Highlights.js
import React from 'react';
import { Zap, Layers, Shield } from 'lucide-react';

const Highlights = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Rapid Deployment',
      description: 'Mission-ready in under 5 minutes with minimal crew requirements. Quick-deploy mechanisms ensure immediate operational capability in any environment.',
      stat: '< 5 min',
      label: 'Setup Time'
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'Full Autonomy',
      description: 'Advanced AI algorithms enable complete autonomous operations including flight planning, obstacle avoidance, and intelligent decision-making.',
      stat: '100%',
      label: 'Autonomous'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Mil-Spec Build',
      description: 'Built to military standards with ruggedized components tested for extreme conditions. Proven reliability in mission-critical scenarios.',
      stat: 'MIL-810',
      label: 'Certified'
    }
  ];

  return (
    <section id="highlights" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="KEY FEATURES"
          title="Why Choose VyomGarud"
          titleAccent="VyomGarud"
        />

        <div className="grid lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ badge, title, titleAccent }) => (
  <div className="text-center max-w-3xl mx-auto mb-20">
    <Badge text={badge} />
    <h2 className="text-5xl lg:text-6xl font-black mb-6">
      {title.split(titleAccent)[0]} <span className="text-orange-500">{titleAccent}</span>
    </h2>
  </div>
);

const Badge = ({ text }) => (
  <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1 mb-6">
    <span className="text-orange-500 text-xs font-bold tracking-widest">{text}</span>
  </div>
);

const FeatureCard = ({ feature }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-linear-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-700"></div>
    
    <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-10 group-hover:border-orange-500/50 transition-all duration-500">
      <IconContainer icon={feature.icon} />
      
      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
      <p className="text-zinc-400 leading-relaxed mb-8 font-light">{feature.description}</p>
      
      <FeatureFooter stat={feature.stat} label={feature.label} />
    </div>
  </div>
);

const IconContainer = ({ icon }) => (
  <div className="w-20 h-20 bg-linear-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
    <div className="text-orange-500">{icon}</div>
  </div>
);

const FeatureFooter = ({ stat, label }) => (
  <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
    <div>
      <div className="text-3xl font-black text-orange-500">{stat}</div>
      <div className="text-xs text-zinc-600 mt-1">{label}</div>
    </div>
    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </div>
  </div>
);

export default Highlights;