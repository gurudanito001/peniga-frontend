import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#025253] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row justify-between pb-6 border-b border-gray-600">
          {/* Left Section: Logo and Tagline */}
          <div>
            <h2 className="text-2xl font-bold">Peniga</h2>
            <p className="text-sm mt-2 text-[#b9b9b3]">
              Buy and sell with confidence.
            </p>
          </div>

          {/* Right Section: Contact & Legal */}
          <div className="grid grid-cols-1 md:grid-cols-2  md:flex md:space-x-12 mt-6 lg:mt-0 justify-between">
            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-semibold text-[#b9b9b3] mt-5 md:mt-0 mb-2">Contact</h3>
              <p className="text-xs underline mb-3">Contactus@peniga.com</p>
              <p className="text-xs mt-1 underline">+1 234 567 890</p>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-sm font-semibold text-[#b9b9b3] mt-5 md:mt-0 mb-2">Legal</h3>
                <p className="underline text-xs mb-3">Terms & Conditions</p>
                <p className="underline text-xs mt-1">Privacy Policy</p>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center text-xs text-gray-300 pt-4">
          {/* Left Side: Copyright */}
          <p className="mt-4 lg:mt-0">
            Copyright &copy; 2024 Peniga Escrow Services. All rights reserved.
          </p>

          {/* Right Side: Navigation & Button (Desktop) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
            {/* Navigation */}
            <div className="hidden sm:flex space-x-6 items-center">
              <Link href="/how-it-works">How It Works</Link>
              <span className="h-4 w-px bg-gray-500"></span>
              <Link href="/services">Services</Link>
              <span className="h-4 w-px bg-gray-500"></span>
              <Link href="/faq">FAQ</Link>
            </div>

            {/* Get Started Button */}
            <button className="bg-[#C55938] text-white font-medium border-[#C55938] mt-4 w-[106px] h-[44px] rounded-lg md:mt-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;