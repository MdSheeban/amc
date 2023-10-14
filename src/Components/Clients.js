import React from 'react'
import Client from "../assests/Clients.png"

const Clients = () => {
  return (
    <>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-theme-color font-semibold
         text-center mt-12 sm:mt-16 md:mt-16 lg:mt-16'>
          Our Clients
      </h1>
      <div className='flex justify-center items-center mt-4 sm:mt-8 lg:mt-12'>
        <img className='w-full max-w-screen-lg mx-auto' src={Client} alt='Client' />
      </div>
    </>
  )
}

export default Clients


// import React from 'react'
// import Client from "../assests/Clients.png"

// const Clients = () => {
//   return (
//     <>
//       <h1 className='text-5xl text-gray-700 font-semibold items-center flex justify-center' >OUR CLIENTS</h1>
//       <div className='flex justify-center items-center mt-4' >
//         <img src={Client} alt='Clients' height={4000} width={1000} ></img>
//       </div>      
//     </>
//   )
// }

// export default Clients
