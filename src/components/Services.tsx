import React from 'react';
import { Droplets, Home, Wrench, Star } from 'lucide-react';

const Services = () => {
  const desentupimentoServices = [
    {
      name: 'Desentupimento de Pia',
      description: 'Cozinha/Banheiro - Serviço rápido e comum',
      price: 'R$ 95,00 - R$ 171,00 (Taxa Fixa) ou R$ 75,90/metro'
    },
    {
      name: 'Desentupimento de Ralo',
      description: 'Chuveiro/Piso/Área de Serviço',
      price: 'R$ 76,00 - R$ 142,50 (Taxa Fixa) ou R$ 75,90/metro'
    },
    {
      name: 'Desentupimento de Vaso Sanitário',
      description: 'Serviço essencial para residências',
      price: 'R$ 114,00 - R$ 190,00 (Taxa Fixa) ou R$ 75,90/metro'
    },
    {
      name: 'Desentupimento de Saída de Fossa',
      description: 'Caixa de Gordura (Acesso Fácil e Curto)',
      price: 'R$ 75,90/metro'
    },
    {
      name: 'Desentupimento de Tubulações Internas',
      description: 'Canos de esgoto residenciais em geral',
      price: 'R$ 75,90/metro'
    },
    {
      name: 'Desentupimento de Calha/Tubo de Dreno',
      description: 'Calhas e tubos de escoamento de água da chuva',
      price: 'R$ 142,50 - R$ 237,50 (Taxa Fixa) ou R$ 75,90/metro'
    }
  ];

  const lavagemServices = [
    {
      name: 'Lavagem de Telhados',
      description: 'Remoção de musgos, limo, sujeira acumulada',
      price: 'Até 3m: R$ 17,10/m² | 3-9m: R$ 19,00-22,80/m² | +9m: A negociar'
    },
    {
      name: 'Limpeza de Painéis Solares',
      description: 'Remoção de poeira, fuligem, fezes de pássaros',
      price: 'R$ 38,00-57,00/placa ou R$ 17,10-28,50/m²'
    },
    {
      name: 'Limpeza de Tanques',
      description: 'Higienização interna para evitar contaminação',
      price: 'A negociar (visita técnica obrigatória)'
    },
    {
      name: 'Limpeza de Fachadas e Muros',
      description: 'Remoção de limo, poluição, pichações',
      price: 'Até 3m: R$ 14,25-19,00/m² | 3-9m: R$ 19,00-33,25/m²'
    },
    {
      name: 'Limpeza de Calçadas e Pisos',
      description: 'Remoção de limo, sujeira, musgo, manchas',
      price: 'R$ 7,60-14,25/m²'
    },
    {
      name: 'Limpeza de Pisos Industriais',
      description: 'Remoção de graxa, óleo, poeira e sujeira pesada',
      price: 'R$ 9,50-23,75/m²'
    }
  ];

  const encanadorServices = [
    {
      name: 'Reparos e Consultoria',
      description: 'Pequenos projetos e intervenções especializadas',
      price: 'R$ 237,50/hora'
    },
    {
      name: 'Reparo de Vazamentos Simples',
      description: 'Torneiras, descargas, sifões, chuveiros',
      price: 'Consulte valor por serviço'
    },
    {
      name: 'Instalação de Equipamentos',
      description: 'Torneiras, chuveiros, registros',
      price: 'Consulte valor por serviço'
    },
    {
      name: 'Manutenção de Válvulas',
      description: 'Ajustes e limpeza para fluxo eficiente',
      price: 'Consulte valor por serviço'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Preços transparentes com <strong className="text-green-600">5% de desconto de lançamento</strong> já aplicado
          </p>
          <div className="bg-green-100 border-l-4 border-green-500 p-4 max-w-2xl mx-auto">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-green-600 mr-2" />
              <p className="text-green-700 font-medium">
                Orçamento Gratuito no site e no local!
              </p>
            </div>
          </div>
        </div>

        {/* Desentupimento Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Desentupimento (Com Máquina Manual)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desentupimentoServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-700 font-medium text-sm">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lavagem Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Home className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Lavagem Especializada</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lavagemServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-700 font-medium text-sm">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Encanador Services */}
        <div>
          <div className="flex items-center mb-8">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Wrench className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Encanador: Pequenos Projetos e Reparação</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {encanadorServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-orange-700 font-medium text-sm">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Os preços podem variar conforme complexidade, tempo e deslocamento. 
            Oferecemos orçamento gratuito personalizado!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Solicitar Orçamento Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;