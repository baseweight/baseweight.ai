import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Baseweight - Mobile AI Services & OnDevice Consulting',
  description: 'Expert OnDevice AI services and consulting for mobile applications. We help integrate Visual Language Models and AI capabilities directly into iOS and Android apps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script 
          src="https://getlaunchlist.com/js/widget-diy.js" 
          strategy="lazyOnload"
        />
      </body>
      <GoogleAnalytics gaId="G-EPD073DL2R" />
    </html>
  );
}