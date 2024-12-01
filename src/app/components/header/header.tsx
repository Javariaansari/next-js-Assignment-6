import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <div className='w-[1280px] h-[54px] bg-secondary text-primary flex '>
      </div>
      <div className='flex w-[1280px] h-[72px] bg-secondary gap-20 border-2 border-primary pt-3 bg-slate-100'>
      <div className='pl-5 xs:w-[100px]'>
      <Image src="./images/logo.svg" alt="Logo" width={130.6} height={41} />
      </div>
      <div className='flex w-[910px] h-[44px]  text-primary gap-5 '>
        
      <ul className='flex gap-5 pt-3 '>
            <li>Home</li>
            <li >Courses</li>
            <li>Services</li>
            <li>Achivement</li>
            <li>About Us</li>
            <li>Testimonial</li>
            </ul>
            <button className='w-[80px] h-[40px] bg-secondary border border-primary rounded'>Login</button>
            <button className='w-[80px] h-[40px] bg-primary text-white border border-primary rounded'>Signup</button>
        </div>
      </div>
    
    </div>
  ) 
}
export default Header
