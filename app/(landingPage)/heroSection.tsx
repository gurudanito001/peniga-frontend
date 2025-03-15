"use client";

import { useState } from "react";

const HeroSection = () => {
  const [selectedTransaction, setSelectedTransaction] = useState("I'm Buying");
  const [selectedCategory, setSelectedCategory] = useState("Tech Gadgets, Phones, Laptops");
  const [selectedCurrency, setSelectedCurrency] = useState("For NGN");
  const [amount, setAmount] = useState("");

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle dropdown & ensure only one is open at a time
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <section className="w-full flex items-center justify-center mt-8">
      <div className="max-w-2xl w-full mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#272727] lg:text-nowrap">
          Scam-Free Transactions, Every Time!
        </h1>
        <p className="text-[#272727] mt-3">
          Our escrow protection keeps your money and goods safe until both parties are satisfied.
        </p>

        {/* Form Container */}
        <div className="mt-5 max-w-4xl mx-auto bg-[#F3EDE7] p-6  rounded-lg border border-[#D8CBC4] lg:max-w-2xl lg:h-[300px]">
          <form className="rounded-2xl md:p-6 w-full mx-auto mt-5 md:mt-0">
            
            {/* First Row */}
            <div className="mb-4 flex flex-row items-center bg-[#F2F2F2] border border-[#A5A5A5] rounded-lg p-3 w-full">
              
              {/* Transaction Type Dropdown */}
              <div className="relative w-1/2">
                <button
                  type="button"
                  className="flex justify-between items-center w-full bg-transparent outline-none text-[#272727]"
                  onClick={() => toggleDropdown("transaction")}
                >
                  <span>{selectedTransaction}</span>
                  <img src="/images/arrow-down.svg" alt="Dropdown Icon" className="w-5 h-5 md:mr-32" />
                </button>
                {openDropdown === "transaction" && (
                  <div className="absolute left-0 mt-2 w-full bg-[#F3EDE7] border border-[#D8CBC4] rounded-lg shadow-lg z-10 p-2">
                    <button
                      className="block w-full px-4 py-2 text-left whitespace-nowrap hover:bg-[#e5d8cf] text-[#272727]"
                      onClick={() => {
                        setSelectedTransaction("I'm Buying");
                        setOpenDropdown(null);
                      }}
                    >
                      I'm Buying
                    </button>
                    <button
                      className="block w-full px-4 py-2 whitespace-nowrap text-left hover:bg-[#e5d8cf] text-[#272727]"
                      onClick={() => {
                        setSelectedTransaction("I'm Selling");
                        setOpenDropdown(null);
                      }}
                    >
                      I'm Selling
                    </button>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gray-900 mx-4 "></div>

              {/* Category Dropdown */}
              <div className="relative w-1/2">
                <button
                  type="button"
                  className="flex justify-between items-center w-full bg-transparent outline-none text-[#272727]"
                  onClick={() => toggleDropdown("category")}
                >
                  <span className="truncate w-[90px] md:w-auto">{selectedCategory}</span>
                  <img src="/images/arrow-down.svg" alt="Dropdown Icon" className="w-5 h-5 ml-2" />
                </button>
                {openDropdown === "category" && (
                  <div className="absolute left-0 mt-2 w-[160px] md:w-[270px] bg-[#F3EDE7] border border-[#D8CBC4] rounded-lg shadow-lg z-10 p-2">
                    <button
                      className="block w-full px-4 py-2 text-left hover:bg-[#e5d8cf] text-[#272727] md:whitespace-nowrap"
                      onClick={() => {
                        setSelectedCategory("Tech Gadgets, Phones, Laptops");
                        setOpenDropdown(null);
                      }}
                    >
                      Tech Gadgets, Phones, Laptops
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left hover:bg-[#e5d8cf] text-[#272727]"
                      onClick={() => {
                        setSelectedCategory("Electronics");
                        setOpenDropdown(null);
                      }}
                    >
                      Electronics
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left hover:bg-[#e5d8cf] text-[#272727]"
                      onClick={() => {
                        setSelectedCategory("Clothing");
                        setOpenDropdown(null);
                      }}
                    >
                      Clothing
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Second Row */}
            <div className="mb-4 flex flex-row items-center bg-[#F2F2F2] border border-[#A5A5A5] rounded-lg p-3 w-full mt-4">
              
              {/* Currency Dropdown */}
              <div className="relative w-1/2">
                <button
                  type="button"
                  className="flex justify-between items-center w-full bg-transparent outline-none text-[#272727]"
                  onClick={() => toggleDropdown("currency")}
                >
                  <span>{selectedCurrency}</span>
                  <img src="/images/arrow-down.svg" alt="Dropdown Icon" className="w-5 h-5 md:mr-32" />
                </button>
                {openDropdown === "currency" && (
                  <div className="absolute left-0 mt-2 w-full bg-[#F3EDE7] border border-[#D8CBC4] rounded-lg shadow-lg z-10 p-2">
                    <button
                      className="block w-full px-4 py-2 whitespace-nowrap text-left hover:bg-[#e5d8cf] text-[#272727]"
                      onClick={() => {
                        setSelectedCurrency("For NGN");
                        setOpenDropdown(null);
                      }}
                    >
                      For NGN
                    </button>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gray-900 mx-4 "></div>

              {/* Amount Input */}
              <input
                type="text"
                className="bg-transparent outline-none text-[#272727] w-1/2"
                placeholder="500,000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button className="mt-10 md:mt-5 w-full bg-[#C55938] text-white font-medium py-3 rounded-lg shadow-md hover:bg-[#b34b2f]">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;