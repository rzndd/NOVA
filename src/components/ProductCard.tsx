'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/api';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const discountPercent = product.discountPercent || 
    (product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0);

  const handleQuickBuy = (e: React.MouseEvent, size: string) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, size as 'PP' | 'P' | 'M' | 'G' | 'GG', product.colors[0]);
  };

  return (
    <Link href={`/product/${product.id}`} className="product-card group">
      {/* Image */}
      <div className="product-card-image">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide">
              Novo
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1">
              -{discountPercent}%
            </span>
          )}
          {product.isBestseller && !product.isNew && (
            <span className="bg-champagne text-onyx text-[10px] font-bold px-2 py-1 uppercase tracking-wide">
              Top
            </span>
          )}
        </div>

        {/* Quick Add - appears on hover */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-onyx/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-[10px] text-center mb-2 uppercase tracking-wider">Compra Rápida</p>
          <div className="flex justify-center gap-1.5">
            {product.sizes.slice(0, 5).map((size) => (
              <button
                key={size}
                onClick={(e) => handleQuickBuy(e, size)}
                className="w-9 h-9 flex items-center justify-center bg-ivory text-onyx text-xs font-bold hover:bg-champagne transition-colors cursor-pointer"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Code */}
        {product.code && (
          <p className="text-[10px] text-graphite/60 mb-1 font-mono">{product.code}</p>
        )}

        {/* Colors */}
        <div className="flex gap-1.5 mb-2">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="w-4 h-4 rounded-full border-2 border-cloud shadow-sm"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>

        {/* Name */}
        <h3 className="font-medium text-sm mb-1 group-hover:text-graphite transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex flex-col gap-0.5 mt-2">
          {product.originalPrice && (
            <span className="text-xs text-graphite/60 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-onyx">{formatPrice(product.price)}</span>
            {discountPercent > 0 && (
              <span className="text-[10px] text-emerald-600 font-semibold">
                Economize {formatPrice((product.originalPrice || product.price) - product.price)}
              </span>
            )}
          </div>
          <span className="text-[10px] text-graphite">
            ou 3x de {formatPrice(product.price / 3)} sem juros
          </span>
        </div>
      </div>
    </Link>
  );
}
