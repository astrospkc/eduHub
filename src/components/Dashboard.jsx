import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import img1 from "../images/exp3.jpg"
// import courses from "./Courses";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { CourseContext } from "../context/CourseData";

const Dashboard = () => {
 

  return (
    <>
    <div className="bg-black"
     style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          backdropFilter: blur(),
        }}
    >
        <div>

        </div>
        <div className="justify-center items">
            <NavLink to="/signup"><button>Signup</button></NavLink>
            <NavLink to="/signup"><button>Login</button></NavLink>
        </div>
        {/* <div> <Navbar/></div> */}
       
    </div>
    </>
  )
}
export default Dashboard;