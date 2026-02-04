export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-2 border-cloud rounded-full" />
          <div className="absolute inset-0 border-2 border-champagne border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="font-display text-lg text-graphite">Carregando...</p>
      </div>
    </div>
  );
}
