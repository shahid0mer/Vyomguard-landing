import React from 'react';
import { Eye, Target, Radio, Shield } from 'lucide-react';

const Capabilities = ({ activeCard, setActiveCard }) => {
  const capabilities = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'ISR Platforms',
      description: 'Intelligence, Surveillance & Reconnaissance with real-time HD transmission and multi-sensor fusion.',
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Tactical Strike',
      description: 'Precision engagement systems with autonomous target acquisition and navigation.',
      color: 'from-orange-500/20 to-yellow-500/20'
    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: 'Comm Relay',
      description: 'Extended-range communication nodes for seamless battlefield connectivity.',
      color: 'from-orange-500/20 to-purple-500/20'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Defense Systems',
      description: 'Counter-UAV solutions with AI threat detection and automated response.',
      color: 'from-orange-500/20 to-blue-500/20'
    }
  ];

  return (
    <section id="capabilities" className="py-32 bg-zinc-950 relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="CAPABILITIES"
          title="Our UAV Systems"
          titleAccent="UAV"
          description="Advanced platforms engineered for superior mission performance"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, idx) => (
            <CapabilityCard
              key={idx}
              item={item}
              index={idx}
              isActive={activeCard === idx}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `repeating-linear-gradient(45deg, #ff7b00 0, #ff7b00 1px, transparent 0, transparent 50%)`,
      backgroundSize: '10px 10px'
    }}></div>
  </div>
);

const SectionHeader = ({ badge, title, titleAccent, description }) => (
  <div className="text-center max-w-3xl mx-auto mb-20">
    <Badge text={badge} />
    <h2 className="text-5xl lg:text-6xl font-black mb-6">
      {title.split(titleAccent)[0]} <span className="text-orange-500">{titleAccent}</span> {title.split(titleAccent)[1]}
    </h2>
    <p className="text-xl text-zinc-400 font-light">
      {description}
    </p>
  </div>
);

const Badge = ({ text }) => (
  <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1 mb-6">
    <span className="text-orange-500 text-xs font-bold tracking-widest">{text}</span>
  </div>
);

const CapabilityCard = ({ item, index, isActive, onMouseEnter, onMouseLeave }) => (
  <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-orange-500 transition-all duration-500 cursor-pointer overflow-hidden"
  >
    <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    
    <div className="relative z-10">
      <IconContainer icon={item.icon} />
      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">{item.title}</h3>
      <p className="text-zinc-400 leading-relaxed font-light">{item.description}</p>
      <HoverArrow />
    </div>
  </div>
);

const IconContainer = ({ icon }) => (
  <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-500">
    <div className="text-orange-500">{icon}</div>
  </div>
);

const HoverArrow = () => (
  <div className="mt-6 flex items-center space-x-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
    <span className="text-sm font-bold">Learn More</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

export default Capabilities;