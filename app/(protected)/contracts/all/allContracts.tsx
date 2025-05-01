
import { FaFileSignature, } from "react-icons/fa";
import { Contract } from "@/app/utils/interfaces";
import moment from "moment";
import { truncateText, truncateMiddle } from "@/app/lib/funcs";
import Link from "next/link";

const AllContracts = ({contracts = []}: {contracts?: Contract[]}) => {
  





  return (
    <section className=" bg-[#E8F5E9] h-screen  overflow-y-auto w-full">
      <div className="mx-auto flex flex-col px-5 lg:px-12 mt-7">
        <div className=" mb-5 flex items-center justify-between">
          <h1 className="font-bold text-2xl">All Contracts</h1>
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
                <div className="flex items-center">
                  <span className={`w-7 h-7 flex items-center justify-center rounded-full text-white text-xs bg-green-900`}
                  >
                    {contract.buyerId === contract.userId ? `${contract?.buyer?.firstName[0] || contract.toBeInformed.email[0]} ${contract?.buyer?.lastName[0] || ""}` : `${contract?.seller?.firstName[0] || contract.toBeInformed.email[0]} ${contract?.seller?.lastName[0] || ""}`}
                  </span>
                  <div className="text-sm font-semibold text-[#272727] ml-1 text-ellipsis overflow-hidden whitespace-nowrap">
                    {contract.buyerId === contract.userId ? truncateMiddle(`${contract?.buyer?.firstName || contract.toBeInformed.email} ${contract?.buyer?.lastName || ""}`) : truncateMiddle(`${contract?.seller?.firstName || contract.toBeInformed.email} ${contract?.seller?.lastName || ""}`)}
                  </div>
                </div>
                {/* <p className="text-ellipsis overflow-hidden whitespace-nowrap">{contract.buyerId === contract.userId ? `${contract?.buyer?.firstName} ${contract?.buyer?.lastName}` : `${contract?.seller?.firstName} ${contract?.seller?.lastName}`}</p> */}
              </div>

              <div className="text-gray-600 w-1/6 min-w-0 overflow-hidden"> {/* Fixed width for Shared with */}
                <p className="text-sm text-gray-400 mb-1">Shared with:</p>
                <div className="flex items-center">
                  <span className={`w-7 h-7 flex items-center justify-center rounded-full text-white text-xs font-semibold bg-green-900`}
                  >
                    {contract.buyerId === contract.userId ? `${contract?.seller?.firstName[0] || contract.toBeInformed.email[0]} ${contract?.seller?.lastName[0] || ""}` : `${contract?.buyer?.firstName[0] || contract.toBeInformed.email[0]} ${contract?.buyer?.lastName[0] || ""}`}
                  </span>
                  <div className="text-xs font-semibold text-[#272727] ml-1 text-ellipsis overflow-hidden whitespace-nowrap">
                    {contract.buyerId === contract.userId ? truncateMiddle(`${contract?.seller?.firstName || contract.toBeInformed.email} ${contract?.seller?.lastName || ""}`) : truncateMiddle(`${contract?.buyer?.firstName || contract.toBeInformed.email} ${contract?.buyer?.lastName || ""}`)}
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