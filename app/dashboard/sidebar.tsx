"use client"

//import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import { FaChartLine, FaFileSignature, FaUsers } from 'react-icons/fa';
import { IoSettingsSharp } from "react-icons/io5";



const Sidebar = () => {
  //const pathname = usePathname();
  return (
    <aside className={`menu flex flex-col bg-[#025253] min-h-screen sticky w-72`}>
      {/* Sidebar content here */}
      <h1 className="text-xl font-bold mb-6 p-4">
        {<span className='flex items-center gap-3'><Image src="/images/escrow-logo-nobg.png" alt="home" width={40} height={40} /> Peniga</span>}
      </h1>
      <nav className="flex flex-col grow">
        <Link href="/dashboard" className={`rounded-lg p-4 font-semibold flex hover:text-indigo-400 justify-start`}>
          <span className='flex items-center gap-2' style={{fontSize: "16px"}}><FaChartLine className='text-2xl ' color='white'/> Dashboard</span>
        </Link>
        <Link href="/dashboard/contracts" className={`rounded-lg p-4 font-semibold flex items-center hover:text-indigo-400 justify-start`}>
          <span className='flex items-center gap-2' style={{fontSize: "16px"}}><FaFileSignature className='text-2xl' color='white'/> Contracts</span>
        </Link>
        <Link href="/dashboard/clients" className={`rounded-lg p-4 font-semibold flex items-center hover:text-indigo-400 justify-start`}>
          <span className='flex items-center gap-2' style={{fontSize: "16px"}}> <FaUsers className='text-2xl' color='white'/> Clients</span>
        </Link>


        
        <Link href="/dashboard/clients" className={`rounded-lg p-4 font-semibold flex items-center hover:text-indigo-400 justify-start mt-auto`}>
          <div className="indicator">
            <IoSettingsSharp fontSize={20} />
          </div>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar