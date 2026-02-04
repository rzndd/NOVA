import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Heart, Star, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="container-custom py-4 border-b border-cloud">
        <nav className="flex items-center text-sm text-graphite">
          <Link href="/" className="hover:text-onyx transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-onyx">Sobre Nós</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image
          src="https://images.pexels.com/photos/6740300/pexels-photo-6740300.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="NŌVA About"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 to-onyx/40" />
        <div className="relative container-custom py-20">
          <div className="max-w-2xl text-ivory">
            <h1 className="font-display text-display-lg mb-6">Nossa História</h1>
            <p className="text-lg text-cloud leading-relaxed">
              A NŌVA nasceu da crença de que mulheres extraordinárias merecem 
              peças extraordinárias. Unimos o melhor da tecnologia têxtil com 
              design de alta costura para criar uma categoria própria.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-accent tracking-widest text-sand uppercase">
                Nossa Missão
              </span>
              <h2 className="font-display text-display-md mt-4 mb-6">
                Athleisure de luxo que performa na academia e brilha na vida
              </h2>
              <p className="text-graphite leading-relaxed mb-6">
                Cada peça é desenvolvida no Brasil, com tecidos premium e acabamento 
                impecável. Trabalhamos com os melhores fornecedores e processos 
                sustentáveis para criar roupas que você vai amar usar todos os dias.
              </p>
              <p className="text-graphite leading-relaxed">
                Acreditamos que força é elegância. Que suor é brilho. Que disciplina 
                é liberdade. Por isso, criamos peças que acompanham você em cada 
                movimento, do treino ao brunch, do escritório ao happy hour.
              </p>
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="NŌVA Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-cloud">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs font-accent tracking-widest text-sand uppercase">
              Nossos Valores
            </span>
            <h2 className="font-display text-display-md mt-4">
              O que nos move
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 text-center">
              <Star className="mx-auto text-champagne mb-4" size={40} />
              <h3 className="font-display text-xl mb-4">Excelência</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Obsessão por qualidade em cada detalhe. Do tecido ao acabamento, 
                cada peça passa por rigoroso controle de qualidade.
              </p>
            </div>

            <div className="bg-ivory p-8 text-center">
              <Heart className="mx-auto text-champagne mb-4" size={40} />
              <h3 className="font-display text-xl mb-4">Empoderamento</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Força feminina em cada peça. Criamos roupas que fazem você se 
                sentir poderosa e confiante em qualquer momento.
              </p>
            </div>

            <div className="bg-ivory p-8 text-center">
              <Users className="mx-auto text-champagne mb-4" size={40} />
              <h3 className="font-display text-xl mb-4">Comunidade</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Mais que clientes, uma comunidade. Mulheres que se apoiam e 
                inspiram umas às outras a viver no máximo potencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 md:py-32 bg-onyx text-ivory">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-accent tracking-widest text-champagne uppercase">
              Manifesto
            </span>
            <blockquote className="mt-8">
              <p className="font-display text-display-sm md:text-display-md leading-relaxed">
                "Nós acreditamos que força é elegância. Que suor é brilho. 
                Que disciplina é liberdade."
              </p>
              <p className="text-cloud mt-8 leading-relaxed">
                NŌVA nasceu para mulheres que não escolhem entre ser poderosas 
                e ser bonitas. Que treinam duro e vivem soft. Que vestem 
                performance com alma de alta costura.
              </p>
              <footer className="mt-8">
                <span className="text-champagne font-accent tracking-widest text-sm">
                  — NŌVA TEAM
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="font-display text-display-md mb-4">
            Pronta para elevar seu guarda-roupa?
          </h2>
          <p className="text-graphite mb-8 max-w-xl mx-auto">
            Explore nossa coleção e descubra peças que movem com você.
          </p>
          <Link href="/products" className="btn-primary inline-flex items-center gap-2">
            Explorar Coleção
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
