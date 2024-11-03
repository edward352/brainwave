import React from 'react'
import { CiClock2 } from "react-icons/ci";
import Depthcarddata from 'D:/projectclg/brainwave/src/components/Depthcarddata.js'
const Depthcard = () => {
  return (
    <section className='border-b gap-2'>
        <div className='grid lg:grid-cols-2 lg:justify-between gap-x-6 gap-y-4 shadow-lg p-6'>
        {Depthcarddata.map((item)=>
            (
                <div className='border p-2'>
        <div className=''>
            <p className='text-5xl font-mono font-bold text-end'>{item.id}</p>
            <h1 className='text-xl font-semibold mb-2'>Introduction to Web Design</h1>
        </div>
        <div className='border p-3  hover:border-orange-600 transition-all duration-300'>
            <div>
                <p>Understanding Web Design Principles</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-gray-600'>Lesson 01</p>
                <p className='flex items-center gap-1 px-4 py-2 bg-slate-200'><CiClock2 />45 Minutes</p>
            </div>
        </div>
        <div className='border p-3 hover:border-orange-600 transition-all duration-300'>
            <div>
                <p>Web Design</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-gray-600'>Lesson 02</p>
                <p className='flex items-center gap-1 px-4 py-2 bg-slate-200'><CiClock2 />30 Minutes</p>
            </div>
        </div>
        <div className='border p-3  hover:border-orange-600 transition-all duration-300'>
            <div>
                <p>Basics of Web Design</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-gray-600'>Lesson 03</p>
                <p className='flex items-center gap-1 px-4 py-2 bg-slate-200'><CiClock2 />1 Hour</p>
            </div>
        </div>
        </div>
        ))}
        </div>
    </section>
  )
}

export default Depthcard
