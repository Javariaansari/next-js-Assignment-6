import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='w-[1280px] h-[830px] bg-secondary text-primary pl-2 pt-28'>
        <div className='ml-10'>
            <h1 className='font-bold text-5xl '>Customer testimonials</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='flex gap-2 mt-12 ml-2 mr-2'>
            <div className='w-[416px] h-[294.89px] border-2 border-black'>
                <div className='flex mt-6 ml-4'>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>

                   
                </div>
                 <p className='ml-4 mt-4 w-[352px] h-[108px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                 <div className='flex ml-4 mt-2'>
                    <div>
                        <Image src="/images/customer1.svg" alt="customer1" width={56} height={56}></Image>
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-bold text-sm mt-2'>James Nduku</h1>
                        <p className='font-normal text-sm'>Software Developer</p>
                    </div>
                 </div>
            </div>

            <div className='w-[416px] h-[294.89px] border-2 border-black'>
            <div  className='flex mt-6 ml-4'>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    
               
                </div>  
                   <p className='ml-4 mt-4 w-[352px] h-[108px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                   <div>

                    <div className='flex ml-4 mt-2'>
                    <div >
                        <Image src="/images/customer2.svg" alt="customer2" width={56} height={56}></Image>
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-bold text-sm mt-2'>Erick Kipkemboi</h1>
                        <p className='font-normal text-sm'>Scrum Master</p>
                        </div>
                    </div>

                 </div>
            </div>

            <div className='w-[416px] h-[294.89px] border-2 border-black'>
            <div className='flex mt-6 ml-4'>
                   <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>
                    <Image src="/images/star.svg" alt="star" width={20}  height={18.89}></Image>

                    
                </div>
                <p className='ml-4 mt-4 w-[352px] h-[108px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                <div className='flex ml-4 mt-2'>
                    <div>
                        <Image src="/images/customer3.svg" alt="customer3" width={56} height={56}></Image>
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-bold text-sm mt-2 '>Stephen Kerubo</h1>
                        <p className='font-normal text-sm'>UI/UX Designer</p>
                    </div>
                 </div>
            </div>
            
        </div>

        <div className='flex items-center justify-center gap-96  mt-20 w-[1152px]h-[58px] '>
            <div className='flex gap-1 mr-72'>
        <Image src="/images/Dot.svg" alt="dot" width={8} height={8} ></Image>
        <Image src="/images/graydot.svg" alt="dot" width={8} height={8}></Image>
        <Image src="/images/graydot.svg" alt="dot" width={8} height={8}></Image>
        <Image src="/images/graydot.svg" alt="dot" width={8} height={8}></Image>
        <Image src="/images/graydot.svg" alt="dot" width={8} height={8}></Image>
    
        </div>

        <div className='flex gap-2 ml-96 '>
        <Image src="/images/left.svg" alt="left" width={48} height={48}  ></Image>
        <Image src="/images/right.svg" alt="right" width={48} height={48}></Image>
        </div>

      </div>
      </div>



    </div>
  )
}

export default page
