import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
 subsets: ["latin", "cyrillic"],
 variable: "--font-inter",
 display: "swap",
});

const manrope = Manrope({
 subsets: ["latin", "cyrillic"],
 variable: "--font-manrope",
 display: "swap",
 weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
 title: "СМЫСЛ ЕСТЬ — Artisanal Bakery",
 description: "Crafted with soul. Fresh breads and pastries delivered to your door.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
   <body className="antialiased font-manrope bg-white">{children}</body>
  </html>
 );
}
