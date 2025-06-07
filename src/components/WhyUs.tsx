import React from 'react';
import { CheckCircle, Clock, Shield, DollarSign, Users, Settings } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'Soluções Completas',
      description: 'Desentupimento, limpeza de calçadas, telhados e pequenos reparos de encanamento em um só lugar.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: 'Preço Justo e Transparente',
      description: 'Sem surpresas na conta, com orçamentos claros e detalhados para todos os serviços.'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: 'Atendimento Rápido',
      description: 'Foco na experiência do cliente, com agilidade, cordialidade e pontualidade garantidas.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e confiáveis para todos os tipos de serviços oferecidos.'
    },
    {
      icon: <Settings className="w-8 h-8 text-red-600" />,
      title: 'Equipamento Adequado',
      description: 'Uso de tecnologia eficiente: máquinas manuais para desentupimento, lavadoras de alta pressão.'
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: 'Orçamento Gratuito',
      description: 'Avaliação gratuita no site e no local, sem compromisso e com total transparência.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher a Renovaro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos diferenciais fazem toda a diferença na qualidade e satisfação do seu serviço
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Garantia de Qualidade
          </h3>
          <p className="text-blue-700 max-w-3xl mx-auto mb-6">
            Trabalhamos com equipamentos de qualidade, produtos adequados para cada tipo de serviço 
            e sempre prezamos pela satisfação total do cliente. Sua confiança é nossa prioridade!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700">Clientes Satisfeitos</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-gray-700">Atendimento Rápido</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-700">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;