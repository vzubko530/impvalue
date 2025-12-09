import EmotionRegistry from "./components/EmotionRegistry/EmotionRegistry";
import Header from "./components/Header/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EmotionRegistry>
          <Header />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}
