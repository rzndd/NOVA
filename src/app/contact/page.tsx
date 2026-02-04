'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-28 min-h-screen">
      {/* Breadcrumb */}
      <div className="container-custom py-4 border-b border-cloud">
        <nav className="flex items-center text-sm text-graphite">
          <Link href="/" className="hover:text-onyx transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-onyx">Contato</span>
        </nav>
      </div>

      {/* Header */}
      <section className="section bg-cloud/30">
        <div className="container-custom text-center">
          <h1 className="font-display text-display-lg mb-4">Fale Conosco</h1>
          <p className="text-graphite max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar. 
            Entre em contato conosco por qualquer um dos canais abaixo.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-xl mb-8">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-champagne/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-champagne" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">E-mail</h3>
                    <a 
                      href="mailto:contato@novaathleisure.com" 
                      className="text-graphite hover:text-champagne transition-colors"
                    >
                      contato@novaathleisure.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-champagne/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-champagne" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefone</h3>
                    <a 
                      href="tel:+5511999999999" 
                      className="text-graphite hover:text-champagne transition-colors"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-champagne/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-champagne" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Endereço</h3>
                    <p className="text-graphite">
                      Rua Oscar Freire, 123<br />
                      Jardins, São Paulo - SP<br />
                      CEP 01426-001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-champagne/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-champagne" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Horário de Atendimento</h3>
                    <p className="text-graphite">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 10h às 14h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-ivory p-8">
                <h2 className="font-display text-xl mb-6">Envie sua mensagem</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="mx-auto text-green-600 mb-4" />
                    <h3 className="font-display text-lg mb-2">Mensagem Enviada!</h3>
                    <p className="text-graphite mb-6">
                      Obrigado pelo seu contato. Responderemos em até 24 horas.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2">Nome *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">E-mail *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="input"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Assunto *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="input"
                        required
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="duvida">Dúvida sobre produto</option>
                        <option value="pedido">Informações sobre pedido</option>
                        <option value="troca">Trocas e devoluções</option>
                        <option value="parceria">Parcerias</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Mensagem *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input min-h-[150px] resize-none"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Enviar Mensagem
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
