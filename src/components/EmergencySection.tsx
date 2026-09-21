import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackLocationClick } from '../lib/analytics';
import { MapPin } from 'lucide-react';
import { BUSINESS_NAME } from '../lib/constants';

export const EmergencySection: React.FC = () => {
  return (
    <section className="py-20 bg-surface border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textPrimary mb-6">
          Seu carro parou? Você não precisa ficar procurando ajuda por horas.
        </h2>
        <p className="text-lg sm:text-xl text-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed">
          Fale diretamente com a {BUSINESS_NAME}, envie sua localização e consulte o atendimento disponível para sua região.
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLocationClick('emergency')}
          data-id="cta-location"
          className="inline-flex items-center justify-center gap-3 bg-card hover:bg-card/80 border border-primary/50 text-textPrimary px-8 py-5 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
        >
          <MapPin className="w-6 h-6 text-primary" />
          ENVIAR MINHA LOCALIZAÇÃO
        </a>
      </div>
    </section>
  );
};
