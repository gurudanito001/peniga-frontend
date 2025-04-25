/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import InsideNavbar from '@/app/(protected)/insideNavbar';
import { XMarkIcon, TrashIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import CreateContractOptions from './createContractOptions';
import PreviewContract from './previewContract';
import jwt from 'jsonwebtoken';
import axios from "axios";

import { Contract, ContractItem, userTokenData } from '@/app/utils/interfaces';

/* interface ContractItem {
  id: number;
  itemName: string;
  price: string;
  quantity: string;
  description: string;
  image: string ;
}

interface ContractState {
  buyerId?: string;
  sellerId?: string;
  title: string;
  inspectionPeriod: number;
  escrowFeePaidBy: 'seller' | 'buyer' | 'split';
  agreementTerms: string[];
  toBeInformed: {
    email: string;
  };
  contractItems: ContractItem[];
}

interface userTokenData {
  email: string
  exp: number
  expires: string
  type: string
  userId: string
}
 */


const AddNewContract = ({token}: {token: string}) => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") as string;
  const type = searchParams.get("type") as string;
  const userData = jwt.decode(token) as userTokenData;

  const [currentScreen, setCurrentScreen] = useState("")

  const [contract, setContract] = useState<Contract>({
    userId: "",
    title: '',
    inspectionPeriod: 1,
    escrowFeePaidBy: 'seller',
    agreementTerms: [],
    toBeInformed: {
      email: '',
    },
    contractItems: [],
  });

  const [newContractItem, setNewContractItem] = useState<ContractItem>({
    itemName: '',
    price: '',
    quantity: '',
    description: '',
    image: "",
    id: Date.now(), // Temporary ID for new items
  });

  const validateContract = () => {

    if (!contract.userId) {
      return 'User Id cannot be empty';
    }

    if (!contract.buyerId && !contract.sellerId) {
      return 'Either Buyer ID or Seller ID must be filled.';
    }

    if (!contract.title) {
      return 'Contract title is required';
    }
  
    if (contract.escrowFeePaidBy !== 'buyer' && contract.escrowFeePaidBy !== 'seller') {
      return 'Escrow Fee Paid By must be either "buyer" or "seller".';
    }
  
    if (typeof contract.inspectionPeriod !== 'number' || contract.inspectionPeriod < 1) {
      return 'Inspection Period is required';
    }

    if (contract.agreementTerms.length === 0) {
      return 'Agreement Terms must contain at least one condition.';
    }

    if (contract?.contractItems?.length === 0) {
      return 'Contract must contain at least one product.';
    }

    if (!isValidEmail(contract.toBeInformed.email)) {
      return 'To Be Informed Email must be a valid email address.';
    }
  
    return null; // No validation errors
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  useEffect(()=>{
    console.log(userData, role)
    if(!role && !type){
      return
    }
    if(userData.userId && role){
      if(role === "buyer"){
        setContract( prev =>({
          ...prev,
          sellerId: "",
          buyerId: userData.userId,
          userId: userData.userId,
          escrowFeePaidBy: role
        }))
      }else if(role === "seller"){
        setContract( prev =>({
          ...prev,
          buyerId: "",
          sellerId: userData.userId,
          userId: userData.userId,
          escrowFeePaidBy: role
        }))
      }
    }
  }, [role])

  const [newAgreementTerm, setNewAgreementTerm] = useState<string>('');
  const [openContractItemsDrawer, setOpenContractItemsDrawer] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
  
    if (name === 'inspectionPeriod' && value !== "" && isNaN(Number(value))) {
      return;
    }
    setContract((prevContract) => ({
      ...prevContract,
      [name]: (name === "inspectionPeriod" && value !== "") ? parseInt(value) : value,
    }));
  };

  const handleNewContractItemChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if ((name === 'quantity' || name === 'price') && isNaN(Number(value))) {
      return;
    }
    setNewContractItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleNewContractItemImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewContractItem((prevItem) => ({
        ...prevItem,
        image: reader.result as string, // Cast reader.result to string
      }));
    };

    reader.readAsDataURL(file);
  } else {
    setNewContractItem((prevItem) => ({
      ...prevItem,
      image: "",
    }));
  }
  };

  const handleAddContractItem = () => {
    setContract((prevContract) => ({
      ...prevContract,
      contractItems: [...prevContract?.contractItems, { ...newContractItem, id: Date.now() }],
    }));
    setNewContractItem({
      itemName: '',
      price: '',
      quantity: '',
      description: '',
      image: "",
      id: Date.now(),
    });
    setOpenContractItemsDrawer(false)
  };

  const handleRemoveContractItem = (id: string |number) => {
    setContract((prevContract) => ({
      ...prevContract,
      contractItems: prevContract?.contractItems?.filter((item) => item.id !== id),
    }));
  };

  const handleNewAgreementTermChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewAgreementTerm(event.target.value);
  };

  const handleAddAgreementTerm = () => {
    if (newAgreementTerm.trim()) {
      setContract((prevContract) => ({
        ...prevContract,
        agreementTerms: [...prevContract.agreementTerms, newAgreementTerm.trim()],
      }));
      setNewAgreementTerm('');
    }
  };

  const handleRemoveAgreementTerm = (index: number) => {
    setContract((prevContract) => ({
      ...prevContract,
      agreementTerms: prevContract.agreementTerms.filter((_: any, i: number) => i !== index),
    }));
  };



    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


  const handleFormSubmit = async () => {
    console.log('Contract Data:', contract);
    const error = validateContract();
    if(error){
      console.log(contract);
      return setError(error)
    }
  
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      const data = {...contract};
      if(data.buyerId === ""){
        delete data.buyerId;
      }else if(data.sellerId === ""){
        delete data.sellerId
      }
      const res = await axios.post("/api/contract", data);
      console.log(res)
      setSuccess(res.data.message);
    } catch (error: any) {
      setSuccess("");
      setError(error?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };


  const setPreviewScreen = () =>{
    console.log(contract)
    const error = validateContract();
    if(error){
      return setError(error)
    }

    setCurrentScreen("preview")
  }






  if(!["buyer", "seller"].includes(role) || !["techGadgets", "automobiles", "realEstate"].includes(type)){
    return <CreateContractOptions />
  }

  if(currentScreen === "preview"){
    return <PreviewContract contractDetails={contract} setCurrentScreen={setCurrentScreen} handleSubmit={handleFormSubmit} isLoading={loading} />
  }


  return (
    <section className="w-full h-screen bg-neutral-100 p-5 overflow-y-auto">
      <InsideNavbar />
      <div className="flex-1 h-full p-5">

        {error && <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-error rounded-md max-w-80 flex justify-between">
          <span>{error}</span>
          <svg onClick={() => setError("")} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>}

        {success && <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} role="alert" className="alert alert-success rounded-md max-w-80 flex justify-between">
          <span>{success}</span>
          <svg onClick={() => setSuccess("")} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>}


        <header className=" text-xl font-semibold text-neutral-600 mb-5 px-3 lg:px-5 flex items-center w-full">
          <span>Create New Contract</span>
        </header>
        <form className="px-3 lg:px-5 pb-36 max-w-6xl" onSubmit={handleFormSubmit}>
          <div className="border p-3 lg:p-5 mb-5">
            <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
              <span>Contract Details</span>
            </header>

            <label className="form-control w-full mb-2">
              <div className="label">
                <span className="label-text text-neutral-500">Title</span>
              </div>
              <input
                type="text"
                placeholder="Title of Contract"
                className="input input-bordered w-full bg-white"
                name="title"
                value={contract.title}
                onChange={handleInputChange}
              />
            </label>

            <div className="grid grid-cols-2 gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-neutral-500">Inspection Period</span>
                </div>
                <input
                  type="text"
                  placeholder="Number of days"
                  className="input input-bordered w-full bg-white"
                  name="inspectionPeriod"
                  value={contract.inspectionPeriod}
                  onChange={handleInputChange}
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-neutral-500">Service Fee Paid By:</span>
                </div>
                <select
                  className="select select-bordered w-full bg-white"
                  value={contract.escrowFeePaidBy}
                  onChange={handleInputChange}
                  name="escrowFeePaidBy"
                >
                  <option value="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                  <option value="split">Split</option>
                </select>
              </label>
            </div>
          </div>

          <div className="border p-3 lg:p-5 mb-5">
            <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
              <span className="min-w-max">Products</span>
              
              <div className="drawer drawer-end w-auto ml-auto">
                <input id="my-drawer-4" defaultChecked={openContractItemsDrawer} type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm h-9 btn-accent z-0">Add New</label>
                </div>
                <div className="drawer-side z-50">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                  <article className="menu bg-base-200 text-base-content min-h-full w-96 p-4">
                    <header className=" text-lg font-semibold text-primary-300 mb-5 flex items-center w-full">
                      <span>Add New Product</span>
                    </header>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-neutral-500">Item Name</span>
                      </div>
                      <input type="text" value={newContractItem.itemName} onChange={handleNewContractItemChange} name="itemName" className="input input-bordered w-full placeholder:text-sm" />
                    </label>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-neutral-500">Price</span>
                      </div>
                      <input type="text" value={newContractItem.price} onChange={handleNewContractItemChange} name="price" className="input input-bordered w-full placeholder:text-sm" />
                    </label>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-neutral-500">Quantity</span>
                      </div>
                      <input type="text" value={newContractItem.quantity} onChange={handleNewContractItemChange} name="quantity" className="input input-bordered w-full placeholder:text-sm" />
                    </label>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-neutral-500">Description</span>
                      </div>
                      <textarea className="textarea textarea-bordered" value={newContractItem.description} onChange={handleNewContractItemChange} name="description"></textarea>
                    </label>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-neutral-500">Images</span>
                      </div>
                      <input type="file" onChange={handleNewContractItemImageChange} className="file-input file-input-bordered w-full" />
                    </label>

                    <div className="mt-5">
                      <label htmlFor='my-drawer-4'>
                        <button type="button" onClick={handleAddContractItem} className="btn btn-block btn-secondary">Save</button>
                      </label>
                    </div>
                  </article>
                </div>
              </div>

            </header>

            <ul className="space-y-4">
              {contract.contractItems?.map((product, index) => (
                <li
                  key={product.id}
                  className={`${
                    index !== contract?.contractItems?.length - 1 && 'border-b'
                  } py-4 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 max-w-2xl`}
                >
                  {/* Image */}
                  <Image
                    alt="Product Image"
                    width={80}
                    height={80}
                    src={product?.image ? product.image : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'} // Placeholder image
                    className="w-20 h-20 sm:w-24 sm:h-20 rounded-lg object-cover"
                  />

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h2 className="text-gray-800 font-semibold">{product.itemName}</h2>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="font-semibold text-gray-700 flex items-center">
                      <span>{product.quantity} unit(s)</span>
                      <TrashIcon className='ml-3 w-5 h-5 text-red-800 cursor-pointer' onClick={() => handleRemoveContractItem(product?.id)} />
                    </div>
                    <p className="font-semibold text-gray-700">NGN{parseFloat(product.price.toString()).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border p-3 lg:p-5 mb-5">
            <header className=" text-lg font-semibold text-neutral-400 mb-5 flex items-center w-full">
              <span className="min-w-max">Agreement Terms</span>
              
              <div className="drawer drawer-end w-auto ml-auto">
                <input id="agreement-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content z-0">
                  {/* Page content here */}
                  <label htmlFor="agreement-drawer" className="drawer-button btn btn-sm h-9 btn-accent z-0">Add New</label>
                </div>
                <div className="drawer-side z-50">
                  <label htmlFor="agreement-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                  <article className="menu bg-base-200 text-base-content min-h-full w-96 p-4">
                    <header className=" text-lg font-semibold text-primary-300 mb-5 flex items-center w-full">
                      <span>Add Agreement Term</span>
                    </header>

                    <label className="form-control w-full mb-2">
                      <div className="label">
                        <span className="label-text text-neutral-500">Agreement Term</span>
                      </div>
                      <textarea value={newAgreementTerm} onChange={handleNewAgreementTermChange} className="textarea textarea-bordered text-[#272727]" rows={3} placeholder="Enter Agreement Term"></textarea>
                    </label>

                    <div className="mt-5">
                      <button type="button" onClick={handleAddAgreementTerm} className="btn btn-block btn-secondary text-[#272727]">Save</button>
                    </div>
                  </article>
                </div>
              </div>
            </header>

            <ul className="flex flex-col gap-2">
              {contract.agreementTerms.map((term: string, index: number) => (
                <li key={index} className="flex items-center w-full max-w-5xl gap-2">
                  <span className="inline-block border border-neutral-400 px-4 py-3 text-sm rounded-md w-full shadow text-[#272727]">
                    {term}
                  </span>
                  <button type="button" onClick={() => handleRemoveAgreementTerm(index)}>
                    <XMarkIcon className="w-6" color="black" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className=''>
          <label className="form-control w-full mb-2">
              <div className="label">
                <span className="label-text text-base text-neutral-500">Send a link to this contract to the {searchParams.get('role') === "buyer" ? "seller" : "buyer"} via email:</span>
              </div>
              <input
                type="email"
                placeholder={`Email of ${searchParams.get('role') === "buyer" ? "seller" : "buyer"}`}
                className="input input-bordered w-full bg-white max-w-2xl"
                value={contract.toBeInformed.email}
                onChange={(event)=>{
                  setContract( prev =>({
                    ...prev,
                    toBeInformed: {
                      email: event.target.value
                    }
                  }))
                }}
              />
            </label>
          </div>



          <button type="button" onClick={setPreviewScreen} className="btn btn-wide btn-lg text-base btn-primary mt-8">
            Preview Contract
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddNewContract;