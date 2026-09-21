import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackLocationClick } from '../lib/analytics';
import { MapPin } from 'lucide-react';

export const LocationCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Abstract map-like background texture (very subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-textPrimary mb-4">
          Onde você está?
        </h2>
        <p className="text-lg text-textSecondary mb-10">
          Envie sua localização pelo WhatsApp para facilitar o atendimento.
        </p>
        
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLocationClick('location_block')}
          className="inline-flex items-center justify-center gap-3 bg-white text-background px-8 py-4 rounded-xl font-black text-lg transition-all hover:bg-gray-200"
        >
          📍 ENVIAR LOCALIZAÇÃO
        </a>
      </div>
    </section>
  );
};
