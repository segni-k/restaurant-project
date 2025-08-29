import React from 'react'
import photo from "../assets/Leonardo_Kino_XL_generate_coffee_house_background_for_landing_3.jpg"

const About = () => {
  return (
    <section >
        <div className='items-center p-10'>
            <h1 className='items-center text-center text-2xl font-bold text-green-900 py-20'>ABOUT US</h1>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-20">
                <div className="flex-1 flex items-center justify-center">
                    <img src={photo} width={400} height={400} className=" rounded-lg " alt="about" />
                </div>
                <div className="flex-1 pr-20">
                    <img src="" alt="" />
                    <p className='text-green-900 font-normal font-poppins'>Our Story
                        At the heart of the Royal Burger, Café & Restaurant is a dream — a dream to craft a haven where nature's beauty meets the finest culinary delights. Our journey began with a simple idea: to create a space where people could escape the daily grind and immerse themselves in a serene garden setting while savoring dishes that are as delightful as the surroundings.<br/>

                        From humble beginnings, our founders sought inspiration from gardens worldwide, blending their love for natural landscapes with a passion for gourmet cuisine. Every corner of our café reflects this dedication, with blooming flowers, lush greenery, and tranquil pathways creating an enchanting atmosphere.<br/>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About