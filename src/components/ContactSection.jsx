import React from 'react';
import { MapPin, Phone, Mail, Send, Atom, FlaskConical, Hexagon, Dna } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingElement = ({ Icon, className, delay, duration = 10 }) => (
  <motion.div
    className={`absolute text-blue-500/10 ${className}`}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 360],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      delay: delay,
    }}
  >
    <Icon strokeWidth={1.5} />
  </motion.div>
);

const ContactSection = () => {
  return (
    <section className="relative py-20 px-4 min-h-screen flex items-center overflow-hidden">
      {/* Floating Background Elements specific to Contact Section */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement Icon={Atom} className="top-20 left-10 w-24 h-24" delay={0} duration={20} />
        <FloatingElement Icon={Hexagon} className="bottom-20 right-10 w-32 h-32" delay={2} duration={25} />
        <FloatingElement Icon={FlaskConical} className="top-1/2 left-1/4 w-16 h-16" delay={1} duration={18} />
        <FloatingElement Icon={Dna} className="top-1/3 right-1/4 w-20 h-20" delay={3} duration={22} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full relative z-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            Let's Synthesize <span className="text-green-500">Success.</span>
          </h1>

          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:bg-white/80">
              <div className="bg-green-50/80 p-3 rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  S. No. 80/8 Akshay Industries, Mahadev Nagar, Nanded Phata, Pune - 411041, Maharashtra.
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-center gap-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:bg-white/80">
              <div className="bg-green-50/80 p-3 rounded-xl shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 text-sm font-medium">
                  +91 8805245811
                </p>
              </div>
            </div>

            {/* Mail Card */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-center gap-4 border border-white/50 hover:shadow-xl transition-all duration-300 hover:bg-white/80">
              <div className="bg-green-50/80 p-3 rounded-xl shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Mail</h3>
                <p className="text-gray-600 text-sm font-medium">
                  info.chemsetu@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50 relative overflow-hidden">
          {/* Subtle gradient overlay for the form card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all backdrop-blur-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all backdrop-blur-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all backdrop-blur-sm">
                  <option>Custom Synthesis</option>
                  <option>API Intermediates</option>
                  <option>Process Development</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none backdrop-blur-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600/90 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
