import NextTopLoader from 'nextjs-toploader';
import EmotionRegistry from './components/EmotionRegistry/EmotionRegistry';
import Header from './components/Header/Header';
import './globals.css';
import { cookies } from 'next/headers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EmotionRegistry>
          <NextTopLoader showSpinner={false} />
          <Header />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}
