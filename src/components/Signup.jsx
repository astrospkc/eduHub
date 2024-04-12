// import React, { useContext, useEffect, useState } from "react";
// import "../App.css";
// // import Navbar from "./Navbar";
// // import courses from "./Courses";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// // import { CourseContext } from "../context/CourseData";

// const Signup = () => {
 

//   return (
//     <>
//     <div className="bg-black">
//         {/* one side image and another side the form  */}
//         <div className="h-1/2 w-1/2">
//             <img src="exp.jpg" alt="the sign up page image"  />
//         </div>
//         <div className="h-1/2 w-1/2 bg-blue flex flex-row">
//             <form action="submit" >
//                 <input type="text" />
//                 <label htmlFor="username">
//                     username
//                 </label>
                
//                 <input type="text" />
//                 <label htmlFor="email">email id</label>
//                 <input type="password" />
//                 <label htmlFor="password">password</label>
               
//             </form>
//             <button>
//             <NavLink to="/dashboard">Back to dashboard</NavLink>
                
//             </button>
//         </div>
       
//     </div>

//     </>
//   )
// }
// export default Signup;





import React, { useState } from 'react';

const Signup=()=> {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>

        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;