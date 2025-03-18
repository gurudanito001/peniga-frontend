
import {  Nunito } from "next/font/google";
import '@/app/globals.css';
//import InsideNavbar from "./insideNavbar";
import Sidebar from "./sidebar";
import BottomNav from "./bottomNav";

const nunito = Nunito({subsets: ["latin"],});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${nunito.className} bg-white`} >
      <body>
        <div className="flex h-screen">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          

          <main className="flex-1 bg-white">

            <div className="drawer h-full">
              <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col h-full">
                {/* Navbar */}
                {/* <InsideNavbar /> */}
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
      </body>

    </html>
  );
}
