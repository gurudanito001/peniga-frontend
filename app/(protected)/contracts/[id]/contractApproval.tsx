/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react';
import { Contract, userTokenData } from '@/app/utils/interfaces';
import axios from 'axios';
import { ArrayOfStages } from "@/app/lib/funcs";
import { FaCheck } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const ContractApproval = ({ contract, userData }: { contract: Contract, userData: userTokenData }) => {
  const router = useRouter();
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);




  const handleApprovePayment = async () => {
    try {
      setLoading(true);
      const res = await axios.patch(`/api/contract/${contract?.id}`, { stage: "INSPECTED" });
      console.log(res)
      router.refresh();
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className={`collapse collapse-plus bg-base-100 ${ArrayOfStages.indexOf(contract?.stage as string) === 3 ? "border-2 border-base-content" : "border border-base-300"} rounded-md`}>
      <input type="radio" name="my-accordion-3" defaultChecked={contract?.stage === "DELIVERED"} />
      <div className="collapse-title font-semibold text-left text-lg">
        <header className=' flex items-center'>
          <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 3 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
            {ArrayOfStages.indexOf(contract?.stage as string) > 3 ? <FaCheck fontSize={14} /> : 5}
          </span>Inspect{ArrayOfStages.indexOf(contract?.stage as string) > 3 ? "ed" : "ion"} & Approv{ArrayOfStages.indexOf(contract?.stage as string) > 3 ? "ed" : "al"}
        </header>
        {ArrayOfStages.indexOf(contract?.stage as string) > 3 &&
          <p className='font-normal text-sm pl-10 text-gray-600'>Package has been inspected and approved by {contract?.buyerId === userData?.userId ? "you" : "buyer"}</p>
        }
      </div>
      {(ArrayOfStages.indexOf(contract?.stage as string) === 3) &&
      <div className="collapse-content text-sm">
        <p>Waiting for {contract?.buyerId === userData?.userId ? "you" : "buyer"} to inspect and approve the delivery</p>

        <div className='flex flex-col mt-10 gap-4 px-3 lg:px-5'>
          <label className="fieldset-label flex items-center">
            <input type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} className="checkbox mr-2" />
            <span className='text-base'>I agree that the delivered products satisfy the conditions on the contract</span>
          </label>

          <button className="btn btn-wide h-9 text-gray-400 font-semibold btn-accent text-base" disabled={!agreeToTerms || loading} onClick={handleApprovePayment}>I Agree</button>
        </div>
      </div>}
    </div>
  )
}

export default ContractApproval