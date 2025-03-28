import Image from "next/image";


const InsideNavbar = () => {

  return (
    <div className="navbar text-base-content lg:text-neutral w-full ">
      <div className="flex-none lg:hidden">
       
      </div>
      <div className="mx-2 flex-1 px-2"></div>
      <div className="flex-none lg:block p-0">
        <ul className="menu menu-horizontal p-0">
          {/* Navbar menu content here */}
          <li>
            <a>
              <button className="btn btn-ghost btn-xs btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="#272727"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item text-black"></span>
                </div>
              </button>

            </a>
          </li>
          <li>
            <div className="dropdown dropdown-end p-0">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    alt="Tailwind CSS Navbar component"
                    src="/images/placeholder-profile-image.webp"
                    width={50} height={50} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-neutral-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#272727]">
                <li><a> Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InsideNavbar