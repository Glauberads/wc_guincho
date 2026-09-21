import React from 'react';
import { Truck, AlertTriangle, Wrench, Settings, Car } from 'lucide-react';

const services = [
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Reboque de Veículos",
    description: "Solicite o transporte do seu veículo até o destino necessário."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-primary" />,
    title: "Veículo Parado",
    description: "Seu carro não consegue seguir viagem? Fale conosco e consulte o atendimento."
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Transporte para Oficina",
    description: "Precisa levar seu veículo até uma oficina ou mecânico? Solicite o transporte."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Veículo com Problema Mecânico",
    description: "Em situações onde o veículo não consegue continuar a viagem, consulte a disponibilidade do reboque."
  },
  {
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "Transporte Automotivo",
    description: "Transporte seu automóvel para outro local com serviço de reboque."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-textPrimary mb-4">
            Como a WC GUINCHO Pode Ajudar
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group"
            >
              <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">{service.title}</h3>
              <p className="text-textSecondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
