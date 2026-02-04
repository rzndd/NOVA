import Link from 'next/link';
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Pedidos e Entregas',
    questions: [
      {
        question: 'Qual o prazo de entrega?',
        answer: 'O prazo de entrega varia de acordo com a sua localização. Para capitais e regiões metropolitanas, o prazo é de 3 a 7 dias úteis. Para demais regiões, de 7 a 15 dias úteis. Após a postagem, você receberá o código de rastreamento por e-mail.',
      },
      {
        question: 'Como rastrear meu pedido?',
        answer: 'Assim que seu pedido for despachado, você receberá um e-mail com o código de rastreamento. Você também pode acompanhar o status do pedido na área "Meus Pedidos" da sua conta.',
      },
      {
        question: 'O frete é grátis?',
        answer: 'Sim! Oferecemos frete grátis para compras acima de R$299. Para compras abaixo desse valor, o frete é calculado de acordo com o CEP de entrega.',
      },
    ],
  },
  {
    category: 'Trocas e Devoluções',
    questions: [
      {
        question: 'Como faço para trocar um produto?',
        answer: 'Você tem até 30 dias após o recebimento para solicitar a troca. Basta acessar "Meus Pedidos" na sua conta, selecionar o produto e clicar em "Solicitar Troca". A primeira troca é gratuita!',
      },
      {
        question: 'Posso devolver um produto?',
        answer: 'Sim. Aceitamos devoluções em até 30 dias após o recebimento, desde que o produto esteja em perfeitas condições, com etiquetas e na embalagem original. O reembolso será feito na mesma forma de pagamento.',
      },
    ],
  },
  {
    category: 'Produtos',
    questions: [
      {
        question: 'Como escolher o tamanho certo?',
        answer: 'Cada produto possui uma tabela de medidas detalhada. Recomendamos medir uma peça que você já tem e comparar com nossa tabela. Em caso de dúvida, nossa equipe está disponível para ajudar.',
      },
      {
        question: 'Os produtos têm proteção UV?',
        answer: 'Sim! Todas as peças da coleção TRAIN possuem proteção UV50+, bloqueando mais de 98% dos raios nocivos.',
      },
      {
        question: 'Como cuidar das minhas peças NŌVA?',
        answer: 'Recomendamos lavar à mão ou na máquina em ciclo delicado, com água fria. Não use alvejante. Seque à sombra e não passe ferro diretamente sobre as peças.',
      },
    ],
  },
  {
    category: 'Pagamento',
    questions: [
      {
        question: 'Quais formas de pagamento são aceitas?',
        answer: 'Aceitamos cartões de crédito (Visa, Mastercard, Elo, American Express), PIX e boleto bancário. No cartão, você pode parcelar em até 6x sem juros.',
      },
      {
        question: 'O pagamento é seguro?',
        answer: 'Sim! Utilizamos as mais avançadas tecnologias de segurança e criptografia. Seus dados são protegidos e nunca são armazenados em nossos servidores.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="pt-28 min-h-screen">
      {/* Breadcrumb */}
      <div className="container-custom py-4 border-b border-cloud">
        <nav className="flex items-center text-sm text-graphite">
          <Link href="/" className="hover:text-onyx transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-onyx">Perguntas Frequentes</span>
        </nav>
      </div>

      {/* Header */}
      <section className="section bg-cloud/30">
        <div className="container-custom text-center">
          <h1 className="font-display text-display-lg mb-4">Perguntas Frequentes</h1>
          <p className="text-graphite max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos produtos, 
            entregas, trocas e pagamentos.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="font-display text-xl mb-6 pb-2 border-b border-cloud">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details 
                    key={faqIndex}
                    className="group bg-ivory border border-cloud"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                      <span className="font-medium pr-4">{faq.question}</span>
                      <ChevronDown 
                        size={20} 
                        className="flex-shrink-0 text-graphite transition-transform group-open:rotate-180" 
                      />
                    </summary>
                    <div className="px-4 pb-4 text-graphite leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-onyx text-ivory">
        <div className="container-custom text-center">
          <h2 className="font-display text-display-sm mb-4">
            Não encontrou sua resposta?
          </h2>
          <p className="text-cloud mb-8">
            Nossa equipe está pronta para ajudar você.
          </p>
          <Link href="/contact" className="btn-champagne">
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
