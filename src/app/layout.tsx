import type { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NOVA | Athleisure de Luxo',
    template: '%s | NOVA',
  },
  description: 'Performance meets elegance. Athleisure premium para mulheres que performam na vida como performam no treino.',
  keywords: ['athleisure', 'moda fitness', 'roupas de academia', 'luxo', 'premium', 'leggings', 'tops'],
  authors: [{ name: 'enricorznd' }],
  creator: 'enricorznd',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nova-athleisure.com',
    siteName: 'NOVA',
    title: 'NOVA | Athleisure de Luxo',
    description: 'Performance meets elegance. Athleisure premium para mulheres que performam na vida como performam no treino.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVA | Athleisure de Luxo',
    description: 'Performance meets elegance.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0D0D0D" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
