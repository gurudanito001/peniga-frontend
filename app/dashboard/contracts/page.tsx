//import Image from "next/image";
//import AddNewContract from "./new/addNewContract";
//import { FaFileSignature } from "react-icons/fa";
import Link from "next/link";
import { DocumentPlusIcon } from "@heroicons/react/16/solid";




const ContractsDashboard = () =>{

  return (
    <section className="flex text-neutral max-h-screen overflow-y-clip bg-[#E8F5E9]">
      <aside className="md:min-w-max pt-10">
        <header className=" text-2xl font-bold mb-5 px-3 lg:px-5 flex items-center w-full">
          <span className="text-[#272727]">Contracts Dashboard</span>
          <Link href="" className="ml-auto"> <DocumentPlusIcon className="w-6" color="grey"/></Link>
        </header>

        
      </aside>
    </section>
  )
}

export default ContractsDashboard