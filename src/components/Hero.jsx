import React from 'react'
import BgImage from '../assets/Flux_Dev_Create_a_highresolution_8K_background_image_for_a_caf_3.jpeg'
import Header from './Header';


const bgImage = {
    backgroundImage: ` linear-gradient(rgba(15, 26, 44, 0.5),rgba(15, 26, 44, .5)), url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    BackgroundRepeat: "no-repeat",
    width: "100%",
    objectFit: "cover",
};

const Hero = () => {
  return (
    <div style={bgImage} className='w-full'>
        <Header />
        <section className='flex p-10'>
            <div className='flex md:p-10'>
                <div className=' md:w-[50%] text-white items-center justify-between'>
                    <h1 className='py-10 font-bold text-3xl md:text-6xl text-white'>Welcome To Royal Cafe & Restaurant</h1>
                    <p className=' text-xl font-normal text-white font-poppins'>The only place where you feel at home when you get served. </p>
                    <button className=' border-2 bg-green-500 hover:bg-yellow-500 text-white text-lg rounded-3xl h-auto w-auto p-2 px-5 my-5'>Book now</button>
                </div>
                <div className='flex-1 text-white hidden'>
                      
                </div>
            </div>
        </section>

    </div>
  )
}

export default Hero;