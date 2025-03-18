import Image from "next/image";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AddNewContract from "./new/addNewContract";



const ContractItem = () =>{

  return(
    <li className="p-4 flex items-start gap-2 border-b">
      <figure><Image src="/images/contract-white.png" alt="home" width={45} height={45} className="bg-secondary p-2 rounded-sm" /> </figure>
      <article className="w-full">
        <header className="flex items-center">
          <h4 className="text-sm font-semibold">Buying cargo of goods from Italy</h4>
          <span className="loading loading-ring font-bold text-success ml-auto"></span>
        </header>
        <p className="text-neutral-500 text-xs"> <span className="font-semibold">Michael Onuoha</span> <span className="ml-1">(Buyer)</span></p>
        <p className="flex items-center text-xs mt-2 text-neutral-400">
          <span>Paid</span> <span className="text-xl font-semibold flex items-center px-1 h-2 mb-1">.</span>
          <span>₦2,700,000</span>
          {/* <span>2 days inspection</span> */}
          <span className="ml-auto">Last Updated {new Date().toLocaleDateString()}</span>
        </p>
      </article>
    </li>
  )
}
const AllContracts = () =>{

  return (
    <section className="flex text-neutral max-h-screen overflow-y-clip bg-neutral-100/50">
      <aside className="md:min-w-max pt-10">
        <header className=" text-2xl font-bold mb-5 px-3 lg:px-5 flex items-center w-full">
          <span>Contracts</span>
          <Link href="" className="ml-auto"> <DocumentPlusIcon className="w-6" /></Link>
        </header>

        <ul className="max-h-full overflow-y-auto pb-24">
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
          <ContractItem />
        </ul>
      </aside>
      <AddNewContract />
    </section>
  )
}

export default AllContracts