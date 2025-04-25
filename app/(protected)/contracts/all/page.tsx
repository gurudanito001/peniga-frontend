
import React from "react"; 
import AllContracts from "./allContracts";
import { getToken } from "@/app/lib/auth";

const ViewAllContracts = async () => { 
  const token = await getToken();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/api/contract?token=${token}`, {cache: "no-store"}) as any;
  const data = await res.json();
  
  return ( 
  <div className=""> 
   
  <AllContracts contracts={data.data}/> 
  </div> 
  ); 
};

export default ViewAllContracts;