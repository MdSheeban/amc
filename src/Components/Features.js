import React from 'react'
// import { RiCustomerService2Line } from 'react-icons/ri'
// import { BsDatabaseCheck } from 'react-icons/bs'
// import { BsFillCloudCheckFill } from 'react-icons/bs'
// import { BsFileLock2 } from 'react-icons/bs'
// import { FiSettings } from 'react-icons/fi'
// import { MdSupportAgent } from 'react-icons/md'
// import { AiOutlineArrowRight } from 'react-icons/ai'
import Support from "../assests/Support.png"
import Server from "../assests/Server.png"
import Cloud from "../assests/Cloud.png"
import Security from "../assests/Security.png"
import Client from "../assests/Account.png"
import Settings from "../assests/Settings.png"


const Features = () => {
  return (
    <>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-theme-color font-semibold
         text-center mt-8 sm:mt-4 md:mt-8 lg:mt-16 mb-8'>
            Featured Highlights
        </h1>
    <div className="flex flex-wrap justify-center">
        <div className="flex flex-col shadow-md bg-theme-color h-72 w-80 rounded-3xl m-6 overflow-hidden">
            <img src={Support} alt="" className="h-12 w-12 mt-16 ml-32"/>
            <h2 className="text-center text-white mt-8">Database Support</h2>    
            <h2 className="text-center text-white mt-1">Database Support</h2>              
        </div>
        <div className="flex flex-col shadow-md bg-theme-color h-72 w-80 rounded-3xl m-6 overflow-hidden">
            <img src={Server} alt="" className="h-12 w-12 mt-16 ml-32"/>
            <h2 className="text-center text-white mt-8">Email Support</h2>
            <h2 className="text-center text-white mt-1">Email Support</h2>  
        </div>
        <div className="flex flex-col shadow-md bg-theme-color h-72 w-80 rounded-3xl m-6 overflow-hidden">
            <img src={Cloud} alt="" className="h-12 w-12 mt-16 ml-32"/>
            <h2 className="text-center text-white mt-8">Chat Support</h2>
            <h2 className="text-center text-white mt-1">Chat Support</h2>  
        </div>
</div>
<div className="flex flex-wrap justify-center">
        <div className="flex flex-col shadow-md bg-theme-color h-72 w-80 rounded-3xl m-6 overflow-hidden">
            <img src={Security} alt="" className="h-12 w-12 mt-16 ml-32"/>
            <h2 className="text-center text-white mt-8">Security Support</h2> 
            <h2 className="text-center text-white mt-1">Security Support</h2>             
        </div>
        <div className="flex flex-col shadow-md bg-theme-color h-72 w-80 rounded-3xl m-6 overflow-hidden">
            <img src={Settings} alt="" className="h-12 w-12 mt-16 ml-32"/>
            <h2 className="text-center text-white mt-8">Settings Support</h2>
            <h2 className="text-center text-white mt-1">Settings Support</h2>  
        </div>
         <div className="flex flex-col shadow-md bg-theme-color h-72 w-80 rounded-3xl m-6 overflow-hidden">
            <img src={Client} alt="" className="h-12 w-12 mt-16 ml-32"/>
            <h2 className="text-center text-white mt-8">Client Support</h2>
            <h2 className="text-center text-white mt-1">Client Support</h2>  
        </div>

</div>

        {/* <div classNameName='flex justify-center items-center mt-8 '>
          <div classNameName="bg-theme-color h-72 w-80 rounded-3xl mr-8" >
            <div classNameName=' flex justify-center items-center mt-8'>
              <RiCustomerService2Line size={60} />
            </div>
            <div classNameName='text-2xl text-white font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>24/7 Fully Managed</h1>
               <h1>IT Support</h1>
            </div>
          </div>
          <div classNameName="bg-theme-color h-72 w-80 rounded-3xl mr-8" >
            <div classNameName=' flex justify-center items-center mt-8'>
              <BsDatabaseCheck size={60} />
            </div>
            <div classNameName=' text-2xl text-white font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>ProActive</h1>
               <h1>Maintainance</h1>
            </div>
          </div>
          <div classNameName="bg-theme-color h-72 w-80 rounded-3xl mr-8" >
            <div classNameName=' flex justify-center items-center mt-8'>
              <BsFillCloudCheckFill size={60} />
            </div>
            <div classNameName=' text-2xl text-white font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>We Also Provide</h1>
               <h1>Cloud Services</h1>
            </div>
          </div>
        </div>
        <div classNameName='flex justify-center items-center mt-8 '>
          <div classNameName="bg-theme-color h-72 w-80 rounded-3xl mr-8" >
            <div classNameName=' flex justify-center items-center mt-8'>
              <BsFileLock2 size={60} />
            </div>
            <div classNameName=' text-2xl text-white font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Covers Your IT Team</h1>
               <h1>Absence</h1>
            </div>
          </div>
          <div classNameName="bg-theme-color h-72 w-80 rounded-3xl mr-8" >
            <div classNameName=' flex justify-center items-center mt-8'>
             <FiSettings size={60} />
            </div>
            <div classNameName=' text-2xl text-white font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>We Monitor and</h1>
               <h1>Fix YOur System</h1>
            </div>
          </div>
          <div classNameName="bg-theme-color h-72 w-80 rounded-3xl mr-8" >
            <div classNameName=' flex justify-center items-center mt-8'>
            <MdSupportAgent size={60} />
            </div>
            <div classNameName=' text-2xl text-white font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Customer</h1>
               <h1>Helpdesk</h1>
            </div>
          </div>
        </div>
        <div classNameName=' flex justify-center items-center mt-8 mb-8 '>
          <button classNameName=' bg-orange-500 p-4 text-xl rounded cursor-pointer text-white font-semibold'>
              GET IN TOUCH <AiOutlineArrowRight  classNameName='inline-block' /> </button>
        </div> */}
      </>
  )
}

export default Features
