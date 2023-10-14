import React from 'react';
import Paypal from "../assests/Paypal.png";
import GooglePay from "../assests/GooglePay.png";
import ApplePay from "../assests/ApplePay.png";
import AmazonPay from "../assests/AmazonPay.png";
import Facebook from "../assests/Facebook.png";
import Instagram from "../assests/Instagram.png";
import Twitter from "../assests/Twitter.png";
import Youtube from "../assests/Youtube.png";

const SocialMedia = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2
          bg-orange-600 text-sm pb-8">
          <div className='inline space-x-4 mt-4'> 
            <img className='inline' src={Paypal} alt='LogoNavbar' height={40} width={40} ></img>
            <img className='inline'src={GooglePay} alt='LogoNavbar' height={40} width={40} ></img>
            <img className='inline' src={ApplePay} alt='LogoNavbar' height={40} width={40} ></img>
            <img className='inline' src={AmazonPay} alt='LogoNavbar' height={40} width={40} ></img>
          </div>

          <p className='text-white font-serif mt-4 text-xl'>© 2023 Nova Sigma</p>
          
          <div className='inline space-x-4 mt-4 '> 
            <img className='inline' src={Facebook} alt='LogoNavbar' height={40} width={40} ></img>
            <img className='inline'src={Instagram} alt='LogoNavbar' height={40} width={40} ></img>
            <img className='inline' src={Twitter} alt='LogoNavbar' height={40} width={40} ></img>
            <img className='inline' src={Youtube} alt='LogoNavbar' height={40} width={40} ></img>
          </div>

      </div>
    </>
  )
}

export default SocialMedia;
