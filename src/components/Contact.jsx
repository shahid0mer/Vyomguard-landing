// components/Contact.js
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-linear-to-t from-orange-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Talk"
          description="Ready to discuss how our systems can enhance your operations?"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ badge, title, description }) => (
  <div className="text-center max-w-3xl mx-auto mb-20">
    <Badge text={badge} />
    <h2 className="text-5xl lg:text-6xl font-black mb-6">{title}</h2>
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

const ContactForm = ({ formData, setFormData, handleSubmit }) => (
  <div className="lg:col-span-3">
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
      <div className="space-y-6">
        <FormField
          label="Full Name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="John Doe"
        />
        <FormField
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="john@example.com"
        />
        <FormField
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Tell us about your project requirements..."
          rows={6}
        />
        <SubmitButton onClick={handleSubmit} />
      </div>
    </div>
  </div>
);

const FormField = ({ label, type, value, onChange, placeholder, rows }) => (
  <div>
    <label className="block text-sm font-bold mb-3 text-zinc-300">{label}</label>
    {type === 'textarea' ? (
      <textarea 
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full bg-black border border-zinc-800 focus:border-orange-500 rounded-xl px-5 py-4 focus:outline-none transition-colors resize-none text-white placeholder-zinc-600"
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input 
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-black border border-zinc-800 focus:border-orange-500 rounded-xl px-5 py-4 focus:outline-none transition-colors text-white placeholder-zinc-600"
        placeholder={placeholder}
      />
    )}
  </div>
);

const SubmitButton = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="w-full bg-orange-500 hover:bg-orange-600 text-black px-8 py-5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02]"
  >
    SEND MESSAGE
  </button>
);

const ContactInfo = () => (
  <div className="lg:col-span-2 space-y-6">
    <ContactItem
      icon={<Phone className="w-7 h-7" />}
      title="Phone"
      content="+91 8881444693"
    />
    <ContactItem
      icon={<Mail className="w-7 h-7" />}
      title="Email"
      content="contact@vyomgarud.com"
    />
    <ContactItem
      icon={<MapPin className="w-7 h-7" />}
      title="Location"
      content="Defense Innovation Hub<br />Bangalore, Karnataka"
    />
    <SupportCard />
  </div>
);

const ContactItem = ({ icon, title, content }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500">
    <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4">
      <div className="text-orange-500">{icon}</div>
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-zinc-400 font-light" dangerouslySetInnerHTML={{ __html: content }}></p>
  </div>
);

const SupportCard = () => (
  <div className="bg-linear-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-3xl p-8">
    <h3 className="font-bold text-xl mb-3 text-orange-500">24/7 Support</h3>
    <p className="text-zinc-300 text-sm font-light leading-relaxed">
      Our team is available around the clock to discuss mission-critical requirements and custom solutions.
    </p>
  </div>
);

export default Contact;