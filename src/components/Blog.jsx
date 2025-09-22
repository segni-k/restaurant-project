import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { blogData } from '../constants/dummy';

const Blog = () => {
  return (
    <section>
    <section>
      
      <div>
        <div className='flex flex-col items-center mx-auto p-10 mt-10'>
          <p className='font-bold text-2xl text-green-900'>BLOG</p>
          <h2 className='font-bold text-xl text-green-700 mt-5'>Newa Feeds</h2>
        </div>
        <div className='flex md:hidden justify-end p-3 px-12 gap-5 '>
          <span> <FaArrowLeft /> </span>
          <span> <FaArrowRight /> </span>
        </div>
      </div>
      <div className='flex flex-wrap gap-8 p-5 mx-auto justify-center'>



        {blogData.map((blog) => {
          return (
            <div key={blog.name} className='w-[350px] flex flex-col p-4'>
          <img src={blog.img} width={320} height={300} alt="news" />
          <div className='flex items-center justify-between text-gray-500 pt-3 font-semibold'>
            <p>{blog.date}</p>
            <p>{blog.name}</p>
          </div>
          <h4 className='flex items-center justify-between text-black pt-5 font-bold'>{blog.title}</h4>
          <p className='flex items-center justify-between text-gray-500 pt-3 font-semibold'>
            {blog.discription}
          </p>
          <button className='flex mx-auto p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer mt-10'>Read More</button>
        </div>
          )
        })}
        
        
       
      </div>
    </section>
    </section>
  )
}

export default Blog