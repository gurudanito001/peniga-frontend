"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const BottomNav = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="btm-nav md:hidden">
      <Link href="/dashboard">
        {(pathname.includes("dashboard") && pathname.length < 11) ? <Image src="/images/home-filled.png" alt="home" width={20} height={20} /> : <Image src="/images/home-white.png" alt="home" width={20} height={20} />}
        <span className={`btm-nav-label text-sm ${pathname.includes("dashboard") && pathname.length < 11 && "font-bold"}`}>Dashboard</span>
      </Link>
      <Link href="/dashboard/contracts">
        {pathname.includes("contracts") ? <Image src="/images/contract-filled.png" alt="home" width={25} height={25} /> : <Image src="/images/contract-white.png" alt="home" width={25} height={25} />}
        <span className={`btm-nav-label text-sm ${pathname.includes("contracts") && "font-bold"}`}>Contracts</span>
      </Link>
      <Link href="/dashboard/clients">
        {pathname.includes("clients") ? <Image src="/images/clients-filled.png" alt="home" width={25} height={25} /> : <Image src="/images/clients-white.png" alt="home" width={25} height={25} />}
        <span className={`btm-nav-label text-sm ${pathname.includes("clients") && "font-bold"}`}>Clients</span>
      </Link>
    </div>
  )
}

export default BottomNav