import React from 'react'

const achivement = () => {
  return (
    <div>
      <div className='flex items-center justify-center w-[1280px] h-[488px] bg-secondary'>
        <div className='flex items-center justify-center w-[1152px] h-[264px] bg-secondary '>
            <div className='text-primary'>
            <h1 className='flex items-center justify-center font-bold text-5xl'>Our Achivements</h1>
            <p className='flex items-center justify-center font-normal text-lg ml-4 w-[1152px] h-[54px] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

            <div className='flex items-center justify-center gap-64 mt-16'>
                <div>
                    <h1 className='font-bold text-4xl'>+200</h1>
                    <p className='font-normal text-sm pl-6'>Courses</p>
                </div>

                <div>
                    <h1 className='font-bold text-4xl'>50k</h1>
                    <p className='font-normal text-sm pl-2'>Mentors</p>
                </div>

                <div>
                    <h1 className='font-bold text-4xl'>370k</h1>
                    <p className='font-normal text-sm pl-2'>Students</p>
                </div>

                <div>
                    <h1 className='font-bold text-4xl'>100+</h1>
                    <p className='font-normal text-sm pl-2'>Recognition</p>
                </div>
            </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default achivement;
