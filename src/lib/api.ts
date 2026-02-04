import { Product, Category, CategoryInfo } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/api/products/${id}`);
  if (!res.ok) throw new Error('Product not found');
  return res.json();
}

export async function fetchProductsByCategory(category: Category): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products?category=${category}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchCategories(): Promise<CategoryInfo[]> {
  const res = await fetch(`${API_URL}/api/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function calculateShipping(zipCode: string): Promise<{
  standard: { price: number; days: string };
  express: { price: number; days: string };
}> {
  const res = await fetch(`${API_URL}/api/shipping`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ zipCode }),
  });
  if (!res.ok) throw new Error('Failed to calculate shipping');
  return res.json();
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}
