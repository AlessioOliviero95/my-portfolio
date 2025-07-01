
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="container mx-auto px-4 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
