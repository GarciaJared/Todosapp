import React, { useState } from "react";
import "./todoSearch.css";
import { TodoContext } from "../../Context/index.context";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext); //the info by our context is an obj
  return (
    <input
      placeholder="Add a task"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        // console.log(event.target.value); //getting data from user from DOM
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch }; //Export secure by name
