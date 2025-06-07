import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento gratuito.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Mensagem:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5547997067124?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const openDirectWhatsApp = () => {
    window.open('https://wa.me/5547997067124?text=Olá! Gostaria de solicitar um orçamento gratuito.', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite seu orçamento gratuito agora mesmo! Estamos prontos para atender você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-blue-600" />
              Solicitar Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="(47) 9 9999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Descreva o serviço que você precisa..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco Diretamente
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefone/WhatsApp</p>
                    <p className="text-green-700">(47) 99706-7124</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <p className="text-blue-700">renovaro@iximex.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Área de Atuação</p>
                    <p className="text-orange-700">Jaraguá do Sul e Região</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Horário de Atendimento</p>
                    <p className="text-purple-700">Segunda à Sábado: 7h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">WhatsApp Direto</h4>
              <p className="mb-4">
                Para atendimento mais rápido, fale conosco diretamente pelo WhatsApp!
              </p>
              <button
                onClick={openDirectWhatsApp}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </button>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-900 mb-3">
                🎯 Orçamento Gratuito Garantido!
              </h4>
              <ul className="text-blue-700 space-y-2">
                <li>✅ Avaliação sem compromisso</li>
                <li>✅ Preços transparentes</li>
                <li>✅ Atendimento personalizado</li>
                <li>✅ Resposta rápida</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;