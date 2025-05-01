/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react';
import { Contract, userTokenData } from '@/app/utils/interfaces';
import axios from 'axios';
import { ArrayOfStages } from "@/app/lib/funcs";
import { FaCheck } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const ContractDelivery = ({ contract, userData }: { contract: Contract, userData: userTokenData }) => {
  const router = useRouter();
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  //const [error, setError] = useState<string | null>(null);
  //const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);




  const handleConfirmDelivery = async () => {

    try {
      setLoading(true);
      const res = await axios.patch(`/api/contract/${contract?.id}`, { stage: "DELIVERED" });
      router.refresh();
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }


  return (
    (ArrayOfStages.indexOf(contract?.stage as string) === 2) &&
    <div className={`collapse collapse-plus bg-base-100 ${ArrayOfStages.indexOf(contract?.stage as string) === 2 ? "border-2 border-base-content" : "border border-base-300"} rounded-md`}>
      <input type="radio" name="my-accordion-3" defaultChecked={contract?.stage === "PAID"} />
      <div className="collapse-title font-semibold text-left text-lg">
        <header className=' flex items-center'>
          <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 2 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
            {ArrayOfStages.indexOf(contract?.stage as string) > 2 ? <FaCheck fontSize={14} /> : 4}
          </span> Deliver{ArrayOfStages.indexOf(contract?.stage as string) > 2 && "ed"} to Buyer
        </header>
        {ArrayOfStages.indexOf(contract?.stage as string) > 2 &&
          <p className='font-normal text-sm pl-10 text-gray-600'>Delivery has been received by {contract?.buyerId === userData?.userId ? "you" : "buyer"}</p>
        }
      </div>

      {(ArrayOfStages.indexOf(contract?.stage as string) === 2) &&<div className="collapse-content text-sm">
        <p>Waiting for {contract?.sellerId === userData?.userId ? "you" : "seller"} to send the package</p>
        {contract?.buyerId === userData?.userId &&
        <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7" disabled={loading} onClick={handleConfirmDelivery}> I have received the package </button>
        }
      </div>}
    </div>
      
  )
}

export default ContractDelivery