import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Jaraguá do Sul',
      text: 'Excelente serviço! Desentupimento da pia foi feito rapidamente e o preço foi muito justo. Recomendo!',
      rating: 5,
      service: 'Desentupimento'
    },
    {
      name: 'João Santos',
      location: 'Corupá',
      text: 'A limpeza do meu telhado ficou perfeita. Removeram todo o musgo e sujeira. Profissionais muito competentes.',
      rating: 5,
      service: 'Limpeza de Telhado'
    },
    {
      name: 'Ana Costa',
      location: 'Massaranduba',
      text: 'Precisava de um reparo urgente no chuveiro. Vieram no mesmo dia e resolveram tudo. Muito satisfeita!',
      rating: 5,
      service: 'Reparo de Encanamento'
    },
    {
      name: 'Pedro Oliveira',
      location: 'Schroeder',
      text: 'Ótimo custo-benefício. A limpeza da calçada ficou impecável e o atendimento foi muito cordial.',
      rating: 5,
      service: 'Limpeza de Calçada'
    },
    {
      name: 'Carla Rodrigues',
      location: 'Jaraguá do Sul',
      text: 'Serviço profissional e rápido. Desentupimento do vaso sanitário foi resolvido sem complicações.',
      rating: 5,
      service: 'Desentupimento'
    },
    {
      name: 'Roberto Lima',
      location: 'Guaramirim',
      text: 'Preço transparente e serviço de qualidade. Limpeza dos painéis solares ficou excelente!',
      rating: 5,
      service: 'Limpeza de Painéis'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho e motivação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-blue-700">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Área de Atuação
          </h3>
          <p className="text-gray-600 mb-6">
            Atendemos com excelência em Jaraguá do Sul e região
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Jaraguá do Sul</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Corupá</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Massaranduba</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Schroeder</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Guaramirim</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Pomerode</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">Blumenau</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <span className="font-medium text-blue-700">+ Região</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;