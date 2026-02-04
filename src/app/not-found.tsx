'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center px-4">
        <h1 className="font-display text-display-xl text-champagne mb-4">404</h1>
        <h2 className="font-display text-display-sm mb-4">Página não encontrada</h2>
        <p className="text-graphite mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, 
          teve seu nome alterado ou está temporariamente indisponível.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home size={18} />
            Ir para Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
