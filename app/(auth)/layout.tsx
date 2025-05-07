import '@/app/globals.css';
import Navbar from "../(landingPage)/navbar";
import Footer from "../(landingPage)/footer";
import { getToken } from "../lib/auth";
import { redirect } from "next/navigation";

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
    <main className="grid-background min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
