
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { BRANCHES } from '../constants';
import { Branch } from '../types';

const LocationMap: React.FC = () => {
  const [viewBranch, setViewBranch] = useState<Branch>('soan');

  return (
    <section className="py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Find Us</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">Visit our facilities and meet our instructors. We are located in the heart of Islamabad and Rawalpindi.</p>

            <div className="space-y-4">
              {Object.values(BRANCHES).map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setViewBranch(branch.id as Branch)}
                  className={`w-full text-left p-6 rounded-none transition-all border ${viewBranch === branch.id
                      ? 'bg-primary-red/5 border-primary-red shadow-lg'
                      : 'bg-white border-gray-200 hover:border-black/10'
                    }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-none ${viewBranch === branch.id ? 'bg-primary-red text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className={`font-bold ${viewBranch === branch.id ? 'text-black' : 'text-gray-500'}`}>
                        {branch.name}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{branch.address}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button className="red-button w-full mt-10 py-5 rounded-none font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-2">
              <Navigation size={16} />
              <span>Get Directions</span>
            </button>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="w-full h-[550px] rounded-none overflow-hidden shadow-2xl border border-gray-200 bg-gray-100">
              <iframe
                title="Branch Location"
                src={BRANCHES[viewBranch].mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="absolute top-6 left-6 bg-primary-red text-white px-4 py-2 rounded-none text-[10px] font-black uppercase tracking-widest shadow-lg">
              CURRENTLY VIEWING: {BRANCHES[viewBranch].name.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
