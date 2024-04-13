import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import courses from "./Courses";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CourseContext } from "../context/CourseData";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    console.log("ToggleMenu");
    setToggleMenu((prev) => !prev);
  }

  const { handleChangeCourse } = useContext(CourseContext);
  function handleChange(e) {
    const selectedCourse = e.target.value;

    handleChangeCourse(selectedCourse);
  }

  return (
    <>
      <div className="flex justify-between items-center  mx-auto px-4 bg-gray-700 mb-10 h-fit w-full  z-10 ">
        <div className="md:flex md:justify-between md:items-center">
          <div
            className="m-3 p-2 font-extrabold text-xl text-cyan-600"
            style={{ fontFamily: "DynaPuff" }}
          >
            Peer-2-peer
          </div>
        </div>

        <div>
          <ul
            className={
              toggleMenu
                ? "absolute min-h-screen md:min-h-0 text-white right-0 top-16 md:top-0 bottom-0 md:static md:flex md:flex-row  md:items-center md:gap-12 gap-6 px-2 "
                : "hidden " +
                  " min-h-[60vh] md:min-h-0 text-white right-0 top-[4.5rem] md:top-0 bottom-0 md:static md:flex md:flex-row  md:items-center md:gap-12 gap-6 px-2 "
            }
          >
            {/* <li className="hover:bg-slate-400 font-bold text-sm md:text-xl ">
              <NavLink to="/movie"></NavLink>
            </li>
            <li className="hover:bg-slate-400 font-bold text-sm md:text-xl ">
              <NavLink to="/t"> TV Series</NavLink>
            </li> */}
            {

            }
            <li className="hover:bg-slate-400 font-bold text-sm md:text-xl ">
              <NavLink to="/signup"> SignUp</NavLink>
            </li>
            <li className="hover:bg-slate-400 font-bold text-sm md:text-xl ">
              <NavLink to="/login"> Login</NavLink>
            </li>

            <select
              className="seach__select outline-none bg-blue-300 rounded-md text-black font-bold overflow-scroll"
              size={1}
              // value={genres}
              onChange={handleChange}
            >
              {courses.map((elem, i) => (
                <option
                  key={elem.id}
                  value={elem.id}
                  className="hover:bg-red-300"
                >
                  {elem.name}
                </option>
              ))}
            </select>
          </ul>
        </div>
        
        <div className="md:hidden justify-self-start" onClick={handleToggle}>
          {!toggleMenu && (
            <i className=" fa-solid fa-bars cursor-pointer md:hidden" />
          )}

          {toggleMenu && (
            <i className=" fa-solid fa-close cursor-pointer md:hidden " />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
