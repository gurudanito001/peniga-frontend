"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const HeroSection = () => {
  const router = useRouter();
  const [contractRole, setContractRole] = useState("buyer");
  const [contractType, setContractType] = useState("techGadgets");
  const [error, setError] = useState("");

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleChangeRole = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    setContractRole(event.target.value);
  }

  const handleChangeContractType = (event: React.ChangeEvent<HTMLSelectElement>)=>{
    setContractType(event.target.value);
  }


  const handleSubmit = ()=>{
    setError("")
    if(!contractRole || !contractType){
      return setError("Contract Role and Contract Type are required")
    }
    router.push(`/contracts/new?role=${contractRole}&type=${contractType}`)
  }

  return (
    <section className="w-full flex items-center justify-center mt-8" onClick={()=> openDropdown && setOpenDropdown(null)}>
      <div className="max-w-2xl w-full mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#272727] lg:text-nowrap">
          Scam-Free Transactions, Every Time!
        </h1>
        <p className="text-[#272727] mt-3">
          Our escrow protection keeps your money and goods safe until both parties are satisfied.
        </p>

        {/* Form Container */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#F3EDE7] p-6  rounded-lg border border-[#D8CBC4] lg:max-w-2xl flex items-center">
          <form className="rounded-2xl md:p-6 w-full mx-auto mt-5 md:mt-0">
            
            {/* First Row */}
            <div className="mb-4 flex flex-col items-center bg-transparent p-3 w-full">
              
              {/* Transaction Type Dropdown */}

              <label className="form-control w-full mb-2">
                <div className="label pb-0">
                  <span className="label-text text-sm text-neutral-500">Role</span>
                </div>
                <select value={contractRole} onChange={handleChangeRole} className="select bg-transparent border border-gray-400 w-full text-sm">
                  <option disabled value="">Select your role</option>
                  <option value="buyer">I&apos;m Buying</option>
                  <option value="seller">I&apos;m Selling</option>
                </select>
              </label>


              {/* Category Dropdown */}

              <label className="form-control w-full mt-2">
                <div className="label pb-0">
                  <span className="label-text text-sm text-neutral-500">Category</span>
                </div>
                <select value={contractType} onChange={handleChangeContractType} className="select bg-transparent border border-gray-400 w-full text-sm">
                  <option disabled value="">Slect Category</option>
                  <option value="techGadgets">Tech Gadgets</option>
                  <option value="automobiles">Automobiles</option>
                  <option value="realEstate">Real Estate</option>
                </select>
              </label>
            </div>
            <div className="text-sm font-semibold text-center text-red-700">{error}</div>
            {/* Submit Button */}
            <button type="button" onClick={handleSubmit} className="mt-10 md:mt-5 w-full bg-[#C55938] text-white font-medium py-3 rounded-lg shadow-md hover:bg-[#b34b2f]">
              Create Contract
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;