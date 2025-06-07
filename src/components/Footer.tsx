import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5547997067124?text=Olá! Gostaria de solicitar um orçamento gratuito.', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold">
                <span className="text-blue-400">Reno</span>varo
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Soluções completas para o seu imóvel. Desentupimento, limpeza especializada 
              e pequenos reparos de encanamento com qualidade e confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openWhatsApp}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Orçamento Gratuito
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>(47) 99706-7124</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>renovaro@iximex.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span>Jaraguá do Sul e Região</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Summary */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Desentupimento</h4>
              <p className="text-sm text-gray-300">
                Pias, ralos, vasos sanitários, tubulações e mais
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">Limpeza Especializada</h4>
              <p className="text-sm text-gray-300">
                Telhados, calçadas, fachadas, painéis solares
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-400 mb-2">Pequenos Reparos</h4>
              <p className="text-sm text-gray-300">
                Vazamentos, torneiras, chuveiros, registros
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Renovaro. Todos os direitos reservados.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="bg-green-100 px-3 py-1 rounded-full mr-4">
                <span className="text-xs font-medium text-green-700">
                  5% Desconto de Lançamento
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Preços transparentes • Orçamento gratuito
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;