import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const faqs = [
  {
    question: "A WC GUINCHO atende Rio das Ostras?",
    answer: "Rio das Ostras está entre as principais regiões de atendimento. Entre em contato pelo WhatsApp para consultar a disponibilidade."
  },
  {
    question: "Vocês atendem Macaé?",
    answer: "Macaé faz parte das regiões de atendimento da WC GUINCHO. Consulte pelo WhatsApp a disponibilidade para sua localização."
  },
  {
    question: "Vocês atendem Cabo Frio e Unamar?",
    answer: "A WC GUINCHO atende essas e outras localidades da região. Envie sua localização pelo WhatsApp para consultar o atendimento."
  },
  {
    question: "Como pedir um reboque?",
    answer: "Clique no botão do WhatsApp, informe sua localização atual, o tipo de situação e o destino desejado."
  },
  {
    question: "Como solicitar um orçamento?",
    answer: "Informe pelo WhatsApp onde o veículo está e para onde precisa ser transportado. Com essas informações será possível verificar o atendimento."
  },
  {
    question: "A WC GUINCHO atende outras cidades?",
    answer: "Sim, outras localidades podem ser atendidas. Consulte sua região diretamente pelo WhatsApp."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background border-y border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-textPrimary mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-white/5 rounded-xl bg-card overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-primary/30' : ''}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="font-bold text-textPrimary pr-8 text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${isOpen ? 'pb-6 opacity-100 max-h-40' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-textSecondary leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
