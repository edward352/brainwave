import React from 'react'
import Depthcard from './Depthcard'

const CoursesCard = () => {
  return (
    <section className='mt-12 mb-12 gap-8 max-w-screen-xl mx-auto grid '>
    <div className='flex flex-col md:flex-row justify-between items-start gap-3 '>
      <h1 className='lg:text-4xl text-3xl font-semibold'>Web Design Fundamentals</h1>
      <p className='md:w-1/2 text-slate-600'>
        Welcome to our Web Design Fundamentals course! This course is
        crafted to introduce you to the essentials of creating visually
        appealing and user-friendly websites. You’ll dive into the core
        concepts of HTML, CSS, and JavaScript, learning how to structure,
        style, and add interactivity to web pages.Join us and start your journey into the world of web
        design today!
      </p>
    </div>
    <div className=''>
        <img className='rounded-md   w-full' src="src\assets\img\pexels-cottonbro-5483077.jpg" alt="" />
    </div>
    <div className=''>
        <Depthcard/>
    </div>
  </section>
  )
}

export default CoursesCard
