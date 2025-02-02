import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/HeaderPart";
import Footer from "./shared/FooterPart";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
