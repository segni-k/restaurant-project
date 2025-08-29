import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className='w-full h-25'>
        <div className='flex items-center w-full justify-between items-center py-3 md:py-4 px-11 md:px-16 '>
            <div className='flex items-center '>
                <h1 className='text-white font-bold font-poppins text-2xl md:text-3xl cursor-pointer'>ROYAL BURGER<span className='text-amber-500'>.</span></h1>
            </div>
            <ul className='hidden md:flex items-center font-semibold *:text-white hover:*:font-bold *:cursor-pointer *:ml-4'>
                <li>Home</li>
                <li>Service</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
            <p className='flex md:hidden bg-green-500 p-2 text-white text-3xl hover:font-bold font-bold cursor-pointer'><RxHamburgerMenu />
            </p>
        </div>
    </header>
  )
}

export default Header