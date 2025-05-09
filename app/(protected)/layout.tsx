// app/(protected)/layout.tsx
import { ReactNode } from 'react';
import { requireAuth } from '../lib/auth';
//import {  Nunito } from "next/font/google";
import '@/app/globals.css';
//import InsideNavbar from "./insideNavbar";
import Sidebar from './sidebar';
import BottomNav from './bottomNav';
import InsideNavbar from './insideNavbar';

//const nunito = Nunito({subsets: ["latin"],});


export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  await requireAuth();

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex h-screen">
        <Sidebar />
      </div>
      
      <main className="flex-1 bg-white  min-h-screen">

        <div className="drawer h-full">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col max-h-full overflow-y-auto pb-16 lg:pb-0">
            <InsideNavbar />
            {children}
            <BottomNav />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}