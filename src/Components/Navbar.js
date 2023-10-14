import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";
import LogoNavbar from "../assests/LogoNavbar.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32
           bg-orange-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="">
          <Link to="/" className="cursor-pointer">
            <img src={LogoNavbar} alt='LogoNavbar' height={500} width={250} ></img>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 font-medium text-white p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-orange-400 transition-all cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-orange-400 transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-orange-400 transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2 cursor-pointer text-white">
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-transparent text-black left-0 top-20 
          font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-orange-400 transition-all cursor-pointer"
        >
          About us
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-orange-400 transition-all cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-orange-400 transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import NOVALOGO from "../assests/NOVALOGO.png";

// const navItems = ['About Us', 'Services', 'Contact'];

// function DrawerAppBar(props) {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <div onClick={handleDrawerToggle} className="text-center">
//       <ul>
//         {navItems.map((item) => (
//           <li key={item} className="py-1">
//             <span className="text-gray-800 hover:text-gray-400 font-semibold cursor-pointer">
//               {item}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="flex">
//       <div className="fixed w-full">
//         <div className="bg-gray-500">
//           <div className="flex items-center justify-between py-4 px-7 ml-12">
//             <button
//               onClick={handleDrawerToggle}
//               className="text-3xl mr-20 font-Poppins text-white font-semibold block md:hidden">
//               <GiHamburgerMenu className='mr-2' />
//             </button>
//             <div>
            // <img src={NOVALOGO} alt='NOVALOGO' height={500} width={250} ></img>
//             </div>
//             <div className="hidden md:block mr-20 ">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   className="text-white font-Poppins font-semibold mr-16 hover:text-gray-400"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//         <nav>
//           <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
//             {drawer}
//           </div>
//         </nav>
//       </div>
//       <main className="p-3">
//         <div className="w-full max-w-screen-lg mx-auto">
//         </div>
//       </main>
//     </div>
//   );
// }

// export default DrawerAppBar;