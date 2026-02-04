'use client';

import { CartProvider } from '@/context/CartContext';
import { ToastProvider } from '@/context/ToastContext';
import { Header, Footer, Cart, WhatsAppButton } from '@/components';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ToastProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Cart />
        <WhatsAppButton />
      </ToastProvider>
    </CartProvider>
  );
}
