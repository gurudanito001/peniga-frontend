//import Image from "next/image";
//import AddNewContract from "./new/addNewContract";
//import { FaFileSignature } from "react-icons/fa";
import Link from "next/link";
import { DocumentPlusIcon } from "@heroicons/react/16/solid";
import { FaCrown } from "react-icons/fa"; 
import { BsThreeDotsVertical } from "react-icons/bs";
import InsideNavbar from "../insideNavbar";
import ContractItem from "./contractItem";


const ContractsDashboard = () => { 

  const categories = [ 
    { name: "Sales", 
      color: "bg-blue-600", 
      documents: 32, 
      sharedWith: ["JK", "FI", "B"], 
      sharedBG:["bg-blue-900", "bg-green-900", "bg-black"],
      othersCount: 26 }, 

    { name: "HR", 
      color: "bg-blue-400", 
      documents: 24, 
      sharedWith: ["B", "JK", "FI"],
      sharedBG:["bg-black", "bg-blue-900", "bg-green-900"], 
      othersCount: 18 }, 

    { name: "Startup", 
      color: "bg-purple-600", 
      documents: 74, 
      sharedWith: ["B", "FI", "JK"], 
      sharedBG:["bg-black", "bg-green-900", "bg-blue-900"],
      othersCount: 32 } 
  ];

  return ( 

  <section className="flex flex-col text-neutral max-h-screen bg-[#E8F5E9] p-6 overflow-y-hidden"> 
  <InsideNavbar/>
  <header className="text-2xl font-bold mb-5 flex items-center w-full mt-5"> 
  <span className="text-[#272727]">Contracts</span> <Link href="" className="ml-auto px-4 py-2 bg-[#272727] text-white rounded-md text-sm">Create Contract</Link> </header>

<div className="border-b border-gray-300 w-full mb-5"></div>
  <div className="overflow-y-auto pr-4">
  <h2 className="text-lg font-semibold mb-3">Categories</h2>

  <div className="bg-gray-100 p-6 rounded-lg">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-10 relative">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
            <h3 className="text-xl flex items-center gap-2">
              #{category.name} <FaCrown className="text-gray-400" />
            </h3>
            <BsThreeDotsVertical className="ml-auto cursor-pointer text-gray-600" />
          </div>
          <p className="text-sm text-gray-500">{category.documents} Documents</p>
          <div className="flex items-center gap-2 mt-7">
            <p className="text-sm text-gray-500 mr-5 text-nowrap">Shared with</p>
            <div className="flex items-center">
              {category.sharedWith.map((letter, index) => (
                <span
                  key={`${category.name}-${letter}`}
                  className={`w-6 h-6 -ml-3 md:w-9 md:h-9 md:-ml-4 flex items-center justify-center rounded-full text-white text-xs font-semibold  ${category.sharedBG[index]}` }
                >
                  {letter}
                </span>
              ))}
              <div className="text-xs font-semibold text-[#272727] ml-1 text-nowrap">+{category.othersCount} others</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <ContractItem/>
  </div>
</section>


)};

export default ContractsDashboard;