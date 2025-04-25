"use client"

//import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine, FaFileSignature, FaUsers } from "react-icons/fa";



const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-neutral-100 border-t py-2 flex justify-around items-center md:hidden">
      <Link href="/dashboard" className="flex flex-col items-center gap-1">
        {(pathname.includes("dashboard") && pathname.length < 11) ? <FaChartLine color="black"/> : <FaChartLine color="black"/>}
        <span className={`btm-nav-label text-sm text-[#272727] ${pathname.includes("dashboard") && pathname.length < 11 && "font-bold"}`}>Dashboard</span>
      </Link>
      <Link href="/dashboard/contracts" className="flex flex-col items-center gap-1">
        {pathname.includes("contracts") ? <FaFileSignature color="black"/> : <FaFileSignature color="black"/>}
        <span className={`btm-nav-label text-sm text-[#272727] ${pathname.includes("contracts") && "font-bold"}`}>Contracts</span>
      </Link>
      <Link href="/dashboard/clients" className="flex flex-col items-center gap-1">
        {pathname.includes("clients") ? <FaUsers color="black"/> : <FaUsers color="black"/>}
        <span className={`btm-nav-label text-sm text-[#272727] ${pathname.includes("clients") && "font-bold"}`}>Clients</span>
      </Link>
    </div>
  )
}

export default BottomNav