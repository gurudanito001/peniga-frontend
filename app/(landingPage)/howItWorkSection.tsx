import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 pb-24 md:pt-16" id="how-it-works">
            {/* Heading Section */}
            <div className="text-left mb-12">
                <button className="px-4 py-1 md:px-6 md:py-2 border-2 border-[#C55938] text-[#C55938] rounded-full font-medium hover:bg-[#C55938] hover:text-white transition">
                    How It Works
                </button>
                <h1 className="text-2xl md:text-3xl font-semibold text-[#272727] mt-4">
                    Safe & Secure Transactions
                </h1>
                <p className="text-[#272727] text-sm max-w-md  mt-2">
                    Buy and sell with confidence, knowing your transactions are secure, fast, and backed by expert support.
                </p>

                <Link href="/sign-up" className="btn px-6 py-2 rounded-md bg-[#C55938] text-white font-medium hover:bg-[#B04A2D] transition mt-6">
                    Get Started
                </Link>
            </div>

            {/* Steps Grid */}
            <div className=" mt-20 max-w-full grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Row 1 */}
                <div className=" bg-[#EDEBF0] px-8 py-12 rounded-2xl col-span-7 md:col-span-5">
                    <h1 className="text-2xl font-bold text-[#272727]">01</h1>
                    <h2 className="text-lg font-semibold text-[#272727]">Create a Contract</h2>
                    <p className="text-[#272727] max-w-sm text-sm mt-2 ">
                        Clearly outline the details of your transaction by specifying the product or service and setting the agreement terms.
                    </p>
                </div>
                <div className="relative bg-[#C55938] text-[#FFFFF2] px-8 py-12 rounded-2xl overflow-hidden col-span-7 flex flex-col justify-center text-left md:pl-16 md:pr-6">
                    {/* Top Right Curve */}
                    <Image
                        width={70}
                        height={70}
                        src="/images/AgreementImage.svg"
                        className="absolute top-[-32px] right-[-56px] md:right-[-48px] opacity-50 rotate-[90deg] lg:right-0"
                        alt="Curved Pattern"
                    />

                    {/* Left Curve */}
                    <Image
                        width={70}
                        height={70}
                        src="/images/AgreementImage.svg"
                        className="absolute bottom-0 top-36 lg:top-16 opacity-50 lg:left-[-6px] md:left-[-48px] rotate-[270deg] lg:rotate-0 left-[-36px]"
                        alt="Curved Pattern"
                    />
                    <div className="">
                        <h1 className="text-2xl font-bold">02</h1>
                        <h2 className="text-lg font-semibold">Accept Agreement</h2>
                        <p className="text-sm mt-2 max-w-sm">
                            The buyer or seller reviews and agrees to the terms, ensuring mutual understanding before proceeding.
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className=" bg-[#025253] text-[#FFFFF2] px-8 py-12 rounded-2xl overflow-hidden relative col-span-7 flex flex-col justify-center text-left md:pl-16 md:pr-6">
                    {/* Top Right Curve */}
                    <Image
                        width={70}
                        height={70}
                        src="/images/SecurePayment.svg"
                        className="absolute top-[-44px] lg:top-12 bottom-0 right-[-56px] lg:right-[0px] lg:translate-y-[40%] lg:rotate-[270deg] opacity-50 rotate-[90deg]"
                        alt="Curved Pattern"
                    />

                    {/* Left Curve */}
                    <Image
                        width={60}
                        height={60}
                        src="/images/SecurePayment.svg"
                        className="absolute bottom-0 top-40 lg:top-16 opacity-50 lg:left-[0px] left-[-30px]  rotate-[270deg] lg:rotate-0 "
                        alt="Curved Pattern"
                    />

                    <div className="">
                        <h1 className="text-2xl font-bold">03</h1>
                        <h2 className="text-lg font-semibold">Secure Payment</h2>
                        <p className="text-sm mt-2 max-w-sm">
                            The buyer deposits funds into a secure escrow account, ensuring protection for both parties until the transaction is completed.
                        </p>
                    </div>
                </div>

                <div className=" bg-[#EDEBF0] px-8 py-12 rounded-2xl col-span-7 md:col-span-5">
                    <h1 className="text-2xl font-bold text-[#272727]">04</h1>
                    <h2 className="text-lg font-semibold text-[#272727]">Deliver to Buyer</h2>
                    <p className="text-[#272727] text-sm max-w-sm mt-2">
                        The seller fulfills their obligation by delivering the agreed-upon product or service.
                    </p>
                </div>

                {/* Row 3 */}
                <div className=" bg-[#EDEBF0] px-8 py-12 rounded-2xl col-span-7 md:col-span-5">
                    <h1 className="text-2xl font-bold text-[#272727]">05</h1>
                    <h2 className="text-lg font-semibold text-[#272727]">Inspection & Approval</h2>
                    <p className="text-[#272727] text-sm max-w-sm mt-2">
                        The buyer reviews the delivered product or service and confirms satisfaction before proceeding to payment release.
                    </p>
                </div>
                <div className=" bg-[#D2A337] px-8 text-[#FFFFF2] lg:text-[#272727] py-12 rounded-2xl relative overflow-hidden col-span-7 flex flex-col justify-center text-left md:pl-16 md:pr-6">

                    {/* Top Right Curve */}
                    <Image
                        width={60}
                        height={60}
                        src="/images/SecurePayment.svg"
                        style={{ filter: "invert(70%) sepia(70%) saturate(300%) hue-rotate(10deg) brightness(90%) contrast(100%)" }}
                        className="absolute top-[-44px] right-[-56px] md:right-[-32px] opacity-50 rotate-[90deg] lg:rotate-[180deg] lg:right-[0px] lg:top-[0]"
                        alt="Curved Pattern"
                    />

                    {/* Left Curve */}
                    <Image
                        width={60}
                        height={60}
                        src="/images/SecurePayment.svg"
                        style={{ filter: "invert(70%) sepia(70%) saturate(300%) hue-rotate(10deg) brightness(90%) contrast(100%)" }}
                        className="absolute bottom-0 top-40 lg:top-24 w-28 h-28 opacity-50 lg:left-[-39px] left-[-40px] rotate-[270deg] md:top-26 lg:rotate-0 "
                        alt="Curved Pattern"
                    />


                    <div className="">
                        <h1 className="text-2xl font-bold">06</h1>
                        <h2 className="text-lg font-semibold">Release Payment</h2>
                        <p className=" mt-2 max-w-sm text-sm">
                            Once approved, the escrow service releases funds to the seller, completing the transaction securely.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
