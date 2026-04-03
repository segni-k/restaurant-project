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
              
            </div>
        </div>
    </section>
  )
}

export default About
