/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Contract } from '@/app/utils/interfaces';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { formatAsCurrency } from '@/app/lib/funcs';
import axios from 'axios';
import { ArrayOfStages } from "@/app/lib/funcs";
import { FaCheck } from "react-icons/fa";
import { getTotalCostOfProducts } from '@/app/lib/funcs';


const ContractPayment = ({ contract }: { contract: Contract }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const tempAccount: any = contract?.tempAccount;  
  console.log(contract);

  const generateEscrowAccount = async () =>{
    const payload = {email: contract.buyer?.email || contract.toBeInformed.email, contractId: contract.id, amount: getTotalCostOfProducts(contract.contractItems) }
    //return console.log(payload)
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const res = await axios.post("/api/tempAccount", payload);
      console.log(res)
      setSuccess(res.data.message);
      router.refresh()
    } catch (error: any) {
      setSuccess("");
      setError(error?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
      <input type="radio" name="my-accordion-3" defaultChecked={contract.stage === "AGREED"} />
      <div className="collapse-title font-semibold text-left text-lg flex items-center">
        <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 1 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
          {ArrayOfStages.indexOf(contract?.stage as string) > 1 ? <FaCheck fontSize={14} /> : 3}
        </span>Secure Payment</div>
      <div className="collapse-content text-sm">

        <p className="max-w-2xl">Click on the button below to generate a temporary account. Transfer the exact amount to the generated account</p>

        {tempAccount && <div className="card w-full max-w-2xl bg-base-100 card-lg shadow-sm border mt-5 relative">

          {/* For TSX uncomment the commented types below */}
          <div className="grid grid-flow-col gap-2 text-center auto-cols-max absolute top-0 right-0">

            <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
              <span className="countdown font-mono text-xl">
                <span style={{ "--value": 24 } as React.CSSProperties} aria-live="polite" aria-label={''}>24</span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
              <span className="countdown font-mono text-xl">
                <span style={{ "--value": 59 } as React.CSSProperties} aria-live="polite" aria-label={''}>59</span>
              </span>
              sec
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title">Escrow Account Details</h2>
            <div className="flex">
              <article className="w-1/2">
                <header className="text-gray-600">Bank Name</header>
                <span className="text-lg font-semibold">{tempAccount?.accountDetails?.account?.bank_name}</span>
              </article>

              <article className="w-1/2">
                <header className="text-gray-600">Account Name</header>
                <span className="text-lg font-semibold">Peniga Escrow Account</span>
              </article>
            </div>

            <div className="flex">
              <article className="w-1/2">
                <header className="text-gray-600">Account Number</header>
                <span className="text-lg font-semibold">{tempAccount?.accountDetails?.account?.account_number}</span>
              </article>

              <article className="w-1/2">
                <header className="text-gray-600">Amount</header>
                <span className="text-lg font-semibold">{formatAsCurrency(parseInt(tempAccount?.accountDetails?.account?.amount))}</span>
              </article>
            </div>


            <ul className=" list-outside list-disc pl-5 mt-5">
              <li className=" list-item text-[#D2A337]">The account details above can only be used for this transaction</li>
              <li className=" list-item text-[#D2A337]">An escrow fee of <span className="font-semibold">₦500</span> has been added for this transaction</li>
              <li className=" list-item text-[#D2A337]">The account details above are valid for the next <span className="font-semibold">27mins 24secs</span></li>
            </ul>
          </div>
        </div>}



        {!tempAccount && <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7" onClick={generateEscrowAccount} disabled={loading || Boolean(contract?.tempAccount)}> Generate Escrow Account </button>}
        {tempAccount && <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7"> I have made the transfer </button>}

      </div>
    </div>
  )
}

export default ContractPayment