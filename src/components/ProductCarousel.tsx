'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
}

export default function ProductCarousel({ title, subtitle, products, bgColor }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className={`section ${bgColor || ''}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-display text-display-md">{title}</h2>
            {subtitle && (
              <p className="text-graphite mt-2">{subtitle}</p>
            )}
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="p-3 border border-cloud hover:border-onyx disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="p-3 border border-cloud hover:border-onyx disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[calc(50%-8px)] md:w-[calc(25%-18px)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {Array.from({ length: Math.ceil(products.length / 2) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 2)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 2) === i ? 'bg-onyx' : 'bg-cloud'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
