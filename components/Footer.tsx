
import React from 'react';
import { Send, Facebook, Instagram, Youtube, Phone, Clock, MapPin } from 'lucide-react';

interface FooterProps {
  onRegister: () => void;
}

const Footer: React.FC<FooterProps> = ({ onRegister }) => {
  return (
    <footer className="bg-primary-black text-black pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Newsletter Section - Matching StayFit image */}
        <div className="bg-white border border-gray-200 p-12 md:p-16 rounded-none mb-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-red/5 blur-3xl rounded-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 blur-2xl rounded-none"></div>

          <div className="relative z-10 max-w-xl">
            <h4 className="text-4xl md:text-6xl font-bebas mb-4 uppercase tracking-tighter text-black">Stay Connected with <span className="text-primary-red">Bakhshu</span></h4>
            <p className="text-gray-600 text-sm md:text-base font-medium">Join our community and get exclusive tips, workout plans, and special offers.</p>
          </div>
          <div className="relative z-10 w-full lg:w-[450px]">
            <div className="flex bg-gray-50 border border-gray-200 p-2 rounded-none focus-within:border-primary-red transition-all shadow-inner">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 px-6 py-4 outline-none text-sm font-medium rounded-none text-black placeholder-gray-400"
              />
              <button className="red-button px-8 py-4 rounded-none text-xs font-black uppercase tracking-widest flex items-center space-x-2 shadow-lg">
                <span>Subscribe</span>
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <img src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-1/354185334_801753254852682_2772486742754562942_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=TuJqvwVxzHcQ7kNvwEtXAZ4&_nc_oc=AdlQEDLDKUCqHqkx9a3l0hR654UyTTg1-50Gkelb0D89k5ZUi1pBDoRDxqkHbfJSQFg&_nc_zt=24&_nc_ht=scontent.fisb5-1.fna&_nc_gid=7o_MZhsQ7762zC1jZEk3cA&oh=00_AfoM7dI6kxAKdRyu_lwi2Kb3zg4XWquisYcD5XFNuuD2dQ&oe=696C4EE3" alt="Logo" className="w-14 h-14 rounded-full" />
              <div>
                <span className="font-bebas text-2xl tracking-widest text-black block leading-none">BAKHSHU</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary-red uppercase">FITNESS CLUB</span>
              </div>
            </div>
            <p className="text-gray-600 text-xs font-bold leading-relaxed uppercase tracking-widest">
              The premier destination for martial arts and physical excellence. Creating leaders through discipline and unshakeable confidence.
            </p>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                {[Facebook].map((Icon, i) => (
                  <a key={i} href="https://www.facebook.com/BakhshuTaekwondoClub" className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-none flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white transition-all text-black">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="flex space-x-4">
                {[Instagram].map((Icon, i) => (
                  <a key={i} href="https://www.instagram.com/bakhshutaekwondoclub/?hl=en" className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-none flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white transition-all text-black">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="flex space-x-4">
                {[Youtube].map((Icon, i) => (
                  <a key={i} href="https://www.youtube.com/@BakhshuTaekwondoClub" className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-none flex items-center justify-center hover:bg-primary-red hover:border-primary-red hover:text-white transition-all text-black">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-black tracking-[0.4em] uppercase mb-10 text-primary-red">Contact Us</h5>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-none flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-all text-black">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Call Support</p>
                  <p className="text-sm font-bold tracking-wider text-black">0345-5304798</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-none flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-all text-black">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Mon-Sat</p>
                  <p className="text-sm font-bold tracking-wider text-black">4:30 PM – 7:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-black tracking-[0.4em] uppercase mb-10 text-primary-red">Locations</h5>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-primary-red mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-black">Soan Garden Branch</p>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">Platinum Plaza, Block B, Islamabad</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-primary-red mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-black">Rawalpindi Branch</p>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">Haidri Chowk, Saidpur Road</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-red p-8 rounded-none relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-none -mr-12 -mt-12 transition-transform group-hover:scale-150"></div>
            <h4 className="font-bebas text-3xl mb-3 text-white leading-none tracking-widest">JOIN THE FAMILY</h4>
            <p className="text-white/80 text-[10px] mb-8 font-black tracking-widest uppercase leading-relaxed">Achieve your personal best with our elite trainers.</p>
            <button onClick={onRegister} className="w-full bg-white text-primary-red py-4 rounded-none font-black text-xs tracking-widest hover:bg-black hover:text-white transition-all uppercase shadow-lg">Start Today</button>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[9px] font-black uppercase tracking-[0.4em] space-y-4 md:space-y-0">
          <p>© 2026 BAKHSHU TAEKWONDO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <span className="hover:text-primary-red cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary-red cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
