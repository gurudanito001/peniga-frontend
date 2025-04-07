
//import Image from "next/image";
//import { DocumentPlusIcon } from "@heroicons/react/24/outline";
//import Link from "next/link";

// components/AllContracts.tsx import { FaUser } from "react-icons/fa";

import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import InsideNavbar from "../../insideNavbar";

const AllContracts = () => {
  const contracts = [
    {
      name: "Employees Contract",
      createdAt: "17 Apr 2023",
      owner: "Agus Sunggaluni",
      sharedWith: ["F", "B", "JK"],
      sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
      othersCount: 18,
      status: "Pending"
    },
    {
      name: "Employees Contract",
      createdAt: "17 Apr 2023",
      owner: "Agus Sunggaluni",
      sharedWith: ["F", "B", "JK"],
      sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
      othersCount: 18,
      status: "Pending"
    },
    {
      name: "Employees Contract",
      createdAt: "17 Apr 2023",
      owner: "Agus Sunggaluni",
      sharedWith: ["F", "B", "JK"],
      sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
      othersCount: 18,
      status: "Pending"
    },
    {
      name: "Employees Contract",
      createdAt: "17 Apr 2023",
      owner: "Agus Sunggaluni",
      sharedWith: ["F", "B", "JK"],
      sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
      othersCount: 18,
      status: "Pending"
    },
    {
      name: "Employees Contract",
      createdAt: "17 Apr 2023",
      owner: "Agus Sunggaluni",
      sharedWith: ["F", "B", "JK"],
      sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
      othersCount: 18,
      status: "Pending"
    }
  ];

  return (
    <section className=" bg-[#E8F5E9] h-screen  overflow-y-auto w-full">
      <InsideNavbar/>
      <div className="mx-auto flex flex-col px-5 lg:px-12 mt-7">
        <div className=" mb-5 flex items-center justify-between">
          <h1 className="font-bold text-2xl">All Contracts</h1>
          <Link href="/dashboard/contracts">
            <button className="ml-auto border px-4 py-2 rounded-md text-gray-500 text-xl">Filter</button>
          </Link>
        </div>
        
        <div className="flex-1 rounded-lg">
        {contracts.map((contract, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-4 rounded-lg shadow flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-0">
            <div className="flex items-center min-w-[200px]">
              <FaUserCircle className="text-gray-500 text-4xl mr-2"/>
              <span className="font-semibold whitespace-nowrap">{contract.name}</span>
            </div>
            <div className="text-gray-600 min-w-[150px] ml-10">
              <p className="text-sm text-gray-400">Created at:</p>
              <p>{contract.createdAt}</p>
            </div>
            <div className="text-gray-600 min-w-[180px]">
              <p className="text-sm text-gray-400">Owner:</p>
              <p>{contract.owner}</p>
            </div>
            <div className="text-gray-600 min-w-[220px]">
              <p className="text-sm text-gray-400">Shared with:</p>
              <div className="flex items-center">
                {contract.sharedWith.map((letter, i) => (
                  <span key={i} className={`w-9 h-9 -ml-4 flex items-center justify-center rounded-full text-white text-xs font-semibold ${contract.sharedBG[i]}`}>
                    {letter}
                  </span>
                ))}
                <div className="text-xs font-semibold text-[#272727] ml-1">
                  +{contract.othersCount} others
                </div>
              </div>
            </div>
            <div className="text-yellow-500 font-medium min-w-[120px]">
            <p className="text-sm text-gray-400">Status:</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
               <p>
              {contract.status}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default AllContracts;

/* const ContractItem = () =>{

  return(
    <li className="p-4 flex items-start gap-2 border-b bg-slate-400 lg:hidden">
      <article className="w-full">
        <header className="flex items-center">
          <h4 className="text-sm font-semibold">Buying cargo of goods from Italy</h4>
          <span className="loading loading-ring font-bold text-success ml-auto"></span>
        </header>
        <p className="text-neutral-500 text-xs"> <span className="font-semibold">Michael Onuoha</span> <span className="ml-1">(Buyer)</span></p>
        <p className="flex items-center text-xs mt-2 text-neutral-400">
          <span>Paid</span> <span className="text-xl font-semibold flex items-center px-1 h-2 mb-1">.</span>
          <span>₦2,700,000</span>
          <span>2 days inspection</span>
          <span className="ml-auto">Last Updated {new Date().toLocaleDateString()}</span>
        </p>
      </article>
    </li>
  )
} */



/* const AllContracts = () =>{

  return (
    <aside className={`w-full md:max-w-max pt-10 hidden lg:block`}>
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
  )
}

export default AllContracts */