'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter, X, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components';
import { products, categories } from '@/lib/data';
import { Category, Size } from '@/types';

const sizes: Size[] = ['PP', 'P', 'M', 'G', 'GG'];

const sortOptions = [
  { value: 'newest', label: 'Novidades' },
  { value: 'price-asc', label: 'Menor Preço' },
  { value: 'price-desc', label: 'Maior Preço' },
  { value: 'bestseller', label: 'Mais Vendidos' },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(categoryParam);
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        selectedSizes.some((size) => p.sizes.includes(size))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestseller':
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedSizes, sortBy]);

  const toggleSize = (size: Size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSizes([]);
  };

  const activeFiltersCount =
    (selectedCategory ? 1 : 0) + selectedSizes.length;

  return (
    <div className="container-custom py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg">Filtros</h2>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-graphite hover:text-onyx underline"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Categoria</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === cat.id ? null : cat.id
                      )
                    }
                    className={`block w-full text-left text-sm py-2 px-3 transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-onyx text-ivory'
                        : 'hover:bg-cloud'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Tamanho</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`w-10 h-10 flex items-center justify-center text-sm border transition-colors ${
                      selectedSizes.includes(size)
                        ? 'bg-onyx text-ivory border-onyx'
                        : 'border-cloud hover:border-onyx'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-display-sm">
                {selectedCategory
                  ? categories.find((c) => c.id === selectedCategory)?.name
                  : 'Todos os Produtos'}
              </h1>
              <p className="text-sm text-graphite mt-1">
                {filteredProducts.length} produtos
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm"
              >
                <Filter size={18} />
                Filtros
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-onyx text-ivory text-xs flex items-center justify-center rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-8 py-2 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Active Filters Pills */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-1 px-3 py-1 bg-cloud text-sm hover:bg-sand transition-colors"
                >
                  {categories.find((c) => c.id === selectedCategory)?.name}
                  <X size={14} />
                </button>
              )}
              {selectedSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className="flex items-center gap-1 px-3 py-1 bg-cloud text-sm hover:bg-sand transition-colors"
                >
                  {size}
                  <X size={14} />
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-graphite mb-4">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
              <button onClick={clearFilters} className="btn-secondary">
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-onyx/50 z-50 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-ivory z-50 p-6 overflow-y-auto md:hidden animate-slide-down">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-xl">Filtros</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Categoria</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === cat.id ? null : cat.id
                      )
                    }
                    className={`block w-full text-left text-sm py-3 px-4 transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-onyx text-ivory'
                        : 'bg-cloud'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Tamanho</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-sm border transition-colors ${
                      selectedSizes.includes(size)
                        ? 'bg-onyx text-ivory border-onyx'
                        : 'border-cloud hover:border-onyx'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-cloud">
              <button
                onClick={clearFilters}
                className="btn-secondary flex-1"
              >
                Limpar
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="btn-primary flex-1"
              >
                Ver {filteredProducts.length} produtos
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
