import React, { useState } from "react";
import Call from "../assests/Call.png";
import Email from "../assests/Email.png";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    }

    if (description.trim() === '') {
      newErrors.description = 'Description is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit it here
      console.log('Form submitted:', { name, email, description });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
    <div className="h-[110vh] w-full bg-theme-color rounded-t-3xl mb-20">
    <h1 className='text-3xl sm:text-4xl text-white md:text-5xl lg:text-6xl font-semibold
         text-center mt-32 sm:mt-16 md:mt-16 lg:mt-16'>
          Contact
      </h1>
      <div className="flex flex-col md:flex-row items-center">
  <div className="md:ml-32 mt-16 text-white text-center md:text-left">
    <h1 className="text-3xl md:text-5xl mt-4 md:mt-12 font-sans font-semibold">
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
    <p className="mt-8 md:mt-16 ">
      <img className="inline-block text-2xl md:text-5xl mr-2" src={Call} alt="Call" />
      <h1 className="ml-2 md:ml-4 inline-block font-semibold text-lg md:text-2xl">
        080 - 987654321
      </h1>
    </p>
    <p className="mt-4 md:mt-8">
      <img className="inline-block text-2xl md:text-5xl mr-2" src={Email} alt="Email" />
      <h1 className="ml-2 md:ml-4 inline-block font-semibold text-lg md:text-2xl">
        example@gmail.com
      </h1>
    </p>
  </div>
      {/* <div className="flex ">
        <div className="ml-32 mt-16 text-white ">
      <h1 className="text-5xl mt-12 font-sans font-semibold">Questions About Us?</h1>
        <p className="text-2xl mt-4 text-gray-400 font-extralight"> Emphasize my strong communication skills,</p>
        <p className="text-2xl mt-2 text-gray-400 font-extralight"> which are Emphasize my strong communication</p>
        <p className="text-2xl mt-2 text-gray-400 font-extralight"> assisting customers via calls, emails, and chats</p>
        <p className="mt-16">
          <img className="inline-block text-5xl mr-2" src={Call} alt='Call'></img>
        <h1 className="ml-4 inline-block font-semibold text-2xl">080 - 987654321</h1>
        </p>
        <p className="mt-8">
          <img className="inline-block text-5xl mr-2" src={Email} alt='Email' ></img>
          <h1 className="ml-4 inline-block font-semibold text-2xl">example@gmail.com</h1>
        </p>
      </div> */}

   <div className="max-w-md mx-auto h-[80vh] w-full mt-12 p-4 border-l-8 border-b-8 border-orange-500
      rounded-t-3xl rounded-b-3xl bg-white ">
      <h1 className="text-2xl font-semibold ml-24 mb-4">React Out To Us!</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block font-medium text-black">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Full Name" value={name}
             onChange={(e) => setName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-opacity-50
              errors.name ? 'border-red-500' : '' `} />
          {errors.name && ( <p className="text-red-500 text-sm mt-1">{errors.name}</p> )}
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-black"> Email </label>
          <input type="email" id="email" name="email" placeholder="Enter Email ID" 
            value={email} onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-opacity-50
              errors.name ? 'border-red-500' : '' `} />
          {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p> )}
        </div>
        <div>
          <label htmlFor="description" className="block font-medium text-black"> Description</label>
          <textarea id="description" name="description" placeholder="Enter Description"
            value={description} onChange={(e) => setDescription(e.target.value)}
            className={`w-full p-12 mt-2 border rounded-lg shadow-smfocus:ring-opacity-50
            errors.name ? 'border-red-500' : '' `} ></textarea>
          {errors.description && ( <p className="text-red-500 text-sm mt-1">{errors.description}</p> )}
        </div>
        <div>
          <button type="submit" className="w-full mt-8 px-4 py-2 text-white bg-ff611a rounded-lg
             hover:bg-orange-400 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
 </div>
 </div>
 </> 
  );
};

export default Contact;
