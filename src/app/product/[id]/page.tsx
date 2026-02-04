'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Heart, Share2, Truck, RefreshCw, Check } from 'lucide-react';
import {
  ImageGallery,
  SizeSelector,
  ColorSelector,
  QuantitySelector,
  ProductCarousel
} from '@/components';
import { useCart } from '@/context/CartContext';
import { getProductById, getProductsByCategory } from '@/lib/data';
import { formatPrice } from '@/lib/api';
import { Size, ProductColor } from '@/types';
import { notFound } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);

  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  // Initialize selected color after product is loaded
  const currentColor = selectedColor || product.colors[0];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho');
      return;
    }

    addItem(product, selectedSize, currentColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="container-custom py-4 border-b border-cloud">
        <nav className="flex items-center text-sm text-graphite">
          <Link href="/" className="hover:text-onyx transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <Link href="/products" className="hover:text-onyx transition-colors">
            Produtos
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-onyx transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-onyx">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container-custom py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div>
            <ImageGallery images={product.images} alt={product.name} />
          </div>

          {/* Info */}
          <div className="lg:py-8">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && <span className="badge-new">Novo</span>}
              {product.isBestseller && (
                <span className="badge bg-sand text-onyx">Bestseller</span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-display-sm mb-2">{product.name}</h1>
            <p className="text-graphite mb-6">{product.shortDescription}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-accent text-xl">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-graphite line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-xs text-graphite">
                ou 6x de {formatPrice(product.price / 6)} sem juros
              </span>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <ColorSelector
                colors={product.colors}
                selectedColor={currentColor}
                onSelect={setSelectedColor}
              />
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
              />
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-sm font-medium block mb-3">Quantidade</span>
              <QuantitySelector
                quantity={quantity}
                onChange={setQuantity}
                max={10}
              />
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className={`btn flex-1 ${
                  isAdded ? 'bg-green-600 text-ivory' : 'btn-primary'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={18} className="mr-2" />
                    Adicionado!
                  </>
                ) : (
                  'Adicionar a Sacola'
                )}
              </button>
              <button
                className="p-4 border border-cloud hover:border-onyx transition-colors"
                aria-label="Adicionar aos favoritos"
              >
                <Heart size={20} />
              </button>
              <button
                className="p-4 border border-cloud hover:border-onyx transition-colors"
                aria-label="Compartilhar"
              >
                <Share2 size={20} />
              </button>
            </div>

            {/* Shipping Info */}
            <div className="border-t border-b border-cloud py-6 space-y-4">
              <div className="flex items-center gap-4">
                <Truck size={20} className="text-graphite" />
                <div>
                  <p className="text-sm font-medium">Frete Gratis</p>
                  <p className="text-xs text-graphite">
                    Em compras acima de R$299
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <RefreshCw size={20} className="text-graphite" />
                <div>
                  <p className="text-sm font-medium">Troca Facilitada</p>
                  <p className="text-xs text-graphite">
                    Ate 30 dias apos o recebimento
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="py-6">
              <h3 className="text-sm font-medium mb-4">Descricao</h3>
              <p className="text-sm text-graphite leading-relaxed mb-6">
                {product.description}
              </p>

              <h3 className="text-sm font-medium mb-4">Caracteristicas</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-graphite">
                    <Check size={16} className="text-champagne flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <ProductCarousel
          title="Voce tambem pode gostar"
          products={relatedProducts}
        />
      )}
    </div>
  );
}
