import React from 'react'
import {dummy} from '../constants/dummy'


const Product = () => {
  return (
    <section className='mt-20'>

        <div>
            <h1 className='items-center text-center text-2xl font-bold text-green-900 py-20'>PRODUCT</h1>
            <div className="flex p-10 flex-wrap items-center justify-around gap-8">
                {dummy.map((data, i) => 
                    <div className='border flex flex-col items-center justify-center p-5'>
                        <img src={data.img} width={250} className='rounded-lg' alt={data.alt} />
                        <p className='pt-5 font-bold text-grey-600'>{data.title}</p>
                        <p className=''>{data.discription}</p>
                        <p className='text-pink-600 font-bold'>{data.price}<span className='text-gray-700'> birr</span></p>
                    </div>
                
                    
                )}
            </div>
        </div>


        <button className='flex mx-auto bg-gray-200 text-lg text-blue-500 font-bold p-2 hover:bg-gray-300 cursor-pointer'>See More Product</button>
        <hr className='w-full text-gray mt-10'/>
    </section>
  )
}

export default Product