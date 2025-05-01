

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { Contract, userTokenData } from '@/app/utils/interfaces';
import moment from 'moment';
import { formatAsCurrency } from '@/app/lib/funcs';
import axios from 'axios';
import { ArrayOfStages } from "@/app/lib/funcs";
import { FaCheck } from "react-icons/fa";
import { getTotalCostOfProducts } from '@/app/lib/funcs';
import { Bank } from '@/app/utils/interfaces';


const ContractWithdrawal = ({ contract, userData }: { contract: Contract, userData: userTokenData }) => {

  const [accountDetails, setAccountDetails] = useState({
    bankCode: "",
    accountNumber: "",
    amount: "",
    reference: ""
  })
  const [accountName, setAccountName] = useState("")
  const [banks, setBanks] = useState<Bank[]>([])
  const [error, setError] = useState<string | null>(null);
  const [fetchingBanks, setFetchingBanks] = useState(false);
  const [verifyingAccount, setVerifyingAccount] = useState(false);
  const [processingWithdrawal, setProcessingWithdrawal] = useState(false);

  useEffect(()=>{
    fetchBanks();
  },[])

  useEffect(()=>{
    setAccountDetails( prev =>({
      ...prev,
      amount: contract?.tempAccount?.accountDetails?.account?.amount,
      reference: `${contract?.id}`
    }))
  }, [contract?.tempAccount])

  const fetchBanks = async() =>{
    setError(null);
    setFetchingBanks(true);
    setAccountName('');
    try {
      const res = await axios.post(`/api/payment/fetchBanks`);
      console.log(res?.data?.data?.payload)
      setBanks(res?.data?.data?.payload)
    } catch (err: any) {
      console.log(err)
      setError("Error fetching Banks");
    } finally {
      setFetchingBanks(false);
    }
  }

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Function to validate account
  const validateBankAccount = useCallback(async () => {
    const {bankCode, accountNumber} = accountDetails
    if (bankCode && accountNumber.length === 10) {
      setVerifyingAccount(true);
      setError(null);
      try {
        console.log(bankCode, accountNumber)
        const res = await axios.post(`/api/payment/validateAccount`, {bankCode, accountNumber });
        console.log(res)
        setAccountName(res?.data?.data?.payload?.account_name);
      } catch (err: any) {
        setError(err.message || "Failed to verify account.");
        setAccountName("");
      } finally {
        setVerifyingAccount(false);
      }
    } else {
      setAccountName(""); //Clear account name
    }
  }, [accountDetails.bankCode, accountDetails.accountNumber]);


  const debouncedValidate = useCallback(debounce(validateBankAccount, 2000), [validateBankAccount]);

  // useEffect for validation
    useEffect(() => {
        debouncedValidate();
    }, [debouncedValidate, accountDetails.bankCode, accountDetails.accountNumber]); // Removed validateBankAccount from here



  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (event.target.name === "accountNumber") {
      if (!/^\d+$/.test(event.target.value) && event.target.value.length > 0) {
        return;
      }
    }
  
    setAccountDetails( prev =>({
      ...prev,
      [event.target.name]: event.target.value
    }))
    setAccountName("")
  }




  const handleWithdrawPayment = async () => {
    
      const data: any = {...accountDetails};
      data.amount = parseFloat(data?.amount)
      data.accountBank = data.bankCode
      delete data.bankCode;
      console.log(data)
      setProcessingWithdrawal(true);
      setError(null);
      try {
        const res = await axios.post(`/api/payment/withdraw`, data);
        console.log(res)
      } catch (err: any) {
        setError("Error sending payment");
        setAccountName("");
      } finally {
        setProcessingWithdrawal(false);
      }
  }


  return (
    <div className={`collapse collapse-plus bg-base-100 ${ArrayOfStages.indexOf(contract?.stage as string) === 4 ? "border-2 border-base-content" : "border border-base-300"} rounded-md`}>
      <input type="radio" name="my-accordion-3" defaultChecked={contract?.stage === "INSPECTED"} />
      <div className="collapse-title font-semibold text-left text-lg">
        <header className=' flex items-center'>
          <span className={`flex border ${ArrayOfStages.indexOf(contract?.stage as string) >= 4 ? "bg-secondary text-white" : "border-secondary text-secondary"} items-center justify-center w-8 h-8 rounded-full text-lg mr-2`}>
            {ArrayOfStages.indexOf(contract?.stage as string) > 4 ? <FaCheck fontSize={14} /> : 6}
          </span>Release{ArrayOfStages.indexOf(contract?.stage as string) > 4 ? "d" : ""} Payment
        </header>
        {ArrayOfStages.indexOf(contract?.stage as string) > 4 &&
          <p className='font-normal text-sm pl-10 text-gray-600'>Payment has been withdrawn by {contract?.sellerId === userData?.userId ? "you" : "seller"}</p>
        }
      </div>
      {ArrayOfStages.indexOf(contract?.stage as string) === 4 &&
      <div className="collapse-content text-sm">
        <p>Fill in your account details to withdraw payment</p>


          <div className='mt-3'>
            <label className="form-control w-full max-w-lg mb-2">
              <div className="label">
                <span className="label-text text-neutral-500">Bank Name</span>
              </div>
              <select
                className="select select-bordered w-full bg-base-100/10"
                value={accountDetails.bankCode}
                onChange={handleChange}
                name="bankCode"
              >
                <option value="">{fetchingBanks ? "Fetching Banks ..." : "Select Bank"}</option>
                {banks?.map( (item: Bank) => {
                  return(
                    <option key={item?.id} value={item?.code}> {item?.name}</option>
                  )
                })}
              </select>
            </label>


            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text text-neutral-500">Account Number</span>
              </div>
              <input
                type="text"
                placeholder="Bank Account Number"
                className="input input-bordered w-full bg-base-50 placeholder:text-base"
                name="accountNumber"
                value={accountDetails?.accountNumber}
                onChange={handleChange}
              />
            </label>
            {accountName && <p className='text-primary mt-1 font-semibold uppercase'>
              {verifyingAccount ? 
                <div className="flex w-96 flex-col gap-4">
                  <div className="skeleton h-4 w-full rounded-sm"></div>
                </div>
               : accountName}
            </p>}

            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text text-neutral-500">Amount</span>
              </div>
              <input
                type="text"
                placeholder="Amount"
                className="input input-bordered w-full bg-base-50 placeholder:text-base"
                readOnly
                value={formatAsCurrency(parseFloat(accountDetails?.amount))}
              />
            </label>

            {/* <button onClick={handleVerify} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify Account'}
            </button> */}
            <button disabled={!accountName || processingWithdrawal} type="button" className="btn btn-wide btn-secondary text-[#272727] mt-8" onClick={handleWithdrawPayment}>  {processingWithdrawal ? "Processing ..." : "Initiate withdrawal"}</button>
            
            {error && <p className='text-error'>{error}</p>}
          </div>


      </div>}
    </div>
  )
}

export default ContractWithdrawal