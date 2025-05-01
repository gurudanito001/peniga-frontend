/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Contract } from '@/app/utils/interfaces';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { formatAsCurrency } from '@/app/lib/funcs';
import axios from 'axios';
import { ArrayOfStages } from "@/app/lib/funcs";
import { FaCheck } from "react-icons/fa";
import { getTotalCostOfProducts } from '@/app/lib/funcs';
import { userTokenData } from '@/app/utils/interfaces';

const CountdownTimer = ({ endTimeISOString }: { endTimeISOString: string }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0); // Added state for total remaining time

  useEffect(() => {
    const endTime = new Date(endTimeISOString);

    const updateTimer = () => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime(); // Get difference in milliseconds
      setTimeRemaining(difference);

      if (difference <= 0) {
        // Timer has ended
        setMinutes(0);
        setSeconds(0);
        clearInterval(intervalId); // Clear interval to stop updating
        return;
      }

      const minutesLeft = Math.floor(difference / 1000 / 60);
      const secondsLeft = Math.floor((difference / 1000) % 60);

      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    };

    updateTimer(); // Initial update
    const intervalId = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [endTimeISOString]);

  // Format the time for display
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="grid grid-flow-col gap-2 text-center auto-cols-max absolute top-0 right-0">
      <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
        <span className="countdown font-mono text-xl" aria-live="polite" aria-label="Minutes remaining">
          <span style={{ "--value": minutes } as React.CSSProperties}>{formattedMinutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
        <span className="countdown font-mono text-xl" aria-live="polite" aria-label="Seconds remaining">
          <span style={{ "--value": seconds } as React.CSSProperties}>{formattedSeconds}</span>
        </span>
        sec
      </div>
    </div>
  );
};

const ContractPayment = ({ contract, userData }: { contract: Contract, userData: userTokenData }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const tempAccount: any = contract?.tempAccount;  
  console.log(contract);

  const startTimeISOString = tempAccount?.createdAt; // Your provided start time
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    const startTime = new Date(startTimeISOString);
    const calculatedEndTime = new Date(startTime.getTime() + 30 * 60 * 1000); // Add 30 minutes
    setEndTime(calculatedEndTime.toISOString());
  }, [startTimeISOString]);

  

  const generateEscrowAccount = async () =>{
    const payload = {email: contract?.buyer?.email || contract?.toBeInformed.email, contractId: contract?.id, amount: getTotalCostOfProducts(contract?.contractItems) }
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
    (ArrayOfStages.indexOf(contract?.stage as string) === 1) &&
    <div className={`collapse collapse-plus bg-base-100 ${ArrayOfStages.indexOf(contract?.stage as string) === 1 ? "border-2 border-base-content" : "border border-base-300"}  rounded-md`}>
      <input type="radio" name="my-accordion-3" defaultChecked={contract?.stage === "AGREED"} />
      <div className="collapse-title font-semibold text-left text-lg">
        <header className='flex items-center'>
          <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 1 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
            {ArrayOfStages.indexOf(contract?.stage as string) > 1 ? <FaCheck fontSize={14} /> : 3}
          </span>Secure{ArrayOfStages.indexOf(contract?.stage as string) > 1 && "d"} Payment
        </header>
        {ArrayOfStages.indexOf(contract?.stage as string) > 1 &&
          <p className='font-normal text-sm pl-10 text-gray-600'>Payment has been made by {contract?.buyerId === userData?.userId ? "you" : "buyer"}</p>
        }
      </div>
        
      {ArrayOfStages.indexOf(contract?.stage as string) === 1 && 
      <div className="collapse-content text-sm">
        {contract?.sellerId === userData?.userId && <p className="max-w-2xl">Waiting for buyer to make payment.</p>}
        {contract?.buyerId === userData?.userId && <p className="max-w-2xl">
          {!contract?.tempAccount && "Click on the button below to generate a temporary escrow account."}
          {contract?.tempAccount && "Transfer the exact amount to the generated account."}
        </p>}

        {tempAccount && <div className="card rounded-md w-full max-w-2xl bg-base-100 card-lg shadow-sm border mt-5 relative">
          
          {endTime && <CountdownTimer endTimeISOString={endTime} />}

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
              <li className=" list-item text-[#D2A337]">The account details above will no longer be valid when the clock runs out</li>
            </ul>
          </div>
        </div>}



        {(!tempAccount && userData?.userId === contract?.buyerId)&& <button type="button" className="btn btn-wide btn-secondary text-[#272727] mt-7" onClick={generateEscrowAccount} disabled={loading || Boolean(contract?.tempAccount)}> Generate Escrow Account </button>}
        

      </div>}
    </div>
  )
}

export default ContractPayment