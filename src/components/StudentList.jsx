import React from "react";

function StudentList({ data }) {
  let nameArr = data.map((val) => val.firstName + " " + val.lastName);
  nameArr.sort();
  return (
    <ul>
      {nameArr.map((names) => {
        return <li>{names}</li>;
      })}
    </ul>
  );
}

export default StudentList;
