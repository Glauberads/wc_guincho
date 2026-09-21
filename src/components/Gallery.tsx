import React from 'react';
import img2 from '../assets/imagens/02.jpeg';
import img3 from '../assets/imagens/03.jpeg';
import img4 from '../assets/imagens/04.jpeg';
import img5 from '../assets/imagens/05.jpeg';
import img6 from '../assets/imagens/06.jpeg';
import img7 from '../assets/imagens/07.jpeg';

export const Gallery: React.FC = () => {
  const images = [img2, img3, img4, img5, img6, img7];

  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-textPrimary mb-4">
            Nossos Atendimentos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden group border border-white/5 bg-surface">
              <img 
                src={src} 
                alt={`Serviço de Guincho ${index + 2}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
