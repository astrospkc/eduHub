import React, { createContext, useContext, useState } from "react";

export const CourseContext = createContext(null);

const CourseProvider = (props) => {
  const [course, setCourse] = useState("All");

  function handleChangeCourse(name) {
    setCourse(name);
  }

  return (
    <CourseContext.Provider value={{ course, handleChangeCourse }}>
      {props.children}
    </CourseContext.Provider>
  );
};
export default CourseProvider;
