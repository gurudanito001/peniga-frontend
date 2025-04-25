/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Contract } from '@/app/utils/interfaces';
import moment from 'moment';
import { formatAsCurrency } from '@/app/lib/funcs';
import axios from 'axios';
import { ArrayOfStages } from "@/app/lib/funcs";
import { FaCheck } from "react-icons/fa";
import { getTotalCostOfProducts } from '@/app/lib/funcs';


const ContractDelivery = ({ contract }: { contract: Contract }) => {

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  //const [error, setError] = useState<string | null>(null);
  //const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);




  const handleConfirmDelivery = async () => {

    try {
      setLoading(true);
      //setError(null);
      //setSuccess(null);
      const res = await axios.patch(`/api/contract/${contract.id}`, { stage: "AGREED" });
      console.log(res)
      //setSuccess(res.data.message);
    } catch (error: any) {
      //setSuccess("");
      //setError(error?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-md">
      <input type="radio" name="my-accordion-3" defaultChecked={contract.stage === "PAID"} />
      <div className="collapse-title font-semibold text-left text-lg flex items-center">
        <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 2 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
          {ArrayOfStages.indexOf(contract?.stage as string) > 2 ? <FaCheck fontSize={14} /> : 4}
        </span> Deliver to Buyer</div>
      <div className="collapse-content text-sm">

        <p>Waiting for buyer to confirm that he has received the package</p>

        <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7"> I have received the package </button>
      </div>
    </div>
  )
}

export default ContractDelivery