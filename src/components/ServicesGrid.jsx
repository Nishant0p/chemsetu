import React from 'react';
import { motion } from 'framer-motion';

const Icons = {
  Flask: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.31" />
      <path d="M14 2v7.31" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
    </svg>
  ),
  Molecule: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="9" x2="12" y2="3" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="14.6" y1="10.5" x2="19.8" y2="7.5" />
      <line x1="9.4" y1="13.5" x2="4.2" y2="16.5" />
      <line x1="14.6" y1="13.5" x2="19.8" y2="16.5" />
      <line x1="9.4" y1="10.5" x2="4.2" y2="7.5" />
      <circle cx="12" cy="3" r="2" />
      <circle cx="12" cy="21" r="2" />
      <circle cx="20" cy="7" r="2" />
      <circle cx="4" cy="17" r="2" />
      <circle cx="20" cy="17" r="2" />
      <circle cx="4" cy="7" r="2" />
    </svg>
  ),
  Gears: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  ),
  Microscope: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  ),
  Atom: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
};

const services = [
  {
    title: "API Impurities & Intermediates",
    description: "Focus on difficult-to-synthesize molecules and complex impurity standards.",
    Icon: Icons.Flask,
    bgImage: "https://i.pinimg.com/736x/64/87/5f/64875f222ac7b8cc88ad9ae6b296868c.jpg"
  },
  {
    title: "Custom Synthesis",
    description: "From mg to 5kg scale. Specializing in NCEs and novel scaffolds.",
    Icon: Icons.Molecule,
    bgImage: "https://i.pinimg.com/736x/de/0f/6b/de0f6ba1feb44ef48e6695af20a068c6.jpg"
  },
  {
    title: "Process Development",
    description: "Cost reduction strategies & seamless Technology Transfer to manufacturing.",
    Icon: Icons.Gears,
    bgImage: "https://i.pinimg.com/736x/2e/99/db/2e99db086e3146fba1f178ecddc8a260.jpg"
  },
  {
    title: "Analytical Solutions",
    description: "Isolation & Structural Elucidation of unknown impurities and degradation products.",
    Icon: Icons.Microscope,
    bgImage: "https://i.pinimg.com/736x/0d/d5/cb/0dd5cbc57fa35af2be574d96d77110bf.jpg"
  },
  {
    title: "Complex Reactions",
    description: "Expertise in Cryogenic, High Pressure, and Chiral reaction chemistries.",
    Icon: Icons.Atom,
    bgImage: "https://i.pinimg.com/736x/85/51/c5/8551c59463487dffc41148c56b5e4e41.jpg"
  },
  {
    title: "Industrial Training",
    description: "Bridging academic knowledge with practical industrial application.",
    Icon: Icons.GraduationCap,
    bgImage: "https://i.pinimg.com/736x/1a/13/80/1a1380042278bebb027160ab429ed389.jpg"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E3192] mb-4">Core Capabilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering specialized chemical solutions with precision and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer group hover:shadow-[0_0_20px_rgba(0,166,81,0.3)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-white/30 group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="relative z-10 mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center text-[#2E3192] group-hover:bg-[#00A651] group-hover:text-white transition-all duration-300 shadow-lg">
                <service.Icon />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A651] transition-colors">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-800 font-semibold leading-relaxed">
                {service.description}
              </p>
              <div className="relative z-10 mt-6 w-12 h-1 bg-[#00A651] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
