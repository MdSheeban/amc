import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {

  // function ArrowFunction(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "black" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const NextArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, display: "block", background: "black", cursor:"pointer" }}
      onClick={props.onClick} >
      Next
    </div>
  );

  const PrevArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, display: "block", background: "black", cursor:"pointer" }}
      onClick={props.onClick}>
      Prev
    </div>
  );

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
  };

  return (
    <>
    <div className=" bg-ffefe8 h-[96vh]">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl
         text-theme-color font-bold text-center sm:mt-8 lg:mt-12">
            Services </h1>
      <div className="ml-16 mr-8 mt-12">
        <Slider {...settings}>

        <div className="flex justify-center items-center">
        <div className="bg-orange-500 h-[66vh] w-80 rounded-3xl mr-8">
          <div className="text-2xl text-theme-color font-bold text-141428 flex justify-center items-center mt-8">
            <h1 className="mt-16">Network Services</h1>
          </div>
          <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Reliable and secure</h1>
               <h1>network solutions</h1>
               <h1>for your System</h1>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-orange-500  h-[66vh] w-80 rounded-3xl mr-8">
          <div className="text-2xl text-theme-color font-bold flex justify-center items-center mt-8">
            <h1 className="mt-16">Network Services</h1>
          </div>
          <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Reliable and secure</h1>
               <h1>network solutions</h1>
               <h1>for your System</h1>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-orange-500  h-[66vh] w-80 rounded-3xl mr-8">
          <div className="text-2xl text-theme-color font-bold flex justify-center items-center mt-8">
            <h1 className="mt-16">Network Services</h1>
          </div>
          <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Reliable and secure</h1>
               <h1>network solutions</h1>
               <h1>for your System</h1>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-orange-500  h-[66vh] w-80 rounded-3xl mr-8">
          <div className="text-2xl text-theme-color font-bold flex justify-center items-center mt-8">
            <h1 className="mt-16">Network Services</h1>
          </div>
          <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Reliable and secure</h1>
               <h1>network solutions</h1>
               <h1>for your System</h1>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-orange-500  h-[66vh] w-80 rounded-3xl mr-8">
          <div className="text-2xl text-theme-color font-bold flex justify-center items-center mt-8">
            <h1 className="mt-16">Network Services</h1>
          </div>
          <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Reliable and secure</h1>
               <h1>network solutions</h1>
               <h1>for your System</h1>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-orange-500  h-[66vh] w-80 rounded-3xl mr-8">
          <div className="text-2xl text-theme-color font-bold flex justify-center items-center mt-8">
            <h1 className="mt-16">Network Services</h1>
          </div>
          <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
              <h1>Reliable and secure</h1>
               <h1>network solutions</h1>
               <h1>for your System</h1>
            </div>
        </div>
      </div>
      </Slider> 
  </div>
</div>
</>
  );
};

export default Services;

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const MyCarousel = () => {
//   return (
//     <>
//         <div className=" bg-ffefe8 h-[96vh]">
//       <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl
//          text-theme-color font-bold text-center sm:mt-8 lg:mt-12">
//             Services </h1>
//     <Carousel
//       showArrows={true}
//       showStatus={false} 
//       showIndicators={false}
//       showThumbs={false} 
//       infiniteLoop={true} 
//       centerMode={true} 
//       centerSlidePercentage={33.3} 
//       useKeyboardArrows={true} 
//       swipeable={true}
//       emulateTouch={true} 
//       dynamicHeight={false} 
//       width={'100%'} 
//       // showArrows={true}
//     >
//       <div>
//       <div className="bg-orange-500 h-[66vh] w-80 rounded-3xl mr-8">
//           <div className="text-2xl text-theme-color font-bold text-141428 flex justify-center items-center mt-8">
//             <h1 className="mt-16">Network One</h1>
//           </div>
//           <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
//               <h1>Reliable and secure</h1>
//                <h1>network solutions</h1>
//                <h1>for your System</h1>
//             </div>
//         </div>
//       </div>
//       <div>
//       <div className="bg-orange-500 h-[66vh] w-80 rounded-3xl mr-8">
//           <div className="text-2xl text-theme-color font-bold text-141428 flex justify-center items-center mt-8">
//             <h1 className="mt-16">Network Two</h1>
//           </div>
//           <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
//               <h1>Reliable and secure</h1>
//                <h1>network solutions</h1>
//                <h1>for your System</h1>
//             </div>
//         </div>
//       </div>
//       <div>
//       <div className="bg-orange-500 h-[66vh] w-80 rounded-3xl mr-8">
//           <div className="text-2xl text-theme-color font-bold text-141428 flex justify-center items-center mt-8">
//             <h1 className="mt-16">Network Three</h1>
//           </div>
//           <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
//               <h1>Reliable and secure</h1>
//                <h1>network solutions</h1>
//                <h1>for your System</h1>
//             </div>
//         </div>
//       </div>
//       <div>
//       <div className="bg-orange-500 h-[66vh] w-80 rounded-3xl mr-8">
//           <div className="text-2xl text-theme-color font-bold text-141428 flex justify-center items-center mt-8">
//             <h1 className="mt-16">Network Four</h1>
//           </div>
//           <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
//               <h1>Reliable and secure</h1>
//                <h1>network solutions</h1>
//                <h1>for your System</h1>
//             </div>
//         </div>
//       </div>
//       <div>
//       <div className="bg-orange-500 h-[66vh] w-80 rounded-3xl mr-8">
//           <div className="text-2xl text-theme-color font-bold text-141428 flex justify-center items-center mt-8">
//             <h1 className="mt-16">Network Five</h1>
//           </div>
//           <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
//               <h1>Reliable and secure</h1>
//                <h1>network solutions</h1>
//                <h1>for your System</h1>
//             </div>
//         </div>
//       </div>
//       <div>
//       <div className="bg-orange-500 h-[66vh] w-80 rounded-3xl mr-8">
//           <div className="text-2xl text-theme-color font-bold text-141428 flex justify-center items-center mt-8">
//             <h1 className="mt-16">Network Six</h1>
//           </div>
//           <div className='text-2xl text-gray-700 font-semibold text-center mt-4 sm:mt-8 lg:mt-12'>
//               <h1>Reliable and secure</h1>
//                <h1>network solutions</h1>
//                <h1>for your System</h1>
//             </div>
//         </div>
//       </div>
//     </Carousel>
//     </div>   
//   </>
//   );
// };

// export default MyCarousel;