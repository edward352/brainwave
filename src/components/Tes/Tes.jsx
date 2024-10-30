import React from 'react'
import Tesdata from '../Tesdata'
const Tes = () => {
  return (
    <section className='mt-8 mb-12 grid place-items-center'>
        <div>
        <h1 className="lg:text-4xl text-3xl mb-6 text-center font-mono font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
        Our Courses
      </h1>
        </div>
        <div className='grid lg:grid-cols-2 gap-4'>
            {Tesdata.map((item)=>
            (
                <div className='flex flex-col gap-3 px-10 shadow-xl py-4 '>
                    <div className='grid place-items-center'>
                        <img className='rounded-md float-left w-[600px] h-[400px] object-cover' src={item.src} alt="" />
                    </div>
                    <div className='flex justify-between gap-2 mt-2 lg:mt-4'>
                        <div className='flex gap-2'>
                        <p className='p-2 shadow rounded-md bg-slate-200'>{item.time}</p>
                        <p className='p-2 shadow rounded-md bg-slate-200'>{item.level}</p></div>
                        <div><p className='text-end p-2 shadow rounded-md bg-slate-200'>By {item.instructor}</p></div>
                    </div>
                    <div>
                        <h1 className=' mb-4 text-xl lg:text-2xl'>{item.title}</h1>
                        <p>{item.desc}</p>
                        <div className='grid bg-slate-200 mt-4'>
                            <button className='border-solid shadow border py-3 text-xl'>Get it Now</button>
                        </div>
                    </div>
                </div>
        
        ))}
            <div >
            </div>
        </div>
    </section>
  )
}

export default Tes

