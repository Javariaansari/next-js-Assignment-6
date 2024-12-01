import React from 'react'
import Image from "next/image"

const team = () => {
  return (
    <div>
      <div className='w-[1280px] h-[895px] bg-slate-100 text-primary'>
        <div>
       <h1 className='flex items-center justify-center font-bold text-5xl pt-16'>Our Team</h1>
       <p className='flex items-center justify-center font-normal text-sm mt-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
       </div>
       <div className='flex items-center justify-center gap-56'>
        <div >
          <img className='ml-4' src="/images/team1.svg" alt="team1" width={80} height={80}/>
          <h1 className='text-lg font-bold mt-2'>James Nduku</h1>
          <p className=' text-sm font-normal mt-2'>Marketing Coordinator</p>

          <div>
          <div className='flex gap-2 items-center justify-center mt-3'>
            <Image src="/images/linkedin.svg" alt='linkedin' width={18} height={18}></Image>
            <Image src="/images/twitter.svg" alt='twitter' width={18} height={18}></Image>
            <Image src="/images/website.svg" alt='website' width={18} height={18}></Image>
          </div>
        </div>
       
        
        </div>
        <div>
        <img className='ml-6' src="/images/team2.svg" alt="team2" width={80} height={80}/>

        <h1 className='text-lg font-bold mt-2'>Joseph Munyambu</h1>
          <p className=' text-sm font-normal mt-2'>Nursing Assistant</p>

          <div>
          <div className='flex gap-2 items-center justify-center mt-3'>
            <Image src="/images/linkedin.svg" alt='linkedin' width={18} height={18}></Image>
            <Image src="/images/twitter.svg" alt='twitter' width={18} height={18}></Image>
            <Image src="/images/website.svg" alt='website' width={18} height={18}></Image>
          </div>
        </div>
       
          
        </div>
        <div>
        <img className='ml-4' src="/images/team3.svg" alt="team3" width={80} height={80}/>

        <h1 className='text-lg font-bold mt-4'>Joseph Ngumbau</h1>
          <p className=' text-sm font-normal mt-2'>Medical Assistant</p>
          <div>
          <div className='flex gap-2 items-center justify-center mt-3'>
            <Image src="/images/linkedin.svg" alt='linkedin' width={18} height={18}></Image>
            <Image src="/images/twitter.svg" alt='twitter' width={18} height={18}></Image>
            <Image src="/images/website.svg" alt='website' width={18} height={18}></Image>
          </div>
        </div>

        </div>

       </div>

       

       <div className='flex items-center justify-center gap-60 mr-16 mt-16'>
        <div>
        <img className='ml-6' src="/images/team4.svg" alt="team4" width={80} height={80}/>

        <h1 className='text-lg font-bold '>Erick Kipkemboi</h1>
          <p className=' text-sm font-normal '>Web Designer</p>
          <div>
          <div className='flex gap-2 items-center justify-center mt-3'>
            <Image src="/images/linkedin.svg" alt='linkedin' width={18} height={18}></Image>
            <Image src="/images/twitter.svg" alt='twitter' width={18} height={18}></Image>
            <Image src="/images/website.svg" alt='website' width={18} height={18}></Image>
          </div>
        </div>
       
        </div>

        <div>
        <img className='ml-4' src="/images/team5.svg" alt="team5" width={80} height={80}/>

        <h1 className='text-lg font-bold'>Stephen Kerubo</h1>
          <p className=' text-sm font-normal'>President of Sales</p>
          <div>
          <div className='flex gap-2 items-center justify-center mt-3'>
            <Image src="/images/linkedin.svg" alt='linkedin' width={18} height={18}></Image>
            <Image src="/images/twitter.svg" alt='twitter' width={18} height={18}></Image>
            <Image src="/images/website.svg" alt='website' width={18} height={18}></Image>
          </div>
        </div>
        </div>

        <div>
        <img className='ml-4' src="/images/team6.svg" alt="team6" width={80} height={80}/>

        <h1 className='text-lg font-bold'>John Leboo</h1>
          <p className=' text-sm font-normal'>Dog Trainer</p>

          <div>
          <div className='flex gap-2 items-center justify-center mt-3'>
            <Image src="/images/linkedin.svg" alt='linkedin' width={18} height={18}></Image>
            <Image src="/images/twitter.svg" alt='twitter' width={18} height={18}></Image>
            <Image src="/images/website.svg" alt='website' width={18} height={18}></Image>
          </div>
        </div>
        </div>
       </div>

      </div>
    </div>
  )
}

export default team
