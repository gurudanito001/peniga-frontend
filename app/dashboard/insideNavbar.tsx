import { FaBell, FaEnvelope } from 'react-icons/fa';


const InsideNavbar = () => {

  return (
    <nav className="navbar text-base-content w-full">
      
      <div className="flex-none lg:block p-0 w-full">
        <ul className="menu menu-horizontal p-0 flex">
          {/* Navbar menu content here */}
          {/* <li className='mr-auto'>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
              <span className='font-semibold'>Welcome back, Daniel!</span>
            </div>
          </li> */}
          <li className='flex justify-center ml-auto'>
            <a className='hover:bg-transparent'>
              Help?
            </a>
          </li>
          <li className="divider divider-horizontal divider-start divider-neutral bg-transparent m-0 my-2"></li>
          <li className='flex justify-center'>
            <a className='hover:bg-transparent'>
              <div className="indicator">
                <FaBell fontSize={16} />
                <span className="badge badge-xs badge-primary indicator-item text-black"></span>
              </div>
            </a>
          </li>
          <li className="divider divider-horizontal divider-start divider-neutral bg-transparent m-0 my-2"></li>
          <li className='flex justify-center'>
            <a className='hover:bg-transparent'>
                <div className="indicator">
                  <FaEnvelope fontSize={16} />
                </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default InsideNavbar