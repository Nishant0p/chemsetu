import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FlaskConical, ArrowRight } from 'lucide-react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';

const Compounds = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('compound');
  const loading = state === 'loading';

  return (
    <section id="compounds" className="bg-slate-50 py-20 px-4 min-h-screen">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
          Molecular Library & Capabilities
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From complex API intermediates to difficult-to-synthesize impurities.
        </p>

        {/* Search Bar (Visual Only) */}
        <div className="mt-8 relative max-w-xl mx-auto">
          <input 
            type="text" 
            placeholder="Search by CAS No., Name, or Reaction Type..." 
            className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* The Product Grid */}
      {loading ? (
        <div className="text-center py-20">Loading library...</div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents && documents.map((doc) => (
            <Link to={`/compounds/${doc.uid}`} key={doc.id} className="block">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1 flex flex-col h-full">
                
                {/* Image or Icon & Category Tag */}
                {doc.data.image && doc.data.image.url ? (
                  <div className="mb-6">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                      <img src={doc.data.image.url} alt={doc.data.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                        {doc.data.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-blue-50 transition-colors">
                      <FlaskConical className="text-blue-600 w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                      {doc.data.category}
                    </span>
                  </div>
                )}

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {doc.data.name}
                </h3>
                <div className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  <PrismicRichText field={doc.data.description} />
                </div>

                {/* Footer: Scale & Arrow */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                  <div className="text-xs font-semibold text-slate-400">
                    Capacity: <span className="text-slate-700">{doc.data.scale}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

    </section>
  );
};

export default Compounds;
