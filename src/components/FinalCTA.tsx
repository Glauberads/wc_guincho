import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';
import { Phone } from 'lucide-react';
import { BUSINESS_NAME, DISPLAY_PHONE } from '../lib/constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-textPrimary mb-6">
          Precisou de Reboque?<br />
          Fale Com a {BUSINESS_NAME}.
        </h2>
        <p className="text-lg text-textSecondary mb-10 max-w-2xl mx-auto">
          Envie sua localização e consulte o atendimento.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('final')}
            data-id="cta-whatsapp-final"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primaryHover text-background px-8 py-5 rounded-xl font-black text-lg transition-all shadow-[0_0_30px_rgba(255,196,0,0.2)] hover:scale-105"
          >
            <Phone className="w-6 h-6 fill-background" />
            SOLICITAR REBOQUE PELO WHATSAPP
          </a>
          
          <div className="flex items-center gap-3 text-textPrimary font-bold text-xl bg-card px-6 py-3 rounded-full border border-white/5">
            <Phone className="w-5 h-5 text-primary" />
            {DISPLAY_PHONE}
          </div>
        </div>
      </div>
    </section>
  );
};
