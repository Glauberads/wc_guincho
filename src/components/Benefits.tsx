import React from 'react';
import { MessageCircle, Map, Zap, Truck } from 'lucide-react';

const benefits = [
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "Contato direto",
    description: "Fale rapidamente pelo WhatsApp."
  },
  {
    icon: <Map className="w-6 h-6 text-primary" />,
    title: "Atendimento regional",
    description: "Atendimento em diferentes cidades da região."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Processo simples",
    description: "Informe sua localização e explique o que aconteceu."
  },
  {
    icon: <Truck className="w-6 h-6 text-primary" />,
    title: "Transporte de veículos",
    description: "Solicite o transporte até o destino necessário."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-textPrimary mb-4">
            Por Que Falar Com a WC GUINCHO?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background border border-white/5 p-8 rounded-2xl">
              <div className="bg-surface w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">{benefit.title}</h3>
              <p className="text-textSecondary leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
