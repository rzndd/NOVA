import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    href: string;
  };
  image: string;
  overlay?: boolean;
  align?: 'left' | 'center' | 'right';
  height?: 'full' | 'large' | 'medium';
}

export default function Hero({
  title,
  subtitle,
  cta,
  image,
  overlay = true,
  align = 'center',
  height = 'full',
}: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/30 via-onyx/20 to-onyx/50" />
      )}

      {/* Content */}
      <div className={`relative container-custom flex flex-col ${alignClasses[align]} py-32`}>
        <h1 className="font-display text-display-xl text-ivory max-w-4xl animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-cloud max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="btn-champagne mt-8 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {cta.text}
          </Link>
        )}
      </div>

      {/* Scroll Indicator */}
      {height === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ivory/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-ivory/50 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}
