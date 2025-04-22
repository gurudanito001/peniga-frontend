"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const CreateContractOptions = () => {


  const router = useRouter();
  const [contractRole, setContractRole] = useState("buyer");
  const [contractType, setContractType] = useState("techGadgets");
  const [error, setError] = useState("");

  const handleChangeRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setContractRole(event.target.value);
  }

  const handleChangeContractType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setContractType(event.target.value);
  }


  const handleSubmit = () => {
    setError("")
    if (!contractRole || !contractType) {
      return setError("Contract Role and Contract Type are required")
    }
    router.push(`/contracts/new?role=${contractRole}&type=${contractType}`)
  }


  return (
    <section className="w-full h-full flex">
        
        {/* Form Container */}
        <div className="w-full max-w-4xl m-auto bg-[#F3EDE7] p-6 rounded-lg border border-[#D8CBC4] lg:max-w-2xl flex items-center">
          <form className="rounded-2xl md:p-6 w-full mx-auto mt-5 md:mt-0">

            {/* First Row */}
            <div className="mb-4 flex flex-col items-center bg-transparent p-3 w-full">

              <h3 className="text-2xl font-semibold mb-4">Create Contract Options</h3>

              {/* Transaction Type Dropdown */}

              <label className="form-control w-full mb-2">
                <div className="label">
                  <span className="label-text text-base text-neutral-500">Role</span>
                </div>
                <select value={contractRole} onChange={handleChangeRole} className="select bg-transparent border border-gray-400 w-full text-base">
                  <option disabled value="">Select your role</option>
                  <option value="buyer">I&apos;m Buying</option>
                  <option value="seller">I&apos;m Selling</option>
                </select>
              </label>


              {/* Category Dropdown */}

              <label className="form-control w-full mt-2">
                <div className="label">
                  <span className="label-text text-base text-neutral-500">Category</span>
                </div>
                <select value={contractType} onChange={handleChangeContractType} className="select bg-transparent border border-gray-400 w-full text-base">
                  <option disabled value="">Slect Category</option>
                  <option value="techGadgets">Tech Gadgets</option>
                  <option value="automobiles">Automobiles</option>
                  <option value="realEstate">Real Estate</option>
                </select>
              </label>
            </div>
            <div className="text-sm font-semibold text-center text-red-700">{error}</div>
            {/* Submit Button */}
            <button type="button" onClick={handleSubmit} className="mt-10 md:mt-5 w-full h-16 bg-[#C55938] text-white font-medium py-3 rounded-lg shadow-md hover:bg-[#b34b2f]">
              Create Contract
            </button>
          </form>
        </div>


    </section>
  )
}


export default CreateContractOptions;