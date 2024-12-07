import './globals.css';
import "@/styles/baseweight.css";
import "@/styles/fonts.module.css";
import "@/styles/iconography.module.css";

import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: 'BaseWeight Solutions',
  description: 'Take only what you need',
};


export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
      <GoogleAnalytics gaId="G-EPD073DL2R" />
    </html>
  );
}
