'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center px-4">
        <AlertTriangle size={48} className="mx-auto text-champagne mb-4" />
        <h2 className="font-display text-display-sm mb-4">Algo deu errado</h2>
        <p className="text-graphite mb-8 max-w-md mx-auto">
          Desculpe, ocorreu um erro inesperado. Por favor, tente novamente.
        </p>
        <button
          onClick={reset}
          className="btn-primary inline-flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
