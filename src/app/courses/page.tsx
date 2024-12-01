import React from 'react'
import Image from 'next/image'

const courses = () => {
  return (
    <div>
      <div className='w-[1280px] h-[1642px] bg-secondary'>
        <div className='bg-secondary text-primary '>
        <h1 className='flex items-center justify-center font-bold text-4xl mb-4'>Courses</h1>
        <p className='flex items-center justify-center text-sm font-normal mb-20'>Your Ultimate Guide to learning</p>
        <div className='w-[336px] h-[40px] flex items-center justify-center gap-5 mx-96 text-sm'>
          
            <div className='w-[55px] h-[24px] ml-48'>Popular</div>
            <div className='w-[108px] h-[24px]'>Recommended</div>
            <div className='w-[77px] h-[24px]'>BestPrice</div>
       </div>

      <div>
        <div className='w-[1312px] h-[534px] flex items-center justify-center'>
          <div className='w-[416px] h-[534px]'>
            <img className='w-[416px] h-[300px]' src="/images/course1.svg" alt="" />
            <div className='w-[408px] h-[210px] bg-slate-100 '>
              <div>
                <div className='flex'>
                  <h1 className='font-bold text-sm ml-4 pt-4'>Design</h1>
                  <Image className='mt-4 ml-56' src="/images/star1.svg" alt="star1" width={24} height={24}></Image>
                  <p className='mt-4 ml-2 font-bold'>5.0</p>
                  </div>
                  <div>
                  <p className='font-bold text-lg ml-4 mt-4'>UX/UI Design 201</p>
                  <p className='font-normal text-sm ml-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex gap-6 font-bold '>
                   <button className='w-[117px] h-[40px] rounded border-2 border-primary mt-3 ml-4'>Enroll Now</button>
                   <p className='mt-4 '>$400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[416px] h-[534px]'>
            <img className='w-[416px] h-[300px]' src="/images/course2.svg" alt="" />
            <div className='w-[416px] h-[210px] bg-slate-100 ml '>
            <div>
                <div className='flex'>
                  <h1 className='font-bold text-sm ml-4 pt-4'>Programmimg</h1>
                  <Image className='mt-4 ml-56' src="/images/star1.svg" alt="star1" width={24} height={24}></Image>
                  <p className='mt-4 ml-2 font-bold'>5.0</p>
                  </div>
                  <div>
                  <p className='font-bold text-lg ml-4 mt-4'>Introduction to Python</p>
                  <p className='font-normal text-sm ml-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex gap-6 font-bold '>
                   <button className='w-[117px] h-[40px] rounded border-2 border-primary mt-3 ml-4'>Enroll Now</button>
                   <p className='mt-4 '>$400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          
          <div className='w-[416px] h-[534px]'>
            <img className='w-[416px] h-[300px]' src="/images/course3.svg" alt="" />
            <div className='w-[408px] h-[210px] bg-slate-100 ml-2'>

            <div>
                <div className='flex'>
                  <h1 className='font-bold text-sm ml-4 pt-4'>Business</h1>
                  <Image className='mt-4 ml-56' src="/images/star1.svg" alt="star1" width={24} height={24}></Image>
                  <p className='mt-4 ml-2 font-bold'>5.0</p>
                  </div>
                  <div>
                  <p className='font-bold text-lg ml-4 mt-4'>Data Analysis for Beginners</p>
                  <p className='font-normal text-sm ml-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex gap-6 font-bold '>
                   <button className='w-[117px] h-[40px] rounded border-2 border-primary mt-3 ml-4'>Enroll Now</button>
                   <p className='mt-4 '>$400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

        <div className='w-[1312px] h-[534px] flex items-center justify-center'>
          <div className='w-[416px] h-[534px]'>
            <img className='w-[416px] h-[300px]' src="/images/course4.svg" alt="" />
            <div className='w-[408px] h-[210px] bg-slate-100 '>
            <div>
                <div className='flex'>
                  <h1 className='font-bold text-sm ml-4 pt-4'>Art</h1>
                  <Image className='mt-4 ml-56' src="/images/star1.svg" alt="star1" width={24} height={24}></Image>
                  <p className='mt-4 ml-2 font-bold'>5.0</p>
                  </div>
                  <div>
                  <p className='font-bold text-lg ml-4 mt-4'>Art Specialization</p>
                  <p className='font-normal text-sm ml-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex gap-6 font-bold '>
                   <button className='w-[117px] h-[40px] rounded border-2 border-primary mt-3 ml-4'>Enroll Now</button>
                   <p className='mt-4 '>$400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[416px] h-[534px]'>
            <img className='w-[416px] h-[300px]' src="/images/course5.svg" alt="" />
            <div className='w-[416px] h-[210px] bg-slate-100 ml '>
            <div>
                <div className='flex'>
                  <h1 className='font-bold text-sm ml-4 pt-4'>Law</h1>
                  <Image className='mt-4 ml-56' src="/images/star1.svg" alt="star1" width={24} height={24}></Image>
                  <p className='mt-4 ml-2 font-bold'>5.0</p>
                  </div>
                  <div>
                  <p className='font-bold text-lg ml-4 mt-4'>Rule of Law</p>
                  <p className='font-normal text-sm ml-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex gap-6 font-bold '>
                   <button className='w-[117px] h-[40px] rounded border-2 border-primary mt-3 ml-4'>Enroll Now</button>
                   <p className='mt-4 '>$400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='w-[416px] h-[534px]'>
            <img className='w-[416px] h-[300px]' src="/images/course6.svg" alt="" />
            <div className='w-[408px] h-[210px] bg-slate-100 ml-2'>
            <div>
                <div className='flex'>
                  <h1 className='font-bold text-sm ml-4 pt-4'>Tech</h1>
                  <Image className='mt-4 ml-56' src="/images/star1.svg" alt="star1" width={24} height={24}></Image>
                  <p className='mt-4 ml-2 font-bold'>5.0</p></div>
                  <div>
                  <p className='font-bold text-lg ml-4 mt-4'>Introduction to webflow</p>
                  <p className='font-normal text-sm ml-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex gap-6 font-bold '>
                   <button className='w-[117px] h-[40px] rounded border-2 border-primary mt-3 ml-4'>Enroll Now</button>
                   <p className='mt-4 '>$400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
       

      </div>
            
      <div className='flex items-center justify-center'> <button className='border-2 border-primary rounded mt-20 py-2 px-4 bg-secondary'>View All Courses</button></div>
    </div>
        </div>

 
    
    </div>
  )
}

export default courses
