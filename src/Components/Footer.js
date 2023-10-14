import React from "react";
import map from "../assests/MapImage.png";
import NOVALOGO from "../assests/NOVALOGO.png";

const Footer = () => {
  return (
    <footer className="bg-ffefe8 text-white mt-40">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-24">
      <img className="mt-6" src={NOVALOGO} alt='logo' height={500} width={250} ></img>
      <div className="text-gray-700">
        <h1 className='font-bold text-2xl'>COMPANY</h1>
        <p className='mt-2 font-medium'>About Us</p>
        <p className='mt-4 font-medium'>Services</p>
        <p className='mt-4 font-medium'>Contact Us</p>
        <p className='mt-4 font-medium'>Terms and Conditions</p>
      </div>
      <div className="text-gray-700">
        <h1 className='font-bold text-2xl'>CONTACT</h1>
        <p className='mt-4 font-medium'>Tel : 080-987654321</p>
        <p className='mt-4 font-medium'>Email : example@gmail.com</p>
        <p className='mt-4 font-medium'>Address : #42 Street Building 1</p>
        <p className='mt-4 font-medium'>City, State, Pincode, Country</p>
      </div>
      <img src={map} alt='logo' height={500} width={300} ></img>
    </div>
</footer>
);
};

export default Footer