import React from 'react'
import Depthcard from './Depthcard'
import Coursesdata from '../../Coursesdata.js'
const CoursesCard = () => {
  return (
    <>
    {Coursesdata.map(
    
      (item)=>(
       
    <section key={item.id} className='mt-12 mb-12 gap-8 max-w-screen-xl mx-auto grid '>
    <div className='flex flex-col md:flex-row justify-between items-start gap-3 '>
      <h1 className='lg:text-4xl text-3xl font-semibold'>{item.title}</h1>
      <p className='md:w-1/2 text-slate-600'>
        {item.desc}
      </p>
    </div>
    <div className=''>
        <img className='rounded-md   w-full' src="src\assets\img\pexels-cottonbro-5483077.jpg" alt="" />
    </div>
    <div className=''>
        <Depthcard/>
    </div>
  </section>
  ))}
  </>
  )
}

export default CoursesCard
