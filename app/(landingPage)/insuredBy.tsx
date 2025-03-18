import Image from "next/image";

const InsuredBy = () =>{
    return(
        <div className="w-full bg-[#0B4F3D] py-2 mt-20 mb-10 ">
            <div className="flex flex-row gap-2 items-center md:ml-20 ml-2">
      {/* Insured By - Stays in the Green Background */}
      <p className="text-white text-lg font-semibold mb-2">Insured By</p>

      {/* White Box - Centered Inside Green Background */}
      <div>
        <Image src="/images/image 4.svg"  alt="Insured" width={120} height={120}/>
        </div>
      </div>
    </div>
   
    )
}

export default InsuredBy;