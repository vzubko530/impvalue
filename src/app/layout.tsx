import NextTopLoader from 'nextjs-toploader';
import EmotionRegistry from './components/EmotionRegistry/EmotionRegistry';
import Header from './components/Header/Header';

import UserProvider from './components/UserProvider/UserProvider';

import './globals.css';
import styles from './page.module.css';

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
            <main className={styles.main_layout}>{children}</main>
          </UserProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
