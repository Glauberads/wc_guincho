import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';
import { BUSINESS_NAME, DISPLAY_PHONE } from '../lib/constants';

export const MiddleCTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-background mb-6">
          Está Com o Veículo Parado?
        </h2>
        <p className="text-lg sm:text-xl text-background/80 mb-10 font-medium">
          Entre em contato agora com a {BUSINESS_NAME} e consulte o atendimento para sua localização.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('middle')}
            data-id="cta-whatsapp-middle"
            className="bg-background hover:bg-surface text-textPrimary px-10 py-5 rounded-xl font-black text-xl transition-all shadow-2xl hover:scale-105"
          >
            CHAMAR {BUSINESS_NAME}
          </a>
          <div className="text-background font-bold text-2xl tracking-wide">
            {DISPLAY_PHONE}
          </div>
        </div>
      </div>
    </section>
  );
};
