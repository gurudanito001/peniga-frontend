'use client';

import InsideNavbar from '@/app/(protected)/insideNavbar';
import Image from 'next/image';
import { Contract } from '@/app/utils/interfaces';




const PreviewContract = ({contractDetails, setCurrentScreen, handleSubmit, isLoading}: {contractDetails: Contract, setCurrentScreen: (screen: string)=>void, handleSubmit: ()=>void, isLoading: boolean}) => {

    if (!contractDetails) {
        return null
    }

    return (
        <section className="w-full h-screen bg-neutral-100 p-5 pb-20 overflow-y-hidden">
            <InsideNavbar />
            <div className='flex-1 h-full overflow-y-auto p-5 max-w-5xl'>
                <header className="text-xl font-semibold text-neutral-600 mb-5 flex justify-between items-center">
                    <span>Preview Contract</span>

                </header>
                <div className="border p-3 lg:p-5 mb-5">
                    <header className="text-lg font-semibold text-neutral-400 mb-3">
                        Contract Details
                    </header>

                    <div className="gap-2 text-sm text-neutral-500">
                        <div className="inline-flex flex-col w-1/2 mb-3">
                            <span>Title:</span>
                            <span className="font-medium text-neutral-700">{contractDetails.title}</span>
                        </div>

                        <div className="inline-flex flex-col w-1/2 mb-3">
                            <span>Inspection Period:</span>
                            <span className="font-medium text-neutral-700">{contractDetails.inspectionPeriod} day(s)</span>
                        </div>

                        <div className="inline-flex flex-col w-1/2 mb-3">
                            <span>Currency:</span>
                            <span className="font-medium text-neutral-700">NGN</span>
                        </div>

                        <div className="inline-flex flex-col w-1/2 mb-3">
                            <span>Service Fee Paid By:</span>
                            <span className="font-medium text-neutral-700">{contractDetails.escrowFeePaidBy}</span>
                        </div>
                    </div>
                </div>

                <div className="border p-3 lg:p-5 mb-5">
                    <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
                        <span className="min-w-max">Products</span>
                    </header>
                    {/* Contract Items List */}
                    <ul className="space-y-4 max-w-2xl">
                        {contractDetails?.contractItems?.map((product) => (
                            <li
                                key={product.id}
                                className="border-b py-4 flex flex-row items-center justify-between gap-10 flex-wrap"
                            >
                                {/* Image */}
                                {product?.image &&<Image
                                    alt="Product Image"
                                    width={80}
                                    height={80}
                                    src={product?.image}
                                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                                />}

                                {/* Product Details */}
                                <div className="flex-1 flex flex-col items-start text-left">
                                    <h2 className="text-gray-800 font-semibold">{product.itemName}</h2>
                                    <p className="text-gray-500 text-sm">{product.description}</p>
                                </div>

                                {/* Quantity & Price */}
                                {product?.quantity && product?.price &&<div className="flex flex-col items-center gap-4">
                                    <span> <strong>{product.quantity}</strong> unit(s)</span>
                                    <p className="font-semibold text-gray-700">
                                        NGN{(parseInt(product?.quantity.toString()) * parseInt(product.price.toString())).toFixed(2)}
                                    </p>
                                </div>}
                            </li>
                        ))}
                    </ul>

                </div>



                <div className="border p-3 lg:p-5 mb-5">
                    <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
                        <h3 className="min-w-max">Agreement Terms</h3>
                        
                    </header>


                    <ul className="list list-disc list-outside flex flex-col gap-2">
                        {contractDetails?.agreementTerms?.map( (item: string, index: number) =>{
                            return (
                                <li key={`${item}-${index}`} className="list-item">
                                    <span className="inline-block border border-neutral-400 px-4 py-3 text-sm rounded-md w-full shadow text-[#272727]">
                                        {item}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>


                <div className='flex items-center justify-between p-3 lg:p-5 mb-5'>
                    <button className='btn btn-link btn-lg' onClick={()=>setCurrentScreen("")}>Edit Contract</button>
                    <button className="btn btn-wide btn-lg text-base btn-primary mt-8" onClick={handleSubmit} disabled={isLoading}>Create Contract</button>
                </div>

            </div>
        </section>
    );
};

export default PreviewContract;