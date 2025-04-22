import Image from "next/image";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white" id="why-choose-us">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
        <button className="px-4 py-1 md:px-6 md:py-2 border-2 border-[#C55938] text-[#C55938] rounded-full font-medium hover:bg-[#C55938] hover:text-white transition">
          Why Choose Us
        </button>
        <h1 className="text-xl md:text-3xl font-semibold text-[#272727] mt-4">
        Building Trust, Ensuring Accountability
        </h1>
        <p className="text-[#272727] text-sm max-w-md  mt-2">
        At Peniga, we&apos;ve created a secure and reliable bridge between buyers and sellers, ensuring both parties stay accountable throughout every transaction.
        </p>

        <Link href="/sign-up" className="btn px-6 py-2 rounded-md bg-[#C55938] text-white font-medium hover:bg-[#B04A2D] transition mt-6">
          Get Started
        </Link>
      </div>


        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {/* Card 1 */}
          <div
            className="bg-[#F4EBD7] p-6 rounded-lg shadow-lg transform lg:rotate-[-6deg]"
          >
            <Image src="/images/accountability-image.svg" alt="Accountability" width={200} height={200} />
            <h3 className="text-[#272727] font-semibold mt-4">Accountability</h3>
            <p className="text-gray-600 text-sm mt-2">
            With Peniga, both buyers and sellers are held to their commitments, ensuring every transaction is completed fairly and transparently.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#EECDC3] p-6 rounded-lg shadow-lg transform lg:rotate-[4deg]"
          >
            <Image src="/images/contracts-image.svg" alt="Binding Contracts" width={200} height={200} />
            <h3 className="text-[#272727] font-semibold mt-4">Binding Contracts</h3>
            <p className="text-gray-600 text-sm mt-2">
            Our legally binding agreements reinforce accountability, providing a clear structure for every deal.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#E6FEFE] p-6 rounded-lg shadow-lg transform lg:rotate-[-3deg]"
          >
            <Image src="/images/fast-payment-image.svg" alt="Fast Payments" width={200} height={200} />
            <h3 className="text-[#272727] font-semibold mt-4">Fast Payments</h3>
            <p className="text-gray-600 text-sm mt-2">
            Once the buyer confirms satisfaction, payments are released instantly, ensuring a smooth and efficient process.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#FAF5EA] p-6 rounded-lg shadow-lg transform lg:rotate-[5deg]"
          >
            <Image src="/images/support-image.svg" alt="24/7 Support" width={200} height={200} />
            <h3 className="text-[#272727] font-semibold mt-4">24/7 Support</h3>
            <p className="text-gray-600 text-sm mt-2">
            Our dedicated support team is available around the clock to handle disputes, resolving issues fairly based on contract terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;