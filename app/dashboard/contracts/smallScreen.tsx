import { FaFileSignature } from "react-icons/fa";

const contract = {
  name: "Buying cargo of goods from Italy",
  owner: "Michael Onuoha",
  role: "Buyer",
  amount: "₦2,700,000",
  status: "Paid",
  lastUpdated: new Date().toLocaleDateString(),
};

export default function SmallScreenContracts() {
  return (
    <div className="lg:hidden mb-10">
      <h1 className="text-[#272727] mt-10 text-lg mb-10 font-semibold lg:hidden">
        Your Contracts
      </h1>
      <ul>
        {Array(5).fill(contract).map((contract, index) => (
          <li
            key={index}
            className="p-4 flex items-start gap-2 border-b  lg:hidden"
          >
            <FaFileSignature className="bg-secondary p-2 rounded-sm text-4xl text-gray-500" />
            <article className="w-full">
              <header className="flex items-center">
                <h4 className="text-sm font-semibold">{contract.name}</h4>
                <span className="loading loading-ring font-bold text-success ml-auto"></span>
              </header>
              <p className="text-neutral-500 text-xs">
                <span className="font-semibold">{contract.owner}</span>{" "}
                <span className="ml-1">({contract.role})</span>
              </p>
              <div className=" items-center text-xs mt-2 text-neutral-400">
                <p className="flex">
                <span>{contract.status}</span>
                <span className="text-xl font-semibold flex items-center px-1 h-2 ">
                  •
                </span>
                <span>{contract.amount}</span>
                </p>
                <p>
                <span className="ml-auto">Last Updated {contract.lastUpdated}</span>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}