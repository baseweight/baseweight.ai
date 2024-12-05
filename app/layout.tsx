import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'BaseWeight Solutions',
  description: 'Take only what you need',
};


export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
      <GoogleAnalytics gaId="G-EPD073DL2R" />
    </html>
  );
}
