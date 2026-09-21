import React from 'react';
import { BUSINESS_NAME, DISPLAY_PHONE, SITE_URL } from '../lib/constants';

export const Footer: React.FC = () => {

  // Using 2026 as per requirement, or just dynamic. The prompt said 2026.
  const displayYear = "2026";

  return (
    <footer className="bg-[#050505] pt-16 pb-24 lg:pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-black text-textPrimary tracking-tight mb-4">
              WC <span className="text-primary">GUINCHO</span>
            </div>
            <p className="text-textSecondary mb-6 font-medium">
              Reboque e transporte de veículos.
            </p>
            <div className="text-textPrimary font-bold text-xl">
              {DISPLAY_PHONE}
            </div>
          </div>
          
          <div>
            <h4 className="text-textPrimary font-bold mb-4 uppercase text-sm tracking-wider">Áreas Principais</h4>
            <ul className="text-textSecondary space-y-2 text-sm leading-loose">
              <li>Rio das Ostras &bull; Macaé</li>
              <li>Cabo Frio &bull; Unamar</li>
              <li>Casimiro de Abreu &bull; Barra de São João</li>
              <li>Região dos Lagos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-textPrimary font-bold mb-4 uppercase text-sm tracking-wider">Links Úteis</h4>
            <ul className="text-textSecondary space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#area-atendimento" className="hover:text-primary transition-colors">Área de Atendimento</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-textSecondary/60">
          <div>
            &copy; {displayYear} {BUSINESS_NAME}. Todos os direitos reservados.
          </div>
          <div>
            <a href={SITE_URL} className="hover:text-primary transition-colors">wcguinchoreboque.com.br</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
