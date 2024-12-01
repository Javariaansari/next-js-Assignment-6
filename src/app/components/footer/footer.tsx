import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div>
      
      <div className='w-[1280px] h-[684px] bg-secondary text-primary '>
            
            <div className=' flex gap-2'>
                <div>
                    <h1 className='text-sm font-bold ml-16'>Subscribe to our newsletter</h1>
                    <p className='text-sm font-normal ml-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='ml-64'> 
                    <input className='border-2 border-primary font-normal text-sm rounded p-3' type="text" name="" placeholder='Enter your email' id="" />
                 
                    
                </div>
                <div>
                    <button className='border-2 border-primary rounded p-2'>Subscribe</button>
                </div>
              
            </div>
            <div className='flex text-sm items-center justify-center ml-96 mt-5'>  
                 <p >By subscribing you agree to with our Privacy Policy</p></div>
            
      

        <div className='flex gap-32 mt-9'>
            <div className='ml-10' >
                <Image src="/images/logo.svg" alt="logo" width={130.6} height={40}></Image>
            </div>
            <div className='text-sm '>
                <h1 className='font-bold mt-4'>Courser</h1>
                <p className='font-normal mt-4'>Business</p>
                <p className='font-normal mt-4'>Development</p>
                <p className='font-normal mt-4'>Technology</p>
                <p className='font-normal mt-4'>Design</p>
                <p className='font-normal mt-4'>Programming</p>
            </div>

            <div className='text-sm'>
                <h1 className='font-bold mt-4'>Resources</h1>
                <p className='font-normal mt-4'>Career</p>
                <p className='font-normal mt-4'>Resume</p>
                <p className='font-normal mt-4'>Learning</p>
                <p className='font-normal mt-4'>Interview Preparation</p>
                <p className='font-normal mt-4'>Jobs</p>
            </div>

            <div className='text-sm'>
                <h1 className='font-bold mt-4'>About Us</h1>
                <p className='font-normal mt-4'>Contact</p>
                <p className='font-normal mt-4'>Help/Support</p>
                <p className='font-normal mt-4'>FAQ</p>
                <p className='font-normal mt-4'>Terms and Conditions</p>
                <p className='font-normal mt-4'>Partners</p>
                </div>  
                </div>
                <div>
            <div className='mt-5 flex items-center justify-center ml-4'>
                <Image className=' ' src="/images/divider.svg" alt="" width={1120} height={1} ></Image>
                </div>
            <div className='flex gap-10 text-sm mt-4 ml-24'>
            
    <div className=''>2023 Ddsgnr. All right reserved.</div>
    <div>Privacy Policy</div>
    <div>Terms of Service</div>
    <div>Cookies Settings</div>

    <div className='flex ml-80 gap-2'>
      <Image src="/images/Vector.svg" alt="Facebook Icon" width={10} height={18} />
      <Image src="/images/insta.svg" alt="Facebook Icon" width={18} height={18} />
      <Image src="/images/twitter.svg" alt="Facebook Icon" width={18} height={18} />
      <Image src="/images/linkedin.svg" alt="Facebook Icon" width={18} height={18} />
      </div>
    
     
     </div>
      </div>
      </div>
      </div>
  )
}

export default footer
