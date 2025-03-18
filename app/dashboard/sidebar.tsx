"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';



const Sidebar = () => {
  const pathname = usePathname();
  const showIcon = () =>{
    if(pathname.includes("contracts") || pathname.includes("clients") ) {
      return true
    }
    return false
  }
  return (
    <aside className={`menu bg-base-100 min-h-full ${showIcon() ? "w-auto" : "w-80"}`}>
      {/* Sidebar content here */}
      <h1 className="text-xl font-bold mb-6 p-4">
        {showIcon() ? 
        <Image src="/images/escrow-logo-nobg.png" alt="home" width={40} height={40} /> 
        : <span className='flex items-center gap-3'><Image src="/images/escrow-logo-nobg.png" alt="home" width={40} height={40} /> Peniga</span>}
      </h1>
      <nav className="flex flex-col space-y-2 grow">
        <Link href="/dashboard" className={`rounded-lg p-4 font-extrabold flex items-center hover:text-indigo-400 ${showIcon() ? "justify-center" : ""}`}>
          {showIcon() ? 
          (pathname.includes("dashboard") && pathname.length < 11) ? <Image src="/images/home-filled.png" alt="home" width={25} height={25} /> : <Image src="/images/home-white.png" alt="home" width={25} height={25} />
          : <span className='flex items-center gap-2'><Image src="/images/home-white.png" alt="home" width={25} height={25} /> Dashboard</span>}
        </Link>
        <Link href="/dashboard/contracts" className={`rounded-lg p-4 font-extrabold flex items-center hover:text-indigo-400 ${showIcon() ? "justify-center" : ""}`}>
          {showIcon() ? 
          (pathname.includes("contracts")) ? <Image src="/images/contract-filled.png" alt="home" width={25} height={25} /> : <Image src="/images/contract-white.png" alt="home" width={25} height={25} />
          : <span className='flex items-center gap-2'><Image src="/images/contract-white.png" alt="home" width={25} height={25} /> Contracts</span>}
        </Link>
        <Link href="/dashboard/clients" className={`rounded-lg p-4 font-extrabold flex items-center hover:text-indigo-400 ${showIcon() ? "justify-center" : ""}`}>
          {showIcon() ? <Image src="/images/clients-white.png" alt="home" width={25} height={25} />   : <span className='flex items-center gap-2'> <Image src="/images/clients-white.png" alt="home" width={25} height={25} /> Clients</span>}
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar