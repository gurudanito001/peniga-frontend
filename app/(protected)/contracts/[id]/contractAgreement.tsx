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
import { useRouter } from 'next/navigation';
import { getToken } from '@/app/lib/auth';
import jwt from 'jsonwebtoken';
import { userTokenData } from '@/app/utils/interfaces';


const ContractAgreement = ({contract, userData}: {contract: Contract, userData: userTokenData}) =>{
  //const token = await getToken() as string;
  const router = useRouter();
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  //const [error, setError] = useState<string | null>(null);
  //const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  


  const handleAgreeToTerms = async() =>{
  
    try {
      setLoading(true);
      const res = await axios.patch(`/api/contract/${contract?.id}`, {stage: "AGREED"});
      console.log(res)
      router.refresh();
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }
      

  return(
    <div className={`collapse collapse-plus bg-base-100 ${ArrayOfStages.indexOf(contract?.stage as string) === 0 ? "border-2 border-base-content" : "border border-base-300"} rounded-md`}>
      <input type="radio" name="my-accordion-3" defaultChecked={contract?.stage === "CREATED"} />
      <div className="collapse-title font-semibold text-left text-lg">
        <header className='flex items-center'>
          <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 0 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
            {ArrayOfStages.indexOf(contract?.stage as string) > 0 ? <FaCheck fontSize={14} /> : 2}
          </span>
          Accept{ArrayOfStages.indexOf(contract?.stage as string) > 0 && "ed"} Agreement
        </header>
        {ArrayOfStages.indexOf(contract?.stage as string) > 0 &&
        <p className='font-normal text-sm pl-10 text-gray-600'>
          Agreement has been accepted by 
          {(contract?.userId === userData?.userId && contract?.buyerId === userData?.userId) && " seller" }
          {(contract?.userId === userData?.userId && contract?.sellerId === userData?.userId) && " buyer" }
          {(contract?.userId !== userData?.userId) && " you" }
        </p>}
      </div>
      <div className="collapse-content text-sm">
        <p></p>
        
        <section className="w-full bg-neutral-50 max-w-5xl p-5 shadow">
          <div className='flex-1 gap-3'>
            <div className="p-3 lg:p-5">
              <header className="text-xl font-semibold text-neutral-700 mb-4 uppercase">
                {contract?.title}
              </header>

              <p className='max-w-4xl text-base'>
                This Purchase Agreement is made and entered into on {moment(contract?.createdAt).format('MMMM Do YYYY, h:mm:ss a')} between {contract?.userId === contract?.buyerId ? `${contract?.buyer?.firstName} ${contract?.buyer?.lastName}` : `${contract?.seller?.firstName} ${contract?.seller?.lastName}`} (&quot;{contract?.userId === contract?.buyerId ? "Buyer" : "Seller"}&quot;), and {contract?.userId === contract?.buyerId ? `${contract?.seller?.firstName} ${contract?.seller?.lastName}` : `${contract?.toBeInformed.email}`} (&quot;{contract?.userId === contract?.buyerId ? "Seller" : "Buyer"}&quot;). This agreement pertains to the purchase of tech gadgets, with an inspection period of one ({contract?.inspectionPeriod}) day(s), and all transactions shall be conducted in Nigerian Naira (NGN).
              </p>

            </div>

            <div className="divider m-0"></div>

            <div className="p-3 lg:p-5">
              <header className="text-lg font-semibold text-neutral-500 mb-4">
                Contract Items
              </header>

              {/* Contract Items List */}
              <ul className="space-y-4">
                {contract?.contractItems.map((product, index) => (
                  <li key={product.id} className={`${index !== contract?.contractItems.length - 1 && "border-b"} py-4 flex items-center justify-between gap-4 max-w-2xl`}>
                    {/* Image */}
                    <Image alt="Product Image" width={80} height={80} src={product.imageUrl ? product.imageUrl : ""} className="w-20 h-20 sm:w-24 sm:h-20 rounded-lg object-cover" />

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <h2 className="text-gray-800 font-semibold">{product.itemName}</h2>
                      <p className="text-gray-500 text-sm">{product.description}</p>
                    </div>

                    {/* Quantity & Price */}
                    <div className="flex flex-col items-center gap-4">
                      <span className="font-semibold text-gray-700">{product.quantity} unit(s)</span>
                      <p className="font-semibold text-gray-700">{formatAsCurrency((parseInt(product.quantity.toString()) || 1) * parseInt(product.price.toString()))}</p>
                    </div>
                  </li>
                ))}
                <li className='border-t border-b py-2 flex items-center justify-between'>
                  <span className="font-medium text-gray-500 text-lg">Total:</span>
                  <span className='font-bold text-xl'>{formatAsCurrency(getTotalCostOfProducts(contract?.contractItems))}</span>
                </li>
              </ul>

            </div>

            <div className="divider m-0"></div>


            <div>
              <div className="p-3 lg:p-5 mb-5">
                <header className="text-lg font-semibold text-neutral-500 mb-4">
                  Agreement Terms
                </header>
                <ol className="list-decimal list-outside align-top w-full max-w-4xl md:px-3">
                  {contract?.agreementTerms.map((item: string, index: number) => {
                    return (
                      <li key={item + index} className={`list-item ${index !== contract?.agreementTerms.length - 1 && "border-b"} p-3 text-base w-full text-[#272727] align-top`}>
                        {item}
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>

            {(contract?.userId !== userData.userId && ArrayOfStages.indexOf(contract?.stage as string) === 0) &&<div className='flex flex-col mt-10 gap-4 px-3 lg:px-5'>
              <label className="fieldset-label flex items-center" htmlFor='agreeToTerms'>
                <input id='agreeToTerms' type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} className="checkbox mr-2" />
                <span className='text-base'>I agree to all the terms of this contract</span>
              </label>

              <button disabled={!agreeToTerms || loading} onClick={handleAgreeToTerms} className="btn btn-wide h-9 text-gray-400 font-semibold btn-accent text-base"> {loading ? "loading ..." : "Proceed"} </button>
            </div>}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContractAgreement