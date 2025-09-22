import React from 'react'
import {dummy} from '../constants/dummy'


const Gallery = () => {
    
  return (
    <section className='mt-10'>
        <div>
            <h1 className='items-center text-center text-2xl font-bold text-green-900 py-20'>OUR GALLERY</h1>
            <div className="flex p-10 flex-wrap items-center justify-around gap-8">
                    {dummy.map((data, i) => 
                        
                        <div key={i} className='border flex flex-col items-center justify-center p-5'>
                            <img src={data.img} width={250} className='rounded-lg' alt={data.alt} />
                        </div>
                    )}
            </div>
        </div>
</section>
)
}
 
export default Gallery