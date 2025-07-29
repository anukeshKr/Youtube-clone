import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { MdTv } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { MdVideoCameraFront } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";


const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`shadow-md fixed top-16 bottom-0 overflow-y-auto transition-all duration-300 ${sidebar ?'w-[15%]':'w-[5%]'}`}>
        <div>
            {[
                { icon: <IoMdHome className='text-gray-700 text-2xl' />, text: "Home" ,id:0},
                { icon: <IoGameController className='text-gray-700 text-2xl' />, text: "Gaming",id:20 },
                { icon: <FaCarSide className='text-gray-700 text-2xl' />, text: "Automobile" ,id:2},
                { icon: <MdTv className='text-gray-700 text-2xl' />, text: "Entertainment",id:24 },
                { icon: <GrTechnology className='text-gray-700 text-2xl' />, text: "Technology" ,id:28},
                { icon: <MdOutlineLibraryMusic className='text-gray-700 text-2xl' />, text: "Music" ,id:10},
                { icon: <MdVideoCameraFront className='text-gray-700 text-2xl' />, text: "Blogs",id:22 },
                { icon: <ImNewspaper className='text-gray-700 text-2xl' />, text: "News",id:25 }
                ].map((item, index) => (
                <div key={index} className={`px-2 flex items-center text-xl mb-6 gap-3 cursor-pointer 
                        ${category === item.id ? 'border-l-4 border-red-500 bg-red-100' : ''}`}onClick={()=>{setCategory(item.id)}}>
                    {item.icon}
                    {sidebar && <p>{item.text}</p>}
                </div>
            ))}
            <hr className='h-1 text-black w-[85%] ml-3'/>
        </div>
        <div>
            <h3 className={`font-bold text-xl text-gray-600 ml-2 ${sidebar ?'':'hidden'}`}>SUBSCRIBE</h3>
            <div className='flex  mb-6 cursor-pointer mt-4 gap-3 ml-2'>
                <img 
                className="w-7 h-7 rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s" 
                alt="" />
                <p className={`${sidebar ? '' : 'hidden'}`}>Pewdipie</p>
            </div>
            <div className='flex mb-6 cursor-pointer mt-4 gap-3 ml-2'>
                <img 
                className="w-7 h-7 rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s" alt="" />
                <p className={`${sidebar ? '' : 'hidden'}`}>Mr.Beast</p>
            </div>
            <div className='flex mb-6 cursor-pointer mt-4 gap-3 ml-2'>
                <img 
                className="w-7 h-7 rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s" alt="" />
                <p className={`${sidebar ? '' : 'hidden'}`}>Joe Rogan</p>
            </div>
            <div className='flex mb-6 cursor-pointer mt-4 gap-3 ml-2'>
                <img 
                className="w-7 h-7 rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s" alt="" />
                <p className={`${sidebar ? '' : 'hidden'}`}>John Doe</p>
            </div>
            <div className='flex mb-6 cursor-pointer mt-4 gap-3 ml-2'>
                <img 
                className="w-7 h-7 rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s" alt="" />
                <p className={`${sidebar ? '' : 'hidden'}`}>T-Series</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar