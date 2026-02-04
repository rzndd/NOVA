'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Truck, RefreshCw, Shield } from 'lucide-react';
import { Hero, CategoryCard } from '@/components';
import { BestsellersCarousel, NewArrivalsCarousel, SaleCarousel, SeamlessCarousel } from '@/components/HomeCarousels';
import { categories } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Performance meets luxury"
        subtitle="Peças que movem com você. Athleisure premium para mulheres que exigem o máximo."
        cta={{ text: 'Explorar Coleção', href: '/products' }}
        image="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="full"
      />

      {/* Features Bar */}
      <section className="bg-onyx text-ivory py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Truck size={24} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">Frete Grátis +R$149</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RefreshCw size={24} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">Troca em 30 dias</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={24} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">Pagamento Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star size={24} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">Qualidade Premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-md">Categorias</h2>
            <p className="text-graphite mt-2">Encontre a peça perfeita para cada momento</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <SaleCarousel />

      {/* Bestsellers */}
      <BestsellersCarousel />

      {/* Seamless Collection */}
      <SeamlessCarousel />

      {/* Editorial Section */}
      <section className="section bg-cloud">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.pexels.com/photos/6740300/pexels-photo-6740300.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="NOVA Editorial"
                fill
                className="object-cover"
              />
            </div>
            <div className="py-8 md:py-16 md:pl-12">
              <span className="text-xs font-accent tracking-widest text-sand uppercase">
                Manifesto
              </span>
              <h2 className="font-display text-display-md mt-4 mb-6">
                Nós acreditamos que força é elegância
              </h2>
              <p className="text-graphite leading-relaxed mb-6">
                Que suor é brilho. Que disciplina é liberdade. NŌVA nasceu para mulheres
                que não escolhem entre ser poderosas e ser bonitas. Que treinam duro e
                vivem soft. Que vestem performance com alma de alta costura.
              </p>
              <p className="text-graphite leading-relaxed mb-8">
                Cada peça é um statement: você não precisa se adaptar ao mundo.
                O mundo que se adapte a você.
              </p>
              <Link href="/about" className="btn-secondary">
                Nossa Historia
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <NewArrivalsCarousel />

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-onyx text-ivory">
        <div className="container-custom text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-display-sm md:text-display-md italic">
              &quot;Seu corpo em movimento é a sua maior obra de arte.&quot;
            </p>
            <footer className="mt-8">
              <span className="text-champagne font-accent tracking-widest text-sm">
                NOVA
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="font-display text-display-md mb-2">@novaathleisure</h2>
          <p className="text-graphite mb-8">Siga-nos no Instagram</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              'https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6551097/pexels-photo-6551097.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/6311674/pexels-photo-6311674.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=400',
            ].map((src, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square bg-cloud group overflow-hidden"
              >
                <Image
                  src={src}
                  alt={'Instagram post ' + (i + 1)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/30 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
