import './globals.css';
  
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
  <GoogleAnalytics gaId="G-3SLFQ0T7E1" />
      </body>
    </html>
  );
}
