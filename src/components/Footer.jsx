import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Shared styling for the three main boxes to ensure uniformity
  const cardClasses = "bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 shadow-2xl shadow-blue-900/10";
  
  // Styling for section headings within the cards
  const headingClasses = "text-white font-bold text-xl mb-6 flex items-center";
  const headingIconClasses = "w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full mr-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]";

  return (
    <footer className="relative bg-[#0B1120] text-slate-300 overflow-hidden font-sans font-medium">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-screen"></div>

      <div className="relative container mx-auto px-6 pt-24 pb-12">
        
        {/* --- Main Grid Content (3 Uniform Boxes) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          
          {/* === Box 1: Brand & About === */}
          <div className={cardClasses}>
            <div className={headingClasses}>
               <span className={headingIconClasses}></span>
               ChemSetu
            </div>
            
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center space-x-3 group mb-4">
                <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                   <img src="/chemsetu-logo.png" alt="ChemSetu Logo" className="w-8 h-auto" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">Research & Industry</h3>
                </div>
              </Link>
              <p className="text-slate-400 leading-relaxed text-sm">
                Bridging the gap between academic research and industrial application with precision, integrity, and absolute confidentiality.
              </p>
            </div>

            {/* Push to bottom */}
            <div className="mt-auto">
                 <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center w-full bg-slate-800/50 rounded-xl border border-slate-700/50 p-3 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white mr-4 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-blue-400">Follow on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* === Box 2: Explore Links === */}
          <div className={cardClasses}>
            <h4 className={headingClasses}>
              <span className={headingIconClasses}></span>
              Explore
            </h4>
            <ul className="space-y-3 flex-grow">
              {[
                { label: 'Research Papers', to: '/compounds', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
                { label: 'Terms of Service', to: '/terms', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Privacy Policy', to: '/privacy', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                  >
                    <div className="mr-4 text-slate-500 group-hover:text-blue-400 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                        </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-white font-medium">{link.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Box 3: Contact Info === */}
          <div className={cardClasses}>
            <h4 className={headingClasses}>
              <span className={headingIconClasses}></span>
              Get in Touch
            </h4>
            
            <div className="space-y-6 flex-grow">
              {/* Address */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=S.+No.+80%2F8+Akshay+Industries%2C+Mahadev+Nagar%2C+Nanded+Phata%2C+Pune+-+411041" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors leading-relaxed text-sm">
                  S. No. 80/8 Akshay Industries,<br/> Mahadev Nagar, Nanded Phata,<br/> Pune.
                </span>
              </a>

              {/* Phone */}
              <a href="tel:+918805245811" className="flex items-center space-x-4 group p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors font-semibold">
                  +91 8805245811
                </span>
              </a>

               {/* Email */}
               <a href="mailto:info.chemsetu@gmail.com" className="flex items-center space-x-4 group p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors break-all text-sm font-medium">
                  info.chemsetu@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ChemSetu. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 font-semibold">
             <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;