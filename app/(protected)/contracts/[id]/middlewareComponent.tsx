"use client"

import { useEffect } from "react";
import { Contract, userTokenData } from "@/app/utils/interfaces";
import { useRouter } from "next/navigation";

const ContractDetailsMiddleware = ({userData, contract}: { userData: userTokenData, contract: Contract}) =>{
  const router = useRouter();
  useEffect(()=>{
    setBuyerOrSellerId();
    router.refresh();
  }, [])


  const setBuyerOrSellerId = async()=>{
    const payload = {
      ...(!contract?.buyerId && {buyerId: userData?.userId}),
      ...(!contract?.sellerId && {sellerId: userData?.userId})
    }
    console.log(payload);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/api/contract/${contract?.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    console.log(response)
  }

  


  return null;
}

export default ContractDetailsMiddleware;