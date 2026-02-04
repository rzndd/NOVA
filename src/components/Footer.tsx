'use client';

import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Leggings', href: '/products?category=leggings' },
    { name: 'Tops', href: '/products?category=tops' },
    { name: 'Shorts', href: '/products?category=shorts' },
    { name: 'Conjuntos', href: '/products?category=conjuntos' },
    { name: 'Macacões', href: '/products?category=macacoes' },
    { name: 'Seamless', href: '/products?category=seamless' },
  ],
  about: [
    { name: 'Nossa História', href: '/about' },
    { name: 'Sustentabilidade', href: '/sustainability' },
    { name: 'Carreiras', href: '/careers' },
    { name: 'Imprensa', href: '/press' },
  ],
  help: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Entregas', href: '/shipping' },
    { name: 'Trocas e Devoluções', href: '/returns' },
    { name: 'Contato', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-onyx text-ivory">
      {/* Newsletter Section */}
      <div className="border-b border-graphite">
        <div className="container-custom py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-display text-display-sm mb-4">
              Junte-se ao movimento
            </h3>
            <p className="text-cloud text-sm mb-6">
              Receba novidades, lançamentos exclusivos e 15% off na primeira compra.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="input-dark flex-1"
              />
              <button type="submit" className="btn-champagne whitespace-nowrap">
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="font-display text-3xl tracking-wide text-ivory">
                NŌVA
              </h2>
            </Link>
            <p className="text-cloud text-sm leading-relaxed mb-6 max-w-xs">
              Athleisure de luxo para mulheres que performam na vida como performam no treino.
            </p>
            <p className="text-sm italic text-sand">
              "Move with power. Live with grace."
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-accent text-xs uppercase tracking-widest mb-4 text-sand">
              Categorias
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud hover:text-ivory transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-accent text-xs uppercase tracking-widest mb-4 text-sand">
              Sobre
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud hover:text-ivory transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-accent text-xs uppercase tracking-widest mb-4 text-sand">
              Ajuda
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cloud hover:text-ivory transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-graphite">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cloud hover:text-champagne transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cloud hover:text-champagne transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cloud hover:text-champagne transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-graphite">
                © 2026 NŌVA. Todos os direitos reservados.
              </p>
              <p className="text-xs text-graphite mt-1">
                Created with ❤️ by enricorznd
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
