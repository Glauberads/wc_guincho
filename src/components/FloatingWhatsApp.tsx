import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';
import { Phone } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:bottom-8 md:right-8 md:left-auto md:p-0">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('floating')}
        data-id="cta-whatsapp-floating"
        className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl md:rounded-full font-black text-lg transition-all shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105"
      >
        <Phone className="w-6 h-6 fill-white" />
        <span>SOLICITAR REBOQUE</span>
      </a>
    </div>
  );
};
