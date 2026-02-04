import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const limit = searchParams.get('limit');

  let result = [...products];

  // Filter by category
  if (category) {
    result = result.filter((p) => p.category === category);
  }

  // Search by name
  if (search) {
    const searchLower = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    );
  }

  // Limit results
  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  return NextResponse.json(result);
}
