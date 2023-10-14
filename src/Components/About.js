import React from 'react'
import Vector from "../assests/Vector1.png"
import RightOrangeArrow from "../assests/RightOrangeArrow.png"
import OrangeLine from "../assests/OrangeLine.png"
import Person from "../assests/Person.png"

const About = () => {
  return (
    <>
  <img className='w-[210vh] h-[130vh] absolute' src={Vector} alt='Vector' />
      <div className="flex flex-col md:flex-row relative items-center">
        <div className="md:ml-32 mt-52 text-white text-center md:text-left">
              <span className='text-orange-500 '>About Us
              <img src={OrangeLine} alt='Vector' className='inline-block ml-4' />
              </span>
          <h1 className="text-3xl md:text-5xl mt-4 font-sans font-semibold">
            Questions About Us?
          </h1>
          <p className="text-lg md:text-2xl mt-4 md:mt-8 text-gray-400 font-extralight">
            Emphasize my strong communication skills,
          </p>
          <p className="text-lg md:text-2xl mt-2 text-gray-400 font-extralight">
            which are Emphasize my strong communication
          </p>
          <p className="text-lg md:text-2xl mt-2 text-gray-400 font-extralight">
            assisting customers via calls, emails, and chats
          </p>
            <p className='text-orange-500 md:mt-12'>IT AMC SERVICES 
            <img src={OrangeLine} alt='Vector' className='inline-block ml-4' />
            </p>
          <p className='text-white mt-2'>* Offers AMC for IT Support Services</p>
          <p className='text-white mt-2'>* Support Cloud, PC and related activites</p>
          <p className='text-white mt-2'>* Smart IT Solutions Provider</p>
          <p className='text-white mt-2'>* Consistent and Quality Drivern IT Services</p>
          <p className='text-white mt-2'>* Specialized For Government and Private Sectors</p>
          <p className='text-white mt-2'>* Provides Continous and Comprehensive Support</p>
          <button className=' bg-orange-500 p-4 mt-8 text-xl rounded cursor-pointer
             text-white font-semibold'>
                    GET IN TOUCH    
            <img src={RightOrangeArrow} alt='Vector' className='inline-block ml-4' />
          </button>
        </div>
     <div>
      <img className='w-[72vh] h-[80vh] relative left-36 top-24' src={Person} alt='Person' />
    </div>
</div>
</>
)
}

export default About


// import React from 'react'
// import Person from "../assests/Person.png"
// import Vector from "../assests/Vector1.png"
// import { AiOutlineArrowRight } from 'react-icons/ai'

// const About = () => {
//   return (
//   <>
//     <div>
//       <div className='flex justify-center items-center mt-20'>
        // <img className='w-[210vh] h-[84vh] absolute' src={Vector} alt='Vector' />
//         <div className='relative right-40 bottom-28 top-2'>
          // <span className='text-orange-400 '>About Us _____</span>
//             <p className="text-white text-5xl">Questions About Us?</p>
//             <p className="text-white text-2xl "> Emphasize my strong communication skills,</p>
//             <p className="text-white text-2xl "> which are Emphasize my strong communication</p>
//             <p className="text-white text-2xl "> assisting customers via calls, emails, and chats</p>
            // <button className=' bg-orange-500 p-4 mt-8 text-xl rounded cursor-pointer text-white font-semibold'>
            //   GET IN TOUCH <AiOutlineArrowRight  className='inline-block' />
            // </button>
//         </div>
        // <div>
        //   <img className='w-96 h-[70vh] relative left-28 top-4 ' src={Person} alt='Person' />
        // </div>
//       </div>
//     </div>  
//   </>
//   )
// }

// export default About
