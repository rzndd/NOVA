'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/api';

export default function Cart() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
    shipping,
    total,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-onyx/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 shadow-2xl flex flex-col animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cloud">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <h2 className="font-display text-xl">Sacola ({itemCount})</h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={48} className="mx-auto text-cloud mb-4" />
              <p className="text-graphite mb-6">Sua sacola está vazia</p>
              <button onClick={closeCart} className="btn-secondary">
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color.name}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-32 bg-cloud flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-sm">{item.product.name}</h3>
                        <p className="text-xs text-graphite mt-1">
                          {item.color.name} / {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size, item.color.name)}
                        className="text-graphite hover:text-onyx transition-colors"
                        aria-label="Remover"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-cloud">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.color.name, item.quantity - 1)
                          }
                          className="p-2 hover:bg-cloud transition-colors"
                          aria-label="Diminuir"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-sm font-accent">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.color.name, item.quantity + 1)
                          }
                          className="p-2 hover:bg-cloud transition-colors"
                          aria-label="Aumentar"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-accent text-sm">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cloud p-6 space-y-4">
            {/* Subtotal */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-graphite">Subtotal</span>
                <span className="font-accent">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-graphite">Frete</span>
                <span className="font-accent">
                  {shipping === 0 ? (
                    <span className="text-green-600">Grátis</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              {subtotal < 299 && (
                <p className="text-xs text-graphite">
                  Faltam {formatPrice(299 - subtotal)} para frete grátis
                </p>
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between py-4 border-t border-cloud">
              <span className="font-medium">Total</span>
              <span className="font-accent font-medium">{formatPrice(total)}</span>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Finalizar Compra
              <ArrowRight size={16} />
            </Link>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full text-sm text-graphite hover:text-onyx transition-colors text-center"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
