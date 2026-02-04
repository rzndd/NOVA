'use client';

import { ProductCarousel } from '@/components';
import { getBestsellers, getNewArrivals, getOnSale, getProductsByCollection } from '@/lib/data';

export function BestsellersCarousel() {
  const bestsellers = getBestsellers();
  return (
    <ProductCarousel
      title="Mais Vendidos"
      subtitle="As peças favoritas da nossa comunidade"
      products={bestsellers}
    />
  );
}

export function NewArrivalsCarousel() {
  const newArrivals = getNewArrivals();
  return (
    <ProductCarousel
      title="Novidades"
      subtitle="Acabou de chegar"
      products={newArrivals}
    />
  );
}

export function SaleCarousel() {
  const saleProducts = getOnSale();
  return (
    <ProductCarousel
      title="🔥 LIQUIDA"
      subtitle="Aproveite descontos imperdíveis"
      products={saleProducts}
      bgColor="bg-red-50"
    />
  );
}

export function SeamlessCarousel() {
  const seamlessProducts = getProductsByCollection('seamless');
  return (
    <ProductCarousel
      title="Seamless+"
      subtitle="Sem costuras, máximo conforto"
      products={seamlessProducts}
    />
  );
}
