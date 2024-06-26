import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Navbar from "./Navbar";
import forest from "../images/exp.jpg";
// import Footer from "./Footer";
// import { url } from "../config/config";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios.post(
//       `${url}/api/auth/createuser`,
//       {
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const jsonResponse = response.data;
//     // console.log(jsonResponse);
//     if (jsonResponse.success) {
//       //save the auth token
//       localStorage.setItem("token", jsonResponse.authtoken);
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };
//   const handleChange = (e) => {
//     e.preventDefault();
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

  return (
    <>
      <div
        className="flex flex-col"
        style={{
          backgroundImage: `url(${forest})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          backdropFilter: blur(),
        }}
      >
        <Navbar />

        <div className="m-auto backdrop-blur-lg  p-9">
          <h1 className="text-3xl text-center">SignUp</h1>
          <form className=" w-96 flex flex-col  "
        //    onSubmit={handleSubmit}
           >
            <label htmlFor="fname" className="text-white mb-2 ">
              Name:
            </label>

            <input
              type="text"
              id="name"
              name="name"
            //   onChange={handleChange}
            //   value={credentials.name}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
            />

            <label htmlFor="email" className="text-white mt-4">
              Email Address:
            </label>

            <input
              type="text"
              id="email"
              name="email"
            //   onChange={handleChange}
            //   value={credentials.email}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
            />
            <label htmlFor="password" className="text-white mt-4">
              Password:
            </label>

            <input
              type="text"
              id="password"
              name="password"
            //   onChange={handleChange}
            //   value={credentials.password}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
              minLength={5}
              required
            />
            
            <button
              type="submit"
              className="text-black bg-cyan-500 m-3 rounded-lg p-1 hover:bg-blue-400 "
            >
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;


