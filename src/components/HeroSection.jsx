import React from 'react';
import { motion } from 'framer-motion';
import DNAHelix from './DNAHelix';
import FloatingParticles from './FloatingParticles';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <FloatingParticles />
      <div className="container mx-auto px-4 relative z-10 pt-20 lg:pt-0 h-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center min-h-screen lg:min-h-0 lg:h-auto justify-between lg:justify-center pb-10 lg:pb-0">
          {/* Left side - Text content (45%) */}
          <motion.div 
            className="w-full lg:w-[90%] text-left pb-12 lg:pb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              BRIDGING
              <br />
              SCIENCE AND SYNTHESIS.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your trusted partner for high-purity API Impurities, advanced Intermediates, and complex Custom Synthesis solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-row gap-3 w-full lg:w-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#services"
                className="flex-1 lg:flex-none px-2 py-3 lg:px-8 lg:py-4 rounded-full bg-secondary text-white font-semibold text-sm lg:text-base text-center hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.a>
              
              <motion.a
                href="#contact"
                className="flex-1 lg:flex-none px-2 py-3 lg:px-8 lg:py-4 rounded-full border-2 border-primary text-primary font-semibold text-sm lg:text-base text-center hover:bg-primary/10 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Consultation
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image (55%) */}
          <motion.div 
            className="relative h-[40vh] lg:h-[800px] w-full flex items-center justify-center -mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <DNAHelix />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
