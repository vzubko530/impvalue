import NextTopLoader from 'nextjs-toploader';
import EmotionRegistry from './components/EmotionRegistry/EmotionRegistry';
import Header from './components/Header/Header';
import './globals.css';
import UserProvider from './components/UserProvider/UserProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EmotionRegistry>
          <UserProvider>
            <NextTopLoader showSpinner={false} />
            <Header />
            {children}
          </UserProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
