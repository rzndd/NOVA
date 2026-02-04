import Image from 'next/image';
import Link from 'next/link';
import { CategoryInfo } from '@/types';

interface CategoryCardProps {
  category: CategoryInfo;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group relative aspect-[3/4] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-ivory">
        <h3 className="font-display text-display-sm mb-2 group-hover:text-champagne transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-cloud opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
