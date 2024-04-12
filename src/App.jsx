import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Role from "./components/Role";
import Canvas from "./components/Canvas";
// import Movies from "./components/Movies";
// import TvShows from "./components/TvShows";

import CourseProvider from "./context/CourseData";

function App() {
  return (
    <>
      <CourseProvider>
        <Router>
          {/* <Navbar /> */}
          
         
          <Routes>
            {/* <Route path="/" element={<Dashboard/>}/> */}
            {/* <Route
              path="/"
              element={
                <>
                  <Movies />
                </>
              } */}
            {/* /> */}
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/role" element={<Role />} />
            <Route path="/canvas" element={<Canvas/>}/>
          </Routes>
        </Router>
      </CourseProvider>
    </>
  );
}

export default Canvas;
