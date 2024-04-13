import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
// import courses from "./Courses";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { CourseContext } from "../context/CourseData";

const Dashboard = () => {
 

  return (
    <>
    <div className="bg-black">
        <div>Welcome to EduHub</div>
        <div>
            <NavLink to="/signup">Signup</NavLink>
        </div>
        <div> <Navbar/></div>
       
    </div>
    </>
  )
}
export default Dashboard;