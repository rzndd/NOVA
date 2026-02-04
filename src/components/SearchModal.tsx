'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { Product } from '@/types';
import { products } from '@/lib/data';
import { formatPrice } from '@/lib/api';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(searchResults.slice(0, 6));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularSearches = ['Legging', 'Top', 'Jogger', 'Biquíni', 'Moletom'];

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-onyx/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-ivory w-full max-w-3xl mx-auto mt-20 md:mt-32 animate-slide-down shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center border-b border-cloud">
          <Search size={20} className="ml-6 text-graphite" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="O que você está procurando?"
            className="flex-1 px-4 py-5 text-lg bg-transparent outline-none placeholder:text-graphite/60"
          />
          <button
            onClick={onClose}
            className="p-4 hover:bg-cloud transition-colors"
            aria-label="Fechar busca"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* Results */}
          {results.length > 0 ? (
            <div>
              <p className="text-xs text-graphite uppercase tracking-wider mb-4">
                {results.length} resultado{results.length !== 1 ? 's' : ''} para "{query}"
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-cloud mb-2 overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-champagne text-onyx text-xs px-2 py-1 uppercase tracking-wider">
                          Novo
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-medium group-hover:text-champagne transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm font-accent text-graphite">
                      {formatPrice(product.price)}
                    </p>
                  </Link>
                ))}
              </div>
              {results.length === 6 && (
                <Link
                  href={`/products?search=${encodeURIComponent(query)}`}
                  onClick={onClose}
                  className="block text-center mt-6 text-sm text-champagne hover:text-onyx transition-colors"
                >
                  Ver todos os resultados →
                </Link>
              )}
            </div>
          ) : query.length >= 2 ? (
            <div className="text-center py-8">
              <p className="text-graphite mb-4">
                Nenhum resultado encontrado para "{query}"
              </p>
              <p className="text-sm text-graphite/70">
                Tente buscar por outro termo ou explore nossas coleções
              </p>
            </div>
          ) : (
            <div>
              {/* Popular Searches */}
              <div className="mb-8">
                <p className="text-xs text-graphite uppercase tracking-wider mb-3">
                  Buscas Populares
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 text-sm border border-cloud hover:border-champagne hover:bg-champagne/10 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <p className="text-xs text-graphite uppercase tracking-wider mb-3">
                  Explore por Categoria
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'Train', href: '/products?category=train' },
                    { name: 'Move', href: '/products?category=move' },
                    { name: 'Rest', href: '/products?category=rest' },
                    { name: 'Swim', href: '/products?category=swim' },
                  ].map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={onClose}
                      className="py-3 text-center text-sm font-medium bg-cloud hover:bg-onyx hover:text-ivory transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
