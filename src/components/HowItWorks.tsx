import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';
import { Phone, MapPin, Navigation } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Phone className="w-6 h-6 text-background" />,
    title: "Chame a WC GUINCHO",
    description: "Clique no botão do WhatsApp."
  },
  {
    number: "02",
    icon: <MapPin className="w-6 h-6 text-background" />,
    title: "Envie sua localização",
    description: "Informe onde você e o veículo estão."
  },
  {
    number: "03",
    icon: <Navigation className="w-6 h-6 text-background" />,
    title: "Informe o destino",
    description: "Explique onde deseja levar o veículo e consulte o atendimento."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-textPrimary mb-4">
            Precisou de Reboque? É Simples.
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center border-4 border-surface shadow-xl mb-6 relative">
                <span className="absolute -top-2 -right-2 text-5xl font-black text-white/5">{step.number}</span>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">{step.title}</h3>
              <p className="text-textSecondary">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('how-it-works')}
            data-id="cta-whatsapp-services"
            className="inline-flex items-center justify-center bg-primary hover:bg-primaryHover text-background px-8 py-4 rounded-lg font-black text-lg transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
          >
            PEDIR REBOQUE
          </a>
        </div>
      </div>
    </section>
  );
};
