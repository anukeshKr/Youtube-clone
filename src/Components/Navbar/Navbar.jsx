import React, { useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { ImYoutube2 } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ({setSidebar}) => {
  const[Inputvalue,setValue] = useState("");
  
  return (
    <nav className='sticky top-0 z-50 bg-white flex shadow-md items-center justify-between '>
        <div className='flex ml-1 items-center gap-6'>
            <BiMenuAltLeft onClick={()=>setSidebar(prev=>prev===false?true:false)} className='text-4xl text-gray-700 block [@media(max-width:699px)]:hidden'/>
            <Link to='/'><ImYoutube2 className='text-6xl text-red-600'/></Link>
        </div>
        <div className="flex items-center w-full max-w-xl">
            <form className='w-full'>
              <input
              value={Inputvalue}
              onChange={(e)=>{
                setValue(e.target.value)
              }}
              type="text"
              placeholder="Search"
              className=" w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm [@media(max-width:699px)]:w-[120px] [@media(max-width:699px)]:px-2 [@media(max-width:699px)]:py-1"
            />
            </form>
            <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 border-l-0 px-4 py-2 rounded-r-full">
              <IoIosSearch className="text-xl text-gray-700" />
            </button>
        </div>

        <div className='flex ml-1 items-center text-3xl mr-3 gap-5'>
            <MdVideoCall className="text-red-500 text-4xl block [@media(max-width:699px)]:hidden"/>
            <MdApps className='text-gray-500 block [@media(max-width:699px)]:hidden'/>
            <IoNotifications className='text-gray-500 block [@media(max-width:699px)]:hidden'/>
            <CgProfile className='text-gray-900 '/>
        </div>
    </nav>
  )
}

export default Navbar
