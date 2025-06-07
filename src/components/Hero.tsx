import React from 'react';
import { ArrowRight, Droplets, Home, Wrench } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5547997067124?text=Olá! Gostaria de solicitar um orçamento gratuito.', '_blank');
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-blue-100 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-900">Renovaro:</span>
              <br />
              <span className="text-gray-700">Soluções Completas</span>
              <br />
              <span className="text-blue-600">para o Seu Imóvel!</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Desentupimento, limpeza de calçadas e telhados, e pequenos reparos de encanamento. 
              Tudo com a qualidade e confiança que você merece!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Solicite um Orçamento Gratuito!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={openWhatsApp}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                WhatsApp Direto
              </button>
            </div>

            {/* Features Preview */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Desentupimento</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Limpeza Especializada</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wrench className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Pequenos Reparos</p>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">5%</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Desconto de Lançamento!
                </h3>
                <p className="text-gray-600 mb-6">
                  Aproveite nossa promoção especial de inauguração. 
                  Todos os preços já incluem 5% de desconto.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700 font-medium">
                    💡 <strong>Futuro:</strong> Em breve, chat de suporte com IA para atendimento 24h!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;