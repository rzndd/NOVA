'use client';

import { Size, ProductColor } from '@/types';

interface SizeSelectorProps {
  sizes: Size[];
  selectedSize: Size | null;
  onSelect: (size: Size) => void;
}

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium">Tamanho</span>
        <button className="text-xs text-graphite hover:text-onyx underline">
          Guia de tamanhos
        </button>
      </div>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`w-12 h-12 flex items-center justify-center text-sm font-accent border transition-colors ${
              selectedSize === size
                ? 'bg-onyx text-ivory border-onyx'
                : 'border-cloud hover:border-onyx'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: ProductColor | null;
  onSelect: (color: ProductColor) => void;
}

export function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium">Cor:</span>
        {selectedColor && (
          <span className="text-sm text-graphite">{selectedColor.name}</span>
        )}
      </div>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onSelect(color)}
            className={`w-10 h-10 rounded-full border-2 transition-all ${
              selectedColor?.name === color.name
                ? 'border-onyx scale-110'
                : 'border-cloud hover:border-graphite'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
            aria-label={`Selecionar cor ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
}
