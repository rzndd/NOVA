'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  max?: number;
}

export default function QuantitySelector({ quantity, onChange, max = 10 }: QuantitySelectorProps) {
  const decrement = () => {
    if (quantity > 1) onChange(quantity - 1);
  };

  const increment = () => {
    if (quantity < max) onChange(quantity + 1);
  };

  return (
    <div className="flex items-center border border-cloud">
      <button
        onClick={decrement}
        disabled={quantity <= 1}
        className="p-3 hover:bg-cloud disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Diminuir quantidade"
      >
        <Minus size={16} />
      </button>
      <span className="w-14 text-center font-accent">{quantity}</span>
      <button
        onClick={increment}
        disabled={quantity >= max}
        className="p-3 hover:bg-cloud disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Aumentar quantidade"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
