import React from 'react'
import Image from 'next/image'

const heading = () => {
  return (
    <div>
        <div className='w-[1280px] h-[54px] bg-secondary text-primary flex '>
         <div>
       <div className='flex text-sm gap-9 pt-5 pl-5'>
      <p>Phone Number: 956 742 455 678</p>
     <Image src="/images/line.svg" alt='line' width={1} height={0}></Image>
      <p>Email:info@ddsgnr.com</p>
      </div>  
    
      </div>
      <div className='flex ml-96 gap-2'>
      <Image src="/images/Vector.svg" alt="Facebook Icon" width={10} height={18} />
      <Image src="/images/insta.svg" alt="Facebook Icon" width={18} height={18} />
      <Image src="/images/twitter.svg" alt="Facebook Icon" width={18} height={18} />
      <Image src="/images/linkedin.svg" alt="Facebook Icon" width={18} height={18} />
      </div>
      </div>
      <div/>
      
    </div>
  )
}

export default heading
