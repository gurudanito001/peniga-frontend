import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css';

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Peniga Escrow Services",
  description: "Ensuring Safety and Security of Online Trade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        {children}
      </main>
  );
}
