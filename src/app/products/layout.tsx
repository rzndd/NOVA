import { Suspense } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="container-custom py-4 border-b border-cloud">
        <nav className="flex items-center text-sm text-graphite">
          <Link href="/" className="hover:text-onyx transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-onyx">Produtos</span>
        </nav>
      </div>

      <Suspense fallback={<ProductsLoading />}>
        {children}
      </Suspense>
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-[3/4] bg-cloud" />
            <div className="p-4 space-y-2">
              <div className="h-3 bg-cloud w-1/3" />
              <div className="h-4 bg-cloud w-2/3" />
              <div className="h-3 bg-cloud w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
