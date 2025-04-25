/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

//import Image from "next/image";
import ContractAgreement from "./contractAgreement";
import ContractPayment from "./contractPayment";
import ContractDelivery from "./contractDelivery";
import ContractApproval from "./contractApproval";
import ContractWithdrawal from "./contractWithdrawal";
import InsideNavbar from "@/app/(protected)/insideNavbar"
import { FaEnvelope, FaComment, FaDownload, FaCheck, FaInfo } from "react-icons/fa";
import { getToken } from "@/app/lib/auth";
import jwt from 'jsonwebtoken';
import { Contract, userTokenData } from "@/app/utils/interfaces";
import { truncateMiddle } from "@/app/lib/funcs";
import { redirect } from "next/navigation";
import { ArrayOfStages } from "@/app/lib/funcs";


interface PageParams {
  params: Promise<{
    id: string;
  }>;
}


const Home = async({ params }: PageParams) => {

  const token = await getToken() as string;
  const userData = jwt.decode(token) as userTokenData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {id: contractId} = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/api/contract/${contractId}?token=${token}`, {cache: "no-store"}) as any;
  const data = await res.json();
  const {data: contract}: {data: Contract} = data;
  console.log("Data from contract details page", data)
  console.log(ArrayOfStages.indexOf(contract?.stage as string))
  if(userData?.userId !== contract.sellerId && userData.userId !== contract.buyerId){
    redirect("/dashboard")
  }

  const stageDescription = () =>{
    switch (contract.stage) {
      case "CREATED":
        return `Waiting for ${contract.userId === contract.buyerId ? "seller" : "buyer"} to agree to the contract`
      case "AGREED": 
        return `Waiting for buyer to make payment`
      case "PAID":
        return `Buyer has made payment. Waiting for seller to make the delivery`
      case "DELIVERED": 
        return `Buyer has received the package. Buyer will inspect the product for ${contract.inspectionPeriod} days.`
      case "INSPECTED":
        return `Buyer is satisfied with the product. Complete payment will be made to seller`
      case "COMPLETED":
        return `Payment has been made to seller. TRANSACTION SUCCESSFUL !!!`
      default:
        break;
    }
  }

  return (
    <section className={`w-full h-screen p-5 overflow-y-auto bg-base-100/40`}>
      <InsideNavbar />
      <div className="w-full flex">
        <div className="w-full md:w-3/5 xl:w-2/3">

          <header className="px-5 py-3 md:mx-5 shadow border flex items-center">
            <div>
              <div className="flex items-center">
                <h2 className="text-2xl font-bold mr-3">
                  {contract.buyerId === userData?.userId ?  `${contract?.seller?.firstName} ${contract?.seller?.lastName}` : truncateMiddle(contract.toBeInformed.email)} </h2>
                <span className="badge badge-secondary">{contract.buyerId === userData?.userId ? "Seller" : "Buyer" }</span>
              </div>
              <span>{contract.buyerId === userData?.userId ? data?.data?.seller?.email : data?.data?.buyer?.email }</span>
            </div>

            <div className=" flex items-center gap-2 ml-auto">
              <span className="w-10 h-10 rounded-full flex items-center justify-center border border-primary"><FaComment fontSize={18} color="#025253" /></span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center border border-primary"><FaEnvelope fontSize={18} color="#025253" /></span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center border border-primary"><FaDownload fontSize={18} color="#025253" /></span>
            </div>

          </header>

          <section className=" py-3 md:mx-5">
            <div role="alert" className="alert alert-vertical sm:alert-horizontal rounded-md">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border border-primary"><FaInfo /></span>
              <div>
                <h3 className="font-bold">Next Step!</h3>
                <div className="text-sm">{stageDescription()}</div>
              </div>
              <button className="btn btn-sm btn-primary">View</button>
            </div>
          </section>



          <div className=" py-3 md:mx-5 flex flex-col gap-3">
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold text-left text-lg flex items-center">
                <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= -1  ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-xl mr-2`}>
                  {ArrayOfStages.indexOf(contract?.stage as string) > -1  ? <FaCheck fontSize={14} /> : 1}
                </span>
                Create Contract
              </div>
              <div className="collapse-content text-sm">Contract has been created</div>
            </div>
            
            <ContractAgreement contract={contract} />

            <ContractPayment contract={contract} />

            <ContractDelivery contract={contract}/>

            <ContractApproval contract={contract}/>

            <ContractWithdrawal contract={contract}/>


          </div>
        </div>


        <aside className="hidden md:block md:w-2/5 xl:h-1/3 min-h-screen xl:px-10">

          <div className="stats shadow w-full px-10 py-5">
            <div className="stat flex flex-col">
              <h4 className="text-2xl font-bold mb-8 text-center">Contract Progress</h4>
              <div className="stat-figure text-secondary">
                <div className="radial-progress text-4xl font-extrabold"
                  style={{ "--value": `${(ArrayOfStages.indexOf(contract?.stage as string) + 1) * 20}`, "--size": "12rem", "--thickness": "1.5rem" } as React.CSSProperties}
                  aria-valuenow={(ArrayOfStages.indexOf(contract?.stage as string) + 1) * 20} role="progressbar">{(ArrayOfStages.indexOf(contract?.stage as string) + 1) * 20}%</div>
              </div>
              <div className="stat-title text-center font-semibold text-xl mt-4">{ArrayOfStages.indexOf(contract?.stage as string) + 1} Step(s) done</div>
              <div className="stat-desc text-secondary text-center font-semibold text-base">{5 - (ArrayOfStages.indexOf(contract?.stage as string) + 1)} steps remaining</div>

              <div className="mt-10 flex flex-col gap-4">
                <button type="button" className="btn btn-block btn-secondary text-[#272727]"><FaComment fontSize={18} color="#272727" /> Message Buyer</button>

                <button type="button" className="btn btn-block btn-secondary text-[#272727]"><FaEnvelope fontSize={18} color="#272727" /> Send Mail to Buyer</button>

                <button type="button" className="btn btn-block btn-secondary text-[#272727]"><FaDownload fontSize={18} color="#272727" /> Download Contract</button>
              </div>


            </div>
          </div>
        </aside>
      </div>



    </section>
  )
}

export default Home