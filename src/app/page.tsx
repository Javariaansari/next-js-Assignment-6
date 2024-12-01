import Image from "next/image";
import Heading from "./components/heading/heading"
import Header from "./components/header/header";
import Icon from "./icon/page"
import Achivement from "./achivement/page"
import Courses from "./courses/page";
import Team from "./team/page";
import Customer from "./customer/page";
import Footer from './components/footer/footer';

export default function Home() {
  return (
<>
<div className="w-[1280px] h-screen bg-secondary">
  <Heading/>
  <Header/>
  <div className=' flex w-[1280px] h-screen bg-secondary'>
        <div className="text-black ">
          <h1 className="w-[580px] h-[134px] text-[56px] font-bold pl-[70px] pt-[170px]">Learn new skills online with ease</h1>
          <p className="w-[450px] h-[81px] font-normal text-base pt-[170px] pl-[70px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <button className='w-[80px] h-[40px] bg-secondary border border-primary rounded mt-28 ml-16'>Start</button>
          <button className='w-[80px] h-[40px] bg-primary text-white border border-primary rounded ml-6'>Explore</button>
          </div>
        <div>
        <Image src="/images/header.svg" alt="girl pic" width={590} height={900} />
        </div>
        </div>
        
        <div className="flex w-[1280px] h-[228px] bg-slate-200">
          <div className="w-[320px] h-[68px] font-bold text-base mt-[90px] text-primary " >
            <h1 className="w-[220px] h-[68px] ml-3">Trusted by 2000+ companies worldwide.</h1>
          
          </div>
          <div className="flex gap-2">
            <Image className="" src="/images/Airbnb.svg" alt="logo1" width={123.8} height={38.52}></Image>
            <Image className="" src="/images/logo2.svg" alt="logo2" width={123.8} height={38.52}></Image>
            <Image className="" src="/images/logo3.svg" alt="logo3" width={123.8} height={38.52}></Image>
            <Image className="" src="/images/logo4.svg" alt="logo4" width={123.8} height={38.52}></Image>
            <Image className="" src="/images/logo5.svg" alt="logo5" width={123.8} height={38.52}></Image>
            <Image className="" src="/images/logo6.svg" alt="logo6" width={123.8} height={38.52}></Image>
          </div>
          </div>

          <Icon/>

          <Achivement/>
          <Achivement/>
          <Courses/>
          <Team/>
          <Customer/>
          <Footer/>




          </div>  
       
    </>
  );
}
