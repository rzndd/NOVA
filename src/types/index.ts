// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  code?: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: Category;
  collection?: string;
  subcategory?: string;
  images: string[];
  colors: ProductColor[];
  sizes: Size[];
  features: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  onSale?: boolean;
  discountPercent?: number;
  stock: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export type Size = 'PP' | 'P' | 'M' | 'G' | 'GG';

export type Category = 'leggings' | 'tops' | 'shorts' | 'conjuntos' | 'macacoes' | 'seamless';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  image: string;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
  size: Size;
  color: ProductColor;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

// Order Types
export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

// Newsletter
export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
}
