import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Suchanart",
  description: "Suchanart's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <MyHeader />
          {children}
          {/* <MyFooter /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
