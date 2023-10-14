// import { useState, useEffect } from "react"
// // import { ChevronLeft, ChevronRight } from "react-feather"
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0)

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

//   useEffect(() => {
//     if (!autoSlide) return
//     const slideInterval = setInterval(next, autoSlideInterval)
//     return () => clearInterval(slideInterval)
//   }, []);

//   return (
//     <div className="overflow-hidden relative h-[500px]">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <BsChevronCompactLeft size={40} />
//         </button>
// <button
//   onClick={next}
//   className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
// >
// <BsChevronCompactRight size={40} />
// </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div key={i}
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import Carousal0 from "../assests/Carousal0.jpg";
// import Carousal1 from "../assests/Carousal1.jpg";
// import Carousal2 from "../assests/Carousal2.jpg";
// import Carousal3 from "../assests/Carousal3.jpg";

// function App() {
//   const slides = [
//     {
//       url: Carousal0,
//     },
//     {
//       url: Carousal1,
//     },
//     {
//       url: Carousal2,
//     },

//     {
//       url: Carousal3,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className='max-w-full h-[500px] w-full m-auto group'>
//       <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className='w-full h-full  bg-center bg-cover duration-500'></div>
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <button
//           onClick={prevSlide}
//           className="p-1 rounded-full shadow bg-white/80 hover:bg-white"
//         >
//         <BsChevronCompactLeft size={40} />
//         </button>
//       </div>
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <button
//           onClick={nextSlide}
//           className="p-1 rounded-full shadow bg-white/80 hover:bg-white"
//         >
//         <BsChevronCompactRight size={40} />
//         </button>
//       </div>
//       <div className='flex top-4 justify-center py-2'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className='text-2xl cursor-pointer'
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Carousal0 from "../assests/Carousal0.jpg";
import Carousal1 from "../assests/Carousal1.jpg";
import Carousal2 from "../assests/Carousal2.jpg";
import Carousal3 from "../assests/Carousal3.jpg";

const Car = () => {
  const slides = [
    {
      url: Carousal0,
    },
    {
      url: Carousal1,
    },
    {
      url: Carousal2,
    },

    {
      url: Carousal3,
    },
  ];

  return (
    <>
      <Carousel infiniteLoop autoPlay showThumbs={false}>
          {slides.map((image) => (
            <div key={image.url}>
              <img src={image.url} alt={image.url} className="w-full h-[48vh] md:h-[80vh]" ></img>
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default Car;
