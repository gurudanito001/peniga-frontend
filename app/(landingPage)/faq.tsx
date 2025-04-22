"use client";

import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    question: "What is an escrow service, and how does it work?",
    answer:
      "An escrow service acts as a neutral third party that holds funds until both parties fulfill their agreement.",
  },
  {
    question: "Is Peniga available for both individuals and businesses?",
    answer:
      "Yes, your funds are securely held until both parties confirm the transaction's completion.",
  },
  {
    question: "What types of transactions can I use escrow for?",
    answer:
      "Our escrow service charges a small percentage based on the transaction value.",
  },
  {
    question: "How does Peniga ensure my money and goods are safe?",
    answer:
      "Once both parties agree, the funds are released instantly or within a few hours, depending on verification.",
  },
  {
    question: "What happens if one party doesn’t fulfill their end of the deal?",
    answer:
      "Once both parties agree, the funds are released instantly or within a few hours, depending on verification.",
  },
  {
    question: "Are transactions legally binding?",
    answer:
      "Once both parties agree, the funds are released instantly or within a few hours, depending on verification.",
  },
  {
    question: "Are there any fees for using the escrow service?",
    answer:
      "Once both parties agree, the funds are released instantly or within a few hours, depending on verification.",
  },
  {
    question: "Can I cancel a transaction once it has started?",
    answer:
      "Once both parties agree, the funds are released instantly or within a few hours, depending on verification.",
  },
  {
    question: "What happens if there’s a dispute between the buyer and seller?",
    answer:
      "Once both parties agree, the funds are released instantly or within a few hours, depending on verification.",
  },
];

const categories =["About Us", "Services", "Support"];
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("About Us");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-16" id="faq">
      <div className="max-w-3xl mx-auto text-center">
      <button className="px-4 py-1 md:px-6 md:py-2 border-2 border-[#C55938] text-[#C55938] rounded-full font-medium hover:bg-[#C55938] hover:text-white transition">
          Frequently Asked Questions
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-[#272727] mt-4">
          Things you Might be Curious About!
        </h2>

         {/* Category Tabs with Shared Background */}
         <div className="mt-6 flex justify-center bg-[#FFFFF2] rounded-lg p-1 w-fit mx-auto border border-[#D9D9D9]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium rounded transition-all text-nowrap ${
                activeCategory === category
                  ? "bg-[#0A6E5A] text-white"
                  : "text-[#272727]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Container */}
      <div className="max-w-5xl mx-auto mt-12 bg-[#FFFFF2] shadow-md rounded-2xl p-6 border border-[#D9D9D9]">
        {faqs.map((faq, index) => (
          <div key={index} className={`pb-3 ${index !== faqs.length -1 ? "border-b border-gray-300" :""}`}>
            <button
              className="w-full flex justify-between items-center py-4 text-left text-[#272727] font-semibold focus:outline-none text-lg" style={{fontFamily:"Instrument Sans", fontWeight:"500"}}
              onClick={() => toggleFAQ(index)}
            >
              <h1 className="max-w-[90%] ">{faq.question}</h1>
              {openIndex === index ? (
                <HiMinus className="text-[#C55938] w-6 h-6 " color="black"/>
              ) : (
                <HiPlus className="text-[#C55938] w-6 h-6 " color="black"/>
              )}
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;