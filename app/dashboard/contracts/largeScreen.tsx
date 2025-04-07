import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const contracts = [
  {
    name: "Employees Contract",
    createdAt: "17 Apr 2023",
    owner: "Agus Sunggaluni",
    sharedWith: ["F", "B", "JK"],
    sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
    othersCount: 18,
    status: "Pending",
  },
  {
    name: "Employees Contract",
    createdAt: "17 Apr 2023",
    owner: "Agus Sunggaluni",
    sharedWith: ["F", "B", "JK"],
    sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
    othersCount: 18,
    status: "Pending",
  },
  {
    name: "Employees Contract",
    createdAt: "17 Apr 2023",
    owner: "Agus Sunggaluni",
    sharedWith: ["F", "B", "JK"],
    sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
    othersCount: 18,
    status: "Pending",
  },
  {
    name: "Employees Contract",
    createdAt: "17 Apr 2023",
    owner: "Agus Sunggaluni",
    sharedWith: ["F", "B", "JK"],
    sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
    othersCount: 18,
    status: "Pending",
  },
  {
    name: "Employees Contract",
    createdAt: "17 Apr 2023",
    owner: "Agus Sunggaluni",
    sharedWith: ["F", "B", "JK"],
    sharedBG: ["bg-black", "bg-blue-900", "bg-green-900"],
    othersCount: 18,
    status: "Pending",
  },
];

export default function LargeScreenContracts() {
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-lg font-semibold mb-4">Your Contracts</h2>
        <div className="space-x-5">
          <Link href="/dashboard/contracts/all"><button className="btn btn-link px-4 py-2 rounded-md">View All</button></Link>
        </div>
      </div>

      {/* Contract Items (Only show 2) */}
      {contracts.slice(0, 5).map((contract, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 mb-4 rounded-lg shadow flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-0"
        >
          <div className="flex items-center min-w-[200px]">
            <FaUserCircle className=" mr-2 text-4xl text-gray-500" />
            <span className="font-semibold whitespace-nowrap">
              {contract.name}
            </span>
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
                <span
                  key={i}
                  className={`w-9 h-9 -ml-4 flex items-center justify-center rounded-full text-white text-xs font-semibold ${contract.sharedBG[i]}`}
                >
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
  );
}