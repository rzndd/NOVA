'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import SearchModal from './SearchModal';

const navigation = [
  { name: 'Leggings', href: '/products?category=leggings' },
  { name: 'Tops', href: '/products?category=tops' },
  { name: 'Shorts', href: '/products?category=shorts' },
  { name: 'Conjuntos', href: '/products?category=conjuntos' },
  { name: 'Macacões', href: '/products?category=macacoes' },
  { name: 'Seamless', href: '/products?category=seamless' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-onyx text-ivory py-2 text-center">
        <p className="text-xs tracking-widest font-accent">
          FRETE GRÁTIS ACIMA DE R$149 | PARCELE EM ATÉ 3X SEM JUROS
        </p>
      </div>

      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link text-onyx">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-display text-2xl md:text-3xl tracking-wide">
              N<span className="relative">Ō<span className="absolute -top-1 left-0 w-full h-px bg-onyx"></span></span>VA
            </h1>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:block p-2 hover:opacity-70 transition-opacity" 
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <Link href="/account" className="hidden md:block p-2 hover:opacity-70 transition-opacity" aria-label="Conta">
              <User size={20} />
            </Link>
            <button
              onClick={toggleCart}
              className="relative p-2 hover:opacity-70 transition-opacity"
              aria-label="Carrinho"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-champagne text-onyx text-xs font-accent flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-ivory border-t border-cloud animate-slide-down">
          <div className="container-custom py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-display tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-cloud space-y-4">
              <Link
                href="/about"
                className="block text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/account"
                className="block text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Minha Conta
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
