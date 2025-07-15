import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';
import { Playfair_Display } from 'next/font/google';

export const metadata: Metadata = {
  title: 'ইকরা নূরানী একাডেমী',
  description: 'A premier institution for holistic education.',
};

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} font-body antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
