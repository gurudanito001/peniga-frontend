

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


const ContractWithdrawal = ({ contract }: { contract: Contract }) => {

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  //const [error, setError] = useState<string | null>(null);
  //const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);




  const handleWithdrawPayment = async () => {

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
      <input type="radio" name="my-accordion-3" defaultChecked={contract.stage === "INSPECTED"} />
      <div className="collapse-title font-semibold text-left text-lg flex items-center">
        <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 4 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
          {ArrayOfStages.indexOf(contract?.stage as string) > 4 ? <FaCheck fontSize={14} /> : 6}
        </span>Release Payment</div>
      <div className="collapse-content text-sm">
        <p>Payment has be issued to seller, waiting for seller. Seller can withdraw payment now!</p>
      </div>
    </div>
  )
}

export default ContractWithdrawal