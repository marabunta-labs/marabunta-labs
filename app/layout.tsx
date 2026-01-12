import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marabunta Labs | 12 Startups en 12 Meses",
  description: "Caos, código y construcción constante. Únete al reto de lanzar un producto tecnológico cada 30 días.",
  twitter: {
    card: "summary_large_image",
    site: "@marabunta_labs",
    creator: "@parodin",
    title: "Marabunta Labs: El Reto 2026",
    description: "12 Proyectos. 12 Meses. Sin mirar atrás.",
    images: ["https://marabunta-labs.vercel.app/og-image.png"],
  },
  openGraph: {
    type: "website",
    url: "https://marabunta-labs.vercel.app",
    title: "Marabunta Labs",
    description: "Construyendo 12 startups en público.",
    siteName: "Marabunta Labs",
    images: [{
      url: "https://marabunta-labs.vercel.app/og-image.png",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <div className="bg-noise"></div>
      </body>
    </html>
  );
}
