import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdEye,IoMdEyeOff} from "react-icons/io";
import { TbArrowUpRight } from "react-icons/tb";

const Signup = () => {
    const [pass,setPass]=useState(false)
  return (

             <section className=' mt-12 mb-12 max-w-screen-xl  grid place-items-center   mx-auto  '>
        <div className='grid gap-y-8 shadow-2xl px-12 py-8 '>
            <div>
                <h1 className='lg:text-center text-5xl font-semibold mb-4 font-mono'>Sign Up</h1>
                <p className='text-gray-600 font-medium '>Create an account to unlock exlusive features.</p>
            </div>
            <div>
                <label className='mb-2 block font-medium text-gray-600' htmlFor="email-id">Full Name</label>
                <input className='w-full px-4 py-4 bg-slate-100 rounded-md' placeholder='Enter your Name' type="email" name="email-id" id="email-id"/>
            </div>
            <div>
                <label className='mb-2 block font-medium text-gray-600' htmlFor="email-id">Email</label>
                <input className='w-full px-4 py-4 bg-slate-100 rounded-md' placeholder='Enter your Email' type="email" name="email-id" id="email-id"/>
            </div>
            <div className='relative'>
            <label className='mb-2 block font-medium text-gray-600' htmlFor="pass-id">Password</label>
            <input className='w-full mb-1 px-4 py-4 bg-slate-100 rounded-md'  placeholder='Enter your Password' type={pass ? "text":"password"} name="pass-id" id="email-id"/> 
            <button onClick={()=>(setPass(!pass))} className='absolute right-6 bottom-6 text-xl '>{pass ? <IoMdEyeOff/> :<IoMdEye />}</button>
            </div>
            <div className='text-gray-700 flex flex-col gap-2'>
            <div className='text-gray-700 '>
                <input className='accent-slate-200 mr-2 scale-125 cursor-pointer' type="checkbox" name="rem-id" id="rem-id" />
                <label   htmlFor="ins-id ">Student Account</label>
            </div>
                <div>
                <input className='accent-slate-200 mr-2 scale-125 cursor-pointer' type="checkbox" name="rem-id" id="rem-id" />
                <label  htmlFor="rem-id ">I agree with <a className="underline" href="">Terms of Use</a> and <a className="underline" href="">Privacy Policy</a></label>
            </div>
            </div>
            <div className='flex flex-col gap-4'>
                <button className='bg-orange-400 py-3 text-white rounded-md font-medium'>Login</button>
               <button className='bg-slate-200 py-2 rounded-md font-medium'><img className='inline-block w-8 mr-2 ' src="src\assets\img\googlelogin.svg" alt="" />Sign Up with Google</button>
               <div className='text-center '>
                <p className=''>Already have an account?<Link to="/login" className='ml-1 underline font-bold'>Login <TbArrowUpRight className='inline-block mb-1 text-2xl' />
                </Link></p>
               </div>
            </div>
        </div>
    </section>
       
  )
}

export default Signup


