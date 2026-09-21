import React from 'react';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';
import { Phone } from 'lucide-react';


export const Header: React.FC = () => {
  const handleWhatsApp = () => {
    trackWhatsAppClick('header');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* While there is no logo, we use text as requested */}
          <span className="text-2xl font-black text-textPrimary tracking-tight">
            WC <span className="text-primary">GUINCHO</span>
          </span>
        </div>

        {/* Desktop Menu - Hidden on Mobile to prioritize CTA as requested */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#inicio" className="text-textSecondary hover:text-primary transition-colors text-sm font-medium">Início</a>
          <a href="#servicos" className="text-textSecondary hover:text-primary transition-colors text-sm font-medium">Serviços</a>
          <a href="#area-atendimento" className="text-textSecondary hover:text-primary transition-colors text-sm font-medium">Área de Atendimento</a>
          <a href="#como-funciona" className="text-textSecondary hover:text-primary transition-colors text-sm font-medium">Como Funciona</a>
          <a href="#faq" className="text-textSecondary hover:text-primary transition-colors text-sm font-medium">Perguntas Frequentes</a>
        </nav>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          data-id="cta-whatsapp-header"
          className="bg-primary hover:bg-primaryHover text-background px-5 py-2.5 rounded-md font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
        >
          <Phone className="w-4 h-4 fill-background" />
          <span className="hidden sm:inline">CHAMAR NO WHATSAPP</span>
          <span className="sm:hidden">WHATSAPP</span>
        </a>
      </div>
    </header>
  );
};
