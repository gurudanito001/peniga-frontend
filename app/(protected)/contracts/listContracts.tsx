import Link from "next/link";
import { FaFileSignature } from "react-icons/fa";
import { Contract } from "@/app/utils/interfaces";
import moment from "moment";
import { truncateText, truncateMiddle } from "@/app/lib/funcs";

const ListContracts = ({contracts = []}: {contracts?: Contract[]}) => {


  
  return (
    <div className="p-4">
        <div className="flex justify-between items-center mb-4 mt-10">
          <h2 className="text-lg font-semibold">Your Contracts</h2>
          <div className="space-x-5">
            <Link href="/contracts/all"><button className="btn btn-link px-4 py-2 rounded-md">View All</button></Link>
          </div>
        </div>

        {contracts.map((contract) => (
          <Link href={`/contracts/${contract.id}`} key={contract?.id}>
            <div
              className="bg-gray-100 hover:bg-slate-200 p-4 mb-4 rounded-lg shadow hidden md:flex justify-evenly items-center gap-3"
            >
              <div className="flex items-center w-2/6 min-w-0"> {/* Fixed width for title */}
                <FaFileSignature className="bg-secondary p-2 rounded-sm text-4xl text-white" />
                <div className="ml-4 overflow-hidden"> {/* Prevent overflow for long titles */}
                  <p className="text-sm text-gray-400 mb-1">Contract Title:</p>
                  <span className="font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                    {truncateText(contract.title)}
                  </span>
                </div>
              </div>

              <div className="text-gray-600 w-1/6 min-w-0 overflow-hidden"> {/* Fixed width for Owner */}
                <p className="text-sm text-gray-400 mb-1">Owner:</p>
                <p className="text-ellipsis overflow-hidden whitespace-nowrap">{contract.buyerId === contract.userId ? `${contract?.buyer?.firstName} ${contract?.buyer?.lastName}` : `${contract?.seller?.firstName} ${contract?.seller?.lastName}`}</p>
              </div>

              <div className="text-gray-600 w-1/6 min-w-0 overflow-hidden"> {/* Fixed width for Shared with */}
                <p className="text-sm text-gray-400 mb-1">Shared with:</p>
                <div className="flex items-center">
                  <span className={`w-7 h-7 flex items-center justify-center rounded-full text-white text-xs font-semibold bg-green-900`}
                  >
                    {contract.buyerId === contract.userId ? `${contract?.seller?.firstName[0]} ${contract?.seller?.lastName[0]}` : contract.toBeInformed?.email[0]}
                  </span>
                  <div className="text-xs font-semibold text-[#272727] ml-1 text-ellipsis overflow-hidden whitespace-nowrap">
                    {contract.buyerId === contract.userId ? truncateMiddle(`${contract?.seller?.firstName} ${contract?.seller?.lastName}`) : truncateMiddle(contract.toBeInformed?.email) }
                  </div>
                </div>
              </div>
              <div className="text-gray-600 w-1/6 min-w-0 overflow-hidden"> {/* Fixed width for Last updated */}
                <p className="text-sm text-gray-400 mb-1">Last updated:</p>
                <p className="text-ellipsis overflow-hidden whitespace-nowrap">{moment(contract.updatedAt).format('ll')}</p>
              </div>
              <div className="text-yellow-500 font-medium w-1/6 min-w-0 overflow-hidden"> {/* Fixed width for Status */}
                <p className="text-sm text-gray-400 mb-1">Status:</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {contract.status}
                  </p>
                </div>
              </div>
            </div>

            {/* ... mobile layout ... */}
          </Link>
        ))}
    </div>
  );
};

export default ListContracts;