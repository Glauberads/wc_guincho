import React from 'react';
import { getWhatsAppUrl, getPhoneUrl } from '../lib/whatsapp';
import { trackWhatsAppClick, trackPhoneClick } from '../lib/analytics';
import { Phone, MapPin, Truck } from 'lucide-react';
import { BUSINESS_NAME } from '../lib/constants';
import heroImg from '../assets/imagens/01.jpeg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Caminhão plataforma guincho executando serviço de reboque"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-textSecondary tracking-wide uppercase">
              {BUSINESS_NAME} &bull; REBOQUE E TRANSPORTE DE VEÍCULOS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-textPrimary leading-[1.1] mb-6">
            Precisou de <span className="text-primary block sm:inline">Reboque?</span>
            <br />
            A WC GUINCHO Vai Até Você.
          </h1>

          <p className="text-lg sm:text-xl text-textSecondary mb-4 max-w-2xl font-medium">
            Atendimento em Rio das Ostras, Macaé, Cabo Frio, Unamar, Casimiro de Abreu e outras localidades da região.
          </p>
          
          <p className="text-base sm:text-lg text-textSecondary/80 mb-10 max-w-2xl">
            Seu veículo parou? Entre em contato, envie sua localização e consulte a disponibilidade de atendimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero')}
              data-id="cta-whatsapp-hero"
              className="bg-primary hover:bg-primaryHover text-background px-8 py-4 rounded-lg font-black text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,196,0,0.3)] hover:scale-[1.02]"
            >
              <Phone className="w-6 h-6 fill-background" />
              SOLICITAR REBOQUE AGORA
            </a>
            
            <a
              href={getPhoneUrl()}
              onClick={() => trackPhoneClick('hero')}
              data-id="cta-phone-hero"
              className="bg-surface hover:bg-card border border-white/10 text-textPrimary px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              LIGAR AGORA
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-textSecondary text-sm font-medium">
              <div className="bg-white/5 p-2 rounded-md"><Phone className="w-5 h-5 text-primary" /></div>
              Solicitação pelo WhatsApp
            </div>
            <div className="flex items-center gap-3 text-textSecondary text-sm font-medium">
              <div className="bg-white/5 p-2 rounded-md"><MapPin className="w-5 h-5 text-primary" /></div>
              Atendimento regional
            </div>
            <div className="flex items-center gap-3 text-textSecondary text-sm font-medium">
              <div className="bg-white/5 p-2 rounded-md"><Truck className="w-5 h-5 text-primary" /></div>
              Transporte de veículos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
