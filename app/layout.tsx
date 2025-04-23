import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Baseweight - Continuous AI Model Deployment',
  description: 'Deploy and update AI models continuously to edge devices. Seamless versioning, instant rollouts, and complete privacy without cloud dependencies.',
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