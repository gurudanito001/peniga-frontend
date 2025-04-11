import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css';
import Navbar from "../(landingPage)/navbar";
import Footer from "../(landingPage)/footer";
import { getToken } from "../lib/auth";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Peniga | Auth',
  description: 'Authentication for secure online trade',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getToken();
  if (token) {
    redirect("/dashboard"); // or wherever your main page is
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100`}
      >
        <main className="grid-background min-h-screen flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
