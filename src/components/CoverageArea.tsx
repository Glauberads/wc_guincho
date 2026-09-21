import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackCoverageClick } from '../lib/analytics';
import { MapPin } from 'lucide-react';

const locations = [
  { city: "Rio das Ostras", title: "Reboque em Rio das Ostras" },
  { city: "Macaé", title: "Reboque em Macaé" },
  { city: "Unamar", title: "Reboque em Unamar" },
  { city: "Cabo Frio", title: "Reboque em Cabo Frio" },
  { city: "Casimiro de Abreu", title: "Reboque em Casimiro de Abreu" },
  { city: "Barra de São João", title: "Reboque em Barra de São João" }
];

export const CoverageArea: React.FC = () => {
  return (
    <section id="area-atendimento" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textPrimary mb-6">
            WC GUINCHO Atende Rio das Ostras, Macaé, Cabo Frio e Região
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            Atendimento em diferentes cidades da Região dos Lagos e Norte Fluminense. Consulte pelo WhatsApp a disponibilidade para sua localização.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {locations.map((loc, index) => (
            <div key={index} className="bg-card border border-white/5 p-6 rounded-xl flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-textPrimary mb-1">{loc.city}</h3>
                <p className="text-sm text-textSecondary">{loc.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface border border-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-textPrimary mb-3">E outras localidades da região.</h3>
          <p className="text-textSecondary mb-8">
            Não encontrou sua cidade? Entre em contato para consultar a disponibilidade.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCoverageClick('other')}
            data-id="cta-whatsapp-coverage"
            className="inline-flex items-center justify-center bg-card hover:bg-white/5 border border-primary/50 text-textPrimary px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            CONSULTAR MINHA LOCALIZAÇÃO
          </a>
        </div>
      </div>
    </section>
  );
};
