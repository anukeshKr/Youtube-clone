import React, { useEffect, useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { ImYoutube2 } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ({ setSidebar, setSearch }) => {
  const [Inputvalue, setValue] = useState("");
  useEffect(() => {
    setSearch(Inputvalue);
  }, [Inputvalue])
  return (
    <nav className='sticky top-0 z-50 bg-white flex shadow-md items-center justify-between '>
      <div className='flex ml-1 items-center gap-6'>
        <BiMenuAltLeft onClick={() => setSidebar(prev => !prev)} className='text-4xl text-gray-700 block ' />
        <Link to='/'><ImYoutube2 className='text-6xl text-red-600' /></Link>
      </div>
      <div className="flex items-center w-full max-w-xl ml-7">
        <form className="flex items-center w-full">
          <input
            value={Inputvalue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[120px] sm:max-w-none sm:px-4 sm:py-2"
          />
          <button
            type="submit"
            className="px-4 py-1 text-sm bg-gray-100 border border-l-0 border-gray-300 hover:bg-gray-200 rounded-r-full sm:py-2"
          >
            <IoIosSearch className="text-xl text-gray-700" />
          </button>
        </form>
      </div>


      <div className='flex ml-1 items-center text-3xl mr-3 gap-5'>
        <MdVideoCall className="text-red-500 text-4xl block [@media(max-width:699px)]:hidden" />
        <MdApps className='text-gray-500 block [@media(max-width:699px)]:hidden' />
        <IoNotifications className='text-gray-500 block [@media(max-width:699px)]:hidden' />
        <CgProfile className='text-gray-900 ' />
      </div>
    </nav>
  )
}

export default Navbar
