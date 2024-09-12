import './globals.css';

import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'BaseWeight Solutions',
  description: 'Take only what you need',
};


export default function RootLayout({ children } : React.ReactNode) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
