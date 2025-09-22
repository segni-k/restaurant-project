import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='p-1 md:p-10 w-full bg-green-950'>
        <h1 className='p-10 text-yellow-500 font-bold text-xl cursor-pointer'>ROYAL CAFE & RESTAURANT<span className='text-red-500'>.</span></h1>
        <div className="flex flex-wrap p-10 gap-10 w-full justify-between text-white font-normal">
            
        <div className="text-white">
                <h1>Contact info</h1>
                <ul className=' py-6 space-y-2 py-6 *:py-1 *:gap-3 *:p-4 '>
                    <li><span className='font-bold'>Address</span><br/>Addis Ababa, Ethiopia</li>
                    <li><span className='font-bold'>Call Us</span><br/>+251938699008</li>
                    <li><span className='font-bold'>Telegram</span><br/>@royal_burger</li>
                    <li><span className='font-bold'>Email us</span><br/>www.royalburger@gmail.com</li>
                    <li><span className='font-bold'>Support Us</span><br/>supportroyalburger@gmail.com</li>
                </ul>
            </div>
            <div className="">
                <h1>Quick links</h1>
                <ul className=' py-6 *:flex *:py-1 *:gap-3'>
                    <li className='py-1'><MdSubdirectoryArrowRight />Blog</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />Contact</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />Events</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />Home</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />Partiners</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />Privacy policy</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />Services</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />Terms and Conditions</li>
                    <li className='py-1'><MdSubdirectoryArrowRight />About</li>
                </ul>
            </div>
            <div className="">
                <h1>Category</h1>
                <ul className=' py-6 *:flex *:py-1 *:gap-3'>
                    <li><MdSubdirectoryArrowRight />Burger</li>
                    <li><MdSubdirectoryArrowRight />PIzza</li>
                    <li><MdSubdirectoryArrowRight />Sandwich</li>
                    <li><MdSubdirectoryArrowRight />Breakfast</li>
                    <li><MdSubdirectoryArrowRight />lounch</li>
                    <li><MdSubdirectoryArrowRight />Dinner</li>
                    <li><MdSubdirectoryArrowRight />soft drink</li>
                    <li><MdSubdirectoryArrowRight />Juice</li>
                </ul>
            </div>
            <div>
                <div className=' w-full rounded-lg'>
                    <div className='flex items-center justify-center gap-5'>
                    <input type="email" placeholder='type your email' className='rounded-lg border-none outline-none p-2 text-gray-500 text-sm my-5'/>
                    <button className='bg-yellow-500 text-white rounded-lg p-1 h-auto w-auto'>Subscribe here</button>
                    </div>

                </div>
            </div>
        </div>
        <div className='flex justify-center items-center '>
            <div className="flex justify-center items-center bg-white rounded-xl w-[50%]">        
                <input type="text" placeholder='search here' className='flex rounded-lg border-none outline-none p-2 text-gray-500 text-sm w-[90%]'/>
                <FaSearch className='cursor-pointer'/>
            </div>
        </div>
        <div className='text-white flex items-center justify-center mt-10 bg-green-800 p-6 '>
            copyright &copy; 2025 Royal Cafe & Restaurants.All Rights Reserved
        </div>

    </footer>
  )
}

export default Footer